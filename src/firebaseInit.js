// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLbx8HiMwsyk2WAtdLsiPONbS32fa1g8k",
  authDomain: "busybuy-1f386.firebaseapp.com",
  projectId: "busybuy-1f386",
  storageBucket: "busybuy-1f386.appspot.com",
  messagingSenderId: "270670502043",
  appId: "1:270670502043:web:62f33d444bd8f4fe4f0e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);