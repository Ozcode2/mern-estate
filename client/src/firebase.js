// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-de53a.firebaseapp.com",
  projectId: "mern-estate-de53a",
  storageBucket: "mern-estate-de53a.appspot.com",
  messagingSenderId: "90791211906",
  appId: "1:90791211906:web:5f471308cd7c275b4fd59b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
