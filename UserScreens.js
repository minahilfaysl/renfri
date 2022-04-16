import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreenSearchByCategory from './app/screens/HomeScreenSearchByCategory';

const Stack = createNativeStackNavigator();

export default function UserScreens() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreenSearchByCategory} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}