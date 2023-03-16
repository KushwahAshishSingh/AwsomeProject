import {PixelRatio, Platform} from 'react-native';
import {windowHeight, windowWidth} from './Dimension';
import Toast from 'react-native-toast-message';

export const objectKeys = <Obj extends {}>(obj: Obj) =>
  Object.keys(obj) as Array<keyof Obj>;

export const capitalize = (val: string) => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};

export const platformSpecificValue = (ios: number, androidd: number) => {
  if (Platform.OS === 'ios') {
    return ios;
  } else if (Platform.OS === 'android') {
    return androidd;
  } else {
    throw new Error('Platform invalid');
  }
};

export const capitalizeFirstLowercaseRest = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

function moderateScale(size: any) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const verticalScale = (size: any) =>
  (windowHeight / guidelineBaseHeight) * size;
const scale = windowWidth / 320;

const scaleSpace = (size: any) => (windowWidth / guidelineBaseWidth) * size;
export const showToast = (type: string, text1: string, text2?: string) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
  });
};

export {scaleSpace, verticalScale, moderateScale};
