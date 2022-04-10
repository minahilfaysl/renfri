import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {AntDesign, MaterialCommunityIcons, Ionicons, SimpleLineIcons} from "@expo/vector-icons";

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

const BottomNavBar  = ({navigation}) => {
	return (
        <View style={styles.menu}>
            <View style={styles.one_unit}>
                <Image 
                    style={styles.menu_icon} 
                    source = {require("../assets/navbar/Search.png")}/>
                <Text style={styles.menu_text}>
                    Search
                </Text>
            </View>
            <View style={styles.one_unit}>
                <Image 
                    style={styles.menu_icon} 
                    source = {require("../assets/navbar/User_light.png")}/>
                <Text style={styles.menu_text}>
                    Profile
                </Text>
            </View>
            <View style={styles.one_unit}>
                <Image 
                    style={styles.menu_icon} 
                    source = {require("../assets/navbar/Add_ring_light.png")}/>
                <Text style={styles.menu_text}>
                    Post
                </Text>
            </View>
            <View style={styles.one_unit}> 
                <Image 
                    style={styles.menu_icon} 
                    source = {require("../assets/navbar/Bell_pin_light.png")}/>
                <Text style={styles.menu_text}>
                    Notifs
                </Text>
            </View>
            <View style={styles.one_unit}> 
                <Image 
                    style={styles.menu_icon} 
                    source = {require("../assets/navbar/Message_light.png")}/>
                <Text style={styles.menu_text}>
                    Chat
                </Text>
            </View>
        </View>
    )
}
export default BottomNavBar

const styles = StyleSheet.create({
    overall: {
        marginTop: StatusBar.currentHeight,
        width: Dimensions.get("window").width,
        minHeight: Dimensions.get("window").height,
        backgroundColor: "rgb(255, 255, 255)",
    },
    scrollView: {
    },
    greenbox: {
        width: "100%",
        height: 0.03*actual_height,
        left: 0,
        top: 0,
        backgroundColor: "#588D60",
    },
    darkgreenbox: {
        width: "100%",
        height: 0.07*actual_height,
        backgroundColor: "rgb(25, 62, 38)",
        position: "absolute",
        left: 0,
        top: 0.03*actual_height,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowRadius: 4,
        borderBottomRightRadius: 100, 
	},
    heading: {
        position: "absolute",
        width: 206,
        height: 26,
        left: 0.15*actual_width,
        top: 0.02*actual_height,
        // font-family: 'Montserrat';
        fontWeight: "400",
        fontSize: 21,
        lineHeight: 26,
        color: "#FFFFFF",
    },
    category_box_one: {
        position: "relative",
        width: 0.85*actual_width,
        height: 100,
        backgroundColor: "#670000",
        borderRadius: 20,
    },
    category_box_two: {
        position: "relative",
        width: 0.85*actual_width,
        height: 100,
        backgroundColor: "#D6482F",
        borderRadius: 20,
    },
    category_box_three: {
        position: "relative",
        width: 0.85*actual_width,
        height: 100,
        backgroundColor: "#FF886E",
        borderRadius: 20,
    },
    category_box_four: {
        position: "relative",
        width: 0.85*actual_width,
        height: 100,
        backgroundColor: "#C7C4AC",
        borderRadius: 20,
    },
    category_box_five: {
        position: "relative",
        width: 0.85*actual_width,
        height: 100,
        backgroundColor: "#588D60",
        borderRadius: 20,
    },
    spacing: {
        top: 0.1*actual_height,
        height: 0.77*actual_height,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    text: {
        position: "absolute",
        width: 0.8*actual_width,
        height: 40,
        top: "35%",
        // fontFamily: 'Montserrat',
        fontWeight: "400",
        fontSize: 0.08*actual_width,
        lineHeight: 35,
        textAlign: "center",
        alignSelf: "center",
        letterSpacing: 0.25,
        color: "#FFFFFF",
    },
    cat_img: {
        height: "100%", 
        width: "100%", 
        borderBottomRightRadius: 90,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    downicon: {
        position: "absolute",
        bottom: 0.005*actual_height,
        color: "#FFFFFF",
        left: "92%",
    },
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
})