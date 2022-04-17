import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import ProfileBottomNavBar from "../navbar/ProfileBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Col, Row, Grid } from 'react-native-easy-grid';

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

// make functions for all display fields
function GetCategory (data) {
    if (data.category == "rent") {

        return (
            <View style={styles.cat_name}>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/cat/cat_dred.png")}/>
            <Text style = {[styles.body_text, styles.rent]}>Rent An Item</Text>
            </View>
        )
    }
    if (data.category == "buy") {

        return (
            <View style={styles.cat_name}>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/cat/cat_lred.png")}/>
            <Text style = {[styles.body_text, styles.buy]}>Buy An Item</Text>
            </View>
        )
    }
    if (data.category == "rq_items") {

        return (
            <View style={styles.cat_name}>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/cat/cat_peach.png")}/>
            <Text style = {[styles.body_text, styles.rq_items]}>Requested Items</Text>
            </View>
        )
    }
    if (data.category == "rq_services") {

        return (
            <View style={styles.cat_name}>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/cat/cat_lgreen.png")}/>
            <Text style = {[styles.body_text, styles.rq_services]}>Requested Services</Text>
            </View>
        )
    }
    if (data.category == "off_services") {

        return (
            <View style={styles.cat_name}>
            <Image 
                style={styles.icon} 
                source = {require("../../assets/cat/cat_dgreen.png")}/>
            <Text style = {[styles.body_text, styles.off_services]}>Offered Services</Text>
            </View>
        )
    }
    return null
}
// -------------------
function ShowUrgentRent (data) {
    if (data.urgent) {
        return (
            <Text style = {[styles.urgent_text, styles.rent]}>URGENT</Text>
        )
    }
    return (
        <Text style = {[styles.not_urgent_text, styles.rent]}>.</Text>
    )
}
function ShowUrgentBuy (data) {
    if (data.urgent) {
        return (
            <Text style = {[styles.urgent_text, styles.buy]}>URGENT</Text>
        )
    }
    return (
        <Text style = {[styles.not_urgent_text, styles.buy]}>.</Text>
    )
}
function ShowUrgentRQItems (data) {
    if (data.urgent) {
        return (
            <Text style = {[styles.urgent_text, styles.rq_items]}>URGENT</Text>
        )
    }
    return (
        <Text style = {[styles.not_urgent_text, styles.rq_items]}>.</Text>
    )
}
function ShowUrgentRQServices (data) {
    if (data.urgent) {
        return (
            <Text style = {[styles.urgent_text, styles.rq_services]}>URGENT</Text>
        )
    }
    return (
        <Text style = {[styles.not_urgent_text, styles.rq_services]}>.</Text>
    )
}
function ShowUrgentOffServices (data) {
    if (data.urgent) {
        return (
            <Text style = {[styles.urgent_text, styles.off_services]}>URGENT</Text>
        )
    }
    return (
        <Text style = {[styles.not_urgent_text, styles.off_services]}>.</Text>
    )
}
// --------------------
function ShowCoverImageRent (data) {
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
                    <Text numberOfLines={1} style = {[styles.title_text, styles.rent]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {[styles.price_text, styles.rent]}>PKR {data.price}</Text>
                </Row>
                <Row style={styles.cell}>
                    <ShowUrgentRent urgent = {data.urgent} />
                </Row>
                <Row style={styles.cell}>
                    <GetCategory category={data.category}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.title_text, styles.rent]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {[styles.price_text, styles.rent]}>PKR {data.price}</Text>
            </Row>
            <Row style={styles.cell}>
                <ShowUrgentRent urgent = {data.urgent} />
            </Row>
            <Row style={styles.cell}>
                <GetCategory category={data.category}/>
            </Row>
        </Col>
    )
}
function ShowCoverImageBuy (data) {
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
                    <Text numberOfLines={1} style = {[styles.title_text, styles.buy]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {[styles.price_text, styles.buy]}>PKR {data.price}</Text>
                </Row>
                <Row style={styles.cell}>
                    <ShowUrgentBuy urgent = {data.urgent} />
                </Row>
                <Row style={styles.cell}>
                    <GetCategory category={data.category}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.title_text, styles.buy]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {[styles.price_text, styles.buy]}>PKR {data.price}</Text>
            </Row>
            <Row style={styles.cell}>
                <ShowUrgentBuy urgent = {data.urgent} />
            </Row>
            <Row style={styles.cell}>
                <GetCategory category={data.category}/>
            </Row>
        </Col>
    )
}
function ShowCoverImageRQItems (data) {
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
                    <Text numberOfLines={1} style = {[styles.title_text, styles.rq_items]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {[styles.price_text, styles.rq_items]}>PKR {data.price}</Text>
                </Row>
                <Row style={styles.cell}>
                    <ShowUrgentRQItems urgent = {data.urgent} />
                </Row>
                <Row style={styles.cell}>
                    <GetCategory category={data.category}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.title_text, styles.rq_items]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {[styles.price_text, styles.rq_items]}>PKR {data.price}</Text>
            </Row>
            <Row style={styles.cell}>
                <ShowUrgentRQItems urgent = {data.urgent} />
            </Row>
            <Row style={styles.cell}>
                <GetCategory category={data.category}/>
            </Row>
        </Col>
    )
}
function ShowCoverImageRQServices (data) {
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
                    <Text numberOfLines={1} style = {[styles.title_text, styles.rq_services]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {[styles.price_text, styles.rq_services]}>PKR {data.price}</Text>
                </Row>
                <Row style={styles.cell}>
                    <ShowUrgentRQServices urgent = {data.urgent} />
                </Row>
                <Row style={styles.cell}>
                    <GetCategory category={data.category}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.title_text, styles.rq_services]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {[styles.price_text, styles.rq_services]}>PKR {data.price}</Text>
            </Row>
            <Row style={styles.cell}>
                <ShowUrgentRQServices urgent = {data.urgent} />
            </Row>
            <Row style={styles.cell}>
                <GetCategory category={data.category}/>
            </Row>
        </Col>
    )
}
function ShowCoverImageOffServices (data) {
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
                    <Text numberOfLines={1} style = {[styles.title_text, styles.off_services]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {[styles.price_text, styles.off_services]}>PKR {data.price}</Text>
                </Row>
                <Row style={styles.cell}>
                    <ShowUrgentOffServices urgent = {data.urgent} />
                </Row>
                <Row style={styles.cell}>
                    <GetCategory category={data.category}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.title_text, styles.off_services]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {[styles.price_text, styles.off_services]}>PKR {data.price}</Text>
            </Row>
            <Row style={styles.cell}>
                <ShowUrgentOffServices urgent = {data.urgent} />
            </Row>
            <Row style={styles.cell}>
                <GetCategory category={data.category}/>
            </Row>
        </Col>
    )
}
// ---------------------

