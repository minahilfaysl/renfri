import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';

import HomeScreenSearchByCategory from '../HomeScreenSearchByCategory';
import AddPostByCategory from '../AddPostByCategory';
import Profile from '../Profile';
import ProfileNav from './ProfileNav';
import PostNav from './PostNav';
import SearchNav from './SearchNav';
import ChatRoom from '../ChatRoom'

const actual_height = Dimensions.get("window").height
const actual_width = Dimensions.get("window").width
// import Chat from './Chat';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{showLabel:false}} screenOptions={{
      tabBarStyle: { ...styles.menu }}}>
      <Tab.Screen name="Search" component={SearchNav} options={{
        headerShown:false,
        tabBarIcon: ({focused})=>(
          <View style={styles.one_unit}>
              <Image 
                  style={styles.menu_icon} 
                  source = {focused ? require("../../assets/navbar/Search_bold.png") : require("../../assets/navbar/Search.png")}/>
              <Text style={[styles.body2, styles.menu_text]}>
                  Search
              </Text>
          </View>
        )}}
        />
      <Tab.Screen name="Profile" component={ProfileNav} options={{
        headerShown:false,
        tabBarIcon: ({focused})=>(
          <View style={styles.one_unit}>
              <Image 
                  style={styles.menu_icon} 
                  source = {focused ? require("../../assets/navbar/User_bold.png") : require("../../assets/navbar/User_light.png")}/>
              <Text style={[styles.body2, styles.menu_text]}>
                  Profile
              </Text>
          </View>
        )}}
        />

      <Tab.Screen name="Post" component={PostNav} options={{
        headerShown:false,
        tabBarIcon: ({focused})=>(
          <View style={styles.one_unit}>
              <Image 
                  style={styles.menu_icon} 
                  source = {focused ? require("../../assets/navbar/Add_round_fill_bold.png") : require("../../assets/navbar/Add_ring_light.png")}/>
              <Text style={[styles.body2, styles.menu_text]}>
                  Post
              </Text>
          </View>
        )}}
        />

      <Tab.Screen name="Notif" component={HomeScreenSearchByCategory} options={{
        headerShown:false,
        tabBarIcon: ({focused})=>(
          <View style={styles.one_unit}>
              <Image 
                  style={styles.menu_icon} 
                  source = {focused ? require("../../assets/navbar/Bell_pin_bold.png") : require("../../assets/navbar/Bell_pin_light.png")}/>
              <Text style={[styles.body2, styles.menu_text]}>
                  Notifs
              </Text>
          </View>
        )}}
        />

      <Tab.Screen name="Chat" component={ChatRoom} options={{
        headerShown:false,
        tabBarIcon: ({focused})=>(
          <View style={styles.one_unit}>
              <Image 
                  style={styles.menu_icon} 
                  source = {focused ? require("../../assets/navbar/Message_bold.png") : require("../../assets/navbar/Message_light.png")}/>
              <Text style={[styles.body2, styles.menu_text]}>
                  Chat
              </Text>
          </View>
        )}}
        />
        
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  menu: {
      flex: 1,
      flexDirection: "row",
      position: "absolute",
      bottom: 0,
      height: 56,
      width: "100%",
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderTopColor: "#193E26",
      borderTopWidth: 2,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      elevation: 8,
      justifyContent: "space-around",
      paddingLeft: 18,
      paddingRight: 18, 
  },
  menu_text: {
      textAlign: "center",
      color: "#193E26",
  },
  one_unit: {
      marginTop: 7.5,
      marginBottom: 7.5,
      width: 0.12*actual_width,
      height: 0.08*actual_height,
      flex: 1,
      flexDirection: "column",
      alignContent: "center",
  },
  menu_icon: {
      alignSelf: "center",
      width: 24,
      height: 24,
  },
  body2: {
      fontFamily: 'OpenSans_400Regular',
      fontSize: 12,
      letterSpacing: 0.25,
  },
  navbarBold: {
      fontFamily: 'OpenSans_700Bold',
      fontSize: 12,
      letterSpacing: 0.25,
      textAlign: "center",
      color: '#588D60',
  }
})