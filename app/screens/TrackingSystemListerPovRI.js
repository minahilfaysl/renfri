import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import SearchBottomNavBar from "./navbar/SearchBottomNavBar";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import UrgentButton from "../components/UrgentButton";
import MarkAsOpenButton from "../components/MarkAsOpenButton";
import DeleteButton from "../components/DeleteButton";
import KeepMarkedClosedButton from "../components/KeepMarkedClosedButton";

import Card from "../components/Card";

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

let app_images = [
    require('../assets/upload_images_rq_services.png'),
]

var data = {
    post_id: 1,
    category: "rent",
    title: "This is my listing and i am a lister",
    desc: "Description description description description description description description description description description description description description description description description description",
    price: 3000,
    duration: "1-2 hours",
    insurance: 2000,
    tags: "M7, iron",
    images: app_images,
    urgent: true,
    closed: false,
    saved_post: true,
    date: "14/04/2022, 3:45PM",
    lister_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
    interested_users: [{name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 2},
                    {name: "Fatima Sohail", email: "23100065@lums.edu.pk", rating: 3},
                    {name: "Ajwa Shahid", email: "23100066@lums.edu.pk", rating: 4}],
};

const TrackingSystemListerPovRI = ({navigation}) => {

    const [defaultRating, setDefault] = useState(0)
    const [maxRating, setMax] = useState([1,2,3,4,5])

    const starFilledImg = ""
    const starLightImg = ""

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return (

        <SafeAreaView style={styles.overall}>
            <View style={styles.overall}>

                <View style={styles.rentSubTopNavBox}>
                    <Text style={styles.heading2}>
                        Rent An Item
                    </Text>
                </View>

                <StatusBar backgroundColor="#D6482F" />
                <View style={styles.topNavBox}>
                    <Text style={styles.heading1}>
                        Closing A Listing
                    </Text>
                </View>

                {/* the form */}

                <ScrollView style = {styles.form_container}> 

                   <View style = {styles.form_container2}>
                         
                        <View style={styles.card1}>
                            <Card data = {data} />
                        </View>

                        <Text style = {styles.completetext}> 

                            Complete Your Transaction:

                        </Text>

                        <Text style= {styles.person}>

                           ID of Person You Lent/Sold Your Item/Service To:

                        </Text>

                        <TextInput 
                        
                            style={styles.passwordBox}
                            onChangeText={(name) => setName(name)}
                            onSubmitEditing={(name) => setName(name.nativeEvent.text)} //name gets updated here upon user pressing enter
                        />

                        {/* <View style={styles.greybox}>

                            <Text style={styles.personText}>

                                Person XYZ

                            </Text>
                            
                            <Text style={styles.personText}>

                                231000XX@lums.edu.pk

                            </Text>

                        </View> */}

                        <Text style={styles.rateText}>

                            Rate Your Experience With This Person

                        </Text>

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
                                                    ? require("../assets/stars/Star_fill_dgreen.png")
                                                    : require("../assets/stars/Star_light_dgreen.png")
                                                }
                                                
                                                />

                                        </TouchableOpacity>
                                    )
                                })
                            }

                        </View>

                        <Text style={styles.enterPassword}>
                        
                            Enter Your Password For Authentication

                        </Text>

                        <TextInput 
                        
                            style={styles.passwordBox}
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                            onSubmitEditing={(password) => setPassword(password.nativeEvent.text)} //name gets updated here upon user pressing enter
                        />

                        <Text style={styles.smoltext}>

                        Was An Insurance Sum Taken For This Item?

                        </Text>
                            
                        <View style={styles.two_buttons}>

                            <TouchableOpacity style={styles.yes_button} onPress={() => console.log("Yes")}>
                                <Text style={styles.yes_text}>
                                    Yes
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.no_button} onPress={() => console.log("No")}>
                                <Text style={styles.no_text}>
                                    No
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <Text style={styles.smoltext}>

                            Options For This Listing:

                        </Text>

                        <View styles={styles.buttonlist}>

                            <MarkAsOpenButton/>

                            <KeepMarkedClosedButton/>

                            <UrgentButton/>

                            <DeleteButton/>

                        </View>
                           
                        <TouchableOpacity style={styles.confirm_button} onPress={() => console.log(name, password)}>
                            <Text style={styles.confirm_button_text}>
                                CONFIRM
                            </Text>
                        </TouchableOpacity>

                    </View> 

                </ScrollView>

             </View>

            {/* <SearchBottomNavBar /> */}

        </SafeAreaView>

    )
}


