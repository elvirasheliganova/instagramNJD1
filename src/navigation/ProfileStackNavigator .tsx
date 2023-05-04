import {View, Text, Image} from 'react-native';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import logo from '../assets/images/logo.png';
import {ImageSourcePropType} from 'react-native';
import EditProfileScreen from '../screens/EditProfileScreen';
import {ProfileStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{}} />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
