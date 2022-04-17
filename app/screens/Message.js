import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Message = ({time, isLeft, message}) => {

    const isOnLeft = type => {
        if (isLeft && type === "message_container"){
            return{
                alignSelf: "flex-start",
                backgroundColor: "#193E26",
                borderTopLeftRadius: 0,
            };
        }
        else if (isLeft && type === "message"){
            return{
                color: "#FFFFFF",
            };
        }
        else if (isLeft && type === "time"){
            return{
                color: "#193E26",
            };
        }
        else {
            return{
                borderTopRightRadius: 0
            };
        }
    }

    return (
        <View style={styles.container}> 
            <View style={[styles.message_container, isOnLeft("message_container")]}>
                <View style={styles.messageView}>
                    <Text style={[styles.message, isOnLeft("message")]}>
                        {message}
                    </Text>
                </View>
                <View style={styles.timeView}>
                    <Text style={[styles.time, isOnLeft("time")]}>
                        {time}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 5,
    },
    message_container: {
        backgroundColor: "#588D60",
        alignSelf: "flex-end",
        flexDirection: "row",
        borderRadius: 15,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,
    },
    messageView: {
        backgroundColor: "transparent",
        maxWidth: "80%",
    },
    timeView: {
        backgroundColor: "transparent",
        justifyContent: "flex-end",
        paddingLeft: 10,
    },
    message: {
        color: "#FFFFFF",
        alignSelf: "flex-start",
        fontSize: 15,
    },
    time: {
        color: "#193E26",
        alignSelf: "flex-end",
        fontSize: 10,

    }
})

export default Message 