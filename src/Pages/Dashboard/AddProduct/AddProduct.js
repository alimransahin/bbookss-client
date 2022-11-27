import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';


const AddProduct = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);

        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
    }, [setCategories, setLoading])

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data[0]);
                setLoading(false);
            })
    }, [setUsers, setLoading, user])

    const handleAddBook = data => {
        const imgHostKey = process.env.REACT_APP_imagebb_key;
        const { bookName, category, condition, description, img, orginalPrice, resalePrice, purchasedyear } = data;
        const image = img[0];
        setLoading(true);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageInfo => {
                setLoading(false);
                if (imageInfo.success) {
                    const image = imageInfo.data.url;
                    const booksInfo = {
                        bookName,
                        condition,
                        description,
                        orginalPrice,
                        resalePrice,
                        purchasedyear,
                        categoryId: category,
                        img: image,
                        sellerEmail: users.email

                    }
                    console.log(booksInfo);
                    fetch(`http://localhost:5000/addproducts`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(booksInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('product addedd successfull');
                            navigate('/dashboard/myproducts');
                        })

                }
            })
    }


    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="hero py-16 bg-base-200 mb-8">
            <div className="hero-content w-full">
                <div className="card w-full max-w-xl shadow-2xl bg-base-100 p-8">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Add a Book</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleAddBook)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Book Name</span>
                                </label>
                                <input type="text" {...register('bookName')} placeholder="Book Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Book Category</span>
                                </label>
                                <select className="select select-bordered w-full " {...register('category')}>
                                    <option disabled selected>Select</option>
                                    {
                                        categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)
                                    }
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Orginal Price</span>
                                </label>
                                <input type="text" {...register('orginalPrice')} placeholder="Orginal Price" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resale Price</span>
                                </label>
                                <input type="text" {...register('resalePrice')} placeholder="Resale Price" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Condition</span>
                                </label>
                                <select className="select select-bordered w-full" {...register('condition')} >

                                    <option disabled selected>Select An Option</option>
                                    <option value="excillent">Excillent</option>
                                    <option value="good">Good</option>
                                    <option value="fair"> Fair</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Year of Purchase</span>
                                </label>
                                <input type="text" {...register('purchasedyear')} placeholder="Year of Purchase" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" {...register('phone')} disabled defaultValue={users?.phone} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" {...register('location')} disabled value={users?.address} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Books img</span>
                                </label>
                                <input type="file" {...register('img')} className="file-input file-input-bordered file-input-ghost  " />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea {...register('description', {
                                })} className="textarea textarea-bordered" placeholder="Description"></textarea>
                            </div>

                            <div className="form-control">
                                <input className='btn btn-primary w-full mt-4' value="Add Book" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;