import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyC1xmpXJtt-MZotpqUS3w_kofYlI2IzabA",
  authDomain: "somnapplikation.firebaseapp.com",
  databaseURL: "https://somnapplikation-default-rtdb.firebaseio.com",
  projectId: "somnapplikation",
  storageBucket: "somnapplikation.firebasestorage.app",
  messagingSenderId: "699624791554",
  appId: "1:699624791554:web:5344735122be237762d11b"
};

// Initialize Firebase app with config
const app = initializeApp(firebaseConfig);

// Get Realtime Database instance (used for storing reading logs)
const rdb = getDatabase(app);

// Export Realtime Database instance for use in App.jsx
export { rdb };