/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { windowWidth } from '../../utils/Dimension';
import { PrimaryButton } from '../../components/common/Buttons/PrimaryButton';
import { TextInputButton } from '../../components/common/Buttons/TextInputButton';
 import  { showToast } from '../../utils/helpers';
import { ScrollView } from 'react-native-gesture-handler';
import { useHeaderHeight } from '@react-navigation/elements';
import { useGlobaStyles } from '../../styles/global';

export const LoginScreen = ({ navigation }) => {
  const globalStyles = useGlobaStyles();

  const height = useHeaderHeight();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [hidePassword, setHidePassword] = React.useState(true);
  const loginInUser = async data => {
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if (!strongRegex.test(email)) {
      return showToast('error', 'Please fill your email.');
    }
    if (!password || password.length < 8) {
      return showToast('error', '8 character password required.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.main_container}
      keyboardVerticalOffset={height + 47}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height '}>
      <ScrollView style={styles.container} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.login_container}>
            <Text style={[globalStyles.fs_24_bold, styles.font_24_extra]}>Login</Text>
            <TextInputButton
              labelValue={email}
              onChangeText={userEmail => setEmail(userEmail)}
              placeholderText="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInputButton
              labelValue={password}
              onChangeText={userPassword => setPassword(userPassword)}
              placeholderText="Enter Password*"
              secureTextEntry={hidePassword}
              iconType={hidePassword ? 'eye' : 'close'}
              autoCorrect={false}
              onPress={() => {
                setHidePassword(prev => !prev);
              }}
            />
            <View style={styles.submit_button}>
              <PrimaryButton
                title="Submit"
                onPress={() =>
                  loginInUser({
                    email: email,
                    password: password,
                  })
                }
              />
            </View>
            <View style={styles.signup_button}>
              <Text style={globalStyles.fs_14_light}> Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <Text
                  style={[globalStyles.fs_14_light,styles.extra ]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main_container:{ flex: 1 },
  container: {
    width: '100%',
    height: '100%',
    marginBottom:-50,
    backgroundColor: '#1e1e1e',
  },
  login_container: { margin: 10, alignItems: 'center',paddingTop:200},
  font_24_extra: {
    marginBottom: 20,
    marginTop: -10,
  },
  signup_button: { flexDirection: 'row', marginTop: 20 },
  submit_button: { width: windowWidth - 20 },
  extra:{color: '#4B7DDF', paddingLeft: 5 }
});
