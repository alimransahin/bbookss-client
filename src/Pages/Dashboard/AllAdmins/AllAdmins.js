import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllAdmins = () => {
    const { data: allAdmins = [], refetch } = useQuery({
        queryKey: ['allAdmins'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allusers/admin`);
            const result = await res.json();
            return result;
        }
    });

    return (
        <div>
            {
                allAdmins.length > 0 ? <>
                    <h3 className='text-4xl text-center mt-12 font-bold text-indigo-700 my-8'>All Admin </h3>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allAdmins.map(buyer => <tr key={buyer._id}>
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
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div></> :
                    <h3 className='text-4xl text-center mt-12 font-bold text-indigo-700 my-8'>No Admin Found</h3>
            }

        </div>
    );
};

export default AllAdmins;
