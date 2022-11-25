import Axios from 'axios';
import React, { useEffect } from 'react';

const Catagories = () => {
    useEffect(()=>{
        Axios.get(`http://localhost:5000/categories`)
        .then(result=>console.log(result.data))
        .catch(err=>console.error(err))
    },[])
    return (
        <div>
            catagories
        </div>
    );
};

export default Catagories;