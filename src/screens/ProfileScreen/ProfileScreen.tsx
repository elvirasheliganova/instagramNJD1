import {View, Text, Image, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGreedView from '../../components/Comment/FeedGreedView/FeedGreedView';
import {IPost} from '../../types/models';
import {IFeedGreedView} from '../../components/Comment/FeedGreedView/FeedGreedView';
import {
  MyProfileNavigationProp,
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileRouteProp,
} from '../../types/navigation';

const ProfileScreen = () => {
  const route = useRoute<MyProfileRouteProp | UserProfileRouteProp>();
  const userID = route.params?.userId;
  const navigation = useNavigation<
    MyProfileNavigationProp | UserProfileNavigationProp
  >();
  console.warn(user);
  navigation.setOptions({title: user.username});
  return (
    <FeedGreedView data={user.posts} ListHeaderComponent={ProfileHeader} />
  );
};
export default ProfileScreen;
