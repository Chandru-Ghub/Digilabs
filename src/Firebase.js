import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSoA6YumMJ-On2d531cRquFE-kWle0h3E",
  authDomain: "shopyecommerce-e73af.firebaseapp.com",
  projectId: "shopyecommerce-e73af",
  storageBucket: "shopyecommerce-e73af.appspot.com",
  messagingSenderId: "613742584691",
  appId: "1:613742584691:web:fc7ff089329a4b89a09b06",
  measurementId: "G-6WRD8S4T4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgDB = getStorage(app);
export const txtDB = getFirestore(app);