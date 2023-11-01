// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 추가
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7WaRMIsWT1VCqSPPYlD5EQxkEPnqkvdA",
    authDomain: "mintonmap.firebaseapp.com",
    projectId: "mintonmap",
    storageBucket: "mintonmap.appspot.com",
    messagingSenderId: "629303300304",
    appId: "1:629303300304:web:e6d79792624f4baee58ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const DB = getFirestore(app);