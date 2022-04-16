import React, { useState} from "react";
import { Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width

export default function SavedButtonPeach(props) {

    if (!props.state) {
        props.state = false;
    }
    const [clicked, setClicked] = useState(props.state);

    const buttonClicked = {
        onPress: () => { 
            if (clicked) {
                setClicked(false),
                console.log("no wait, dont save it")
            }
            else {
                setClicked(true),
                console.log("hello save this post for me pls")
            }
        },
        style: styles.icon,
    }

    return (
        <TouchableOpacity {...buttonClicked}> 
            <Image 
                style={styles.icon} 
                source = {clicked ? require("../assets/Bookmark_fill_peach.png") : require("../assets/Bookmark_light_peach.png")}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        alignSelf: "center",
        width: 24,
        height: 24,
    },
})
