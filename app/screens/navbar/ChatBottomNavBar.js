import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import {MyTabs} from '../NavNavigation'

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

const ChatBottomNavBar  = ({navigation}) => {

    let fonts = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
        OpenSans_700Bold,
    })

    if (fonts) {
        return (
            <View style={styles.menu}>
                <TouchableOpacity style={styles.one_unit}
                onPress={() => {console.log("search pressed")}}>
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/Search.png")}/>
                    <Text style={[styles.body2, styles.menu_text]}>
                        Search
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.one_unit}
                onPress={() => {console.log("profile pressed")}}>
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/User_light.png")}/>
                    <Text style={[styles.body2, styles.menu_text]}>
                        Profile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.one_unit}
                onPress={() => {console.log("post pressed")}}>
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/Add_ring_light.png")}/>
                    <Text style={[styles.body2, styles.menu_text]}>
                        Post
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.one_unit}
                onPress={() => {console.log("notifs pressed")}}> 
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/Bell_pin_light.png")}/>
                    <Text style={[styles.body2, styles.menu_text]}>
                        Notifs
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.one_unit}
                onPress={() => {console.log("chat pressed"), navigation.navigate('Chat')}}> 
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/Message_bold.png")}/>
                    <Text style={[styles.navbarBold]}>
                        Chat
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ChatBottomNavBar

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        height: 56,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopColor: "#193E26",
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        elevation: 8,
        justifyContent: "space-around",
        paddingLeft: 18,
        paddingRight: 18, 
    },
    menu_text: {
        textAlign: "center",
        color: "#193E26",
    },
    one_unit: {
        marginTop: 7.5,
        marginBottom: 7.5,
        width: 0.12*actual_width,
        height: 0.08*actual_height,
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
    },
    menu_icon: {
        alignSelf: "center",
        width: 24,
        height: 24,
    },
    body2: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 12,
        letterSpacing: 0.25,
    },
    navbarBold: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 12,
        letterSpacing: 0.25,
        textAlign: "center",
        color: '#588D60',
    }
})