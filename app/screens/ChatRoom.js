import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import { Avatar, Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'
import AppLoading from 'expo-app-loading';
import app from '../../firebase'
import { getFirestore, collection, query, where, getDocs, setDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const db = getFirestore(app);

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width


export default function ChatRoom() {

    const [doc1, setDoc1] = useState("")
    const user_name = "Ajwa Shahid (23100067)"

    useEffect(()=>{
        const getUser = async() => {

            const user1 = auth.currentUser;
        
            const Ref = collection(db, "user");
        
            // Create a query against the collection.
            const q = query(Ref, where("email", "==", user1.email));
        
            getDocs(q).then((querySnapshot)=>{
                querySnapshot.forEach((doc) => {
                const doc1 = doc.data()
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                setDoc1(doc1)
                console.log("Doc2:", doc1)
                });
                
            }).catch(err=>console.log(err))
        }
        getUser();
     },[])

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        OpenSans_400Regular,
        OpenSans_700Bold,
    })

  const [messages, setMessages] = useState([]);


//THE FUNCTION THAT GETS MESSAGES FROM DB
    // useEffect(() => {
    //   const stored_messages = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(snapshot=>setMessages(
    //       snapshot.docs.map(doc=>({
    //         _id: doc.data().id, //TAKING ID FROM DB
    //         createdAt: doc.data().createdAt.toDate(), //TIME
    //         text: doc.data().text, //TEXT MESSAGE CONTENT
    //         user: doc.data().user, //USER NAME
    //       }))
    //   ))
    //   return stored_messages;
    // }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => 
        GiftedChat.append(previousMessages, messages))
        const {
            _id,
            createdAt,
            text,
            user,
        } = messages[0]
        db.collection('chats').add({ //THIS STORES THE MESSAGE SENT, ID AND STUFF
            _id,
            createdAt,
            text,
            user,
        })
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
          <Send {...props}>
              <View>
              <Image 
                    style={styles.icon_send} 
                    source = {require("../assets/Send_fill.png")}/>
              </View>
          </Send>
      )
  }

  const renderInputToolbar = (props) => {
      return (
          <InputToolbar {...props} containerStyle={styles.text_box_one}>

          </InputToolbar>
      )
  }

  const renderChatEmpty = (props) => {
      return(
          <View style={styles.text_box}>          
          <Text style={styles.text_empty}>
              To complete a transaction, mark your listing or post as closed, or fill in the form once you get a notifaction for the transaction being completed.
          </Text>
          <Text style={styles.text_empty}>
              The chat relating to a post will be marked closed once a transaction regarding the post has been completed. 
          </Text>
          <Text style={styles.text_empty}>
              Messages once sent cannot be edited or deleted.
          </Text>
          <Text style={styles.text_empty}>
              Welcome to RENFRI???s chat system. Messages sent to this chat are private but visible to the moderators of the application.
          </Text>
          </View>
      )
  }


  return (
      <View style={{flex: 1}}>
          <StatusBar backgroundColor="#588D60" />
                <View style={styles.subtop_nav_box}>
                    <Text style={styles.heading2}> 
                        {doc1.name}
                        {/* ^replace user_name with actual username plus id */}
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
                onSend={messages => onSend(messages)}
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
                renderChatEmpty={renderChatEmpty}
                /> 

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
    text_box_one: {
        backgroundColor: "rgb(240, 240, 240)",
        borderBottomWidth: 2,
        marginLeft: 0.02*actual_width,
        marginRight: 0.02*actual_width,
        borderBottomColor: "#193E26",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
    text_empty: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 0.04*actual_width,
        color: "#193E26",
        transform: [{rotateX: '180deg'}],
        lineHeight: 20,
        paddingVertical: 5,
    },
    text_box: {
        padding: 20,
    },
})