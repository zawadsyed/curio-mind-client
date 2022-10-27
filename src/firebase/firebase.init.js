// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW8d2i_q0xZbofQdjDIrkLddKg-GM41VQ",
    authDomain: "curio-mind-auth.firebaseapp.com",
    projectId: "curio-mind-auth",
    storageBucket: "curio-mind-auth.appspot.com",
    messagingSenderId: "242306784746",
    appId: "1:242306784746:web:fd444bfdee53fd97362693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;