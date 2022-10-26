// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPWIc9lAj2NAhvtCGsehdrxVhGpxoKHC4",
    authDomain: "curio-mind.firebaseapp.com",
    projectId: "curio-mind",
    storageBucket: "curio-mind.appspot.com",
    messagingSenderId: "1022765878427",
    appId: "1:1022765878427:web:a17b29589be0e8d16e0a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;