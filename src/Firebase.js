import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5CkuntcaCTsNWQbfOLPujhHdP_Asjjjc",
  authDomain: "tascook-gdsc.firebaseapp.com",
  projectId: "tascook-gdsc",
  storageBucket: "tascook-gdsc.appspot.com",
  messagingSenderId: "1025747545638",
  appId: "1:1025747545638:web:776cc1782cd944e5bcc0e7",
  measurementId: "G-9B2WKR9LVK",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
