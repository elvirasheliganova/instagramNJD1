import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  post: {},
  header: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 10,
  },

  username: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    marginBottom: 5,
    lineHeight: 18,
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
