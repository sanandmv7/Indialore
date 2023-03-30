import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoDUZ2KVq5SR_ajKl6QOcOXZsKBY521oc",
  authDomain: "indialore-73305.firebaseapp.com",
  projectId: "indialore-73305",
  storageBucket: "indialore-73305.appspot.com",
  messagingSenderId: "452978333109",
  appId: "1:452978333109:web:bcce222ecfa267d722f5fc",
  measurementId: "G-NHGMLK1BEH",
};

export default firebase.initializeApp(firebaseConfig);
