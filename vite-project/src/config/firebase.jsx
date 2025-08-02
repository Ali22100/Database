import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBJdl8V1l02Yv7JWVBw1NEfrceD11c1Atc",
  authDomain: "react-app-auth-d1903.firebaseapp.com",
  projectId: "react-app-auth-d1903",
  storageBucket: "react-app-auth-d1903.firebasestorage.app",
  messagingSenderId: "410621155437",
  appId: "1:410621155437:web:bd14a748ddb3e087cd8764"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
