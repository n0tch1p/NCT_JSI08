import{getAuth} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvrBHp4EJNmEPmIbYU2wen_N1haNV7AuM",
  authDomain: "bao-huy-project.firebaseapp.com",
  projectId: "bao-huy-project",
  storageBucket: "bao-huy-project.appspot.com",
  messagingSenderId: "461065512223",
  appId: "1:461065512223:web:cd5d2324868cc22ab03c2a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const subscriptions = [];
