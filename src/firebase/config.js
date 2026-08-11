import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP4NB3K9pPTz6n2LnlCc-5ABvbyTUWkxY",
  authDomain: "reve-cult-corporate-gifting.firebaseapp.com",
  projectId: "reve-cult-corporate-gifting",
  storageBucket: "reve-cult-corporate-gifting.firebasestorage.app",
  messagingSenderId: "259264931486",
  appId: "1:259264931486:web:32565f8e29c100bd80bd8f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;