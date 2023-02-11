// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ED44YNtMEqSSULsH5JZ71gwKuI-JpGQ",
  authDomain: "dragon-news-581eb.firebaseapp.com",
  projectId: "dragon-news-581eb",
  storageBucket: "dragon-news-581eb.appspot.com",
  messagingSenderId: "617926994295",
  appId: "1:617926994295:web:60d781b049a6e8a690d972",
  measurementId: "G-22P9LVB1PT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
