import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {loginWithEmailPassword}=useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const handleSignIn=(data)=>{
        setSignUpError('');
        const { email, password } = data;
        loginWithEmailPassword(email,password)
            .then(result => {
                toast.success('Log In Successfull');
            })
            .catch(err => {
                const message = err.message;
                const sub = message.substring(message.indexOf('/') + 1, message.indexOf(')'));
                setSignUpError(sub);
                toast.error('Log In Failed')
            })

    }
    return (
        <div className="hero py-16 bg-base-200 mb-8">
            <div className="hero-content w-full">
                <div className="card w-full max-w-xl shadow-2xl bg-base-100 p-8">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSignIn)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                                <input type="text" {...register('email')} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                                <input type="password" {...register('password')} placeholder="password" className="input input-bordered" />
                            <label className="label">
                                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>

                            </label>
                        </div>
                        <div className="form-control">
                                <input className='btn btn-primary w-full mt-4' value="Log In" type="submit" />
                        </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Login;