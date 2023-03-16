import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { MainNavigatorStack } from './types';
import { navigationRef } from './RootNavigation';
import {LoginScreen} from '../screens/Auth/LoginScreen';
import { RegisterScreen } from '../screens/Auth/RegisterScreen';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const Stack = createNativeStackNavigator<MainNavigatorStack>();

const RootNavigator: React.FC<MainNavigatorStack> = () => {
  let ref = React.useRef(null);
  return (
    <>
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
        <Stack.Navigator initialRouteName={'LoginScreen'}>
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
           <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
