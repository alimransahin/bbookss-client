import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyBuyers = () => {
    const {loading}=useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            
        </div>
    );
};

export default MyBuyers;