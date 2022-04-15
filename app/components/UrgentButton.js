import React, { useState} from "react";
import { Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';;

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

export default function UrgentButton(props) {

    if (!props.state) {
        props.state = false;
    }
    const [urgentClicked, setUrgentClicked] = useState(props.state);
    const [urgentText, setUrgentText] = useState(props.state ? "MARKED URGENT" : "MARK AS URGENT")

    const urgentButtonClicked = {
        onPress: () => { 
            if (urgentClicked) {
                setUrgentClicked(false),
                setUrgentText("MARK AS URGENT")
            }
            else {
                setUrgentClicked(true),
                setUrgentText("MARKED URGENT")
            }
        },
        style: urgentClicked ? styles.urgent_box_clicked : styles.urgent_box,
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
        <TouchableOpacity {...urgentButtonClicked}> 
        <Image 
            style={styles.icon} 
            source = {urgentClicked ? require("../assets/Alarm_fill_active.png") : require("../assets/Alarm_fill.png")}/>
        <Text style= {urgentClicked ? styles.urgent_text_clicked : styles.urgent_text}>
            { urgentText }
        </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    urgent_box: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 0.5 * actual_width,
        height: 0.04 * actual_height,
        paddingHorizontal: "5%",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#D6482F",
        borderRadius: 20,
        alignSelf: "center",
        marginBottom: 40,
    },
    urgent_text: {
        // marginTop: 0.015*actual_height,
        color: "#D6482F",
        alignSelf: "center",
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.016 * actual_height,
        letterSpacing: 1.25,
        textTransform: 'uppercase',
    },
    urgent_box_clicked: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 0.5 * actual_width,
        height: 0.04 * actual_height,
        paddingHorizontal: "5%",
        alignItems: "center",
        backgroundColor: "#D6482F",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#670000",
        borderRadius: 20,
        alignSelf: "center",
        marginBottom: 40,
    },
    urgent_text_clicked: {
        // marginTop: 0.015*actual_height,
        color: "#670000",
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
