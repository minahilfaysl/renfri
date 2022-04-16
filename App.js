import CreateANewListingBuy from './app/screens/forms/CreateANewListingBuy';
import CreateANewListingOfferedServices from './app/screens/forms/CreateANewListingOfferedServices';
import CreateANewListingRent from './app/screens/forms/CreateANewListingRent';
import CreateANewListingRQItems from './app/screens/forms/CreateANewListingRQItems';
import CreateANewListingRQServices from './app/screens/forms/CreateANewListingRQServices';
import SignUp from './app/screens/SignUp';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppLoading from 'expo-app-loading';
import JustWelcome from './app/screens/JustWelcome';
import Login from './app/screens/Login';
import Verification from './app/screens/Verification';
import HomeScreenSearchByCategory from './app/screens/HomeScreenSearchByCategory';
import AddPostByCategory from './app/screens/AddPostByCategory';
import TrackingSystem from './app/screens/TrackingSystem';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image,  TouchableWithoutFeedback, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { useAuthentication } from './utils/hooks/useAuthentication';
import AuthScreens from './AuthScreens';
import UserScreens from './UserScreens';

import { 
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'

import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';


export default function App() {

  let [fontsLoaded]=useFonts({

    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
    OpenSans_400Regular,
    OpenSans_700Bold,

});

// if (!fontsLoaded) {
//     return <AppLoading />
// }

const Stack = createNativeStackNavigator();
const { user } = useAuthentication();
  return user ? <UserScreens /> : <AuthScreens/>;
}