import React from 'react';
import { View, SafeAreaView, Text, Image, Button, ScrollView, TextInput, StyleSheet} from "react-native";
import { TouchableOpacity } from 'react-native';


function Verification(props) {
    return (
        <View>
            <View style = {styles.overall}>
                <View style = {styles.image_container}>
                    <View style = {styles.image}>
                        <Image style={{height: "100%", width: "100%"}} source = {require("../assets/background.jpg")}/>
                    </View>
                </View>
                <View style = {styles.white_rectangle}>
                    <Text style = {styles.heading}>
                        Login with your LUMS ID
                    </Text>
                    <Text style = {styles.body_text_one} textAlign="left">
                        Your LUMS Email ID
                    </Text>
                    <TextInput style={styles.text_box_one}/>
                    <Text style = {styles.body_text_two} textAlign="left">
                        Password
                    </Text>
                    
                    <TextInput style={styles.text_box_two}/>
			    </View>
                <TouchableOpacity style={styles.comp_reg_box} onPress={() => console.log("neow")}>
                    <Text style={styles.comp_reg_text}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View> 
        </View>
        
    );
}


const styles = StyleSheet.create({
    overall: {
        height: "100%",
        backgroundColor: "#FFFFFF",
    },
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
    white_rectangle: {
        width: "100%",
        height: "50%",
        backgroundColor: "#FFFFFF",
        position: "absolute",
        left: 0,
        top: "50%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    comp_reg_box: {
        width: 217,
        height: 45,
        backgroundColor: "#FFFFFF",
        position: "absolute",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderStyle: "solid",
        borderColor: "#193E26",
        borderRadius: 20,
        top: "87.7%",
        alignSelf: "center",
    },
    comp_reg_text: {
        color: "#193E26",
        alignSelf: "center",
        top: "25%",
    },
    heading: {
        top: "6%",
        fontWeight: "500",
        fontSize: 17,
        lineHeight: 21,
        textAlign: "center",
        letterSpacing: 0.15,
        color: "#193E26",
    },
    body_text_one: {
        top: "16%",
        paddingHorizontal: "10%",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0.15,
        color: "#193E26",
    },
    body_text_two: {
        top: "26%",
        paddingHorizontal: "10%",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0.15,
        color: "#193E26",
    },
    text_box_one: {
        height: "12%",
        width: "80%",
        top: "18%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "10%",
        alignSelf: "center",
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text_box_two: {
        height: "12%",
        width: "80%",
        top: "28%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "10%",
        alignSelf: "center",
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})

export default Verification;