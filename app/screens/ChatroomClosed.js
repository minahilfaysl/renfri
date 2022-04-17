import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import { Avatar, Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'
import AppLoading from 'expo-app-loading';
import {AntDesign} from "@expo/vector-icons";


const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width
const user_name = "Ajwa Shahid (23100067)"

export default function ChatRoom() {

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
        OpenSans_700Bold,
    })

  const [messages, setMessages] = useState([]);

//THE FUNCTION THAT GETS MESSAGES FROM DB
useLayoutEffect(() => {
    const stored_messages = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(snapshot=>setMessages(
        snapshot.docs.map(doc=>({
          _id: doc.data().id, //TAKING ID FROM DB
          createdAt: doc.data().createdAt.toDate(), //TIME
          text: doc.data().text, //TEXT MESSAGE CONTENT
          user: doc.data().user, //USER NAME
        }))
    ))
    return stored_messages;
  }, [])

  //User cant send anything from this screen so this function is of no use but let it stay here anyway
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderBubble = (props) => {
      return(
        <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: "#588D60",
                    marginBottom: 10,
                    paddingTop: "2%",
                },
                left:{
                    backgroundColor: "#193E26",
                    marginBottom: 10,
                    paddingTop: "2%",
                }
            }}
            textStyle={{
                right: {
                    color: "#FFFFFF",
                    fontFamily: "Montserrat_400Regular",
                },
                left: {
                    color: "#FFFFFF",
                    fontFamily: "Montserrat_400Regular",
                }
            }}
        />
      )
  }

  const renderAvatar = (props) => {
      return(
          null
      )
  }

  const renderSend = (props) => {
      return (
          null
      )
  }

  const renderInputToolbar = (props) => {
      return (
          null
      )
  }


  return (
      <View style={{flex: 1}}>
          <StatusBar backgroundColor="#588D60" />
                <View style={styles.subtop_nav_box}>
                    <Text style={styles.heading2}>
                        {user_name}
                    </Text>
                </View>
                <View style={styles.top_nav_box}>
                    <Text style={styles.heading1}>
                        Chats
                    </Text>
                </View>
                

            <View style={{
                flex: 1,
                marginTop: 0.15*actual_height,
            }}>
                
                <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)} //send will not be functional here. there is no input space
                user={{ //GETTING THE USER ID AND NAME
                    _id: auth?.currentUser?.email, //CHECK THIS
                    name: auth?.currentUser?.displayName, //CHECK THIS

                }}
                renderBubble={renderBubble}
                renderAvatar={renderAvatar}
                alwaysShowSend
                renderSend={renderSend}
                renderInputToolbar={renderInputToolbar}
                alignTop
                /> 

            </View>
            <View style={styles.closed}>
                <Text style={styles.closed_text}>
                    This chat is closed.
                </Text>
            </View>    
        
        </View>
  )
}

const styles = StyleSheet.create({
    overall: {
        flex: 1,
    },
    scrollview: {
        paddingTop: "30%",
        paddingBottom: "17%"
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
        fontSize: 19,
        letterSpacing: 0,
        color: "#ffffff",
        textAlign: 'left',
    },
    closed: {
        backgroundColor: "#FFFFFF",
        height: "8%",
        borderTopColor: "#193E26",
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closed_text: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.04*actual_width,
        alignSelf: "center",
        marginTop: "5%",
        color: "#193E26",
    },
    icon_send: {
        height: 40,
        width: 40,
    },
    icon_box: {
        position: "absolute",
        width: "10%",
        height: 0.1*actual_width,
        bottom: 2,
        right: "4%",
        backgroundColor: "transparent",
    },
    downicon: {
        position: "absolute",
        bottom: 0.005*actual_height,
        color: "#000000",
        left: "92%",
    },
})