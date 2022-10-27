import { getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const user = { displayName: 'Syed Zawad' }




    const providerSignInGoogle = provider => {
        return signInWithPopup(auth, provider);
    }


    const authInfo = { user, providerSignInGoogle }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;