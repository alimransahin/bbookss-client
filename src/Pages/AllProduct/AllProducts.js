import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import CardDetails from '../Shared/CardDetails/CardDetails';
import Loading from '../Shared/Loading/Loading';

const AllProducts = () => {
    const {loading}=useContext(AuthContext)
    const booksByCategory =useLoaderData();
    console.log(booksByCategory);
    if (loading){
        return <Loading></Loading>
    }
    return (
        <div>
            {
                booksByCategory?.length>0&&<>

            <h1 className='text-4xl font-semibold text-center p-2 my-6  bg-indigo-700 text-white'>Books by Category</h1>
            <div className='grid my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    booksByCategory?.map(book => <CardDetails key={book._id} book={book}></CardDetails>)
                }
            </div></>

            }

        </div>
    );
};
export default AllProducts;