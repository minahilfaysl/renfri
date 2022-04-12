import { StyleSheet } from "react-native";
import { 
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
  } from '@expo-google-fonts/montserrat';
import { 
    OpenSans_400Regular,
  } from '@expo-google-fonts/open-sans';

import { useFonts } from 'expo-font';

export default function useFont() {
    let [fontsLoaded, error] = useFonts({ 
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
    })
}

export const GlobalStyles = StyleSheet.create({

    // colours
    darkGreen: {color: '#193E26'},
    lightGreen: {color: '#588D60'},
    white: {color: '#FFFFFF'},
    peach: {color: '#FF886E'},
    lightRed: {color: '#D6482F'},
    darkRed: {color: '#670000'},
    skin: {color: '#C7C4AC'},
    inputFieldBG: {color: '#F0F0F0'},
    darkGrey: {color: '#C4C4C4'},

    // headings
    heading4: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 29,
        letterSpacing: -0.25,
    },

    heading5: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 21,
        letterSpacing: 0,
    },

    heading6: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 17,
        letterSpacing: 0.15,
    },

    // subtitles
    subtitle1: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        letterSpacing: 0.15,
    },

    subtitle2: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 12,
        letterSpacing: 0.1,
    },

    // body text
    body1: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 13,
        letterSpacing: 0.5,
    },

    body2: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 12,
        letterSpacing: 0.25,
    },

    // button
    buttonText: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 12,
        letterSpacing: 1.25,
        textTransform: 'uppercase'
    },

    // caption
    captionText: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 10,
        letterSpacing: 0.4,
    },

    // overline
    buttonText: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 8,
        letterSpacing: 1.5,
        textTransform: 'uppercase'
    }
})