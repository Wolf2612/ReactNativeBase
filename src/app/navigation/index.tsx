import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './rootNavigation';
// import SplashScreen from 'react-native-splash-screen';
import IntroApp from 'app/screens/IntroApp';
import Login from 'app/screens/login';

export type RootStackParamList = {
  Intro: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const notShowHeader = {headerShown: false};

const RootScreen = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'Intro'}>
        <Stack.Screen
          options={notShowHeader}
          name={'Intro'}
          component={IntroApp}
        />
        <Stack.Screen
          options={notShowHeader}
          name={'Login'}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootScreen;
