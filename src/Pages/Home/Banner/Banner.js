import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        Axios.get(`https://bbookss-server.vercel.app/categories`)
            .then(data => {
                setCategories(data.data);
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <div>

            <div className="carousel w-full">
                {
                    categories.map((category, i) => <div key={category._id} id={i} className="carousel-item relative w-full max-h-96">
                        <img src={category.img} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <Link to={`#${i-1}`} className="btn btn-circle">❮</Link>
                            <Link to={`#${i + 1}`} className="btn btn-circle">❯</Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Banner;