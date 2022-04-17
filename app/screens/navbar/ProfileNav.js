import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../WelcomeScreen';
import Profile from '../Profile';
import ViewYourOwnListings from '../views/ViewYourOwnListings';
import ViewSavedListings from '../views/ViewSavedListings';
import ViewYourListingsBuy from '../views/ViewYourListingsBuy';
import ViewYourListingsRent from '../views/ViewYourListingsRent';
import ViewYourListingsOfferedServices from '../views/ViewYourListingsOfferedServices';
import ViewYourListingsRQItems from '../views/ViewYourListingsRQItems';
import ViewYourListingsRQServices from '../views/ViewYourListingsRQServices';

const Stack = createNativeStackNavigator();

export default function ProfileNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile} />
        <Stack.Screen options={{headerShown:false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="ViewYourOwnListings" component={ViewYourOwnListings} />
        <Stack.Screen options={{headerShown:false}} name="ViewSavedListings" component={ViewSavedListings} />

        <Stack.Screen options={{headerShown:false}} name="ViewYourListingsBuy" component={ViewYourListingsBuy} />
        <Stack.Screen options={{headerShown:false}} name="ViewYourListingsOfferedServices" component={ViewYourListingsOfferedServices} />
        <Stack.Screen options={{headerShown:false}} name="ViewYourListingsRent" component={ViewYourListingsRent} />
        <Stack.Screen options={{headerShown:false}} name="ViewYourListingsRQItems" component={ViewYourListingsRQItems} />
        <Stack.Screen options={{headerShown:false}} name="ViewYourListingsRQServices" component={ViewYourListingsRQServices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}