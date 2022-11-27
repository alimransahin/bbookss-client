import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { loginWithEmailPassword, googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [signInError, setSignInError] = useState('');
    const googleProvider = new GoogleAuthProvider();


    const handleSignIn = (data) => {
        setSignInError('');
        const { email, password } = data;
        fetch(`http://localhost:5000/users/${email}`)
        .then(res=>res.json())
        .then(result=>{
            if(result.length>0){
                loginWithEmailPassword(email, password)
                    .then(result => {
                        toast.success('Log In Successfull');
                    })
                    .catch(err => {
                        const message = err.message;
                        const sub = message.substring(message.indexOf('/') + 1, message.indexOf(')'));
                        setSignInError(sub);
                        toast.error('Log In Failed')
                    })
            }
            else{
                setSignInError("User Email Not Found");
            }
        })
        

    }
    const handleGoogle = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user
                fetch(`http://localhost:5000/users/${user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.length===0) {
                            const userInfo = {
                                userType: 'buyer',
                                name: user.displayName,
                                email: user.email,
                                img: user.photoURL
                            }
                            console.log(userInfo);
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
            .catch(error => console.log(error))
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
                                    {signInError && <p className='text-red-600'>{signInError}</p>}
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>

                                </label>
                            </div>
                            <div className="form-control">
                                <input className='btn btn-primary w-full mt-4' value="Log In" type="submit" />
                            </div>
                        </form>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogle} className='btn btn-ghost btn-outline w-full mt-4'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;