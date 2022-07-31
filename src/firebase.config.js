import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvO92YR6IO4DYpctGMNFBcc7a32hVjE3s",
  authDomain: "savings-tracker-app.firebaseapp.com",
  projectId: "savings-tracker-app",
  storageBucket: "savings-tracker-app.appspot.com",
  messagingSenderId: "47093320437",
  appId: "1:47093320437:web:85617e9ca3c8c9e8cf53bc",
  measurementId: "G-B31XZ36XT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const db = getFirestore()