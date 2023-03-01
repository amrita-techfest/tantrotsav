// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPu3Fr1Ed4u5ZtHjmIKbJIxOrTd0gBBaU",
  authDomain: "techfest-90fcb.firebaseapp.com",
  projectId: "techfest-90fcb",
  storageBucket: "techfest-90fcb.appspot.com",
  messagingSenderId: "1005972251908",
  appId: "1:1005972251908:web:12aa068dad8e78d82d9c51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
