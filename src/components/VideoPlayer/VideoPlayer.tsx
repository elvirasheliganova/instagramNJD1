import {View, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);
  const handleMute = () => {
    setMuted(v => !v);
  };
  return (
    <View style={{}}>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted ? true : false}
        paused={paused}
      />
      <Pressable onPress={handleMute} style={styles.muted}>
        <Ionicons
          name={muted ? 'volume-medium' : 'volume-mute'}
          size={14}
          color="white"
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  video: {
    flex: 1,
    width: '100%',
    aspectRatio: 1,
  },
  muted: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default VideoPlayer;
