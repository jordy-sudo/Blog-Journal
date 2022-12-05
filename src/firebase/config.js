// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYWxjZihDT1PDsNdKUH0UJq0xzfYE-DUo",
  authDomain: "journalapplogin.firebaseapp.com",
  projectId: "journalapplogin",
  storageBucket: "journalapplogin.appspot.com",
  messagingSenderId: "524401066369",
  appId: "1:524401066369:web:adea66c48500226b306880"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth= getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);