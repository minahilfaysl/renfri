import React from 'react';
import { ImageBackground} from 'react-native';
import { View, Text, Button, TouchableHighlight, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {Font} from 'expo'
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

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


// const bg = { uri: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/803d/3506/f3350dc03e1a31ed18bbc0c9ce1e8234" };

function WelcomeScreen({ navigation }) {

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
        Montserrat_900Black_Italic 

    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (

        <SafeAreaView style={styles.overall}>   
        
            <View style = {styles.image_container}>

                <View style = {styles.image}>
                    <Image style={{height: "100%", width: "100%"}} source = {require("../assets/background.jpg")}/>
                </View>

            </View>

                <SafeAreaView style = {styles.rectangle1}>
                    <Text style = {styles.TheEssential}>

                    The Essential App For Hostelites

                    </Text>

                    <Text style = {styles.Renfri}>

                    RENFRI

                    </Text>

                    <Text style = {styles.Welcome}>

                    Welcome to

                    </Text>
                
                </SafeAreaView>

                <View >

                    <TouchableOpacity
                        style= {styles.rectangle2}
                        onPress= {() => {console.log("REGISTER PRESSED"), navigation.navigate('Sign Up')}}
                    >
                            <Text style= {styles.Register}> REGISTER </Text>
                            
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style= {styles.rectangle3}
                        onPress= {() => {console.log("LOGIN PRESSED"), navigation.navigate('Sign In')}}
                    >
                            <Text style= {styles.Login}> LOGIN </Text>
                    </TouchableOpacity>

                    

                 </View>

        </SafeAreaView>

        
        
    );
}

const actual_height = Dimensions.get("window").height;
const actual_width = Dimensions.get("window").width;

const styles = StyleSheet.create({

    overall: {
        height: "100%",
        backgroundColor: "#FFFFFF",
    },

    background : {

        flex : 1,
        // justifyContent: "center"

    },

    image_container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
    },
    image: {
        width: "100%",
        height: "100%",
    },

    rectangle1 : {

        width: "100%",
        height: "26.24%",
        backgroundColor: "rgb(255, 255, 255)",
        position: "absolute",
        left: 0,
        top: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0.243*actual_width,
        borderTopLeftRadius : 0,
        borderTopRightRadius: 0
    },

    TheEssential : {

        width: "auto",
        height: "auto",
        position: "absolute",
        left: 0.0656 * actual_width,
        top: "70.37%",
        color: "rgb(25, 62, 38)",
        fontSize: 0.0255 * actual_height,
        fontWeight: "400",
        fontFamily: "Montserrat_400Regular",
        letterSpacing: 0,
        textAlign: "left",

    },

    Renfri : {

        width: "auto",
        height: "auto",
        position: "absolute",
        left: 0.04379 * actual_width,
        top: "24.07407%",
        color: "rgb(25, 62, 38)",
        fontSize: 0.0996 * actual_height,
        fontWeight: "300",
        fontFamily: "Montserrat_400Regular",
        letterSpacing: -1.5,
        textAlign: "left",
    },

    Welcome : {

        width: "auto",
        height: "auto",
        position: "absolute",
        left: 0.065693*actual_width,
        top: "15%",
        color: "rgb(25, 62, 38)",
        fontSize: 0.0255 * actual_height,
        fontWeight: "400",
        fontFamily: "Montserrat_400Regular",
        letterSpacing: 0,
        textAlign: "left",
    },



    rectangle2 : {
        
        zIndex: 1,
        width: 0.5279 * actual_width,
        height: 0.0546 * actual_height ,
        left: 0.236 * actual_width,
        top: 0.8007* actual_height,
        backgroundColor: "rgb(255, 255, 255)",
        position: "absolute",
        borderRadius: 0.0486 * actual_width,
        alignSelf : "center"

    },

    Register : {

        width: 0.187 * actual_width,
        height: 0.0765 * actual_height,
        position: "absolute",
        top : "33.33%",
        // left : "35.48%",
        color: "#193E26",
        fontSize: 0.01458 * actual_height,
        fontWeight: "400",
        fontFamily: "Montserrat_400Regular",
        // letterSpacing: 1.25,
        textAlign: "center",
        alignSelf : "center"

    },

    rectangle3 : {

        width: 0.527 * actual_width,
        height: 0.0546 * actual_height,
        left: 0.236 * actual_width,
        top: 0.877278 * actual_height,
        backgroundColor: "rgb(25, 62, 38)",
        position: "absolute",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderStyle: "solid",
        borderColor: "rgb(255, 255, 255)",
        borderRadius: 20,
        alignSelf : "center"
    },

    Login : {

        width : 0.102 * actual_width,
        height : 0.0194 * actual_height,
        top : 0.0182 * actual_height,
        color: "rgb(255, 255, 255)",
        fontSize: 0.01458 * actual_height,
        fontWeight: "400",
        fontFamily: "Montserrat_400Regular",
        // letterSpacing: 1.25,
        textAlign: "center",
        alignSelf : "center",
    },

})

export default WelcomeScreen;