import {getAuth, onAuthStateChanged} from '@firebase/auth'
import {initializeApp} from 'firebase/app'
import React, { useState, useEffect, useContext, createContext } from 'react';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBUoEngmLIm_0N6dO6ds6jHQ-tSf_28EO4",
    authDomain: "memewebpage-63586.firebaseapp.com",
    projectId: "memewebpage-63586",
    storageBucket: "memewebpage-63586.appspot.com",
    messagingSenderId: "939856207166",
    appId: "1:939856207166:web:015091a0da3e8e0678606f"
});

//export const app = initializeApp(firebaseConfig);
//export const AuthContext = getAuth(app);

export const AuthContext = createContext()



export const AuthContextProvider = props => {
    const [user,setUser] = useState()
    const [error,setError] = useState()

    useEffect(()=>{
        const remove = onAuthStateChanged(getAuth(), setUser, setError)
        return () => remove()
    },[])

    return <AuthContext.Provider value={{user,error}} {...props}/>
}
export const currentAuthState = () => {
    const auth = useContext(AuthContext)
    return {...auth, isAuthenticated: auth.user !=null}
}

