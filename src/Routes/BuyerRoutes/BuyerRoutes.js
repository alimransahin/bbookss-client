import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const BuyerRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user && user.userType === 'buyer') {
        return children;
    }
    return <Navigate to='/'></Navigate>;
};

export default BuyerRoutes;