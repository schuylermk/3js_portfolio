import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA46GZ49CAj14PnSt8DWJ5bNg3ZMk8P_b8",
  authDomain: "this-here-webligatory-weblog.firebaseapp.com",
  projectId: "this-here-webligatory-weblog",
  storageBucket: "this-here-webligatory-weblog.appspot.com",
  messagingSenderId: "753683098144",
  appId: "1:753683098144:web:2e95ef12eba96669ba6a45",
  measurementId: "G-KJW5GQ6NKV",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
