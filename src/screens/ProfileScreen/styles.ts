import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    //backgroundColor: 'pink',
  },
  name: {
    fontWeight: fonts.weight.bold,
    marginBottom: 5,
  },
  bio: {
    marginBottom: 5,
  },
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbers: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
  },
  numberText: {
    fontSize: fonts.size.md,

    color: colors.grey,
  },
  buttonsRow: {
    flexDirection: 'row',
  },
});
