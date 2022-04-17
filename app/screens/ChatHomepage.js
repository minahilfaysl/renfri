import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import ChatBottomNavBar from "./navbar/ChatBottomNavBar";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Col, Row, Grid } from 'react-native-easy-grid';

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

// make functions for all display fields
function GetMessage (data) {
    if (data.closed == true) {
        if (data.category == "rent") {
            return (
                <View style={styles.cat_name}>
                    <Text style = {[styles.body_text, styles.rent]}>This chat is closed.</Text>
                </View>
            )
        }
        if (data.category == "buy") {
            return (
                <View style={styles.cat_name}>
                    <Text style = {[styles.body_text, styles.buy]}>This chat is closed.</Text>
                </View>
            )
        }
        if (data.category == "rq_items") {
            return (
                <View style={styles.cat_name}>
                    <Text style = {[styles.body_text, styles.rq_items]}>This chat is closed.</Text>
                </View>
            )
        }
        if (data.category == "rq_services") {
            return (
                <View style={styles.cat_name}>
                    <Text style = {[styles.body_text, styles.rq_services]}>This chat is closed.</Text>
                </View>
            )
        }
        if (data.category == "off_services") {
            return (
                <View style={styles.cat_name}>
                    <Text style = {[styles.body_text, styles.off_services]}>This chat is closed.</Text>
                </View>
            )
        }
    }
    if (data.closed == false) {
        if (data.category == "rent") {
            return (
                <View style={styles.cat_name}>
                <Text style = {[styles.body_text, styles.rent]}>{data.msgs[0]}</Text>
                </View>
            )
        }
        if (data.category == "buy") {

            return (
                <View style={styles.cat_name}>
                <Text style = {[styles.body_text, styles.buy]}>{data.msgs[0]}</Text>
                </View>
            )
        }
        if (data.category == "rq_items") {

            return (
                <View style={styles.cat_name}>
                <Text style = {[styles.body_text, styles.rq_items]}>{data.msgs[0]}</Text>
                </View>
            )
        }
        if (data.category == "rq_services") {

            return (
                <View style={styles.cat_name}>
                <Text style = {[styles.body_text, styles.rq_services]}>{data.msgs[0]}</Text>
                </View>
            )
        }
        if (data.category == "off_services") {

            return (
                <View style={styles.cat_name}>
                <Text style = {[styles.body_text, styles.off_services]}>{data.msgs[0]}</Text>
                </View>
            )
        }
    }
    return null
}

function PrintUsersDetails (data) {

    if (data.user_id) {

        let user = data.user_id

        if (user.email.includes('@')) {
            let arr = user.email.split('@');
            user.email = arr[0]
        }

        return (
            <Text>{user.name} ({user.email})</Text>
        )
    }
    return null
}

