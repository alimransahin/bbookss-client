import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';



const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUpWithEmailPassword }=useContext(AuthContext);

    const handleSignUp = (data) => {
        // console.log(data);
        const { userType, name, email, phone, img, address, password } = data;
        console.log(userType, name, email, phone, img, address, password);
        signUpWithEmailPassword(email,password)
        .then(result=>{
            
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
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", {
                                    required: "Name is Required"
                                })} placeholder="Name" className="input input-bordered" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', {
                                    required: true
                                })} placeholder="email" className="input input-bordered" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" {...register('phone', {
                                    required: true
                                })} placeholder="Phone" className="input input-bordered" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your img</span>
                                </label>
                                <input type="file" {...register('img', {
                                    required: true
                                })} placeholder="Phone" className="file-input file-input-bordered file-input-ghost  " />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <textarea {...register('address', {
                                        required: true
                                    })}  className="textarea textarea-bordered" placeholder="Address"></textarea>
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', {
                                    required: true
                                })} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control mt-6">
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