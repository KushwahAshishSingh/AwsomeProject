/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {PrimaryButton} from '../../components/common/Buttons/PrimaryButton';
import { windowWidth } from '../../utils/Dimension';
import { TextInputButton } from '../../components/common/Buttons/TextInputButton';
import { showToast } from '../../utils/helpers';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale } from '../../utils/helpers';
import { useHeaderHeight } from '@react-navigation/elements';
import { useGlobaStyles } from '../../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';
export const RegisterScreen = ({ navigation }) => {
  const globalStyles = useGlobaStyles();
  const height = useHeaderHeight();
  const [Username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [hidePassword, setHidePassword] = React.useState(true);


  const registerUser = async data => {
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

    if (!Username ) {
      if (!Username) {
        return showToast('error', 'Please fill your Username.');
      }
    }
      if (!strongRegex.test(email)) {
        return showToast('error', 'Please fill your email.');
      }
    if (!mobile || mobile.length !== 10) {
      if (!mobile) {
        return showToast('error', 'Please fill mobile number');
      } else {
        return showToast('error', 'Mobile number should be 10 digit');
      }
    }
    if (!password || password.length < 8) {
      return showToast('error', '8 character password required.');
    }
    if (password !== confirmPassword) {
      return showToast('error', 'password mismatch');
    }
    else {
      return showToast('success', 'user created successfully');
    }
  };

    return (
      <SafeAreaView style={styles.main_container}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={height + 47}
          enabled
          style={styles.sub_main}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView onPress={Keyboard.dismiss}>
            <View style={styles.top_container}>
              <View style={styles.container}>
              <Text style={[globalStyles.fs_24_bold, styles.font_24_extra]}>App Name</Text>
                <Text style={[globalStyles.fs_24_bold, styles.font_24_extra]}>Register</Text>
                <View
                  style={styles.user_fields_container}>

                  <TextInputButton
                    placeholderText="Username"
                    labelValue={Username}
                    onChangeText={Username => {
                      setUsername(Username);
                    }}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />

                  <TextInputButton
                    placeholderText="Email Address"
                    labelValue={email}
                    value={email}
                    onChangeText={userEmail => setEmail(userEmail)}
                    keyboardType="email-address"
                  />
                  <TextInputButton
                    placeholderText="+91"
                    labelValue={mobile}
                    onChangeText={userMobileNo => setMobile(userMobileNo)}
                    keyboardType="numeric"
                  />
                  <TextInputButton
                    placeholderText="Create Password"
                    password={true}
                    labelValue={password}
                    onChangeText={userPassword => setPassword(userPassword)}
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    iconType={hidePassword ? 'eye' : 'close'}
                    onPress={() => {
                      setHidePassword(prev => !prev);
                    }}
                  />
                  <TextInputButton
                    placeholderText="Confirm Password"
                    password={true}
                    labelValue={confirmPassword}
                    onChangeText={userResetPassword =>
                      setConfirmPassword(userResetPassword)
                    }
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    iconType={hidePassword ? 'eye' : 'close'}
                    onPress={() => {
                      setHidePassword(prev => !prev);
                    }}
                  />
                </View>

                <View style={styles.button_style}>
                  <PrimaryButton
                    title="Submit"
                    onPress={() =>
                      registerUser({
                        email: email,
                        password: password,
                        Username: Username,
                        isdCode: '+91',
                        phoneNumber: mobile,
                      })
                    }
                  />
                </View>
              </View>
              <View style={styles.signup_button}>
                <Text style={globalStyles.fs_14_light}> Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                  <Text
                    style={[globalStyles.fs_14_light, styles.extra]}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    main_container:{ flex: 1 , backgroundColor:'#1e1e1e'},
    sub_main:{ flex: 1 },
    top_container: {
      marginBottom: 40,
    },
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#1e1e1e',
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 1,
      marginTop: 40,
    },
    user_fields_container:{
      width: '100%',
      paddingHorizontal: 10,
    },
    font_24_extra: {
      marginBottom: 20,
    },
    button_style: { width: windowWidth - 20 },
    signup_button: {
      flexDirection: 'row',
      marginTop: 20,
      textAlign: 'center',
      justifyContent: 'center',
    },
    extra:{color: '#4B7DDF', paddingLeft: 5 }
  })