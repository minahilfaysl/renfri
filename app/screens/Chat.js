import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import ChatBottomNavBar from "../screens/navbar/ChatBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Message from "./Message";

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

const user_name = "Ajwa Shahid"

export default function Chat () {

    const [input_text, set_input_text] = useState("");
    const [messages, setMessages] = useState([
        {
            user: 0,
            time: "12:00",
            content: "Happy Birthday",
        },
        {
            user: 1,
            time: "12:01",
            content: "Thank u",
        },
        {
            user: 0,
            time: "12:02",
            content: "you're 21?",
        },
        {
            user: 1,
            time: "12:03",
            content: "yeah",
        },
        {
            user: 1,
            time: "12:04",
            content: "im so old ;-;",
        },
        {
            user: 0,
            time: "12:04",
            content: "nooooooooooooooo you're still young bro chill karo making this text longer for test purposes.",
        },
        {
            user: 1,
            time: "12:04",
            content: "okok chill out",
        },
        {
            user: 1,
            time: "12:04",
            content: "what if",
        },
        {
            user: 1,
            time: "12:04",
            content: "I spam",
        },
        {
            user: 1,
            time: "12:04",
            content: "hmm",
        },
        {
            user: 1,
            time: "12:04",
            content: "this should",
        },
        {
            user: 0,
            time: "12:04",
            content: "scroll?",
        },
        {
            user: 1,
            time: "12:04",
            content: "yeah",
        },
    ])

    const user = useRef(0);
    const scrollView = useRef();

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
            <View style = {styles.overall}>
                {/* the top navbar */}
                <StatusBar backgroundColor="#588D60" />
                <View style={styles.subtop_nav_box}>
                    <Text style={styles.heading2}>
                        {user_name}
                    </Text>
                </View>
                <View style={styles.top_nav_box}>
                    <Text style={styles.heading1}>
                        Chats
                    </Text>
                </View>
                <View style={styles.scrollview}>                
                <ScrollView
                    ref={ref => scrollView.current = ref}
                    onContentChange={() => {
                        scrollView.current.scrollToEnd({ animated: true})
                    }}
                >
                        {messages.map((message, index) => (
                            <Message
                                key={index}
                                time={message.time}
                                isLeft={message.user !== user.current}
                                message={message.content}
                            />

                        ))}

                </ScrollView>
                </View>
                <View style={styles.chat_input}>
                    <TextInput
                        style={styles.text_box_one}
                        onSubmitEditing={(input_text) => set_input_text(input_text.nativeEvent.text)} 
                    />
                    <TouchableOpacity
                    onPress={() => {console.log("send this text and clear input space")}}>
                        <Image 
                            style={styles.icon_send} 
                            source = {require("../assets/Send_fill.png")}/>
                    </TouchableOpacity>
                </View>
                

            </View>
    )
}



const styles = StyleSheet.create({
    overall: {
        flex: 1,
    },
    scrollview: {
        paddingTop: "30%",
        paddingBottom: "15%"
    },
    top_nav_box: {
        width: "100%",
        height: 0.07*actual_height,
        backgroundColor: "rgb(25, 62, 38)",
        position: "absolute",
        left: 0,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowRadius: 4,
        borderBottomRightRadius: 100, 
	},
    subtop_nav_box: {
        width: "100%",
        height: 0.14*actual_height,
        backgroundColor: "#588D60",
        position: "absolute",
        left: 0,
        shadowRadius: 4,
        borderBottomRightRadius: 100, 
	},
    heading1: {
        marginTop: 0.02*actual_height,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 21,
        letterSpacing: 0,
        color: "#ffffff",
        textAlign: 'left',
    },
    heading2: {
        top: 0.085*actual_height,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 21,
        letterSpacing: 0,
        color: "#ffffff",
        textAlign: 'left',
    },
    text_box_one: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000000",
        height: 0.07*actual_height,
        width: "85%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        marginLeft: 0.02*actual_width,
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: "10%",
        textAlign: "left",
    },
    chat_input: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
    },
    icon_send: {
        height: 24,
        width: 24,
    },
})