function ShowResultCardsOpen (props) {

    // =--------------------test data

    let app_images = [
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
    ]
    
    var data = {
        post_id: 0,
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
    
    var data2 = {
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
        category: "rent",
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
                post.category == "rent" && post.closed == false ? 
                <TouchableOpacity
                    style={styles.card_container_rent}
                    key={post.post_id}
                    onPress={ () => {}}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageRent images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "buy" && post.closed == false ? 
                <TouchableOpacity
                    style={styles.card_container_buy}
                    key={post.post_id}
                    onPress= {() => console.log("show me this post, the DETAILS PLS")}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageBuy images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "rq_items" && post.closed == false ? 
                <TouchableOpacity
                    style={styles.card_container_rq_items}
                    key={post.post_id}
                    onPress= {() => console.log("show me this post, the DETAILS PLS")}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageRQItems images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "rq_services" && post.closed == false ? 
                <TouchableOpacity
                    style={styles.card_container_rq_services}
                    key={post.post_id}
                    onPress= {() => console.log("show me this post, the DETAILS PLS")}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageRQServices images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "off_services" && post.closed == false ? 
                <TouchableOpacity
                    style={styles.card_container_off_services}
                    key={post.post_id}
                    onPress= {() => console.log("show me this post, the DETAILS PLS")}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageOffServices images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : null
            ))
        )
    }
    return null
}

