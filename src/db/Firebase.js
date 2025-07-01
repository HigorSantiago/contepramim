// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAudF86mgf-J0ymYcP9O6vb14nrulD8AGs",
  authDomain: "conta-pra-mim.firebaseapp.com",
  projectId: "conta-pra-mim",
  storageBucket: "conta-pra-mim.firebasestorage.app",
  messagingSenderId: "902097894299",
  appId: "1:902097894299:web:d66bf218b970f0ce097f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
