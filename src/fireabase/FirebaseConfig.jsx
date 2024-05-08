// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries







// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA82KMeDG3fqVX6LhgfzjDMaHnUDoOnONE",
  authDomain: "myfirstapp-e6274.firebaseapp.com",
  projectId: "myfirstapp-e6274",
  storageBucket: "myfirstapp-e6274.appspot.com",
  messagingSenderId: "325322928227",
  appId: "1:325322928227:web:7b9db5957bdc07dffc4856",
  measurementId: "G-M520N319NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth } ;