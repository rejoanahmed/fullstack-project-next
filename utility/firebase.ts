import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkt3GeD-ECcoCi08-2GJGX5_QCKDV4G8U",
  authDomain: "login-auth-ce386.firebaseapp.com",
  projectId: "login-auth-ce386",
  storageBucket: "login-auth-ce386.appspot.com",
  messagingSenderId: "790401255172",
  appId: "1:790401255172:web:a7a2834bb306c5c2f9b251",
  measurementId: "G-0V0YD73P53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth };
