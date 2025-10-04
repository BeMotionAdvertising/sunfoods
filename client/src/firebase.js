import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCOq86jKKOXyHtb3YzCciOtOJTjt700tIY",
  authDomain: "sunfoods-16f70.firebaseapp.com",
  projectId: "sunfoods-16f70",
  storageBucket: "sunfoods-16f70.appspot.com",
  messagingSenderId: "1029968004561",
  appId: "1:1029968004561:web:8ff7837899510b1938ccf0",
  measurementId: "G-WXF9YC52WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };