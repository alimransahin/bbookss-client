import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../Loading/Loading';

const CardDetails = ({book}) => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [seller, setSeller] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(`https://bbookss-server.vercel.app/users/${book?.sellerEmail}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data[0]);
                setLoading(false);
            })
    }, [setSeller, setLoading, book])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={book.img} alt="book" className="h-40 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{book.bookName}</h2>
                <p>{book.description}</p>
                <p className='text-lg'>Resele Price:{book.resalePrice}</p>
                <p className='text-lg'>Orginal Price:{book.orginalPrice}</p>
                <p className='text-lg'>Seller Location:{book.sellerAddress}</p>
                <p className='text-lg'>Years of Use:{book.perchedYear}</p>
                <p className='text-lg'><small>Posts time:{ }</small></p>
                <p className='text-3xl font-bold'>Seller:{seller?.name} {seller?.status === 'Verified' && <img className='h-4 w-4 inline-block' src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Eo_circle_light-blue_checkmark.svg" alt="" /> }</p>
                <div className="card-actions">
                    <label htmlFor="buyBooks"  className="btn btn-primary">Buy Now</label>
                </div>
            </div>
           



        </div>
    )
};

export default CardDetails;