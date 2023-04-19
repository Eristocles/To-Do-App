// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARYxZvQ8OUhPYGNfE81BN7S5ACzmQlsvE",
  authDomain: "to-do-app-2d663.firebaseapp.com",
  projectId: "to-do-app-2d663",
  storageBucket: "to-do-app-2d663.appspot.com",
  messagingSenderId: "670067211540",
  appId: "1:670067211540:web:e1c7681ca85d5ae5dbd601",
  measurementId: "G-BRB1Q9P7X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
