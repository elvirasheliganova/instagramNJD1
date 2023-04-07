import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },

  bold: {
    fontWeight: fonts.weight.bold,
  },

  commentText: {
    color: colors.black,
    // marginBottom: 5,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    color: colors.grey,
    marginHorizontal: 5,
  },
});
