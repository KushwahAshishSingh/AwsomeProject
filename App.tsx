/* eslint-disable prettier/prettier */
import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import RootNavigator from './src/navigation';
import { windowWidth } from './src/utils/Dimension';
import { StyleSheet, Text, View } from 'react-native';

function App(): JSX.Element {
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: 'rgba(0,255,0,0.6)',
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: 8,
          // height: 20,
          height: 40,
          width: '70%',
          justifyContent: 'center',
          alignItems: 'center',

          // opacity: 0.2,
        }}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: 10,
          // opacity: 0.2,
          color: 'white',
          // height: 40,
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '400',
          color: 'white',
          fontFamily: 'Lato-Light',
        }}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        style={styles.error_container}
        contentContainerStyle={styles.error_sub_container}
        text1Style={styles.error_message_first}
        text2Style={styles.error_message_second}
      />
    ),
    tomatoToast: ({text1, props}) => (
      <View
        style={styles.success_container}>
        <View
          style={styles.success_sub_container}
        />
        <View
          style={styles.success_message}>
          <Text
            style={styles.success_message_text}>
            {text1}
          </Text>
          <Text>{props.uuid}</Text>
        </View>
      </View>
    ),
  };
  return (
    <>
      <RootNavigator />
      <Toast position="bottom" bottomOffset={80} config={toastConfig} />
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  error_container: {
    borderLeftColor: 'rgba(255,0,0,0.6)',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 8,
    height: 40,
    width: windowWidth / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error_sub_container: {
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    height: 20,
    // width: windowWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.2,
    color: 'white',
  },
  error_message_first:{
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lato-Light',
  },
  error_message_second:{
    fontSize: 15,
    // fontWeight: '400',
    color: '#fff',
    fontFamily: 'Lato-Light',
  },
  success_container:{
    height: 70,
    width: '70%',
    backgroundColor: 'tomato',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  success_sub_container:{
    borderLeftColor: 'rgba(255,0,0,0.6)',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    height: '100%',
    width: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.2,
  },
  success_message:{
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    height: 75,
  },
  success_message_text:{
    fontSize: 14,
    // fontWeight: '400',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Light',
    paddingTop: 15,
  }
})