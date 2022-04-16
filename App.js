import React, { useState, useRef, useEffect } from "react";
import MarkAsOpenButton from "./app/components/MarkAsOpenButton";
import SearchResultsRent from "./app/screens/searchResults/extra";


let app_images = [
    require('../renfri/app/assets/upload_images_buy.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
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

var array = [data, data2, data3];

export default function App() {
    return (
        <SearchResultsRent data = {array}/>
        // <MarkAsOpenButton state = {true}/>
    );
}