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
import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from './src/assets/data/post.json';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return <HomeScreen />;
};

export default App;
