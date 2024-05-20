import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCfjDRlflcsByC8mkYSu-Ob1MbY-n5x0Wc",
  authDomain: "fyp-testing-aa31e.firebaseapp.com",
  projectId: "fyp-testing-aa31e",
  storageBucket: "fyp-testing-aa31e.appspot.com",
  messagingSenderId: "370928998241",
  appId: "1:370928998241:web:7c1b9b113cac75e1f5d720",
  measurementId: "G-05RY019C5G"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);