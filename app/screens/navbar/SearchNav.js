import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreenSearchByCategory from '../HomeScreenSearchByCategory';
import SearchResultsBuy from '../searchResults/SearchResultsBuy';
import SearchResultsRent from '../searchResults/SearchResultsRent';
import SearchResultsOfferedServices from '../searchResults/SearchResultsOfferedServices';
import SearchResultsRQItems from '../searchResults/SearchResultsRQItems';
import SearchResultsRQServices from '../searchResults/SearchResultsRQServices';

const Stack = createNativeStackNavigator();

export default function SearchNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="HomeScreenSearchByCategory" component={HomeScreenSearchByCategory} />

        <Stack.Screen options={{headerShown:false}} name="SearchResultsBuy" component={SearchResultsBuy} />
        <Stack.Screen options={{headerShown:false}} name="SearchResultsOfferedServices" component={SearchResultsOfferedServices} />
        <Stack.Screen options={{headerShown:false}} name="SearchResultsRent" component={SearchResultsRent} />
        <Stack.Screen options={{headerShown:false}} name="SearchResultsRQItems" component={SearchResultsRQItems} />
        <Stack.Screen options={{headerShown:false}} name="SearchResultsRQServices" component={SearchResultsRQServices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}