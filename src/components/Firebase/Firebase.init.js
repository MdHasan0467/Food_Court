// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCeUSMt1OBhaR92C8OWjX-WQMxO5Yjl4zw",
  authDomain: "food-court-restaurant.firebaseapp.com",
  projectId: "food-court-restaurant",
  storageBucket: "food-court-restaurant.appspot.com",
  messagingSenderId: "698472685768",
  appId: "1:698472685768:web:b9da9fa0e172da2c7d05fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;