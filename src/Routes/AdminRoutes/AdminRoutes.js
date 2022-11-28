import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    if (loading){
        return <Loading></Loading>
    }
    if(user && user.userType==='admin'){
        return children;
    }
    return <Navigate to='/'></Navigate>;
};

export default AdminRoutes;