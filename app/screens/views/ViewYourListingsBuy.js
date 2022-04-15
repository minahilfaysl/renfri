import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import PostBottomNavBar from "../navbar/PostBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import UrgentButton from "../../components/UrgentButton";
import { SliderBox } from "react-native-image-slider-box";
import { Touchable } from "react-native-web";
import MarkClosedButtonBuy from "../../components/MarkClosedButtonBuy";

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

// make functions for all display fields
function LoadImages (data) {
    if (data.images) {
        return (
        <View>
            <View style = {StyleSheet.create({marginTop: 10})} textAlign="left" />
            <SliderBox
                style = {styles.slider_box}
                images = {data.images}
                dotColor = "#D6482F"
                inactiveDotColor = "#C4C4C4"
                dotStyle = {{
                    width: 5,
                    height: 5,
                    borderRadius: 5,
                    marginBottom: 30,
                }}
                sliderBoxHeight= "80%"
                // onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                // currentImageEmitter={index => console.log(`current pos is ${index}`)}
            />
        </View>
        )
    }
    return null
}

function Title (data) {
    if (data.title) {
        return (
        <View>
        <Text style = {styles.title_text} textAlign="left">
            {data.title}
        </Text>
        </View>
    )}
    return null
}

function Description (data) {
    if (data.desc) {
        return (
        <View>
        <Text style = {styles.body_text_desc} textAlign="left">
            {data.desc}
        </Text>
        </View>
    )}
    return null
}

function Table (data) {
    // return the price
    if (data.price) {
        return (
            <View style = {styles.table_box}>
                <Text style = {styles.body_text} textAlign="left">
                    Price:                       PKR {data.price}
                </Text>
            </View>
        )
    }

    // return the status
    if (data.status == "open") {
        return (
            <View style = {styles.table_box}>
                <Text style = {styles.body_text} textAlign="left">
                    Status:                     Open
                </Text>
            </View>
        )
    }
    else if (data.status == "closed") {
        return (
            <View style = {styles.table_box}>
                <Text style = {styles.body_text} textAlign="left">
                    Status:                  Closed
                </Text>
            </View>
        )
    }


    // return the tags
    if (data.tags) {
        return (
            <View style = {styles.table_box}>
                <Text style = {styles.body_text} textAlign="left">
                    Tags:                        {data.tags}
                </Text>
            </View>
        )
    }

    return null

}

function ShowRatingStars (data) {
    num = data.num;
    if (num <= 1 && num > 0) {
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <TouchableOpacity onPress={() => console.log("send a message, pew pew")}>
                    <Image 
                        style={[styles.message_icon]} 
                        source = {require("../../assets/Send_fill_lightred.png")}/>
                </TouchableOpacity>
            </View>
        )
    }

    if (num <= 2 && num > 1) {
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <TouchableOpacity onPress={() => console.log("send a message, pew pew")}>
                    <Image 
                        style={[styles.message_icon]} 
                        source = {require("../../assets/Send_fill_lightred.png")}/>
                </TouchableOpacity>
            </View>
        )
    }

    if (num <= 3 && num > 2) {
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <TouchableOpacity onPress={() => console.log("send a message, pew pew")}>
                    <Image 
                        style={[styles.message_icon]} 
                        source = {require("../../assets/Send_fill_lightred.png")}/>
                </TouchableOpacity>
            </View>
        )
    }

    if (num <= 4 && num > 3) {
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_lred.png")}/>
                <TouchableOpacity onPress={() => console.log("send a message, pew pew")}>
                    <Image 
                        style={[styles.message_icon]} 
                        source = {require("../../assets/Send_fill_lightred.png")}/>
                </TouchableOpacity>
            </View>
        )
    }

    if (num <= 5 && num > 4) {
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_lred.png")}/>
                <TouchableOpacity onPress={() => console.log("send a message, pew pew")}>
                    <Image 
                        style={[styles.message_icon]} 
                        source = {require("../../assets/Send_fill_lightred.png")}/>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style = {styles.stars}>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/stars/Star_light_lred.png")}/>
            <Image 
                style={styles.icon}
                source = {require("../../assets/stars/Star_light_lred.png")}/>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/stars/Star_light_lred.png")}/>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/stars/Star_light_lred.png")}/>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/stars/Star_light_lred.png")}/>
            <TouchableOpacity onPress={() => console.log("send a message, pew pew")}>
                <Image 
                    style={[styles.message_icon]} 
                    source = {require("../../assets/Send_fill_lightred.png")}/>
            </TouchableOpacity>
        </View>
    )
}

