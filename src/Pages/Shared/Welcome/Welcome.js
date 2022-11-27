import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Welcome = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h3 className='text-4xl text-center mt-12 font-bold text-indigo-700'>Welcome {user?.name} </h3>
        </div>
    );
};

export default Welcome;