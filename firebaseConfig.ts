import { initializeApp } from 'firebase/app';
import {getAnalytics} from "firebase/analytics";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXpKqbaCulknAlLg7Lx3Q2Wf5kooByiYc",
  authDomain: "shoppinglist-a5378.firebaseapp.com",
  projectId: "shoppinglist-a5378",
  storageBucket: "shoppinglist-a5378.appspot.com",
  messagingSenderId: "875400351189",
  appId: "1:875400351189:web:dfdac2dc2cf1d96b7c815c",
  measurementId: "G-MDGB7YRHE0"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);


// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
