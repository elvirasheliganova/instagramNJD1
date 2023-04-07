import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../../types/models';
import FeedGreedItem from './FeedGreedItem';

interface IFeedGreedView {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any>
    | null
    | undefined;
}

const FeedGreedView = ({data, ListHeaderComponent}: IFeedGreedView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGreedItem post={item} />}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
      style={{marginHorizontal: -1}}
    />
  );
};

export default FeedGreedView;
