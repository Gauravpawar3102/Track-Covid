// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlv5ir1_AIM32WxlnEc3PMwDIrerooEfg',
  authDomain: 'track-covid-5c22c.firebaseapp.com',
  projectId: 'track-covid-5c22c',
  storageBucket: 'track-covid-5c22c.appspot.com',
  messagingSenderId: '567662667623',
  appId: '1:567662667623:web:b12564cae69e39618ff1c2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
