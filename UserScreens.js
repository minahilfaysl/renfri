import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreenSearchByCategory from './app/screens/HomeScreenSearchByCategory';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreenSearchByCategory from './app/screens/HomeScreenSearchByCategory';
import AddPostByCategory from './app/screens/AddPostByCategory';
// import Chat from './app/screens/Chat';
import MyTabs from './app/screens/navbar/NavNavigation';

const Stack = createNativeStackNavigator();

export default function UserScreens() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Home" component={MyTabs} />
          {/* <Stack.Screen options={{headerShown:false}} name="Tabs" component={MyTabs} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
}