function ShowResultCardsClosed (props) {

    // =--------------------test data

    let app_images = [
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
        require('../../assets/upload_images_rent.png'),
    ]
    
    var data = {
        post_id: 0,
        category: "rent",
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
        category: "rent",
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
        category: "rent",
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
                post.category == "rent" && post.closed == true ? 
                <TouchableOpacity
                    style={styles.card_container_rent}
                    key={post.post_id}
                    onPress= {() => console.log("show me this post, the DETAILS PLS")}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageRent images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "buy" && post.closed == true ? 
                <TouchableOpacity
                    style={styles.card_container_buy}
                    key={post.post_id}
                    onPress= {() => console.log("show me this post, the DETAILS PLS")}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageBuy images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "rq_items" && post.closed == true ? 
                <TouchableOpacity
                    style={styles.card_container_rq_items}
                    key={post.post_id}
                    onPress= {() => console.log("show me this post, the DETAILS PLS")}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageRQItems images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "rq_services" && post.closed == true ? 
                <TouchableOpacity
                    style={styles.card_container_rq_services}
                    key={post.post_id}
                    onPress= {() => console.log("show me this post, the DETAILS PLS")}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageRQServices images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "off_services" && post.closed == true ? 
                <TouchableOpacity
                    style={styles.card_container_off_services}
                    key={post.post_id}
                    onPress= {() => console.log("show me this post, the DETAILS PLS")}>
                    <Grid>
                        {/* image */}
                        <ShowCoverImageOffServices images={post.images}
                            title = {post.title}
                            price = {post.price}
                            urgent = {post.urgent}
                            category = {post.category}/>
                        
                        <Col size={10}>
                            <Row style={styles.cell}>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : null
            ))
        )
    }
    return null
}

export default function ViewYourOwnListings (props) {

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
                <View style={styles.top_nav_box}>
                    <Text style={styles.heading1}>
                        Your Listings
                    </Text>
                </View>

                {/* Saved Listings */}
                <ScrollView style = {styles.form_container}> 
                    <View style = {styles.form_container2}>
                        <Text style={styles.heading2}>
                            Open Listings
                        </Text>
                        <ShowResultCardsOpen data = {props.data} />

                        <Text style={styles.heading3}>
                            Closed Listings
                        </Text>
                        <ShowResultCardsClosed data = {props.data} />
                        <View style = {styles.end_box}></View> 
                    </View>
                </ScrollView>
            </View>
            <ProfileBottomNavBar />
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
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 21,
        letterSpacing: 0,
        color: "#193E26",
        textAlign: 'left',
        marginBottom: 40,
    },
    heading3: {
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        fontSize: 21,
        letterSpacing: 0,
        color: "#193E26",
        textAlign: 'left',
        marginBottom: 40,
        marginTop: 20,
    },
    form_container: {
        backgroundColor: "#fff",
        height: "100%",
        top: 0.1*actual_height,
    },
    form_container2: {
        paddingVertical: 20,
        justifyContent: "space-between",
        height: "100%",
    },
    off_services: {color: '#193E26'},
    rq_services: {color: '#588D60'},
    rq_items: {color: '#FF886E'},
    buy: {color: '#D6482F'},
    rent: {color: '#670000'},

    title_text: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.02*actual_height,
        letterSpacing: 0.15,
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 3,
        // color: "#193E26",
    },
    price_text: {
        paddingHorizontal: 10,
        paddingBottom: 5,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 12,
        letterSpacing: 0.1,
        // color: "#193E26",
    },
    urgent_text: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 0.015*actual_height, // 13
        letterSpacing: 0.1,
        textTransform: 'uppercase',
        // color: "#D6482F",
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
        // color: "#193E26",
    },
    cat_name: {
        // flex: 1,
        flexDirection: "row",
        padding: 5,
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
    card_container_rent: {
        alignSelf: "center",
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#670000",
        marginBottom: 25,
    },
    card_container_buy: {
        alignSelf: "center",
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#D6482F",
        marginBottom: 25,
    },
    card_container_rq_items: {
        alignSelf: "center",
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#FF886E",
        marginBottom: 25,
    },
    card_container_rq_services: {
        alignSelf: "center",
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#588D60",
        marginBottom: 25,
    },
    card_container_off_services: {
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
        marginBottom: 150,
    },
})
