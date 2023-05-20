// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAplvataGugFjxnbjW0WNN9KSU5tAbD68k",
  authDomain: "sabki-f3f20.firebaseapp.com",
  projectId: "sabki-f3f20",
  storageBucket: "sabki-f3f20.appspot.com",
  messagingSenderId: "1065741141978",
  appId: "1:1065741141978:web:e3f059ff7da7da5c2722e3",
  measurementId: "G-MRVSV9F4WL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const store = getFirestore(app);