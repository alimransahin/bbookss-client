import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const { user,loading, setLoading }=useContext(AuthContext);
    
    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://bbookss-server.vercel.app/myProducts/${user?.email}`);
            const result = await res.json();
            return result;
        }
    });

    const handleBookDelete = (id) => {
        fetch(`https://bbookss-server.vercel.app/products/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Book Delete Successfull")
                    refetch()
                }
            })
    }
    const handleAdvertise = (id) => {
        console.log('handleAdvertise');
        fetch(`https://bbookss-server.vercel.app/myProducts/advertise/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Books Added in advertised Successfull")
                    refetch();
                }
            })
    }

   
    return (
        <div>
            {
                myProducts.length > 0 ? <>
                    <h3 className='text-4xl text-center mt-12 font-bold text-indigo-700 my-8'>My book </h3>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Resele Price</th>
                                    <th>Sold Status</th>
                                    <th>Advertise Status</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myProducts.map(book => <tr key={book._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={book?.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{book.bookName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{book?.resalePrice}</td>
                                        <td>{book?.soldStatus ? "Solded" : "Unsold"}</td>
                                        <td>{book?.advertise ? "Advertised" : <button on onClick={() => handleAdvertise(book._id)} className="btn btn-accent btn-xs">Advertise</button>}</td>
                                        <th>
                                            <button on onClick={() => handleBookDelete(book._id)} className="btn btn-error btn-xs">Delete</button>
                                        </th>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div></> :
                    <h3 className='text-4xl text-center mt-12 font-bold text-indigo-700 my-8'>No Product Found</h3>
            }

        </div>
    );
};

export default MyProducts;