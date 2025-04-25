

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwrLV3xSgVDrrsyHotpJsWUVX0BHu6rEo",
  authDomain: "fir-authentication-389a5.firebaseapp.com",
  projectId: "fir-authentication-389a5",
  storageBucket: "fir-authentication-389a5.firebasestorage.app",
  messagingSenderId: "946425071616",
  appId: "1:946425071616:web:f7c961cb7703592c45b0e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)