import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);




    const providerSignIn = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            setLoading(false);
            console.log('observing current user', currentuser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, providerSignIn, logOut, createUser }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;