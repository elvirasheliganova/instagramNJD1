import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton {
  text?: string;
  onPress: () => void;
}

const Button = ({text = '', onPress = () => {}}: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    color: colors.grey,
    fontWeight: fonts.weight.semi,
  },
});
export default Button;
