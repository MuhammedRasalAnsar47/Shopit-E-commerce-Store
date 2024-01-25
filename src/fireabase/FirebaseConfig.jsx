// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrqVt5Dr-xVElQazcvPtek4gknFHNS6zw",

  authDomain: "shoppit-b499b.firebaseapp.com",

  projectId: "shoppit-b499b",

  storageBucket: "shoppit-b499b.appspot.com",

  messagingSenderId: "755575116707",

  appId: "1:755575116707:web:89542d830aaad14d828016",

  measurementId: "G-2XH5YDL83M"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}