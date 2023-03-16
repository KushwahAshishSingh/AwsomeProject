/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import React from 'react';
import {moderateScale} from '../../../utils/helpers';

interface PropsI {
  title: string;
  customFont: string;
    props: any;
}
export const PrimaryButton = ({title, customFont, props, ...rest}: PropsI) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} {...rest}>
        <Text
          style={[
            styles.font_style,
            customFont
              ? {fontSize: moderateScale(customFont)}
              : {fontSize: moderateScale(16)},
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FA693D',
    // width: '100%',
    // height: 54,
    borderRadius: 10,
    borderWidth: 1,
    borderHeight: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  font_style: {
    fontSize: moderateScale(16),
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    color: 'white',
  },
});