const styles = StyleSheet.create({

    overall: {
        height: actual_height,
        width : actual_width,
        backgroundColor: "#FFFFFF",
    },

    form_container : {

        backgroundColor: "#FFFFFF",
        height: "100%",
        top: 0.15*actual_height,
    },

    form_container2: {
        paddingVertical: 20,
        justifyContent: "space-evenly",
        flexDirection : 'column',
        height: "100%",
    },

    topNavBox: {
        width: actual_width,
        height: 0.07*actual_height,
        backgroundColor: "#670000",
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
        backgroundColor: "#D6482F",
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
        
        // width: 0.82481 * actual_width,
        height : 0.15 * actual_height,
        // left : 0.0900 * actual_width,
        // backgroundColor : "gold",
        marginBottom : "7%"

    },

    completetext : {

        fontFamily: 'Montserrat_400Regular',
        fontWeight : "400",
        fontSize: 0.02551 * actual_height,
        color : "#193E26",
        textAlign : 'left',
        marginLeft: 0.09 * actual_width,
        marginBottom: "7%",
    },

    person : {

        // width : 0.8248 * actual_width,
        // height : 0.03 * actual_height,
        // left : 0.0851 * actual_width,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.0170 * actual_height,
        fontWeight : "400",
        letterSpacing : 0.000365 * actual_width,
        textAlign : 'left',
        marginLeft: 0.09 * actual_width,
        marginBottom: "7%",
        
    },
    
    rateText : {

        fontFamily: 'Montserrat_400Regular',
        fontWeight : "400",
        fontSize: 0.0170 * actual_height,
        lineHeight : 0.0206 * actual_height,
        letterSpacing : 0.000365 * actual_width,
        color : "#193E26",
        marginLeft: 0.09 * actual_width,
        marginBottom: "7%",
    },

    customRating : {
        
        width : 0.389 * actual_width,
        height : 0.032 * actual_height,
        marginBottom: "7%",
        flexDirection : "row",
        justifyContent : "center",
        // marginLeft : "50%",
        alignSelf : "center"
    },

    stars : {

        width : 24,
        height : 24, 
        resizeMode : 'cover',

    },

    enterPassword : {
        fontFamily: 'Montserrat_400Regular',
        fontWeight : "500",
        fontStyle : "normal",
        fontSize: 0.0170 * actual_height,
        lineHeight : 0.0206 * actual_height,
        letterSpacing : 0.000365 * actual_width,
        color : "#193E26",
        marginLeft: 0.09 * actual_width,
        marginBottom: "7%",

    },

    passwordBox : {

        height: 0.055*actual_height,
        width: 0.8*actual_width,
        // top: "28%",
        marginBottom: "7%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "10%",
        alignSelf: "center",
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },


    confirm_button: {
        width: 0.5 * actual_width,
        height: 0.055 * actual_height,
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

    smoltext : {

        fontFamily: 'Montserrat_400Regular',
        fontWeight : "400",
        fontSize: 0.0170 * actual_height,
        lineHeight : 0.0206 * actual_height,
        letterSpacing : 0.000365 * actual_width,
        color : "#193E26",
        marginLeft: 0.09 * actual_width,
        marginBottom: "7%",

    },

    two_buttons : {

        marginBottom: "10%",
        // flexDirection: "row" ,
        // alignSelf : "center",
        flex : 1,
        flexDirection : "row", 
        justifyContent: 'space-between',
        marginHorizontal : "15%"

    },

    yes_button : {

        width: 0.3 * actual_width,
        height: 0.04 * actual_height,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#588D60",
        // marginBottom: "7%",
        justifyContent: 'center',
        paddingHorizontal: "5%",
        alignItems: "center",
        alignSelf: "center",

    },

    no_button : {

        width: 0.3 * actual_width,
        height: 0.04 * actual_height,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        borderWidth: 1,
        alignSelf: "center",
        borderStyle: "solid",
        borderColor: "#D6482F",
        // marginBottom: "7%",
        justifyContent: 'center',
        paddingHorizontal: "5%",
        alignItems: "center",
        alignSelf: "center",

        
    },

    yes_text : {

        color: "#588D60",
        alignSelf: "center",
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.016 * actual_height,
        letterSpacing: 1.25,
        textTransform: 'uppercase',
        
    },

    no_text : {

        color: "#D6482F",
        alignSelf: "center",
        fontFamily: 'OpenSans_400Regular',
        fontSize: 0.016 * actual_height,
        letterSpacing: 1.25,
        textTransform: 'uppercase',
        marginBottom: "7%",
    },

    buttonlist : {

        marginBottom: "7%",

    }



})

export default TrackingSystemListerPovRI