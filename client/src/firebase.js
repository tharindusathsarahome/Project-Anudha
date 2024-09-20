// client/src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzm5jeicpjCdC8A1s9-HtaFFCGjlnNFcI",
    authDomain: "test-378b7.firebaseapp.com",
    projectId: "test-378b7",
    storageBucket: "test-378b7.appspot.com",
    messagingSenderId: "781565505396",
    appId: "1:781565505396:web:24f770852f357f41020621",
    measurementId: "G-CMZFBQFCPZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
