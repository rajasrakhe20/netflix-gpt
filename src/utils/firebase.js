// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiGrCFb1sB56yOCUSoVS5WNkdfc1TVN5E",
  authDomain: "netflixgpt-d2a79.firebaseapp.com",
  projectId: "netflixgpt-d2a79",
  storageBucket: "netflixgpt-d2a79.appspot.com",
  messagingSenderId: "521511384911",
  appId: "1:521511384911:web:202bac783363f5ac21b73a",
  measurementId: "G-2FFZZ6RGX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();