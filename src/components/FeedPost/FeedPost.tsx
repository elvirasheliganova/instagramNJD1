/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import DoublePressable from '../DoublePressable';
import Carousel from '../../Carousel';
import VideoPlayer from '../VideoPlayer';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isDesriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpended = () => setIsDescriptionExpanded(v => !v);
  const toggleIsLiked = () => setIsLiked(v => !v);

  let content = null;
  if (post.image) {
    content = (
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleIsLiked} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleIsLiked}>
        <VideoPlayer uri={post.video} />
      </DoublePressable>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{
              uri: post.user.image,
            }}
          />

          <Text style={styles.username}>{post.user.username}</Text>
          <Entypo
            name="dots-three-horizontal"
            size={fonts.size.m}
            style={styles.threeDots}
          />
        </View>

        {/* Content */}

        {content}

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <Pressable onPress={toggleIsLiked}>
              <AntDesign
                name={isLiked ? 'heart' : 'hearto'}
                size={24}
                style={styles.icon}
                color={isLiked ? colors.accent : colors.black}
              />
            </Pressable>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="send"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="bookmark"
              size={24}
              style={{marginLeft: 'auto'}}
              color={colors.black}
            />
          </View>

          {/* Likes */}
          <Text style={styles.text}>
            Liked by <Text style={styles.bold}>me</Text> and{' '}
            <Text style={styles.bold}>66</Text> others
          </Text>

          {/* Post Desceiption */}
          <Text numberOfLines={isDesriptionExpanded ? 0 : 3}>
            <Text style={styles.bold}>User Name</Text> Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vivamus interdum velit vel urna
            varius, ut volutpat tellus ultricies. Nulla vel risus sed odio
            vulputate imperdiet. In posuere, elit tincidunt ullamcorper
            dignissim, metus turpis rhoncus justo, id dapibus ipsum ipsum ac leo
          </Text>
          <Text
            style={[styles.text, {color: colors.grey}]}
            onPress={toggleDescriptionExpended}>
            {isDesriptionExpanded ? 'Less' : 'More'}
          </Text>
          <Text style={[styles.text, {color: colors.grey}]}>
            View all 16 comments
          </Text>
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}

          {/* Posted date */}
          <Text style={[styles.text, {color: colors.grey}]}>
            19 December 2021
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FeedPost;
