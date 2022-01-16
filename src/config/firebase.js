import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBIH187s2V3-AGQ5_-7CyeL2QkUrxaiv5o",
  authDomain: "reactflix-ed4ff.firebaseapp.com",
  databaseURL: "https://reactflix-ed4ff-default-rtdb.firebaseio.com",
  projectId: "reactflix-ed4ff",
  storageBucket: "reactflix-ed4ff.appspot.com",
  messagingSenderId: "837071440587",
  appId: "1:837071440587:web:b52bfb7ebecc88f078694e",
  measurementId: "G-29KQP9G2LE",
});

export const db = getDatabase(firebaseApp);
