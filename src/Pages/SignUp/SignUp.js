import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUpWithEmailPassword } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const imgHostKey = process.env.REACT_APP_imagebb_key;

    const handleSignUp = data => {
        setSignUpError('');
        const { userType, name, email, phone, img, address, password } = data;
        const image = img[0];
        signUpWithEmailPassword(email, password)
            .then(result => {
                toast.success('Sign Up Successfull');
                const formData = new FormData();
                formData.append('image', image);
                const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imageInfo => {
                        if (imageInfo.success) {
                            const image = imageInfo.data.url;
                            const userInfo = {
                                userType: userType,
                                name: name,
                                email:email,
                                phone:phone,
                                img: image,
                                address: address
                            }
                            console.log(userType, name, email, phone, image, address, password);
                            fetch(`http://localhost:5000/users`, {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(userInfo)
                            })
                                .then(res => res.json())
                                .then(data => console.log(data))

                        }
                    })
            })
            .catch(err => {
                const message = err.message;
                const sub = message.substring(message.indexOf('/') + 1, message.indexOf(')'));
                setSignUpError(sub);
                toast.error('Sign Up Failed')
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-8">
            <div className="hero-content w-full">
                <div className="card w-full max-w-xl shadow-2xl bg-base-100 p-8">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Type</span>
                                </label>
                                <select {...register('userType', {
                                    required: true
                                })} className="select select-bordered w-full">
                                    {/* <option disabled selected>Select type</option> */}
                                    <option value='buyer'>Buyer</option>
                                    <option value="seller">Seller</option>
                                </select>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", {
                                    required: "Name is Required"
                                })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', {
                                    required: "Email is Required "
                                })} placeholder="email" className="input input-bordered" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" {...register('phone',)} placeholder="Phone" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your img</span>
                                </label>
                                <input type="file" {...register('img')} placeholder="Phone" className="file-input file-input-bordered file-input-ghost  " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <textarea {...register('address', {
                                    required: "Address is Required "
                                })} className="textarea textarea-bordered" placeholder="Address"></textarea>
                                {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: "Password is Required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*-])(?=.*[0-9])(?=.*[a-z])/, message: "Password must have A-Z, a-z, 0-9, !@#$&*-" }
                                    })}
                                    placeholder="password" className="input input-bordered" />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                <label className="label">
                                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                                </label>

                            </div>
                            <div className="form-control">
                                <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;