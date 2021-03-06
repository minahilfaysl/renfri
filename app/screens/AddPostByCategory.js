import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import PostBottomNavBar from "./navbar/PostBottomNavBar";
import app from '../../firebase'
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

const AddPostByCategory  = ({navigation}) => {
	return (

        
        <SafeAreaView style={styles.overall}>
            
            <View style={styles.greenbox}>
            </View>
            <View style={styles.darkgreenbox}>
                <Text style={styles.heading}>
                    Create A Listing Or Post
                </Text>
            </View>
            <Text style={styles.heading_two}>
                Pick A Category To Post In
            </Text>

        <ScrollView contentContainerStyle={{ flexGrow: 1, flex : 1 }}>
        <View style={{flexGrow:1, flex : 1}}>

            <View style={styles.spacing}>
                <TouchableOpacity style={styles.category_box_one}
                onPress={() => {console.log("downnn Rent an Item pressed!!!!")}}>
                <TouchableOpacity
                    onPress={() => {console.log("Rent an Item pressed"), navigation.navigate('CreateANewListingRent')}}>
                        <Image 
                        style={styles.cat_img} 
                        source = {require("../assets/category.png")}/>
                        <Text style={styles.text}>
                            Rent An Item
                        </Text>
                    </TouchableOpacity>
                    <AntDesign name="down" style={styles.downicon} size={0.05*actual_width}/>
                </TouchableOpacity>
                
                
                <TouchableOpacity style={styles.category_box_two}
                onPress={() => {console.log("downnn buy an Item pressed!!!!")}}>
                    <TouchableOpacity
                    onPress={() => {console.log("Buy an Item pressed"), navigation.navigate('CreateANewListingBuy')}}>
                        <Image 
                        style={styles.cat_img} 
                        source = {require("../assets/category.png")}/>
                        <Text style={styles.text}>
                            Buy An Item
                        </Text>
                    </TouchableOpacity>
                    <AntDesign name="down" style={styles.downicon} size={0.05*actual_width}/>
                </TouchableOpacity>


                <TouchableOpacity style={styles.category_box_three}
                onPress={() => {console.log("downnn requested items pressed!!!!")}}>
                    <TouchableOpacity
                    onPress={() => {console.log("Requested Items pressed"), navigation.navigate('CreateANewListingRQItems')}}>
                        <Image 
                        style={styles.cat_img} 
                        source = {require("../assets/category.png")}/>
                        <Text style={styles.text}>
                            Requested Items
                        </Text>
                    </TouchableOpacity>
                    <AntDesign name="down" style={styles.downicon} size={0.05*actual_width}/>
                </TouchableOpacity>


                <TouchableOpacity style={styles.category_box_four}
                onPress={() => {console.log("downnn offered services pressed!!!!")}}>
                    <TouchableOpacity
                    onPress={() => {console.log("Offered Services pressed"), navigation.navigate('CreateANewListingOfferedServices')}}>
                        <Image 
                        style={styles.cat_img} 
                        source = {require("../assets/category.png")}/>
                        <Text style={styles.text}>
                            Offered Services
                        </Text>
                    </TouchableOpacity>
                    <AntDesign name="down" style={styles.downicon} size={0.05*actual_width}/>
                </TouchableOpacity>


                <TouchableOpacity style={styles.category_box_five}
                onPress={() => {console.log("downnn requested services pressed!!!!")}}>
                    <TouchableOpacity
                    onPress={() => {console.log("Requested Services pressed"), navigation.navigate('CreateANewListingRQServices')}}>
                        <Image 
                        style={styles.cat_img} 
                        source = {require("../assets/category.png")}/>
                        <Text style={styles.text}>
                            Requested Services
                        </Text>
                    </TouchableOpacity>
                    <AntDesign name="down" style={styles.downicon} size={0.05*actual_width}/>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
)}


const styles = StyleSheet.create({
    overall: {
        width: Dimensions.get("window").width,
        minHeight: Dimensions.get("window").height,
        backgroundColor: "rgb(255, 255, 255)",
        flex : 1, 
        flexGrow : 1
    },
    scrollView: {
    },
    greenbox: {
        width: "100%",
        height: StatusBar.currentHeight,
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
        width: 0.7*actual_width,
        height: 0.05*actual_height,
        left: 0.17518*actual_width,
        top: 0.02*actual_height,
        // font-family: 'Montserrat';
        fontWeight: "400",
        fontSize: 21,
        lineHeight: 26,
        color: "#FFFFFF",
        fontFamily: "Montserrat_400Regular",
    },
    heading_two: {
        position: "relative",
        width: 0.8*actual_width,
        height: 0.05*actual_height,
        left: 0.09*actual_width,
        top: 0.09*actual_height,
        // font-family: 'Montserrat';
        fontWeight: "400",
        fontSize: 21,
        lineHeight: 26,
        color: "#193E26",
        fontFamily: "Montserrat_400Regular",
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
        fontSize: 0.07*actual_width,
        lineHeight: 35,
        textAlign: "center",
        alignSelf: "center",
        letterSpacing: 0.25,
        color: "#FFFFFF",
        fontFamily: "Montserrat_400Regular",
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
        height: 0.08*actual_height,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopColor: "#193E26",
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        justifyContent: "space-around",
    },
    menu_text: {
        textAlign: "center",
        color: "#193E26",
        fontFamily: "Montserrat_400Regular",
    },
    menu_icon: {
        height:50,
        width: 50,
        alignSelf: "center",
    },
})

export default AddPostByCategory;