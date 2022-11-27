import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup  } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            !currentUser?.email?
            setUser(null):
            fetch(`http://localhost:5000/users/${currentUser.email}`)
                .then(res => res.json())
                .then(data => {
                    setUser(data[0]);
                })
                
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const signUpWithEmailPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password);
    }
    const loginWithEmailPassword =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn=(provider)=>{
        return signInWithPopup(auth,provider);
    }


    const authInfo = {
        user,
        signUpWithEmailPassword,
        loginWithEmailPassword,
        googleSignIn
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