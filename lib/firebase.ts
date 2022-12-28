import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDuu1Rma1iWYu8Px_vO5VJv160MQzc5sJ4',
  authDomain: 'netflix-clone-137c0.firebaseapp.com',
  projectId: 'netflix-clone-137c0',
  storageBucket: 'netflix-clone-137c0.appspot.com',
  messagingSenderId: '29142833772',
  appId: '1:29142833772:web:33dd841073a3d76fbd5649',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
