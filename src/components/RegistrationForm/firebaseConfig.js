import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация аутентификации и базы данных
export const auth = getAuth(app);

export default app;
