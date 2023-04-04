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
    flex: 1,
    color: colors.black,
    marginBottom: 5,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
