import {View, Text, Image, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen';
import {RootNavigatorParamList} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';
import {useAuthContext} from '../contexts/AuthContext';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  const {user} = useAuthContext();

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        )}

        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
