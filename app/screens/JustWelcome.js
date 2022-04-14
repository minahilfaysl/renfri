import React from 'react';
import { ImageBackground} from 'react-native';
import { View, Text, Button, TouchableHighlight, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {Font} from 'expo'
// import AnimatedSplash from "react-native-animated-splash-screen";

function JustWelcome(props) {

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

                {/* < AnimatedSplash
                    translucent={true}
                    isLoaded={this.state.isLoaded}
                    logoImage={require("../assets/icon.png")}
                    backgroundColor={"#262626"}
                    logoHeight={150}
                    logoWidth={150}
                >
                    <JustWelcome> </JustWelcome>
                </AnimatedSplash> */}

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


})

export default JustWelcome;
