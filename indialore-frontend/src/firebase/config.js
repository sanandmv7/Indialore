import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPK2vWEilP4UR9G4lxrsNBFfBfyK66k5E",
    authDomain: "indialore-4835b.firebaseapp.com",
    projectId: "indialore-4835b",
    storageBucket: "indialore-4835b.appspot.com",
    messagingSenderId: "547215869864",
    appId: "1:547215869864:web:21691d7d244d4ce7693f9d",
    measurementId: "G-2CQ395TBDJ"
  };

  export default firebase.initializeApp(firebaseConfig);