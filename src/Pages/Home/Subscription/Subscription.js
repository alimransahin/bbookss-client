import React from 'react';

const Subscription = () => {
    return (
        <div className='shadow-xl my-6 '>
            <h1 className='text-4xl font-semibold text-center p-2 my-6  bg-indigo-700 text-white'>Subscription</h1>
            <div className="text-center">
            <input type="text" placeholder="Your Email" className="input input-bordered mb-4 input-info w-full max-w-xl" /><br/>
                <button className="btn btn-active btn-primary mb-4">Button</button>
            </div>
        </div>
    );
};

export default Subscription;