import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAsFXgI95hOVoIuPuQaSj-GGvfiED_-n8",
  authDomain: "mxplayer-f3eb2.firebaseapp.com",
  projectId: "mxplayer-f3eb2",
  storageBucket: "mxplayer-f3eb2.firebasestorage.app",
  messagingSenderId: "1077414246534",
  appId: "1:1077414246534:web:965720a04a48937eca3907",
  measurementId: "G-B1P8FEGKH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()