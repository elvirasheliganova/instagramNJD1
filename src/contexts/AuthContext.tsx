import {HubCallback} from '@aws-amplify/core';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {Auth, Hub} from 'aws-amplify';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type UserType = CognitoUser | null | undefined;

type AuthUserType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

const AuthContext = createContext<AuthUserType>({
  user: undefined,
  setUser: () => {},
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        setUser(authUser);
      } catch (e) {
        setUser(null);
      }
    };
    checkUser();
  }, []);
  //console.warn(user);
  useEffect(() => {
    const listener: HubCallback = data => {
      const {event} = data.payload;
      if (event === 'signOut') {
        setUser(null);
      }
    };
    const hubListener = Hub.listen('auth', listener);
    return () => hubListener();
  }, []);
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
