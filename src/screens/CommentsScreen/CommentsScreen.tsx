import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';
import Input from '../../components/Comment/Input';

const CommentsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <Comment comment={item} includeDetails style={{padding: 10}} />
        )}
      />
      <Input />
    </SafeAreaView>
  );
};

export default CommentsScreen;