function ShowDetailsRent (data) {
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
                    <Text style = {[styles.title_text, styles.rent]}>
                        <PrintUsersDetails user_id = {data.user_id}/>
                    </Text>
                </Row>
                <Row style={styles.cell}>
                    <Text numberOfLines={1} style = {[styles.price_text, styles.rent]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {styles.not_urgent_text}>.</Text>
                </Row>
                <Row style={styles.cell}>
                    {/* display new message here */}
                    <GetMessage
                        closed = {data.closed}
                        category={data.category}
                        msgs = {data.msgs}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text style = {[styles.title_text, styles.rent]}>
                    <PrintUsersDetails user_id = {data.user_id}/>
                </Text>
            </Row>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.price_text, styles.rent]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {styles.not_urgent_text}>.</Text>
            </Row>
            <Row style={styles.cell}>
                <GetMessage
                    closed = {data.closed}
                    category={data.category}
                    msgs = {data.msgs}/>
            </Row>
        </Col>
    )
}
function ShowDetailsBuy (data) {
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
                    <Text style = {[styles.title_text, styles.buy]}>
                        <PrintUsersDetails user_id = {data.user_id}/>
                    </Text>
                </Row>
                <Row style={styles.cell}>
                    <Text numberOfLines={1} style = {[styles.price_text, styles.buy]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {styles.not_urgent_text}>.</Text>
                </Row>
                <Row style={styles.cell}>
                    <GetMessage
                        closed = {data.closed}
                        category={data.category}
                        msgs = {data.msgs}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text style = {[styles.title_text, styles.buy]}>
                    <PrintUsersDetails user_id = {data.user_id}/>
                </Text>
            </Row>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.price_text, styles.buy]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {styles.not_urgent_text}>.</Text>
            </Row>
            <Row style={styles.cell}>
                <GetMessage
                        closed = {data.closed}
                        category={data.category}
                        msgs = {data.msgs}/>
            </Row>
        </Col>
    )
}
function ShowDetailsRQItems (data) {
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
                    <Text style = {[styles.title_text, styles.rq_items]}>
                        <PrintUsersDetails user_id = {data.user_id}/>
                    </Text>
                </Row>
                <Row style={styles.cell}>
                    <Text numberOfLines={1} style = {[styles.price_text, styles.rq_items]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {styles.not_urgent_text}>.</Text>
                </Row>
                <Row style={styles.cell}>
                    <GetMessage
                        closed = {data.closed}
                        category={data.category}
                        msgs = {data.msgs}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text style = {[styles.title_text, styles.rq_items]}>
                    <PrintUsersDetails user_id = {data.user_id}/>
                </Text>
            </Row>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.price_text, styles.rq_items]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {styles.not_urgent_text}>.</Text>
            </Row>
            <Row style={styles.cell}>
                <GetMessage
                        closed = {data.closed}
                        category={data.category}
                        msgs = {data.msgs}/>
            </Row>
        </Col>
    )
}
function ShowDetailsRQServices (data) {
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
                    <Text style = {[styles.title_text, styles.rq_services]}>
                        <PrintUsersDetails user_id = {data.user_id}/>
                    </Text>
                </Row>
                <Row style={styles.cell}>
                    <Text numberOfLines={1} style = {[styles.price_text, styles.rq_services]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {styles.not_urgent_text}>.</Text>
                </Row>
                <Row style={styles.cell}>
                    <GetMessage
                        closed = {data.closed}
                        category={data.category}
                        msgs = {data.msgs}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text style = {[styles.title_text, styles.rq_services]}>
                    <PrintUsersDetails user_id = {data.user_id}/>
                </Text>
            </Row>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.price_text, styles.rq_services]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {styles.not_urgent_text}>.</Text>
            </Row>
            <Row style={styles.cell}>
                <GetMessage
                        closed = {data.closed}
                        category={data.category}
                        msgs = {data.msgs}/>
            </Row>
        </Col>
    )
}
function ShowDetailsOffServices (data) {
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
                    <Text style = {[styles.title_text, styles.off_services]}>
                        <PrintUsersDetails user_id = {data.user_id}/>
                    </Text>
                </Row>
                <Row style={styles.cell}>
                    <Text numberOfLines={1} style = {[styles.price_text, styles.off_services]}>{data.title}</Text>
                </Row>
                <Row style={styles.cell}>
                    <Text style = {styles.not_urgent_text}>.</Text>
                </Row>
                <Row style={styles.cell}>
                    <GetMessage
                        closed = {data.closed}
                        category={data.category}
                        msgs = {data.msgs}/>
                </Row>
            </Col>
            </>
        )
    }
    return (
        <Col size={80}>
            <Row style={styles.cell}>
                <Text style = {[styles.title_text, styles.off_services]}>
                    <PrintUsersDetails user_id = {data.user_id}/>
                </Text>
            </Row>
            <Row style={styles.cell}>
                <Text numberOfLines={1} style = {[styles.price_text, styles.off_services]}>{data.title}</Text>
            </Row>
            <Row style={styles.cell}>
                <Text style = {styles.not_urgent_text}>.</Text>
            </Row>
            <Row style={styles.cell}>
                <GetMessage
                    closed = {data.closed}
                    category={data.category}
                    msgs = {data.msgs}/>
            </Row>
        </Col>
    )
}
// ---------------------

function ShowNewMessages (props) {

    let count = 0;
    let refreshPage = props.refreshPage;
    let setRefreshPage = props.setRefreshPage;

    if (props.data) {

        let posts = props.data;

        for (const post of posts) {
            if (post.closed == false && post.new_msg == true) {
                count =+ 1;
            }
        }

        // *********** IMPORTANT *****************
        // need to sort this array in such a way that urgent walay posts show up first

        return (
            count > 0 ?
            posts.map((post) => (
                post.category == "rent" && post.closed == false && post.new_msg == true ?
                <TouchableOpacity
                    style={styles.card_container_rent}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);
                        console.log("set its new_msg state to false in the database and open the chat")}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsRent images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.circle_rent}>
                                <Text style={styles.icon_text}>1</Text>
                            </View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "buy" && post.closed == false && post.new_msg == true ?
                <TouchableOpacity
                    style={styles.card_container_buy}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);
                        console.log("set its new_msg state to false in the database and open the chat")}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsBuy images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.circle_buy}>
                                <Text style={styles.icon_text}>1</Text>
                            </View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "rq_items" && post.closed == false && post.new_msg == true ?
                <TouchableOpacity
                    style={styles.card_container_rq_items}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);
                        console.log("set its new_msg state to false in the database and open the chat")}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsRQItems images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.circle_rq_items}>
                                <Text style={styles.icon_text}>1</Text>
                            </View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "rq_services" && post.closed == false && post.new_msg == true ?
                <TouchableOpacity
                    style={styles.card_container_rq_services}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);
                        console.log("set its new_msg state to false in the database and open the chat")}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsRQServices images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.circle_rq_services}>
                                <Text style={styles.icon_text}>1</Text>
                            </View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "off_services" && post.closed == false && post.new_msg == true ?
                <TouchableOpacity
                    style={styles.card_container_off_services}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);
                        console.log("set its new_msg state to false in the database and open the chat")}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsOffServices images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.circle_off_services}>
                                <Text style={styles.icon_text}>1</Text>
                            </View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : null
            )) :
            <Text style={styles.error_text}>
                No new messages.
            </Text>
        )
    }
    return null
}

