import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("null");

    const signUpWithEmailPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password);
        // return signUpWithEmailPassword(email,password);
    }


    const authInfo = {
        user,
        signUpWithEmailPassword
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;