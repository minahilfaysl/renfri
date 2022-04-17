import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import ProfileBottomNavBar from "../screens/navbar/ProfileBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';
import app from '../../firebase'
// import useAuthentication from '../../useAuthentication'
import { getFirestore, collection, query, where, getDocs, setDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import ProfileNav from './navbar/ProfileNav';

const auth = getAuth();

const db = getFirestore(app);

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

function ShowRatingStars (data) {
    console.log(num)
    const num = data.num;
    if (num <= 1 && num > 0) {
        console.log("NUM1:",num)
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
            </View>
        )
    }

    else if (num <= 2 && num > 1) {
        console.log("NUM2:",num)
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
            </View>
        )
    }

    else if (num <= 3 && num > 2) {
        console.log("NUM3:",num)
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
            </View>
        )
    }

    else if (num <= 4 && num > 3) {
        console.log("NUM4:",num)
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_light.png")}/>
            </View>
        )
    }

    else if (num <= 5 && num > 4) {
        console.log("NUM5:",num)
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../assets/Star_fill.png")}/>
            </View>
        )
    }
    else{
        console.log("NUM6:",num)
        return (
        <View style = {styles.stars}>
            <Image 
                style={styles.icon} 
                source = {require("../assets/Star_light.png")}/>
            <Image 
                style={styles.icon}
                source = {require("../assets/Star_light.png")}/>
            <Image 
                style={styles.icon} 
                source = {require("../assets/Star_light.png")}/>
            <Image 
                style={styles.icon} 
                source = {require("../assets/Star_light.png")}/>
            <Image 
                style={styles.icon} 
                source = {require("../assets/Star_light.png")}/>
        </View>
        )
    }
    
}

const rating = 4;

