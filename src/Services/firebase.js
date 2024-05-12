import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNEJTfzSF0n16HhbYtkK-mXDK0FUjyyW0",
  authDomain: "myblog-ff55b.firebaseapp.com",
  projectId: "myblog-ff55b",
  storageBucket: "myblog-ff55b.appspot.com",
  messagingSenderId: "947882157837",
  appId: "1:947882157837:web:95b1f669fcd17dfee03244",
  measurementId: "G-LFQTE4CJS4"
};

export const AppConfigFirebase = initializeApp(firebaseConfig)