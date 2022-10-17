import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBUoEngmLIm_0N6dO6ds6jHQ-tSf_28EO4",
    authDomain: "memewebpage-63586.firebaseapp.com",
    projectId: "memewebpage-63586",
    storageBucket: "memewebpage-63586.appspot.com",
    messagingSenderId: "939856207166",
    appId: "1:939856207166:web:015091a0da3e8e0678606f"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

