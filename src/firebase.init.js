// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb1XoRzMTkGpMq-b2e1GIuNaYDqR_Z_0Y",
    authDomain: "ass-12-paint-hous-ilhan.firebaseapp.com",
    projectId: "ass-12-paint-hous-ilhan",
    storageBucket: "ass-12-paint-hous-ilhan.appspot.com",
    messagingSenderId: "778783120878",
    appId: "1:778783120878:web:9b7fe9393bf67f9de882ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;