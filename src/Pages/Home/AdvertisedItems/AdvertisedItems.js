import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CardDetails from '../../Shared/CardDetails/CardDetails';

const AdvertisedItems = () => {
    const { data: advertisedBooks = [], refetch } = useQuery({
        queryKey: ['advertisedBooks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts/advertise`);
            const result = await res.json();
            return result;
        }
    });
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center p-2 my-6  bg-indigo-700 text-white'>Advertised Items</h1>
            <div className='grid my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                advertisedBooks?.map(book =><CardDetails key={book._id} book={book}></CardDetails>)
            }
            </div>
            
        </div>
    );
};

export default AdvertisedItems;