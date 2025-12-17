import { getApp } from "firebase/app";
import { initializeApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAENAABkTpRrZM2tQ2VsB_EqfdSE1ghIZc",
  authDomain: "netflix-64794.firebaseapp.com",
  projectId: "netflix-64794",
  storageBucket: "netflix-64794.firebasestorage.app",
  messagingSenderId: "317270530390",
  appId: "1:317270530390:web:fbac1e2c5deeb022191ef7",
  measurementId: "G-ZQ78BEPTMS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();

export default app
export{db , auth}
//const app = initializeApp(firebaseConfig);