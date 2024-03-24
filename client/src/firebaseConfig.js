import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAzCHPZGxG9E_Zq5wXpbfkAFXTNiiHa-E4",
  authDomain: "emailpasswordlogin-c9a06.firebaseapp.com",
  projectId: "emailpasswordlogin-c9a06",
  storageBucket: "emailpasswordlogin-c9a06.appspot.com",
  messagingSenderId: "159982349904",
  appId: "1:159982349904:web:e0d92ce073ca8f8f02ab55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
