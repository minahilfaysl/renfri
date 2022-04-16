import React, { useState, useRef, useEffect } from "react";
import ViewYourListingsBuy from "./app/screens/views/ViewYourListingsBuy";
import ViewYourListingsRent from "./app/screens/views/ViewYourListingsRent";
import ViewYourListingsRQItems from "./app/screens/views/ViewYourListingsRQItems";
import ViewYourListingsRQServices from "./app/screens/views/ViewYourListingsRQServices";
import ViewYourListingsOfferedServices from "./app/screens/views/ViewYourListingsOfferedServices";

import ViewASearchListingRent from "./app/screens/views/ViewASearchListingRent";
import ViewASearchListingBuy from "./app/screens/views/ViewASearchListingBuy";
import ViewASearchListingRQItems from "./app/screens/views/ViewASearchListingRQItems";
import ViewASearchListingRQServices from "./app/screens/views/ViewASearchListingRQServices";
import ViewASearchListingOfferedServices from "./app/screens/views/ViewASearchListingOfferedServices";

let app_images = [
    require('../renfri/app/assets/upload_images_buy.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
    require('../renfri/app/assets/upload_images_rq_items.png'),
]

var data = {
    category: "rent",
    title: "This is my listing",
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

export default function App() {
    return (
        // <ViewYourListingsBuy data = {data} />
        // <ViewYourListingsRent data = {data} />
        // <ViewYourListingsRQItems data = {data} />
        // <ViewYourListingsRQServices data = {data} />
        // <ViewYourListingsOfferedServices data = {data} />

        // <ViewASearchListingBuy data = {data} />
        // <ViewASearchListingRent data = {data} />
        // <ViewASearchListingRQItems data = {data} />
        // <ViewASearchListingRQServices data = {data} />
        <ViewASearchListingOfferedServices data = {data} />

    );
}