import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, {useState, useRef} from 'react';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/post.json';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState();

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      setActivePostId(viewableItems[0].item.id);
    },
  );

  return (
    <SafeAreaView style={styles.app}>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <FeedPost post={item} isVisible={activePostId === item.id} />
        )}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
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
