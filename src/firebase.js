// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALHKTPLpyN1EJfJsOxutCDiimf8isJ-Xw",
  authDomain: "todoapp-120922.firebaseapp.com",
  projectId: "todoapp-120922",
  storageBucket: "todoapp-120922.appspot.com",
  messagingSenderId: "576351397866",
  appId: "1:576351397866:web:25be584e6ddcbd0f77f493",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
