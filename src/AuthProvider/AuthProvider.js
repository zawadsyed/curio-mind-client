import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { getAuth } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = { displayName: 'zawad' }
    const authInfo = { user }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;