import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';


import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGPtac-HPMTpW8a8EWvoMefWykiWhqBeo",
    authDomain: "ecommerce-cart-ccdf2.firebaseapp.com",
    projectId: "ecommerce-cart-ccdf2",
    storageBucket: "ecommerce-cart-ccdf2.appspot.com",
    messagingSenderId: "361838666430",
    appId: "1:361838666430:web:a69997ed9e90d080fe34ef",
    measurementId: "G-K9XQZ8D7DH"
  };
  

  const app = initializeApp(firebaseConfig);
  export const fs = getFirestore(app);
  export const auth=getAuth(app);
  
 
  