import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import SearchBottomNavBar from "./navbar/SearchBottomNavBar";
import MyTabs from './navbar/NavNavigation'
import app from '../../firebase'
import { getFirestore, collection, query, where, getDocs, setDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const db = getFirestore(app);

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

const HomeScreenSearchByCategory  = ({navigation}) => {

    const [dataArray, setArray] = useState([]);
    const [doc2, setDoc1] = useState("");
    const [usersInt, setUsers] = useState([])

    // async function fetchUsers(i){

    //     const users = dataArray[i].interested_users
    //     for (let j=0; j<users.length; j++){
    //         await getUser(users[i]);
    //         setUsers([...usersInt,doc2])

    //         console.log("Doc after lister/user:", doc2)
    //     }

    //     let dataArray = [...dataArray]
    //     let thisUSer = {...dataArray[i]}
    //     thisUSer.interested_users = usersInt
    //     dataArray[i] = thisUSer
    //     setArray({dataArray})
    //     console.log("here 2")
    // }

    // }

    // async function fetchForOne (i){

    //     await getUser(dataArray[i].lister_id);

    //     let dataArray = [...dataArray]
    //     let thisUSer = {...dataArray[i]}
    //     thisUSer.lister_id = doc2
    //     dataArray[i] = thisUSer

    //     setArray({dataArray})
    //     console.log("here 1")

    //     if(dataArray[i].interested_users.length != 0){}

    // }

    async function generateData(){

        console.log("Array after generatec:", dataArray)
    }

    const getUser = async(email) => {
    
        const Ref = collection(db, "user");
    
        // Create a query against the collection.
        const q = query(Ref, where("email", "==", email));
    
        getDocs(q).then((querySnapshot)=>{
            querySnapshot.forEach((doc) => {
            const doc3 = doc.data()
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setDoc1(doc3)
            console.log("Doc2:", doc3)
            });
            
        }).catch(err=>console.log(err))
    }

    function goTo(type){

        // first get data for type

        setArray([])

        fetchPosts(type)
        
        if (type === "rent"){

            navigation.navigate('SearchResultsRent', {data:[]})
        }

        else if(type === "buy"){

            navigation.navigate('SearchResultsBuy', {data:[]})
        }

        else if (type === "off_services"){

            navigation.navigate('SearchResultsOfferedServices', {data:[]})
        }

        else if (type === "rq_services"){

            navigation.navigate('SearchResultsRQServices', {data:[]})
        }

        else if (type === "rq_items"){

            navigation.navigate('SearchResultsRQItems', {data:[]})
        }

        console.log("Final array:", dataArray)
            // ))
            // return dataArray;})        
    }
    
    function fetchPosts(queryFor){
        
        const Ref = collection(db, "post");
    
        // Create a query against the collection.
        const q = query(Ref, where("category", "==", queryFor));

        setArray([])
    
        getDocs(q).then((querySnapshot)=>{
            querySnapshot.forEach((doc) => {
            const doc1 = doc.data()
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            setArray((dataArray)=>[...dataArray, doc1])
            console.log("Doc2:", doc1)
            // console.log(dataArray)
            }); 

        }).catch(err=>console.log(err))

        // return new Promise((resolve, reject) => {
        //     setTimeout(() => console.log("done"), 200)
        // })
    }

	return (
        <SafeAreaView style={styles.overall}>
            
            <View style={styles.greenbox}>
            </View>
            <View style={styles.darkgreenbox}>
                <Text style={styles.heading}>
                    Search By Category
                </Text>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.spacing}>
                <TouchableOpacity style={styles.category_box_one}
                onPress={() => {console.log("downnn Rent an Item pressed!!!!")}}>
                <TouchableOpacity
                    onPress={() => {console.log("Rent an Item pressed"), goTo("rent")}}>
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
                    onPress={() => {console.log("Buy an Item pressed"), goTo("buy")}}>
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
                    onPress={() => {console.log("Requested Items pressed"), goTo("rq_items")}}>
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
                    onPress={() => {console.log("Offered Services pressed"), goTo("off_services")}}>
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
                    onPress={() => {console.log("Requested Services pressed"), goTo("rq_services")}}>
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
        </ScrollView>

            {/* <SearchBottomNavBar /> */}
            
        </SafeAreaView>
    
    

)}


const styles = StyleSheet.create({
    overall: {
        // marginTop: StatusBar.currentHeight,
        width: Dimensions.get("window").width,
        minHeight: Dimensions.get("window").height,
        backgroundColor: "rgb(255, 255, 255)",
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
        width: 206,
        height: 26,
        left: 0.15*actual_width,
        top: 0.02*actual_height,
        // font-family: 'Montserrat';
        fontWeight: "400",
        fontSize: 21,
        lineHeight: 26,
        color: "#FFFFFF",
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
        height: 0.05*actual_height,
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

export default HomeScreenSearchByCategory;