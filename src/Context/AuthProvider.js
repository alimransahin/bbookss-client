import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const signUpWithEmailPassword=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }
    const loginWithEmailPassword =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        signUpWithEmailPassword,
        loginWithEmailPassword,
        googleSignIn,
        loading, 
        setLoading,
        logOut
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