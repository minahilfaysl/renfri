import React, { useState} from "react";
import { Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';;

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

export default function MarkClosedButtonRqServices(props) {

    if (!props.state) {
        props.state = false;
    }

    const [clicked, setClicked] = useState(props.state);
    const [text, setText] = useState(props.state ? "MARK AS OPEN" : "MARK CLOSED")

    const buttonClicked = {
        onPress: () => { 
            if (clicked) {
                setClicked(false),
                setText("MARK CLOSED")
                console.log("no wait, i didnt mean that, open it again")
            }
            else {
                setClicked(true),
                setText("MARK AS OPEN")
                console.log("hello mark my post as closed")
            }
        },
        style: clicked ? styles.box_clicked : styles.box,
    }

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
        <TouchableOpacity {...buttonClicked}> 
            <Image 
                style={styles.icon} 
                source = {clicked ? require("../assets/Book_check_fill_dgreen.png") : require("../assets/Book_check_fill_dgreen.png")}/>
            <Text style= {clicked ? styles.text_clicked : styles.text}>
                { text }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 0.35 * actual_width,
        height: 0.04 * actual_height,
        paddingHorizontal: "5%",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#193E26",
        borderRadius: 20,
        marginBottom: 40,
    },
    text: {
        // marginTop: 0.015*actual_height,
        color: "#193E26",
        alignSelf: "center",
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.016 * actual_height,
        letterSpacing: 1.25,
        textTransform: 'uppercase',
    },
    box_clicked: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 0.35 * actual_width,
        height: 0.04 * actual_height,
        paddingHorizontal: "5%",
        alignItems: "center",
        backgroundColor: "#588D60",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#193E26",
        borderRadius: 20,
        marginBottom: 40,
    },
    text_clicked: {
        // marginTop: 0.015*actual_height,
        color: "#193E26",
        alignSelf: "center",
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.016 * actual_height,
        letterSpacing: 1.25,
        textTransform: 'uppercase',
    },
    icon: {
        alignSelf: "center",
        width: 24,
        height: 24,
    },
})
