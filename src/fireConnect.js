import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUoEngmLIm_0N6dO6ds6jHQ-tSf_28EO4",
    authDomain: "memewebpage-63586.firebaseapp.com",
    projectId: "memewebpage-63586",
    storageBucket: "memewebpage-63586.appspot.com",
    messagingSenderId: "939856207166",
    appId: "1:939856207166:web:015091a0da3e8e0678606f"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//const auth = getAuth(app);
const db = firebase.firestore();
const auth = firebase.auth();


/*
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
*/
export {auth};
export default db;
