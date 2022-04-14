import React, { useState, useRef, useEffect } from "react";
import ViewYourListingsDetails from './app/screens/ViewYourListingsDetails';

let app_images = [
    require('../renfri/app/assets/upload_images_buy.png'),
    require('../renfri/app/assets/upload_images_buy.png'),
    require('../renfri/app/assets/upload_images_buy.png'),
    require('../renfri/app/assets/upload_images_buy.png'),
    require('../renfri/app/assets/upload_images_buy.png'),
]

var data = {
    category: "buy",
    title: "This is my listing",
    desc: "Alone with you, That's all that it takes, I'm home with you, No matter the place, I've grown with you, Yet our love stays the same, Alone with you, (Why don't we? Why don't we? Why don't we?), Why don't we?",
    price: 3000,
    duration: "1-2 hours",
    insurance: 2000,
    tags: "M7, iron",
    images: app_images,
    urgent: true,
    status: "open",
    date: "14/04/2022, 3:45PM",
    interested_users: [{id: 0, name: "Minahil Faisal", email: "23100063@lums.edu.pk", rating: 2},
                    {id: 1, name: "Fatima Sohail", email: "23100065@lums.edu.pk", rating: 3},
                    {id: 2, name: "Ajwa Shahid", email: "23100066@lums.edu.pk", rating: 4}],
};

// console.log(data.title)

export default function App() {
    return (
        <ViewYourListingsDetails data={data}/>
    );
}