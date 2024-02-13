/* Steps To Connect Project with Real Time Firebase Databse Available at4 

https://firebase.google.com/docs/web/setup#add-sdk-and-initialize
https://firebase.google.com/docs/database/web/start

*/

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth }; // Export Firebase services

