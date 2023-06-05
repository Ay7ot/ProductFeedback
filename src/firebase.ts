// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyOas1YpU-fMJSTKk9_2PCWtHz_MfJ2pM",
  authDomain: "productfeedbackmain.firebaseapp.com",
  projectId: "productfeedbackmain",
  storageBucket: "productfeedbackmain.appspot.com",
  messagingSenderId: "806208659012",
  appId: "1:806208659012:web:2d489ea14c12a935a62611",
  measurementId: "G-B76BDFVT13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }