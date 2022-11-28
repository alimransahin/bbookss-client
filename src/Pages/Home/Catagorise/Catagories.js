import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Catagories = () => {
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        Axios.get(`https://bbookss-server.vercel.app/categories`)
        .then(data=>{
            setCategories(data.data);
        })
        .catch(err=>console.error(err))
    },[])
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center p-2 my-6  bg-indigo-700 text-white'>Catagories</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                    categories.map(category => 
                    <div key={category._id} className="card bg-base-100 shadow-xl">
                            <Link to={`/categories/${category._id}`}>
                        <figure className="px-10 pt-10">
                            <img src={category.img} alt="img" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{category.name}</h2>
                        </div>
                </Link>
                    </div>
                    )
            }
            </div>
        </div>
    );
};

export default Catagories;