import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrder = () => {
    const {loading}=useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            my orders
        </div>
    );
};

export default MyOrder;