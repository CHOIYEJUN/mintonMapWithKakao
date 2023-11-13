// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 추가
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTd-XMVz-A2tUUKPFDOkNFUjd44QVVjsU",
    authDomain: "mintonmap-7f2e8.firebaseapp.com",
    projectId: "mintonmap-7f2e8",
    storageBucket: "mintonmap-7f2e8.appspot.com",
    messagingSenderId: "305256909429",
    appId: "1:305256909429:web:d5bc27201ee07e4ff5063c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const DB = getFirestore(app);
