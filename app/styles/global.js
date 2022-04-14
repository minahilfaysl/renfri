import { StyleSheet } from "react-native";
import { 
    Montserrat_400Regular,
    Montserrat_500Medium,
  } from '@expo-google-fonts/montserrat'
import { 
    OpenSans_400Regular,
    OpenSans_700Bold,
  } from '@expo-google-fonts/open-sans'
import { useFonts } from 'expo-font';

export default function use() {
    return useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
        OpenSans_700Bold,
    })
}

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

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
        fontSize: 0.035*actual_height,
        letterSpacing: -0.25,
    },

    heading5: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.026*actual_height,
        letterSpacing: 0,
    },

    heading6: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 0.02*actual_height,
        letterSpacing: 0.15,
    },

    // subtitles
    subtitle1: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.02*actual_height,
        letterSpacing: 0.15,
    },

    subtitle2: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 0.015*actual_height,
        letterSpacing: 0.1,
    },

    // body text
    body1: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.016*actual_height,
        letterSpacing: 0.5,
    },

    body2: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.015*actual_height,
        letterSpacing: 0.25,
    },

    // button
    buttonText: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.016*actual_height,
        letterSpacing: 1.25,
        textTransform: 'uppercase'
    },

    // caption
    captionText: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.01*actual_height,
        letterSpacing: 0.4,
    },

    // overline
    overline: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.001*actual_height,
        letterSpacing: 1.5,
        textTransform: 'uppercase'
    },

    navbarBold: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 0.015*actual_height,
        letterSpacing: 0.25,
        textAlign: "center",
        color: '#588D60',
    },

    // input text boxes
    text_box_rent: {
        marginBottom: 40,
        height: 0.05 * actual_height,
        width: "80%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "10%",
        alignSelf: "center",
        borderBottomColor: "#670000",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    // margins are all 10%
    // width of text within the screens is all 80%
})

