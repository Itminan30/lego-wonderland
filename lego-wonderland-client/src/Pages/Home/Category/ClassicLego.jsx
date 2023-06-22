import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ClassicLego = ({ classicLego, setClassicLego }) => {
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_LINK}/category?category=classic`)
        .then(res => res.json())
        .then(data => setClassicLego(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-5'>
            {classicLego.map(classic => <div>
                <div className="card w-96 bg-base-300 shadow-2xl">
                    <figure><img className="object-cover" src={classic.photo} alt="Shoes" /></figure>
                    <div className="card-body bg-slate-100">
                        <h2 className="card-title text-2xl">{classic.name}</h2>
                        <p><span className='font-semibold'>Price: </span>${classic.price}</p>
                        <p><span className='font-semibold'>Quantity: </span>{classic.quantity}</p>
                        <p><span className='font-semibold'>Rating: </span>{classic.rating}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/toy/${classic._id}`}>
                                <button className="btn btn-outline">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default ClassicLego;