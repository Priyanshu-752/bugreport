// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCf9edDYmHyz_-jHLvjaBhl1UyyajDm-G8',
  authDomain: "gigs-and-teams.firebaseapp.com",
  projectId: "gigs-and-teams",
  storageBucket: "gigs-and-teams.firebasestorage.app",
  messagingSenderId: "652675199093",
  appId: "1:652675199093:web:baf98df4872ecfce13c83c",
  measurementId: "G-30NCG92VFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);