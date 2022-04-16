// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiRuYK2SvBlyxpP8ibGGfCDb2tQAJ3BbE",
  authDomain: "travel-with-me-8daa1.firebaseapp.com",
  projectId: "travel-with-me-8daa1",
  storageBucket: "travel-with-me-8daa1.appspot.com",
  messagingSenderId: "868387853749",
  appId: "1:868387853749:web:e6c4d979da0a15adfbb5fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
