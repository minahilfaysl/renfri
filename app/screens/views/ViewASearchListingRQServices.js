import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import PostBottomNavBar from "../navbar/PostBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SliderBox } from "react-native-image-slider-box";
import SavedButtonDGreen from "../../components/SavedButtonDGreen";
import { Col, Row, Grid } from 'react-native-easy-grid';

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
                dotColor = "#193E26"
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

function TableColA (data) {
    // return the price
    if (data.price) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>Price:</Text>
            </Row>
        )
    }
    // return the status
    if (data.closed) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>Status:</Text>
            </Row>
        )
    }
    // return the tags
    if (data.tags) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>Tags:</Text>
            </Row>
        )
    }
    // return the duration
    if (data.duration) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>Duration of Rent:</Text>
            </Row>
        )
    }

    // return the insurance
    if (data.insurance) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>Insurance:</Text>
            </Row>
        )
    }
    if (data.lister) {

        let lister = data.lister

        if (lister.email.includes('@')) {
            let arr = lister.email.split('@');
            lister.email = arr[0]
        }

        return (
            <>
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>Posted by:</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>User Ratings:</Text>
            </Row>
            </>
        )
    }
    return null
}

function TableColB (data) {
    // return the price
    if (data.price) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>PKR {data.price}</Text>
            </Row>
        )
    }
    // return the status
    if (data.closed == true) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>Closed</Text>
            </Row>
        )
    }
    if (data.closed == false) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>Open</Text>
            </Row>
        )
    }
    // return the tags
    if (data.tags) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>{data.tags}</Text>
            </Row>
        )
    }
    // return the duration
    if (data.duration) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>{data.duration}</Text>
            </Row>
        )
    }

    // return the insurance
    if (data.insurance) {
        return (
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>PKR {data.insurance}</Text>
            </Row>
        )
    }
    // lister
    if (data.lister) {

        let lister = data.lister

        if (lister.email.includes('@')) {
            let arr = lister.email.split('@');
            lister.email = arr[0]
        }

        return (
            <>
            <Row style={styles.cell}>
                <Text style = {styles.body_text}>{lister.name}</Text>
            </Row>
            <Row style={styles.stars_cell}>
                <ShowRatingStars num = {lister.rating} />
            </Row>
            </>
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
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
            </View>
        )
    }

    if (num <= 2 && num > 1) {
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
            </View>
        )
    }

    if (num <= 3 && num > 2) {
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
            </View>
        )
    }

    if (num <= 4 && num > 3) {
        return (
            <>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_light_dgreen.png")}/>
            </>
        )
    }

    if (num <= 5 && num > 4) {
        return (
            <View style = {styles.stars}>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/stars/Star_fill_dgreen.png")}/>
            </View>
        )
    }

    return (
        <View style = {styles.stars}>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/stars/Star_light_dgreen.png")}/>
            <Image 
                style={styles.icon}
                source = {require("../../assets/stars/Star_light_dgreen.png")}/>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/stars/Star_light_dgreen.png")}/>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/stars/Star_light_dgreen.png")}/>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/stars/Star_light_dgreen.png")}/>
        </View>
    )
}

function DisplayUrgent (data) {
    if (data.state == true) {
        return (
            <View style={styles.urgent_alert}>
                <Image 
                    style={styles.icon} 
                    source = {require("../../assets/Alarm_fill.png")}/>
                <Text style={styles.urgent_text}>URGENT</Text>
            </View>
        )
    }
    return null
}


export default function ViewASearchListingRQServices (props) {

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
                        <DisplayUrgent state={props.data.urgent}/>

                        <View style={styles.container}>
                            <Grid>
                                <Col size={40}>
                                    <TableColA price={props.data.price} />
                                    {/* <TableColA duration={props.data.duration} />
                                    <TableColA insurance={props.data.insurance}/> */}
                                    <TableColA closed={props.data.closed} />
                                    <TableColA tags={props.data.tags} />
                                    <TableColA lister={props.data.lister_id} />
                                    <Row style={styles.cell}>
                                        <Text style = {styles.body_text}>Post created on:</Text>
                                    </Row>
                                </Col>
                                <Col size={50}>
                                    <TableColB price={props.data.price} />
                                    {/* <TableColB duration={props.data.duration} />
                                    <TableColB insurance={props.data.insurance}/> */}
                                    <TableColB closed={props.data.closed} />
                                    <TableColB tags={props.data.tags} />
                                    <TableColB lister={props.data.lister_id} />
                                    <Row style={styles.cell}>
                                        <Text style = {styles.body_text}>{props.data.date}</Text>
                                    </Row>
                                </Col>
                            </Grid>
                        </View>

                        {/* buttons */}
                        <View style={styles.button_container}>
                            <View>
                                <SavedButtonDGreen state={props.data.saved_post}/>
                            </View>
                            <View style={styles.button_subcontainer}>
                                <TouchableOpacity style={styles.message_button} onPress={() => console.log("i want to talk to your manager, riGHT NOW")}>
                                    <Image 
                                    style={styles.icon} 
                                    source = {require("../../assets/Send_fill_dgreen.png")}/>
                                    <Text style={styles.message_button_text}>
                                        MESSAGE
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
        marginBottom: 18,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.026*actual_height,
        letterSpacing: 0,
        color: "#193E26",
    },
    body_text_desc: {
        marginBottom: 30,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        letterSpacing: 0.15,
        color: "#193E26",
    },
    body_text: {
        marginBottom: 18,
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_500Medium',
        fontSize: 13,
        letterSpacing: 0.1,
        color: "#193E26",
    },
    stars: {
        flex: 1,
        flexDirection: "row",
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
        color: "#193E26",
        textAlign: "center",
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
        marginTop: 40,
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "80%",
        marginBottom: 180,
    },
    button_subcontainer: {
        width: 0.35 * actual_width,
        height: 0.04 * actual_height,
    },
    container: {
        alignSelf: "center",
        width: '80%',
        // height: "20%",
        backgroundColor: '#fff',
        // marginBottom: 40,
    },
    cell: {
        flex: 1, 
        textAlignVertical: "center",
    },
    stars_cell: {
        top: -5,
        flex: 1, 
        paddingVertical: 7,
        paddingHorizontal: 12,
    },
    urgent_alert: {
        flexDirection: "row",
        marginBottom: 18,
        paddingHorizontal: "10%",
        color: "#D6482F",
    },
    urgent_text: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        letterSpacing: 0.1,
        color: "#D6482F",
    }
})
