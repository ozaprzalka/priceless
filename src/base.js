import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB0Lbl3hB3XpjQEWciOEWt9aH9QXcgA53Y",
    authDomain: "so-priceless.firebaseapp.com",
    databaseURL: "https://so-priceless-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "so-priceless",
    storageBucket: "so-priceless.appspot.com",
    messagingSenderId: "805844033307",
    appId: "1:805844033307:web:c0e60c20a8a6b658e93dbe"
});

export default app;
