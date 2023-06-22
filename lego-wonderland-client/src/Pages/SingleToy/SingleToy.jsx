import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const toy = useLoaderData();
    const { name, photo, sellerName, sellerEmail, price, quantity, rating, description } = toy;
    return (
        <div className='border-b-2 my-5 bg-[#95b2c6]'>
            <h2 className='text-2xl md:text-3xl font-bold text-center my-5 border-t-2 border-b-2 p-3 bg-[#afc6d4]'>{name}</h2>
            <div className='flex flex-col md:flex-row gap-5 rounded-lg items-center border my-5 w-11/12 mx-auto bg-[#dde6ed]'>
                <div className='w-1/2 md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 h-auto p-3'>
                    <img className='w-full rounded-lg' src={photo} alt="" />
                </div>
                <div className='space-y-2 m-5'>
                    <h3><span className='font-semibold'>Seller Name: </span> {sellerName}</h3>
                    <h3><span className='font-semibold'>Seller Email: </span> {sellerEmail}</h3>
                    <h3><span className='font-semibold'>Toy Price: </span> ${price}</h3>
                    <h3><span className='font-semibold'>Available Quantity: </span> ${quantity}</h3>
                    <h3><span className='font-semibold'>Rating: </span> {rating}</h3>
                    <p className='text-slate-600 font-semibold'>
                        <span className='text-black'>Description:</span> <br />
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;