function PrintUsersList (data) {

    if (data.list) {

        let users = data.list

        for (const user of users) {
            if (user.email.includes('@')) {
                let arr = user.email.split('@');
                user.email = arr[0]
            }
        }

        return (
            users.map((user) => (
                <View style = {styles.users_table_box} key={user.email}>
                    <View style = {styles.users_subtable1}>
                        <Text style = {styles.body_text_table}> {user.name} ({user.email}) </Text>
                    </View>
                    <View style = {styles.users_subtable2}>
                        <Text style = {styles.stars}> <ShowRatingStars num = {user.rating} /> </Text>
                    </View>
                    
                </View>
            ))
        )
    }
    return (
        <Text style = {styles.body_text} textAlign="right">
            Whoops, no interested users yet! Check back later?
        </Text>
    )
}




export default function ViewYourListingsBuy (props) {

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
                        Buy an Item
                    </Text>
                </View>
                <View style={styles.top_nav_box}>
                    <Text style={styles.heading1}>
                        Your Listings
                    </Text>
                </View>
                {/* the form */}
                <ScrollView style = {styles.form_container}> 
                    <View style = {styles.form_container2}>
                        {/* images */}
                        <LoadImages images={props.data.images} />

                        {/* title */}
                        <Title title={props.data.title}/>

                        {/* description */}
                        <Description desc={props.data.desc} />

                        {/* the urgent button */}
                        <UrgentButton state={props.data.urgent}/>

                        {/* table for price, tags, duration, status*/}
                        <Table price={props.data.price}/>
                        <Table status={props.data.status} />
                        <Table tags={props.data.tags}/>

                        <View style = {styles.table_box}>
                            <Text style = {styles.body_text} textAlign="left">
                                Post created on:    {props.data.date}
                            </Text>
                        </View>

                        {/* interested users */}
                        
                        <Text style = {styles.int_users_heading} textAlign="left">
                            List of Interested Users
                        </Text>
                        <PrintUsersList list={props.data.interested_users} />

                        {/* buttons */}
                        <View style={styles.button_container}>
                            <View>
                                <MarkClosedButtonBuy />
                            </View>
                            <View style={styles.button_subcontainer}>
                                <TouchableOpacity style={styles.delete_button} onPress={() => console.log("yeet this post to the trash")}>
                                <Image 
                                    style={styles.icon} 
                                    source = {require("../../assets/Trash_lred.png")}/>
                                    <Text style={styles.delete_button_text}>
                                        DELETE
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
    heading2: {
        top: 0.085*actual_height,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 21,
        letterSpacing: 0,
        color: "#ffffff",
        textAlign: 'left',
    },
    int_users_heading: {
        marginTop: 20,
        marginBottom: 18,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.02*actual_height,
        letterSpacing: 0.15,
        color: "#D6482F",
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
        marginBottom: 18,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.026*actual_height,
        letterSpacing: 0,
        color: "#D6482F",
    },
    body_text_desc: {
        marginBottom: 30,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        letterSpacing: 0.15,
        color: "#D6482F",
    },
    body_text: {
        marginBottom: 18,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_500Medium',
        fontSize: 13,
        letterSpacing: 0.1,
        color: "#D6482F",
    },
    table_box: {
        flex: 1,
        flexDirection: "row",
    },
    stars: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    users_table_box: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        textAlignVertical: "center",
    },
    users_subtable1: {
        width: "50%",
        paddingLeft: "10%",
        textAlignVertical: "center",
    },
    body_text_table: {
        textAlignVertical: "center",
        marginTop: 1,
        marginBottom: 18,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 13,
        letterSpacing: 0.1,
        color: "#D6482F",
    },
    users_subtable2: {
        width: "50%",
        // flex: 1,
        // flexDirection: "row",
        // justifyContent: "space-between",
        paddingRight: "10%",
    },
    table_text: {
        marginBottom: 18,
        marginHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        letterSpacing: 0.15,
        color: "#D6482F",
    },
    message: {
        marginBottom: 18,
        paddingHorizontal: "15%",
        fontFamily: 'Montserrat_400Regular',
        fontStyle: "normal",
        fontWeight: "400",
        // fontSize: 0.02 * actual_height,
        fontSize: 14,
        letterSpacing: 0.15,
        color: "#D6482F",
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
        borderBottomColor: "#D6482F",
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
        borderBottomColor: "#D6482F",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    delete_button: {
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
        borderColor: "#D6482F",
        borderRadius: 20,
    },
    delete_button_text: {
        color: "#D6482F",
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
        marginTop: -3,
        width: 24,
        height: 24,
    },
    message_icon: {
        marginTop: -3,
        marginLeft: 10,
        width: 24,
        height: 24,
    },
    button_container: {
        marginTop: 30,
        alignSelf: "center",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "80%",
        marginBottom: 180,
    },
    button_subcontainer: {
        width: 0.35 * actual_width,
        height: 0.04 * actual_height,
    }
})
