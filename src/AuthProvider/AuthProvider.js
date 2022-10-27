import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { getAuth } from 'firebase/auth'
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
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