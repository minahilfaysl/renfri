import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {AntDesign, MaterialCommunityIcons, Ionicons, SimpleLineIcons} from "@expo/vector-icons";
import PostBottomNavBar from "./navbar/PostBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

const CreateANewListingForm  = (props) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
        OpenSans_700Bold,
    })
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    if (props.category == 'rent') {
	return (
        <SafeAreaView style={styles.overall}>
            <View style = {styles.overall}>
                {/* the top navbar */}
                <StatusBar backgroundColor="#588D60" />
                <View style={styles.rentSubTopNavBox}>
                    <Text style={styles.heading2}>
                        Rent an Item
                    </Text>
                </View>
                <View style={styles.topNavBox}>
                    <Text style={styles.heading1}>
                        Create A Listing or Post
                    </Text>
                </View>
                <ScrollView style = {styles.formContainer}> 
                    <View style = {styles.formContainer2}>
                        <Text style = {styles.body_text_one} textAlign="left">
                            Add Title For Your Item
                        </Text>
                        <TextInput style={styles.text_box}/>
                        <Text style = {styles.body_text_one} textAlign="left">
                            Add Title For Your Item
                        </Text>
                        <TextInput style={styles.text_box}/>
                        <Text style = {styles.body_text_one} textAlign="left">
                            Add Title For Your Item
                        </Text>
                        <TextInput style={styles.text_box}/>
                        <Text style = {styles.body_text_one} textAlign="left">
                            Add Title For Your Item
                        </Text>
                        <TextInput style={styles.text_box}/>
                        <Text style = {styles.body_text_one} textAlign="left">
                            Add Title For Your Item
                        </Text>
                        <TextInput style={styles.text_box}/>
                        <Text style = {styles.body_text_one} textAlign="left">
                            Add Title For Your Item
                        </Text>
                        <TextInput style={styles.text_box}/>
                        <Text style = {styles.body_text_one} textAlign="left">
                            Add Title For Your Item
                        </Text>
                        <TextInput style={styles.text_box}/>
                        <Text style = {styles.body_text_one} textAlign="left">
                            Add Title For Your Item
                        </Text>
                        <TextInput style={styles.text_box}/>
                        <TouchableOpacity style={styles.comp_reg_box} onPress={() => console.log("neow")}>
                            <Text style={styles.comp_reg_text}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>
                             
                </ScrollView>
            </View>
            <PostBottomNavBar />
        </SafeAreaView>
    )}
    return (
        <Text style={styles.comp_reg_text}>
            Connection bloopidititooed, try again?
            {/* <PostBottomNavBar /> */}
        </Text>
    )
}
export default CreateANewListingForm

const styles = StyleSheet.create({
    overall: {
        height: "100%",
        backgroundColor: "#FFFFFF",
    },
    topNavBox: {
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
    rentSubTopNavBox: {
        width: "100%",
        height: 0.14*actual_height,
        backgroundColor: "#670000",
        position: "absolute",
        left: 0,
        shadowRadius: 4,
        borderBottomRightRadius: 100, 
	},
    heading1: {
        marginTop: 0.02*actual_height,
        marginLeft: 0.09 * actual_width,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 21,
        letterSpacing: 0,
        color: "#ffffff",
        textAlign: 'left',
    },
    heading2: {
        top: 0.085*actual_height,
        marginLeft: 0.09 * actual_width,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 21,
        letterSpacing: 0,
        color: "#ffffff",
        textAlign: 'left',
    },
    formContainer: {
        backgroundColor: "#fff",
        height: "100%",
        top: 0.15*actual_height,
    },
    formContainer2: {
        paddingVertical: 20,
        justifyContent: "space-between",
        height: "100%",
    },

    // not used yet
    comp_reg_box: {
        width: 217,
        height: 45,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderStyle: "solid",
        borderColor: "#193E26",
        borderRadius: 20,
        alignSelf: "center",
        marginBottom: 200,
    },
    comp_reg_text: {
        color: "#193E26",
        alignSelf: "center",
    },
    body_text_one: {
        // top: "16%",
        marginBottom: 18,
        paddingHorizontal: "10%",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 0.02 * actual_height,
        lineHeight: 17,
        letterSpacing: 0.15,
        color: "#193E26",
    },
    text_box: {
        marginBottom: 40,
        height: 0.05 * actual_height,
        width: "80%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "10%",
        alignSelf: "center",
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
})
