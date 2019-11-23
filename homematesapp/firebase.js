import firebase from "firebase";
import "@firebase/firestore";

//
// APPs STACKING in REACT NAVIGATION
//
const firebaseConfig = {
  apiKey: "AIzaSyBLeNW7z6_c2bC8fESRbi_-szUd2f0LYTk",
  authDomain: "homemates.firebaseapp.com",
  databaseURL: "https://homemates.firebaseio.com",
  projectId: "homemates",
  storageBucket: "homemates.appspot.com",
  messagingSenderId: "339152637924",
  appId: "1:339152637924:web:b575558491b9f12f6641f1"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
