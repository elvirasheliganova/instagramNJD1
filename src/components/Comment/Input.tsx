import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');
  const onPost = () => setNewComment('');
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
        }}
        style={styles.image}
      />

      <TextInput
        placeholder="Add comment..."
        onChangeText={setNewComment}
        value={newComment}
        style={styles.input}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        Post
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderColor: colors.borderColor,
    borderTopWidth: 1,
    alignItems: 'flex-end',
  },

  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    //backgroundColor: 'pink',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    right: 18,
    bottom: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
  },
});
export default Input;
