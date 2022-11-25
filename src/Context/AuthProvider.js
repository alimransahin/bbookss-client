import React, { createContext, useState } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;