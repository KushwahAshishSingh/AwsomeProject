import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { windowWidth } from '../../../utils/Dimension';
import {EyeOpen} from '../../../../assets/icons/eyeOpen';
import {EyeClose} from '../../../../assets/icons/eyeClose';
import {moderateScale} from '../../../utils/helpers';

interface PropsI {
  placeholderText: string;
  endIcon?: Element;
  password: string;
  labelValue: string;
  value: string;
  onChangeText: string;
  onPress: any;
  iconType: any;
  labelType: any;
}
export const TextInputButton = (props: PropsI) => {
  const {
    placeholderText,
    password,
    endIcon,
    labelValue,
    value,
    onChangeText,
    onPress,
    iconType,
    labelType,
    ...rest
  } = props;
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.text_input}
          placeholder={placeholderText ? placeholderText : 'Search Courses'}
          placeholderTextColor="#646464"
          value={value}
          onChangeText={onChangeText}
          numberOfLines={1}
          {...rest}
        />
        {endIcon ? <View style={[styles.end_icon]}>{endIcon}</View> : null}
        {iconType ? (
          <TouchableOpacity style={{ paddingRight: 20 }} onPress={onPress}>
            {iconType === 'eye' ? <EyeOpen /> : <EyeClose />}
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: windowWidth - 20,
    height: 50,
    backgroundColor: '#282828',
    marginVertical: 10,
    borderColor: '#444444',
    borderRadius: 8,
    borderWidth: 1,

    shadowColor: '#444444',
    shadowOpacity: 0.3,
    shadowOffset: {width: 3, height: 2},
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_input: {
    color: 'white',
    width: '83%',
    height: '100%',
    paddingHorizontal: 20,
    fontSize: moderateScale(14),
    fontFamily: 'Lato',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: windowWidth - 59,
    zIndex: 1,
    position: 'absolute',
  },
  start_icon: {
    paddingLeft: 15,
  },
  end_icon: {
    paddingRight: 15,
  },
});
