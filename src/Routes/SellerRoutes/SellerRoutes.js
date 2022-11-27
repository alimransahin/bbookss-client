import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SellerRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user && user.userType === 'seller') {
        return children;
    }
    return <Navigate to='/'></Navigate>;
};
export default SellerRoutes;