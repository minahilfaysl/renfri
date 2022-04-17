import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './app/screens/Login';
import Verification from './app/screens/Verification';
import SignUp from './app/screens/SignUp';
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomeScreenSearchByCategory from './app/screens/HomeScreenSearchByCategory';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreenSearchByCategory from './app/screens/HomeScreenSearchByCategory';
import AddPostByCategory from './app/screens/AddPostByCategory';
// import Chat from './app/screens/Chat';
import MyTabs from './app/screens/navbar/NavNavigation';

const Stack = createNativeStackNavigator();

export default function AuthScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="Sign In" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Sign Up" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={MyTabs} />
        {/* <Stack.Screen options={{headerShown:false}} name="Tabs" component={MyTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}