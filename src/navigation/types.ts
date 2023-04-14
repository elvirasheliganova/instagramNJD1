import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export type RootNavigatorParamList = {
  Home: undefined;
  Comments: {postId: string};
};

export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  'My Profile': undefined;
};

export type MyProfileNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  'My Profile'
>;

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  'User Profile': {userId: string};
};

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Feed'
>;
export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'User Profile'
>;

export type ProfileStackParamList = {
  Profile: undefined;
  'Edit Profile': undefined;
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'Profile'
>;

export type UserProfileRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'User Profile'
>;

export type MyProfileRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  'My Profile'
>;
