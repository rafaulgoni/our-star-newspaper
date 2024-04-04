// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC53BnqEHb7E8XusbgZbaiZtM-qDcG_RJo",
  authDomain: "our-star-newspaper.firebaseapp.com",
  projectId: "our-star-newspaper",
  storageBucket: "our-star-newspaper.appspot.com",
  messagingSenderId: "100114941746",
  appId: "1:100114941746:web:526958418308a26711f92b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;