// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzMEbZaW4IHHssJnZvd5N2aAruUw9nBSA",
  authDomain: "fir-auth-94e52.firebaseapp.com",
  projectId: "fir-auth-94e52",
  storageBucket: "fir-auth-94e52.appspot.com",
  messagingSenderId: "66331022475",
  appId: "1:66331022475:web:2e9dbf290dd080ddb1308e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;