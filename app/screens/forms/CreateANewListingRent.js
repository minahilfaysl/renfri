import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import PostBottomNavBar from "../navbar/PostBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import UrgentButton from "../../components/UrgentButton";
import { SliderBox } from "react-native-image-slider-box";
import * as ImagePicker from 'expo-image-picker';
import app from '../../../firebase'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const db = getFirestore(app);

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

export default function CreateANewListingRent ({navigation}) {

    const [image, setImage] = useState();
    const [numUploaded, setNum] = useState(0);

    let paths = ["", "", "", "", ""]
    
    const [src_paths, setSrc] = useState(paths)

    let app_images = [
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
    ]

    const [imgArray, setArray] = useState(app_images);

    const pickImage = async (index) => {
        console.log("in picker")
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
        //   allowsEditing: true,
        //   aspect: [4, 3],
            type: 'image',
            allowsMultipleSelection: true,
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            const paths = src_paths
            paths[index] = result.uri
            setSrc([...paths])
            app_images = imgArray
            app_images[index] = result.uri
            setArray([...app_images])
            console.log(imgArray)
            console.log(numUploaded, src_paths)
        }
    };
    
    // here are all the variables from the input fields
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState(null);
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState(null);
    const [insurance, setInsurance] = useState(null);    
    const [urgent, setUrgent] = useState(false)
    const [tags, setTags] = useState(null);
    const [docId, setDocId] = useState(null);
    const [newArr, setNewArr] = useState([])

    function isIllegal(text){

        if(text===""){

            return false
        }

        const wordList = ["alcohol", "lsd", "ecstacy", "weed", "roofies", "heroin", "cocaine", "crack", "marijuana", "mdma", "molly", "codeine", "fentanyl", "demerol", "morphine", "oxy", "oxycodone", "oxymorphine", "tramadol", "meth", "amphetamine", "antidepressants", "steroids", "booze", "benzos", "stimulants", "methamphetamine", "flakka", "krokodil", "cannabis", "dope", "hash", "inhalants", "ketamine", "ghb", "hallucinogens", "drugs", "dugs"]
    
        const postWords = text.split(" ");

        for (let i = 0; i < postWords.length; i++) {
            
            // check if word present in list
            if (wordList.includes(postWords[i].toLoerCase())) {
                return true
            }
        }

        return false
    }

    async function uploadPost(){
        if(title === "" || price === "" ){
            Alert.alert(
                "Empty Fields",
                "Please fill all the compulsory fields",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }

        else if (title!="" && isIllegal(title)){
            Alert.alert(
                "Illegal Post",
                "Your Post Violates Community Guides",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }

        else if (desc && isIllegal(desc)){
            Alert.alert(
                "Illegal Post",
                "Your Post Violates Community Guides",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }

        else{

            const user1 = auth.currentUser;
            const userid = user1.email
            const category = 'rent'
            const date = new Date().toLocaleString()

            try {

                const docRef = await addDoc(collection(db, "post"), {
                    category: category,
                    date: date,
                    desc: desc,
                    duration: duration,
                    insurance: insurance,
                    interested_user: [], 
                    lister_id: userid,
                    price: price,
                    closed: false,
                    tags: tags,
                    title: title,
                    urgent:urgent
                });

                console.log("Document written with ID: ", docRef.id);
                setDocId(docRef.id)
                try{

                    for(let i=0;i<5; i++){
                        const arr = newArr
                        if(src_paths[i]!=""){
                            arr.push(src_paths[i])
                        }
    
                        setArray([...arr])
                    }
    
    
                    const imgRef = await addDoc(collection(db, "images"), {
    
                        doc_ref:docRef.id,
                        img_array: newArr.length === 0? null : newArr
    
                    });
    
                    console.log("Document written with ID: ", imgRef.id);

                    Alert.alert(
                        "Success",
                        "Uploaded",
                        [
                          { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                      );

                    navigation.navigate('AddPostByCategory')
    
                }catch (error) {
                 console.log(error) 
                }      

            } catch (error) {
                console.log(error)
            }   
            
            Alert.alert(
                "Upload Failed",
                "Our Team is Looking into this",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        } 
    }

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
        OpenSans_700Bold,
    })
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

	return (
        <SafeAreaView style={styles.overall}>
            <View style = {styles.overall}>
                {/* the top navbar */}
                <StatusBar backgroundColor="#588D60" />
                <View style={styles.subtop_nav_box}>
                    <Text style={styles.heading2}>
                        Rent an Item
                    </Text>
                </View>
                <View style={styles.top_nav_box}>
                    <Text style={styles.heading1}>
                        Create A Listing or Post
                    </Text>
                </View>
                {/* the form */}
                <ScrollView style = {styles.form_container}> 
                    <View style = {styles.form_container2}>
                        <Text style = {[styles.body_text, StyleSheet.create({marginTop: 20})]} textAlign="left">
                            Upload Images of Your Item (up to 5)
                        </Text>
                        <SliderBox
                            style = {styles.slider_box}
                            images = {imgArray}
                            dotColor = "#670000"
                            inactiveDotColor = "#C4C4C4"
                            dotStyle = {{
                                width: 5,
                                height: 5,
                                borderRadius: 5,
                                marginBottom: 30,
                            }}
                            sliderBoxHeight= "80%"
                            // here, I think if you try to replace the images in the images array,
                            // the images should be uploaded and displayed again.
                            // please add a check for uploading only 5 images as well.
                            onCurrentImagePressed={index => {console.log(`image ${index} pressed`), pickImage(index)}}
                            currentImageEmitter={index => console.log(`current pos is ${index}`)}
                        />


                        {/* title */}
                        <Text
                            style = {styles.body_text} textAlign="left">
                            Add Title For Your Item *
                        </Text>
                        <TextInput
                            onChangeText = {(value) => setTitle(value)}
                            style={styles.text_box}/>

                        {/* description */}
                        <Text style = {styles.body_text} textAlign="left">
                            Add Item Description
                        </Text>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            onChangeText = {(value) => setDesc(value)}
                            style={styles.text_box_desc}/>

                        {/* price */}
                        <Text style = {styles.body_text} textAlign="left">
                            Enter Price For Your Item in PKR *
                        </Text>
                        <TextInput
                            onChangeText = {(value) => setPrice(value)}
                            style={styles.text_box}/>

                        {/* duration of rent */}
                        <Text style = {styles.body_text} textAlign="left">
                            Duration of Rent
                        </Text>
                        <TextInput
                            onChangeText = {(value) => setDuration(value)}
                            style={styles.text_box}/>
                        
                        {/* insurance */}
                        <Text style = {styles.body_text} textAlign="left">
                            Insurance (in case of damages) in PKR
                        </Text>
                        <TextInput 
                            onChangeText = {(value) => setInsurance(value)}
                            style={styles.text_box}/>

                        {/* tags */}
                        <Text style = {styles.body_text} textAlign="left">
                            Tags (eg, iron, M7, delivery, etc) separated by commas
                        </Text>
                        <TextInput 
                            onChangeText = {(value) => setTags(value)}
                            style={styles.text_box}/>

                        {/* buttons */}
                        <UrgentButton changeState = {setUrgent}/>
                        <Text style = {styles.message}>
                            Please recheck your post and its details before confirming. {'\n'}{'\n'}
                            You will not be able to edit this post once it has been uploaded. {'\n'}{'\n'}
                            In case of any changes, you will have to delete this post and re-post it with the changes. {'\n'}
                        </Text>
                        <TouchableOpacity style={styles.confirm_button} onPress={() => {console.log("neow"), console.log(urgent), uploadPost()}}>
                            <Text style={styles.confirm_button_text}>
                                CONFIRM
                            </Text>
                        </TouchableOpacity>
                    </View>
                             
                </ScrollView>
            </View>
            <PostBottomNavBar />
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
    form_container: {
        backgroundColor: "#fff",
        height: "100%",
        top: 0.15*actual_height,
    },
    form_container2: {
        paddingVertical: 20,
        justifyContent: "space-between",
        height: "100%",
    },
    body_text: {
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
    text_box: {
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
    text_box_desc: {
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
    slider_box: {
        alignSelf: "center",
        padding: 20,
        width: "80%",
        height: 250,
        marginBottom: 60,
        borderRadius: 10,
    },
    upload_image_box: {
        backgroundColor: '#D6482F',
        alignSelf: "center",
        padding: 20,
        width: "80%",
        height: 250,
        marginBottom: 60,
    },
    icon: {
        marginTop: 50,
        alignSelf: "center",
        width: "50%",
        height: "50%",
    },
})
