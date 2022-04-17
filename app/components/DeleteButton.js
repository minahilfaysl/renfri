import React, { useState} from "react";
import { Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';;

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

export default function DeleteButton(props) {

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
        OpenSans_700Bold,
    })
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <TouchableOpacity style={styles.box} onPress={() => console.log("yeet this to the trash")}> 
            <Image 
                style={styles.icon} 
                source = {require("../assets/Trash_lred.png")}/>
            <Text style= {styles.text}>
                DELETE
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 0.6 * actual_width,
        height: 0.04 * actual_height,
        paddingHorizontal: "5%",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#D6482F",
        borderRadius: 20,
        marginBottom: 40,
    },
    text: {
        // marginTop: 0.015*actual_height,
        color: "#D6482F",
        alignSelf: "center",
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.016 * actual_height,
        letterSpacing: 1.25,
        textTransform: 'uppercase',
        marginLeft: 5,
    },
    icon: {
        alignSelf: "center",
        width: 24,
        height: 24,
    },
})
