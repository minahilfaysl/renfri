import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './app/screens/Login';
import Verification from './app/screens/Verification';
import SignUp from './app/screens/SignUp';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="Sign In" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}