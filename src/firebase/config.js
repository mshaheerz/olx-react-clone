import firebase  from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKU1EMaBtPY0nNGjQfQMyDF3OdfY8hzPs",
    authDomain: "fir-e96ea.firebaseapp.com",
    projectId: "fir-e96ea",
    storageBucket: "fir-e96ea.appspot.com",
    messagingSenderId: "282984180254",
    appId: "1:282984180254:web:3081898ceca55470c69c0f",
    measurementId: "G-7FK4PLR0FW"
  };

  export default firebase.initializeApp(firebaseConfig)