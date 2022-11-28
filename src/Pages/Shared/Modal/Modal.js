import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../Loading/Loading';

const Modal = () => {
    const { user, loading, setLoading }=useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const { register, handleSubmit } = useForm();

   
    useEffect(() => {
        setLoading(true);
        fetch(`https://bbookss-server.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data[0]);
                setLoading(false);
            })
    }, [setUsers, setLoading, user])
    const handleBuyBook=()=>{

    }
    return (
        <div>
            <input type="checkbox" id="buyBooks" className="modal-toggle" />
            <div className="modal modal-bottom md:modal-middle">
                <div className="modal-box">
                    
                    <div className="hero py-16 bg-base-200 mb-8">
                        <div className="hero-content w-full">
                            <div className="card w-full max-w-xl shadow-2xl bg-base-100 p-8">
                                <div className="text-center ">
                                    <h1 className="text-5xl font-bold">Buy a Book</h1>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(handleBuyBook)}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Your Name</span>
                                            </label>
                                            <input type="text" {...register('buyerName')} value={users?.name} disabled className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Your Email</span>
                                            </label>
                                            <input type="text" {...register('buyerEmail')} value={users?.email} disabled  className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Items Name</span>
                                            </label>
                                            <input type="text" {...register('itemsName')} value={users?.email} disabled  className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input type="text" {...register('price')} value={users?.email} disabled className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input type="text" {...register('phone')} placeholder='Phone' className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Meet Location</span>
                                            </label>
                                            <input type="text" {...register('meetLocation')} placeholder="Meeting Location" className="input input-bordered" />
                                        </div>

                                        <div className="form-control ">
                                            <input className='btn btn-primary w-full mt-4' value="Add Book" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="modal-action">
                        <label htmlFor="buyBooks" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;