function ShowPreviousMessages (props) {

    let count = 0;
    let refreshPage = props.refreshPage;
    let setRefreshPage = props.setRefreshPage;

    if (props.data) {

        let posts = props.data;

        for (const post of posts) {
            if (post.closed == true && post.new_msg == false) {
                count =+ 1;
            }
        }

        // *********** IMPORTANT *****************
        // need to sort this array in such a way that urgent walay posts show up first

        return (
            count > 0 ?
            posts.map((post) => (
                post.category == "rent" && (post.closed == true || post.new_msg == false) ?
                <TouchableOpacity
                    style={styles.card_container_rent}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsRent images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.no_msg_icon}></View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "buy" && (post.closed == true || post.new_msg == false) ?
                <TouchableOpacity
                    style={styles.card_container_buy}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsBuy images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.no_msg_icon}></View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "rq_items" && (post.closed == true || post.new_msg == false) ?
                <TouchableOpacity
                    style={styles.card_container_rq_items}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsRQItems images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.no_msg_icon}></View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "rq_services" && (post.closed == true || post.new_msg == false) ?
                <TouchableOpacity
                    style={styles.card_container_rq_services}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsRQServices images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.no_msg_icon}></View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : post.category == "off_services" && (post.closed == true || post.new_msg == false) ?
                <TouchableOpacity
                    style={styles.card_container_off_services}
                    key={post.post_id}
                    onPress= {() => {
                        post.new_msg = false,
                        refreshPage ? setRefreshPage(false) : setRefreshPage(true);}}>
                    <Grid>
                        {/* image */}
                        <ShowDetailsOffServices images={post.images}
                            title = {post.title}
                            closed = {post.closed}
                            category = {post.category}
                            user_id = {post.user_id}
                            msgs = {post.msgs}/>
                        
                        <Col size={8}>
                            <Row style={styles.cell}>
                            <View style={styles.no_msg_icon}></View>
                            </Row>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                : null
            )) :
            <Text style={styles.error_text}>
                No previous chats.
            </Text>
        )
    }
    return null
}

export default function ChatHomepage (props) {

    const [countNew, setcountNew] = useState(0);
    const [countOld, setcountOld] = useState(0);
    const [refreshPage, setRefreshPage] = useState(false);

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
                        Chats
                    </Text>
                </View>

                {/* Saved Listings */}
                <ScrollView style = {styles.form_container}> 
                    <View style = {styles.form_container2}>
                        <Text style={styles.heading2}>
                            New Messages
                        </Text>
                            <ShowNewMessages
                            data = {props.data} 
                            refreshPage = {refreshPage}
                            setRefreshPage = {setRefreshPage}/>
                        
                        <Text style={styles.heading3}>
                            Previous Chats
                        </Text>
                        <ShowPreviousMessages
                            data = {props.data}
                            refreshPage = {refreshPage}
                            setRefreshPage = {setRefreshPage}/>
                        <View style = {styles.end_box}></View> 
                    </View>
                </ScrollView>
                
            </View>
            <ChatBottomNavBar />
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
    },
    error_text: {
        paddingHorizontal: "10%",
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: 0,
        color: "#193E26",
        textAlign: 'left',
        fontSize: 0.02*actual_height,
        letterSpacing: 0.15,
        color: "#193E26",
        marginBottom: 20,
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
    icon_text: {
        marginTop: 4,
        alignSelf: "center",
        fontFamily: 'Montserrat_500Medium',
        fontSize: 12,
        letterSpacing: 0.1,
        color: "#fff",
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
    no_msg_icon: {
        width: 24,
        height: 24,
        alignSelf: "center",
        borderRadius: 30,
        color: "#ffffff",
    },
    circle_rent: {
        width: 24,
        height: 24,
        alignSelf: "center",
        backgroundColor: "#670000",
        borderRadius: 30,
        alignItems: "center",
        color: "#ffffff",
    },
    circle_buy: {
        width: 24,
        height: 24,
        alignSelf: "center",
        backgroundColor: "#D6482F",
        borderRadius: 30,
    },
    circle_rq_items: {
        width: 24,
        height: 24,
        alignSelf: "center",
        backgroundColor: "#FF886E",
        borderRadius: 30,
    },
    circle_rq_services: {
        width: 24,
        height: 24,
        alignSelf: "center",
        backgroundColor: "#588D60",
        borderRadius: 30,
    },
    circle_off_services: {
        width: 24,
        height: 24,
        alignSelf: "center",
        backgroundColor: "#193E26",
        borderRadius: 30,
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
