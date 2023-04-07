import {View, Text, Image, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGreedView from '../../components/Comment/FeedGreedView/FeedGreedView';
import {IPost} from '../../types/models';

const ProfileScreen = () => {
  return (
    <FeedGreedView data={user.posts} ListHeaderComponent={ProfileHeader} />
  );
};
export default ProfileScreen;
