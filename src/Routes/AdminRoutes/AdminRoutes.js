import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AdminRoutes = ({children}) => {
    const {user}=useContext(AuthContext);

    if(user && user.userType==='admin'){
        return children;
    }
    return <Navigate to='/'></Navigate>;
};

export default AdminRoutes;