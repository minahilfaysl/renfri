import React, {useState} from 'react';
import { View, Text, Button, TouchableHighlight, Dimensions, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Alert} from "react-native";
import { ImageBackground } from 'react-native';
import app from '../../firebase'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const auth = getAuth();

const db = getFirestore(app);

function SignUp({navigation}) {

    const [name, setName] = useState("")
    const [id, setID] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirm] = useState("")

    async function addUser() {
        let reg = /^[0-9]{8}\@lums([\.])edu([\.])pk$/;
        if (id === "" || name === "" || password === "" || confirmPassword===""){
            Alert.alert(
                "Empty Fields",
                "Please fill all the fields given",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
        else if (reg.test(id)===false){
            Alert.alert(
                "Incorrect Email Format",
                "You can only sign in with a valid LUMS student assigned email ID",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }

        else if (password.length <8){
            Alert.alert(
                "Password too short",
                "All passwords must be atleast 8 character long.",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
    
        else if (password != confirmPassword){
            Alert.alert(
                "Incorrect Passwords",
                "The passwords don't match",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }

        else{
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, id, password);
                // await sendEmailVerification(userCredential.user);

                const docRef = await addDoc(collection(db, "user"), {
                    avg_rating: 0,
                    email:id,
                    full_name:name,
                    num_ratings: 0 });
                console.log("Document written with ID: ", docRef.id);

                Alert.alert(
                    "Success",
                    "You've been registered. Please LogIn again.",
                    [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );

                navigation.navigate('Sign In');

            } catch (error) {
                console.log(error)
            } 
        }        
    }

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
                    onPress= {() => {console.log(name, id, password, confirmPassword), addUser()}}
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
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)} //in case the user doesn't press enter
                    onSubmitEditing={(password) => setPassword(password.nativeEvent.text)} //name gets updated here upon user pressing enter
                
                />

                <TextInput style={styles.textbox4}
                    secureTextEntry={true}
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