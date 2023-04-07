import {View, Text, Image, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';
import FeedPost from '../../components/FeedPost';

const ProfileHeader = () => {
  // console.warn(user.bio);
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.headerRow}>
          {/* Profile Image */}
          <Image source={{uri: user.image}} style={styles.avatar} />
          {/* Posts, followers, following number */}

          <View style={styles.numberContainer}>
            <Text style={styles.numbers}>98</Text>
            <Text style={styles.numberText}>Posts</Text>
          </View>

          <View style={styles.numberContainer}>
            <Text style={styles.numbers}>98</Text>
            <Text style={styles.numberText}>Posts</Text>
          </View>

          <View style={styles.numberContainer}>
            <Text style={styles.numbers}>98</Text>
            <Text style={styles.numberText}>Posts</Text>
          </View>
        </View>

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>

        {/* Buttons */}
        <View style={styles.buttonsRow}>
          <Button text="Edit Profile" onPress={() => console.warn('Edit')} />
          <Button text="Another Button" onPress={() => console.warn('Edit')} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileHeader;