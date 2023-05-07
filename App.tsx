/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';

Amplify.configure(config);

const App = () => {
  return (
    //<HomeScreen />;
    //<CommentsScreen />
    //<ProfileScreen />
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
};

export default App;
