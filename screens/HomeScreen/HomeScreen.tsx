import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import FeedPost from '../../src/components/FeedPost';
import posts from '../../src/assets/data/post.json';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.app}>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  app: {
    //flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
