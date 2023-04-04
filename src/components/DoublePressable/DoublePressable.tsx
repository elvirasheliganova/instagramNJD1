import {View, Text, Pressable} from 'react-native';
import React, {PropsWithChildren, ReactNode} from 'react';

interface IDoublePressable {
  onDoublePress?: () => void;
  //children: ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: PropsWithChildren<IDoublePressable>) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    if (Date.now() - lastTap < 300) {
      onDoublePress();
    }
    lastTap = Date.now();
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
