import React, { useState, useRef, useEffect } from "react";
import Notifications from "./app/screens/Notifications";

/* For notifications store all alerts, and saves that other people do with 
the listers id, we'll have an alag table for lister and their notifcations.
*/

// 1. Upon a saved post being closed -> redirects to the saved post and shows it as closed
// 2. Upon a saved post being re-opened -> redirects to re-opened post
// 4. When a transaction is completed -> redirects to post jis k saath transaction thi

/* 5. when a person enters details of the person they did the transaction with into the tracking system, the can see that posts card and when they click on that card, the relevant tracking form opens up*/

let app_images = [
    require('../renfri/app/assets/upload_images_buy.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
]

var data = {
    // ---for chat---
    new_msg: true,
    msgs: ["Hello", "hi", "here", "hey", "there"],
    user_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
    // --- for notifications ---
    /* notifs array structure:
    lister_id: 
    pending_forms: [{}]
    notifs: [{}]
    the following data for all forms and notifcations:
    */
    // --------
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
    closed: false,
    saved_post: true,
    date: "14/04/2022, 3:45PM",
    lister_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
    interested_users: [{name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 2},
                    {name: "Fatima Sohail", email: "23100065@lums.edu.pk", rating: 3},
                    {name: "Ajwa Shahid", email: "23100066@lums.edu.pk", rating: 4}],
};

var data2 = {
    // ---for chat---
    new_msg: true,
    msgs: ["Hello", "hi", "here", "hey", "there"],
    user_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
    // ----------
    post_id: 2,
    category: "buy",
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

var data3 = {
    // ---for chat---
    new_msg: false,
    msgs: ["Hello", "hi", "here", "hey", "there"],
    user_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
    // ----------
    post_id: 3,
    category: "rq_items",
    title: "This is my listing and i am a lister",
    desc: "Description description description description description description description description description description description description description description description description description",
    price: 3000,
    duration: "1-2 hours",
    insurance: 2000,
    tags: "M7, iron",
    images: null,
    urgent: true,
    closed: false,
    saved_post: true,
    date: "14/04/2022, 3:45PM",
    lister_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
    interested_users: [{name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 2},
                    {name: "Fatima Sohail", email: "23100065@lums.edu.pk", rating: 3},
                    {name: "Ajwa Shahid", email: "23100066@lums.edu.pk", rating: 4}],
};

var data4 = {
    // ---for chat---
    new_msg: false,
    msgs: ["Hello", "hi", "here", "hey", "there"],
    user_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
    // ----------
    post_id: 4,
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

var data5 = {
    // ---for chat---
    new_msg: false,
    msgs: ["Hello", "hi", "here", "hey", "there"],
    user_id: {name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 4},
    // ----------
    post_id: 5,
    category: "off_services",
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

var array = [data, data2, data3, data4, data5]

export default function App() {
    return (
        // <ViewSavedListings data = {array}/>
        <Notifications data = {array} />
    );
}