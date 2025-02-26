import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK1QiuWimXpW-_c_XwtFhBdXulUmdyJPg",
  authDomain: "mxplayer-ef265.firebaseapp.com",
  projectId: "mxplayer-ef265",
  storageBucket: "mxplayer-ef265.firebasestorage.app",
  messagingSenderId: "947161257956",
  appId: "1:947161257956:web:b06f43665440867916d9f1",
  measurementId: "G-1DSXQ45MQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()