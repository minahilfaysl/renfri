import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddPostByCategory from '../AddPostByCategory';
import CreateANewListingForm from '../CreateANewListingForm';
import CreateANewListingBuy from '../forms/CreateANewListingBuy';
import CreateANewListingOfferedServices from '../forms/CreateANewListingOfferedServices';
import CreateANewListingRent from '../forms/CreateANewListingRent';
import CreateANewListingRQItems from '../forms/CreateANewListingRQItems';
import CreateANewListingRQServices from '../forms/CreateANewListingRQServices';

const Stack = createNativeStackNavigator();

export default function PostNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="AddPostByCategory" component={AddPostByCategory} />
        <Stack.Screen options={{headerShown:false}} name="CreateANewListingForm" component={CreateANewListingForm} />
        <Stack.Screen options={{headerShown:false}} name="CreateANewListingBuy" component={CreateANewListingBuy} />
        <Stack.Screen options={{headerShown:false}} name="CreateANewListingOfferedServices" component={CreateANewListingOfferedServices} />
        <Stack.Screen options={{headerShown:false}} name="CreateANewListingRent" component={CreateANewListingRent} />
        <Stack.Screen options={{headerShown:false}} name="CreateANewListingRQItems" component={CreateANewListingRQItems} />
        <Stack.Screen options={{headerShown:false}} name="CreateANewListingRQServices" component={CreateANewListingRQServices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}