import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBd7rwXnz3dT24HnvXype-mauef7_dPhoY",
    authDomain: "renfri-5378e.firebaseapp.com",
    projectId: "renfri-5378e",
    storageBucket: "renfri-5378e.appspot.com",
    messagingSenderId: "133672543504",
    appId: "1:133672543504:web:baacb57dfe63d21cafb195",
    measurementId: "G-6C4B5V5GB9"
};

initializeApp(firebaseConfig);

// const firestore = getFirestore();
// const auth = getAuth();

// export default app;