import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../Loading/Loading';

const Welcome = () => {
    const {user, loading}=useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-4xl text-center mt-12 font-bold text-indigo-700'>Welcome {user?.name} </h3>
        </div>
    );
};

export default Welcome;