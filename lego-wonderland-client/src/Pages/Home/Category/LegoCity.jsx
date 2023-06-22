import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LegoCity = ({ legoCity, setLegoCity }) => {
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_LINK}/category?category=city`)
            .then(res => res.json())
            .then(data => setLegoCity(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-5'>
            {legoCity.map(city => <div>
                <div className="card w-96 bg-base-300 shadow-2xl">
                    <figure><img className="object-cover" src={city.photo} alt="Shoes" /></figure>
                    <div className="card-body bg-slate-100">
                        <h2 className="card-title text-2xl">{city.name}</h2>
                        <p><span className='font-semibold'>Price: </span>${city.price}</p>
                        <p><span className='font-semibold'>Quantity: </span>{city.quantity}</p>
                        <p><span className='font-semibold'>Rating: </span>{city.rating}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/toy/${city._id}`}>
                                <button className="btn btn-outline">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default LegoCity;