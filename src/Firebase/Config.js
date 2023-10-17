import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCzeTqyxvuihhNX75jzMensMMfiBiuz03I",
  authDomain: "rsr-firegram.firebaseapp.com",
  projectId: "rsr-firegram",
  storageBucket: "rsr-firegram.appspot.com",
  messagingSenderId: "806799817920",
  appId: "1:806799817920:web:7d7238757edc5860b70125"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const projectStorage = getStorage();

export { db, projectStorage };