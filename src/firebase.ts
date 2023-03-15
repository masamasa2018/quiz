// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx7zveVsxN2PG8uxD2wHl-AXFUJ-7gijc",
  authDomain: "quiz-59e03.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "quiz-59e03",
  storageBucket: "quiz-59e03.appspot.com",
  measurementId: "G-7LN6V43277",
  appId: "1:648160654071:web:c1b3d770fe6dea6e8f59f2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
