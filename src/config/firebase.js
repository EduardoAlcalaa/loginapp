import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCYlCoDn8laQ89RdKS1ngfXBaMMnUEkupU",
  authDomain: "applogin-fdfa7.firebaseapp.com",
  projectId: "applogin-fdfa7",
  storageBucket: "applogin-fdfa7.appspot.com",
  messagingSenderId: "268888553450",
  appId: "1:268888553450:web:19220197d591ec22e36493"
};0
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // para disponibilizar a autenticação
export const db = getFirestore(app); // para disponibilizar o banco de dados

