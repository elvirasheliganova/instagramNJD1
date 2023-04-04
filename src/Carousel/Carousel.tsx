import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, {useState, useRef} from 'react';
import DoublePressable from '../components/DoublePressable';

interface ICarousel {
  images: string[];
  onDoublePress: () => void;
}
const Carousel = ({images, onDoublePress}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        //console.warn(viewableItems[0].index);
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View style={{}}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image
              source={{uri: item}}
              style={{width: width, aspectRatio: 1}}
            />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              backgroundColor: activeImageIndex === index ? 'pink' : 'grey',
              width: 10,
              height: 10,
              borderRadius: 5,
              margin: 10,
              marginHorizontal: 5,
            }}></View>
        ))}
      </View>
    </View>
  );
};

export default Carousel;
