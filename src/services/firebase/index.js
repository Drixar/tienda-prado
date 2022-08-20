
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfGUzJHzmKDeUa0MBb7Tjl4AoZtBolSGg",
  authDomain: "tienda-prado.firebaseapp.com",
  projectId: "tienda-prado",
  storageBucket: "tienda-prado.appspot.com",
  messagingSenderId: "736426689856",
  appId: "1:736426689856:web:7639591c30be0469bf26a5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);