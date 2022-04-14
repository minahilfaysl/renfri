import React, {useState} from 'react';
import { View, Text, Button, TouchableHighlight, Dimensions, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, SafeAreaView} from "react-native";
import { ImageBackground } from 'react-native';



function SignUp(props) {

    const [name, setName] = useState("")
    const [id, setID] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirm] = useState("")

    return (

        <SafeAreaView style={styles.all}>

            <View style = {styles.image_container}>

            <View style = {styles.image}>
                <Image style={{height: "100%", width: "100%"}} source = {require("../assets/background.jpg")}/>
            </View>

            </View>

            <View style={styles.overall}>

                <Text style={styles.RegisterAsA}> 
                    Register as a new user using your LUMS email ID
                </Text>

                <TouchableOpacity
                    style= {styles.Register}
                    onPress= {() => console.log(name, id, password, confirmPassword)}
                >
                        <Text style= {styles.RegisterText}> REGISTER </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.fillers}>

                <Text style={styles.YourName}> 
                    Your Name
                </Text>

                <Text style={styles.EmailID}> 
                    Your LUMS Email ID
                </Text>

                <Text style={styles.Password}>
                    Password
                </Text>

                <Text style={styles.ConfirmPassword}> 
                    Confirm Password
                </Text>

                <TextInput style={styles.textbox1}
                    onChangeText={(name) => setName(name)} //in case the user doesn't press enter
                    onSubmitEditing={(name) => setName(name.nativeEvent.text)} //name gets updated here upon user pressing enter
                />

                <TextInput style={styles.textbox2}
                    onChangeText={(id) => setID(id)} //in case the user doesn't press enter
                    onSubmitEditing={(id) => setID(id.nativeEvent.text)} //name gets updated here upon user pressing enter

                />

                <TextInput style={styles.textbox3}
                    onChangeText={(password) => setPassword(password)} //in case the user doesn't press enter
                    onSubmitEditing={(password) => setPassword(password.nativeEvent.text)} //name gets updated here upon user pressing enter
                
                />

                <TextInput style={styles.textbox4}
                    onChangeText={(confirmPassword) => setConfirm(confirmPassword)} //in case the user doesn't press enter
                    onSubmitEditing={(confirmPassword) => setConfirm(confirmPassword.nativeEvent.text)} //name gets updated here upon user pressing enter
                
                />

            </View>

        </SafeAreaView>
        
    );
}


const actual_height = Dimensions.get("window").height;
const actual_width = Dimensions.get("window").width;

const styles = StyleSheet.create({

    image_container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
    },
    image: {
        width: "100%",
        height: "100%",
    },

    all: {
        height: "100%",
        backgroundColor: "#FFFFFF",
    },

    background : {

        flex : 1,
        // justifyContent: "center"

    },

    overall : {

        width: "100%",
        height: "83.96%",
        backgroundColor: "rgb(255, 255, 255)",
        position: "absolute",
        left: 0,
        top: "16.0388%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius : 0.12165 * actual_width,
        borderTopRightRadius:  0.12165 * actual_width

    },

    RegisterAsA : {

        width: "70.5596%",
        height: "auto",
        position: "absolute",
        left: "14.5985%",
        top: "7%",
        color: "rgb(25, 62, 38)",
        fontSize: 17,
        fontWeight: "500",
        fontFamily: "Montserrat_400Regular",
        letterSpacing: 0.15,
        textAlign: "center",


    },

    fillers : {

        width: "82.48%",
        height: "55%",
        position: "absolute",
        left: "8.7591%",
        top: "31%",
        backgroundColor: "#FFFFFF"

    },

    YourName : {

        width: "auto",
        height: "auto",
        position: "absolute",
        left: 0,
        top: 0,
        color: "rgb(25, 62, 38)",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Montserrat_400Regular",
        letterSpacing: 0.15,
        textAlign: "center",
    },

    EmailID : {
        width: "auto",
        height: "auto",
        position: "absolute",
        left: 0,
        top: "27.33%",
        color: "rgb(25, 62, 38)",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Montserrat_400Regular",
        letterSpacing: 0.15,
        textAlign: "center",
    },

    Password : {

        width: "auto",
        height: "auto",
        position: "absolute",
        left: 0,
        top: "54.67%",
        color: "rgb(25, 62, 38)",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Montserrat_400Regular",
        letterSpacing: 0.15,
        textAlign: "center",
    },

    ConfirmPassword : {

        width: "auto",
        height: "auto",
        position: "absolute",
        left: 0,
        top: "82%",
        color: "rgb(25, 62, 38)",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Montserrat_400Regular",
        letterSpacing: 0.15,
        textAlign: "center",
    },

    textbox1: {

        height: "10%",
        width: "100%",
        top: "8%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "10%",
        alignSelf: "center",
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    textbox2: {

        height: "10%",
        width: "100%",
        top: "25%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "10%",
        alignSelf: "center",
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    textbox3: {

        height: "10%",
        width: "100%",
        top: "42%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "10%",
        alignSelf: "center",
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    textbox4: {

        height: "10%",
        width: "100%",
        top: "60%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "10%",
        alignSelf: "center",
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    Register : {

        width: "52.79%",
        height: "6.51%",
        backgroundColor: "#FFFFFF",
        position: "absolute",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderStyle: "solid",
        borderColor: "#193E26",
        borderRadius: 20,
        top: "86.6%",
        alignSelf: "center",

    },

    RegisterText : {
        
        color: "#193E26",
        alignSelf: "center",
        top: "25%",
        fontFamily: "Montserrat_400Regular",


    }
})

export default SignUp;