export default function Profile ({navigation}) {

    async function signOutUser () {

        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("signed out")
            navigation.navigate('Welcome')

        }).catch((error) => {
        // An error happened.
            console.log(error)
        });

    }

    const [doc1, setDoc1] = useState("")

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
        OpenSans_700Bold,
    })
    
    // if (!fontsLoaded) {
    //     return <AppLoading />;
    // }

    // getUser().then ((doc1)=>{
    // console.log("Used:", doc1)
    // setDoc1(doc1) 
    // })

    useEffect(()=>{
        const getUser = async() => {

            const user1 = auth.currentUser;
        
            const Ref = collection(db, "user");
        
            // Create a query against the collection.
            const q = query(Ref, where("email", "==", user1.email));
        
            getDocs(q).then((querySnapshot)=>{
                querySnapshot.forEach((doc) => {
                const doc1 = doc.data()
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                setDoc1(doc1)
                console.log("Doc2:", doc1)
                });
                
            }).catch(err=>console.log(err))
        }
        getUser();
     },[])

	return (

        <SafeAreaView style={styles.overall}>
            <View style = {styles.overall}>
                {/* the top navbar */}
                <StatusBar backgroundColor="#588D60" />
                <View style={styles.top_nav_box}>
                    <Text style={styles.heading1}>
                        User Profile
                    </Text>
                </View>

                <View style={styles.spacing}>
                    <Text style={styles.heading2}>
                        Welcome to Your Profile
                    </Text>
                    
                    <Text style={styles.message}>
                        Your Personal Details
                    </Text>
                    <View style={styles.info_box}>
                        <Text style={styles.text_box}>
                            {doc1.full_name}
                        </Text>
                        <Text style={styles.text_box}>
                            {doc1.email}
                        </Text>
                    </View>
                    <Text style={styles.message}>
                        Your Average Rating
                    </Text>
                    <View style={styles.info_box}>
                        <View style = {styles.stars}> 
                            {doc1 === "" ? <ShowRatingStars num={0} /> : <ShowRatingStars num={doc1.avg_rating} />} 
                        </View>
                    </View>
                    <Text style={styles.message}>
                        Your Activity
                    </Text>
                    <TouchableOpacity style={styles.info_box_two}
                    onPress={() => {console.log("view your listing pressed"), navigation.navigate('ViewYourOwnListings')}}>
                        <View style={styles.text_with_image}>  
                            <Image 
                                style={styles.icon_eye} 
                                source = {require("../assets/view.png")}/>
                            <Text style={styles.text_box_two}>
                                View Your Listings
                            </Text>
                        </View> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.info_box_two}
                    onPress={() => {console.log("view your saved listing pressed"), navigation.navigate('ViewSavedListings')}}>
                        <View style={styles.text_with_image}>
                            <Image 
                                style={styles.icon_save} 
                                source = {require("../assets/bookmark_fill.png")}/>
                            <Text style={styles.text_box_two}>
                                View Saved Listings
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sign_out}
                    onPress={() => {console.log("signout pressed"), signOutUser()}}>
                        <View style={styles.text_with_image}>
                        <AntDesign name="logout" size={24} color="#193E26" style={styles.signout_icon} />
                            <Text style={styles.text_box_three}>
                                Sign Out
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
            {/* <ProfileBottomNavBar /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    overall: {
        height: "100%",
        backgroundColor: "#FFFFFF",
    },
    top_nav_box: {
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
    subtop_nav_box: {
        width: "100%",
        height: 0.14*actual_height,
        backgroundColor: "#D6482F",
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
    spacing: {
        top: 0.1*actual_height,
        height: 0.77*actual_height,
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
    },
    heading2: {
        paddingHorizontal: "10%",
        paddingVertical: 20,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 21,
        letterSpacing: 0,
        color: "#193E26",
        textAlign: 'left',
    },
    message: {
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontStyle: "normal",
        fontWeight: "500",
        // fontSize: 0.02 * actual_height,
        fontSize: 17,
        lineHeight: 21,
        letterSpacing: 0.15,
        color: "#193E26",
    },
    info_box: {
        backgroundColor: "#C7C4AC",
        height: 0.12*actual_height,
        width: 0.825*actual_width,
        borderRadius: 0.049*actual_width,
        alignSelf: "center",
    },
    text_box: {
        width: "80%",
        top: "25%",
        color: "#193E26",
        paddingHorizontal: "5%",
        alignSelf: "center",
        fontSize: 0.0414*actual_width,
        textAlign: "center",
        fontFamily: 'Montserrat_400Regular',
    },
    text_box_two: {
        width: "80%",
        color: "#193E26",
        fontSize: 0.0414*actual_width,
        textAlign: "left",
        fontFamily: 'Montserrat_400Regular',
        alignSelf: "center",
    },
    text_box_three: {
        width: "80%",
        color: "#193E26",
        fontSize: 0.0414*actual_width,
        textAlign: "left",
        fontFamily: 'Montserrat_400Regular',
        alignSelf: "center",
        paddingHorizontal: "15%",
    },
    info_box_two: {
        backgroundColor: "#C7C4AC",
        height: 0.06*actual_height,
        width: 0.825*actual_width,
        borderRadius: 0.049*actual_width,
        alignSelf: "center",
    },
    sign_out: {
        backgroundColor: "#FFFFFF",
        height: 0.06*actual_height,
        width: 0.525*actual_width,
        borderRadius: 0.049*actual_width,
        borderWidth: 0.005*actual_width,
        borderColor: "#193E26",
        alignSelf: "center",
    },
    stars: {
        resizeMode: "cover",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
    },
    icon: {
        marginTop: -3,
        width: 24,
        height: 24,
    },
    signout_icon: {
        marginTop: "5%",
        marginLeft: "3%",
        width: 24,
        height: 24,
    },
    icon_eye: {
        marginHorizontal: 10,
        marginVertical: 14,
        width: 24,
        height: 16,
    },
    icon_save: {
        marginHorizontal: 10,
        marginVertical: 10,
        width: 24,
        height: 24,
    },
    text_with_image: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    }
})
