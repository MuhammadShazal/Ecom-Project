import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHtci-9iGL9yjPhfQydcdrZAZmeW4qO6c",
  authDomain: "ecommerce-project-18ad4.firebaseapp.com",
  projectId: "ecommerce-project-18ad4",
  storageBucket: "ecommerce-project-18ad4.appspot.com",
  messagingSenderId: "1021468885757",
  appId: "1:1021468885757:web:e7398835eb8454de177494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();