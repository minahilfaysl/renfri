import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import SearchBottomNavBar from "../navbar/SearchBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SavedIconButtonDGreen from "../../components/SavedIconButtonDGreen";
import ViewASearchListingBuy from '../views/ViewASearchListingBuy';
import ViewASearchListingRent from '../views/ViewASearchListingRent';
import ViewASearchListingOfferedServices from '../views/ViewASearchListingOfferedServices';
import ViewASearchListingRQItems from '../views/ViewASearchListingRQItems';
import ViewASearchListingRQServices from '../views/ViewASearchListingRQServices';


const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

// make functions for all display fields
function GetRollNumber (data) {
    if (data.lister) {

        let lister = data.lister

        if (lister.email.includes('@')) {
            let arr = lister.email.split('@');
            lister.email = arr[0]
        }
        return (
            <View style={styles.roll_number}>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/User_box_light_dgreen.png")}/>
            <Text style = {styles.body_text}>{lister.email}</Text>
            </View>
        )
    }
    return null
}

function ShowUrgent (data) {
    if (data.urgent) {
        return (
            <Text style = {styles.urgent_text}>URGENT</Text>
        )
    }
    return (
        <Text style = {styles.not_urgent_text}>.</Text>
    )
}

function ShowCoverImage (data) {
    if (data.images) {
        return (
            <>
            <Col size={27}>
                <Image 
                    style={styles.cover_image} 
                    source = {data.images[0]}/>
            </Col>
            {/* text */}
            <Col size={50}>
                <Row style={styles.cell}>
                    <Text numberOfLines={1} style = {styles.title_text}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {styles.price_text}>PKR {data.price}</Text>
                </Row>
                <Row style={styles.cell}>
                    <ShowUrgent urgent = {data.urgent} />
                </Row>
                <Row style={styles.cell}>
                    <GetRollNumber lister={data.lister_id}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {styles.title_text}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {styles.price_text}>PKR {data.price}</Text>
            </Row>
            <Row style={styles.cell}>
                <ShowUrgent urgent = {data.urgent} />
            </Row>
            <Row style={styles.cell}>
                <GetRollNumber lister={data.lister_id}/>
            </Row>
        </Col>
    )
}

function ShowResultCards (props) {

        // =--------------------test data

        let app_images = [
            require('../../assets/upload_images_rq_services.png'),
            require('../../assets/upload_images_rq_services.png'),
            require('../../assets/upload_images_rq_services.png'),
            require('../../assets/upload_images_rq_services.png'),
            require('../../assets/upload_images_rq_services.png'),
        ]
        
        var data = {
            post_id: 0,
            category: "rq_services",
            title: "This is my listing and i am a lister",
            desc: "Description description description description description description description description description description description description description description description description description",
            price: 3000,
            duration: "1-2 hours",
            insurance: 2000,
            tags: "M7, iron",
            images: app_images,
            urgent: true,
            closed: true,
            saved_post: true,
            date: "14/04/2022, 3:45PM",
            lister_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
            interested_users: [{name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 2},
                            {name: "Fatima Sohail", email: "23100065@lums.edu.pk", rating: 3},
                            {name: "Ajwa Shahid", email: "23100066@lums.edu.pk", rating: 4}],
        };
        
        var data2 = {
            post_id: 1,
            category: "rq_services",
            title: "This is my listing and i am a lister",
            desc: "Description description description description description description description description description description description description description description description description description",
            price: 3000,
            duration: "1-2 hours",
            insurance: 2000,
            tags: "M7, iron",
            images: app_images,
            urgent: true,
            closed: true,
            saved_post: true,
            date: "14/04/2022, 3:45PM",
            lister_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
            interested_users: [{name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 2},
                            {name: "Fatima Sohail", email: "23100065@lums.edu.pk", rating: 3},
                            {name: "Ajwa Shahid", email: "23100066@lums.edu.pk", rating: 4}],
        };
        
        var data3 = {
            post_id: 2,
            category: "rq_services",
            title: "This is my listing and i am a lister",
            desc: "Description description description description description description description description description description description description description description description description description",
            price: 3000,
            duration: "1-2 hours",
            insurance: 2000,
            tags: "M7, iron",
            images: null,
            urgent: true,
            closed: true,
            saved_post: true,
            date: "14/04/2022, 3:45PM",
            lister_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
            interested_users: [{name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 2},
                            {name: "Fatima Sohail", email: "23100065@lums.edu.pk", rating: 3},
                            {name: "Ajwa Shahid", email: "23100066@lums.edu.pk", rating: 4}],
        };
    
        // =------------------------------
        
        var array1 = [data, data2, data3];
    
        // if (props.data) {
        if(array1){
    
            let posts = array1;

        // *********** IMPORTANT *****************
        // need to sort this array in such a way that urgent walay posts show up first

        return (
            posts.map((post) => (
                <TouchableOpacity
                    style={styles.card_container}
                    key={post.post_id}
                    onPress= {() => {console.log("show me this post, the DETAILS PLS"), <ViewASearchListingRQServices data={post}/>}}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImage images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            lister_id = {post.lister_id}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            <View style={styles.save_icon}>
                                <SavedIconButtonDGreen state={post.saved_post}/>
                            </View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
            ))
        )
    }
    return null
}

export default function SearchResultsRQServices (props) {

    // const [heading2Text, setHeading2Text] = useState(false);

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
                        Requested Services
                    </Text>
                </View>
                <View style={styles.top_nav_box}>
                    <Text style={styles.heading1}>
                        Search By Category
                    </Text>
                </View>
                {/* the search bar */}
                <View style={styles.search_panel}>
                    <TextInput
                    onChangeText = {(value) => setTitle(value)}
                    placeholder = "Search For A Listing Here"
                    placeholderTextColor={'#588D60'}
                    style={styles.search_bar}/>
                    <TouchableOpacity style={styles.search_icon} onPress = {() => console.log("LETS SEARCH AAAAAAAAAAAAAA")}>
                        <Image
                        style={styles.search_icon} 
                        source = {require('../../assets/Search_alt_dgreen.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.search_icon} onPress = {() => console.log("open an alert, pick how to sort results and then sort")}>
                        <Image
                        style={styles.search_icon} 
                        source = {require('../../assets/Sort_list_dgreen.png')}/>
                    </TouchableOpacity>
                </View>

                {/* the form */}
                <ScrollView style = {styles.form_container}> 
                    <View style = {styles.form_container2}>
                        <ShowResultCards data = {props.data} />
                        <View style = {styles.end_box}></View>
                    </View> 
                </ScrollView>
            </View>
            <SearchBottomNavBar />
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
        backgroundColor: "#588D60",
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
    title_text: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.02*actual_height,
        letterSpacing: 0.15,
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 3,
        color: "#193E26",
    },
    price_text: {
        paddingHorizontal: 10,
        paddingBottom: 5,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 12,
        letterSpacing: 0.1,
        color: "#193E26",
    },
    urgent_text: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 0.015*actual_height, // 13
        letterSpacing: 0.1,
        textTransform: 'uppercase',
        color: "#D6482F",
    },
    not_urgent_text: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 0.015*actual_height, // 13
        letterSpacing: 0.1,
        textTransform: 'uppercase',
        color: "#fff",
    },
    body_text: {
        padding: 5,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 13,
        letterSpacing: 0.1,
        marginTop: -5,
        color: "#193E26",
    },
    roll_number: {
        // flex: 1,
        flexDirection: "row",
        padding: 5,
    },
    message_button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 0.35 * actual_width,
        height: 0.04 * actual_height,
        paddingHorizontal: "5%",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#193E26",
        borderRadius: 20,
    },
    message_button_text: {
        color: "#193E26",
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
    icon: {
        marginTop: -3,
        marginLeft: 3,
        width: 24,
        height: 24,
    },
    search_icon: {
        width: 24,
        height: 24,
        alignSelf: "center",
    },
    save_icon: {
        width: 24,
        height: 24,
        alignSelf: "center",
    },
    card_container: {
        alignSelf: "center",
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#193E26",
        marginBottom: 25,
    },
    cell: {
        flex: 1,
        textAlignVertical: "center",
    },
    cover_image: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    end_box: {
        marginBottom: 200,
    },
    search_bar: {
        height: 0.05 * actual_height,
        width: "75%",
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 1,
        paddingHorizontal: "5%",
        alignSelf: "center",
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.017*actual_height,
        letterSpacing: 0.15,
    },
    search_panel: {
        marginHorizontal: "10%",
        // height: 0.05 * actual_height,
        width: "80%",
        top: 0.18*actual_height,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40,
    }
})
