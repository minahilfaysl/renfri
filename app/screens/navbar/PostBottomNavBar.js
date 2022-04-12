import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

const PostBottomNavBar  = ({navigation}) => {

    let fonts = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
        OpenSans_700Bold,
    })

    if (fonts) {
        return (
            <View style={styles.menu}>
                <View style={styles.one_unit}>
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/Search.png")}/>
                    <Text style={[styles.body2, styles.menu_text]}>
                        Search
                    </Text>
                </View>
                <View style={styles.one_unit}>
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/User_light.png")}/>
                    <Text style={[styles.body2, styles.menu_text]}>
                        Profile
                    </Text>
                </View>
                <View style={styles.one_unit}>
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/Add_round_fill_bold.png")}/>
                    <Text style={[styles.navbarBold]}>
                        Post
                    </Text>
                </View>
                <View style={styles.one_unit}> 
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/Bell_pin_light.png")}/>
                    <Text style={[styles.body2, styles.menu_text]}>
                        Notifs
                    </Text>
                </View>
                <View style={styles.one_unit}> 
                    <Image 
                        style={styles.menu_icon} 
                        source = {require("../../assets/navbar/Message_light.png")}/>
                    <Text style={[styles.body2, styles.menu_text]}>
                        Chat
                    </Text>
                </View>
            </View>
        )
    }
}

export default PostBottomNavBar

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