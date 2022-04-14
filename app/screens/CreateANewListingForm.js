import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {AntDesign, MaterialCommunityIcons, Ionicons, SimpleLineIcons} from "@expo/vector-icons";
import PostBottomNavBar from "./navbar/PostBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import UrgentButton from "../components/UrgentButton";
// import UrgentButton from '../components/UrgentButton';

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

const CreateANewListingForm  = (props) => {
    
    // here are all the variables from the input fields
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [insurance, setInsurance] = useState('');
    const [tags, setTags] = useState('');

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
                {/* the form */}
                <ScrollView style = {styles.formContainer}> 
                    <View style = {styles.formContainer2}>
                        <Text style = {styles.body_text_rent} textAlign="left">
                            Upload Images of Your Item (up to 5)
                        </Text>
                        

                        {/* title */}
                        <Text
                            style = {styles.body_text_rent} textAlign="left">
                            Add Title For Your Item *
                        </Text>
                        <TextInput
                            onChangeText = {(value) => setTitle(value)}
                            style={styles.text_box_rent}/>

                        {/* description */}
                        <Text style = {styles.body_text_rent} textAlign="left">
                            Add Item Description
                        </Text>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            onChangeText = {(value) => setDesc(value)}
                            style={styles.text_box_desc_rent}/>

                        {/* price */}
                        <Text style = {styles.body_text_rent} textAlign="left">
                            Enter Price For Your Item in PKR *
                        </Text>
                        <TextInput
                            onChangeText = {(value) => setPrice(value)}
                            style={styles.text_box_rent}/>

                        {/* duration of rent */}
                        <Text style = {styles.body_text_rent} textAlign="left">
                            Duration of Rent
                        </Text>
                        <TextInput
                            onChangeText = {(value) => setDuration(value)}
                            style={styles.text_box_rent}/>
                        
                        {/* insurance */}
                        <Text style = {styles.body_text_rent} textAlign="left">
                            Insurance (in case of damages) in PKR
                        </Text>
                        <TextInput 
                            onChangeText = {(value) => setInsurance(value)}
                            style={styles.text_box_rent}/>

                        {/* tags */}
                        <Text style = {styles.body_text_rent} textAlign="left">
                            Tags (eg, iron, M7, delivery, etc) separated by commas
                        </Text>
                        <TextInput 
                            onChangeText = {(value) => setTags(value)}
                            style={styles.text_box_rent}/>

                        {/* buttons */}
                        <UrgentButton />
                        <Text style = {styles.message}>
                            Please recheck your post and its details before confirming. {'\n'}{'\n'}
                            You will not be able to edit this post once it has been uploaded. {'\n'}{'\n'}
                            In case of any changes, you will have to delete this post and re-post it with the changes. {'\n'}
                        </Text>
                        <TouchableOpacity style={styles.confirm_button} onPress={() => console.log("neow")}>
                            <Text style={styles.confirm_button_text}>
                                CONFIRM
                            </Text>
                        </TouchableOpacity>
                    </View>
                             
                </ScrollView>
            </View>
            <PostBottomNavBar />
        </SafeAreaView>
    )}
    return (
        <Text style={styles.body_text_rent}>
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
    body_text_rent: {
        marginBottom: 18,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontStyle: "normal",
        fontWeight: "400",
        // fontSize: 0.02 * actual_height,
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0.15,
        color: "#670000",
    },
    message: {
        marginBottom: 18,
        paddingHorizontal: "15%",
        fontFamily: 'Montserrat_400Regular',
        fontStyle: "normal",
        fontWeight: "400",
        // fontSize: 0.02 * actual_height,
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0.15,
        color: "#670000",
        textAlign: "center",
    },
    text_box_rent: {
        marginBottom: 40,
        height: 0.05 * actual_height,
        width: "80%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "5%",
        alignSelf: "center",
        borderBottomColor: "#670000",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text_box_desc_rent: {
        marginBottom: 40,
        height: 0.16 * actual_height,
        width: "80%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        padding: "5%",
        alignSelf: "center",
        borderBottomColor: "#670000",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    confirm_button: {
        width: 0.5 * actual_width,
        height: 0.055 * actual_height,
        // width: 217,
        // height: 45,
        backgroundColor: "#588D60",
        borderRadius: 20,
        alignSelf: "center",
        marginBottom: 200,
    },
    confirm_button_text: {
        marginTop: 0.016*actual_height,
        color: "#FFF",
        alignSelf: "center",
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.016 * actual_height,
        letterSpacing: 1.25,
        textTransform: 'uppercase',
    },
})
