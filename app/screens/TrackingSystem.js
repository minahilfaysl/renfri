import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import SearchBottomNavBar from "./navbar/SearchBottomNavBar";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

const TrackingSystem = ({navigation}) => {

    const [defaultRating, setDefault] = useState(0)
    const [maxRating, setMax] = useState([1,2,3,4,5])

    const starFilledImg = ""
    const starLightImg = ""

    return (

        <SafeAreaView style={styles.overall}>
            <View style={styles.overall}>

                <View style={styles.rentSubTopNavBox}>
                    <Text style={styles.heading2}>
                        Requested Services
                    </Text>
                </View>

                <StatusBar backgroundColor="#588D60" />
                <View style={styles.topNavBox}>
                    <Text style={styles.heading1}>
                        Closing A Listing
                    </Text>
                </View>

                <View style={styles.card1}>

                </View>

                <View style = {styles.complete}>

                        {/* Text getting cut off from bottom kinda issa cos width height diff */}

                    <Text style = {styles.completetext}> 

                        Complete Your Transaction:

                    </Text>

                </View>

                <Text style= {styles.person}>

                    Person You Bought This Item/Service From:

                </Text>

                <View style={styles.greybox}>

                    <Text style={styles.personText}>

                        Person XYZ

                    </Text>
                    
                    <Text style={styles.personText}>

                        231000XX@lums.edu.pk

                    </Text>

                </View>

                <View style={styles.ratebox}>

                    <Text style={styles.rateText}>

                        Rate Your Experience With This Person

                    </Text>

                </View>

                <View style={styles.customRating}>

                    {
                        maxRating.map((item, key) => {

                            return (

                                <TouchableOpacity

                                    activeOpacity={0.7}
                                    key = {item}
                                    onPress = {() => setDefault(item)}
                                >
                                    
                                    <Image style = {styles.stars} 
                                    
                                    source = {
                                        item <= defaultRating
                                            ? require("../assets/Star_fill.png")
                                            : require("../assets/Star_light.png")
                                        }
                                           
                                        />

                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
                
            </View>

        </SafeAreaView>

    )
}


const styles = StyleSheet.create({

    overall: {
        height: actual_height,
        width : actual_width,
        backgroundColor: "#FFFFFF",
    },

    topNavBox: {
        width: actual_width,
        height: 0.07*actual_height,
        backgroundColor: "#193E26",
        position: "absolute",
        left: 0,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowRadius: 4,
        borderBottomRightRadius: 0.2433 * actual_width, 
	},

    heading1: {
        marginTop: 0.02*actual_height,
        marginLeft: 0.09 * actual_width,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.02551 * actual_height,
        letterSpacing: 0,
        color: "#ffffff",
        textAlign: 'left',
    },

    rentSubTopNavBox: {
        width: "100%",
        height: 0.14*actual_height,
        backgroundColor: "#588D60",
        position: "absolute",
        left: 0,
        shadowRadius: 4,
        borderBottomRightRadius:  0.2433 * actual_width, 
	},

    heading2: {
        top: 0.085*actual_height,
        marginLeft: 0.09 * actual_width,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.02551 * actual_height,
        letterSpacing: 0,
        color: "#ffffff",
        textAlign: 'left',
    },

    card1 : {

        position : "absolute",
        width: 0.82481 * actual_width,
        height : 0.125 * actual_height,
        left : 0.0900 * actual_width,
        top : 0.21385 * actual_height,
        backgroundColor : "gold"

    },

    complete : {

        width : 0.7055 * actual_width,
        height : 0.0315 * actual_height,
        left : 0.085 * actual_width,
        top : 0.38396 * actual_height

    },


    completetext : {

        fontFamily: 'Montserrat_400Regular',
        fontWeight : "400",
        fontSize: 0.02551 * actual_height,
        color : "#193E26",
        textAlign : 'left',
        lineHeight : 0.03159 * actual_height
    },


    person : {

        width : 0.8248 * actual_width,
        height : 0.03 * actual_height,
        left : 0.0851 * actual_width,
        top : 0.4641 * actual_height,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.0170 * actual_height,
        fontWeight : "400",
        lineHeight : 0.0206 * actual_height,
        letterSpacing : 0.000365 * actual_width,
        
    },
    
    greybox  : {

        width : 0.824 * actual_width,
        height : 0.122 * actual_height,
        top : 0.5066 * actual_height,
        left : 0.0827 * actual_width,
        borderRadius : 0.04866 * actual_width,
        backgroundColor : "#C7C4AC",
        flexDirection: "column",
	    alignItems: "center",
	    justifyContent: "center",
	    paddingTop: 0.03523 * actual_height,
	    paddingRight: 0.148 * actual_width,
	    paddingBottom:  0.03523 * actual_height,
	    paddingLeft: 0.148 * actual_width,
    },

    personText : {

        fontFamily: 'Montserrat_400Regular',
        fontWeight : "500",
        fontStyle : "normal",
        fontSize: 0.0206 * actual_height,
        lineHeight : 0.0255 * actual_height,
        color : "#193E26",
        textAlign : 'center',
        letterSpacing : 0.000365 * actual_width,

    },

    ratebox : {
        
        width : 0.822 * actual_width,
        height : 0.05065 * actual_height,
        left : 0.0924 * actual_width,
        top : 0.56 * actual_height,


    },

    rateText : {

        fontFamily: 'Montserrat_400Regular',
        fontWeight : "400",
        fontSize: 0.0170 * actual_height,
        lineHeight : 0.0206 * actual_height,
        letterSpacing : 0.000365 * actual_width,
        color : "#193E26",

    },

    customRating : {
        
        width : 0.389 * actual_width,
        height : 0.032 * actual_height,
        top : 0.8 * actual_height,
        left : 0.296 * actual_width,
        position : "absolute",
        flexDirection : "row",
        justifyContent : "center",

    },

    stars : {

        width : 24,
        height : 24, 
        resizeMode : 'cover',
        backgroundColor : "#000000",

    },

})

export default TrackingSystem