import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCr022vOgX_KyVJVq2tqL2mw7LlOlEtm-w",
    authDomain: "clone-225ac.firebaseapp.com",
    projectId: "clone-225ac",
    storageBucket: "clone-225ac.appspot.com",
    messagingSenderId: "1089859790907",
    appId: "1:1089859790907:web:ef8e3519086f7a0d23941e",
    measurementId: "G-F5QBD00DMV"
});

const db = firebase.firestore();

export { db }