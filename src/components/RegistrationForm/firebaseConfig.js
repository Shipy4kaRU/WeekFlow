// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChXYI180fEyjgQPec1KQ2VIvcEKOtg3A0",
  authDomain: "weekflow-8020a.firebaseapp.com",
  databaseURL: "https://weekflow-8020a-default-rtdb.firebaseio.com",
  projectId: "weekflow-8020a",
  storageBucket: "weekflow-8020a.firebasestorage.app",
  messagingSenderId: "992209420343",
  appId: "1:992209420343:web:dcf0479d695e5adb1fffb2",
  measurementId: "G-G81KN5K4QK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
