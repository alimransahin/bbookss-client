import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allusers/seller`);
            const result = await res.json();
            return result;
        }
    });

    const handleUserDelete = (id) => {
        fetch(`http://localhost:5000/allusers/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("User Delete Successfull")
                    refetch()
                }
            })
    }

    return (
        <div>
            {
                allSellers.length > 0 ? <>
                    <h3 className='text-4xl text-center mt-12 font-bold text-indigo-700 my-8'>All Seller </h3>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allSellers.map(buyer => <tr key={buyer._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={buyer?.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{buyer.name}</div>
                                                    <div className="text-sm opacity-50">{buyer?.address}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{buyer.email}</td>
                                        <td>{buyer.phone}</td>
                                        <th>
                                            <button on onClick={() => handleUserDelete(buyer._id)} className="btn btn-error btn-xs">Delete</button>
                                        </th>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div></> :
                    <h3 className='text-4xl text-center mt-12 font-bold text-indigo-700 my-8'>No Seller Found</h3>
            }

        </div>
    );
};

export default AllSellers;
