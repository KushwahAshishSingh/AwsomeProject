import {StyleSheet} from 'react-native';
import {dark} from '../theme/theme';
import { moderateScale } from '../utils/helpers';

export const useGlobaStyles = () => {
  const theme = () => {
    dark;
  };

  const textVariants = StyleSheet.create({
    fs_14_light: {
      color: 'white',
      fontSize: moderateScale(13),
      fontFamily: 'Lato',
    },
    fs_24_bold: {
      color: 'white',
      fontSize: moderateScale(22),
      fontFamily: 'Lato-Bold',
    },
  });
  return StyleSheet.create({
    flex1: {
      flex: 1,
    },
    allCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textCenter: {
      textAlign: 'center',
    },
    ...textVariants,
  });
};
