import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYO8xRpNpnvX4rKjFTvmxzSivqbiZ4G_o",
  authDomain: "mxplayer-4e257.firebaseapp.com",
  projectId: "mxplayer-4e257",
  storageBucket: "mxplayer-4e257.firebasestorage.app",
  messagingSenderId: "195141930412",
  appId: "1:195141930412:web:d54befcf7dc388eabc7e09",
  measurementId: "G-7CQGRLJ8WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()