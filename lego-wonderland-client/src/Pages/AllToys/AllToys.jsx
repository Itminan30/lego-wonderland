import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [query, setQuery] = useState("");
    const [toyData, setToyData] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_LINK}/toys?search=${query}`)
            .then(res => res.json())
            .then(data => setToyData(data))
    }, [query])

    // https://i.ibb.co/C19h785/legocar.jpg
    // https://i.ibb.co/ZJpdd0G/starwors.webp
    // https://i.ibb.co/kGfw2mJ/painting.jpg
    // https://i.ibb.co/0cTvDg7/minecraft.
    // https://i.ibb.co/SPsKq28/legofiretruck.jpg
    // https://i.ibb.co/jM81CRP/legoisland.png
    // https://i.ibb.co/CnpGr0j/legoninjago.webp
    // https://i.ibb.co/ssjghpN/legocity1.jpg
    // https://i.ibb.co/ctMcgwB/legobeach.jpg
    // https://i.ibb.co/GnGFtD9/recycleplant.jpg
    // https://i.ibb.co/HBXyTzs/technicjeep.jpg
    // https://i.ibb.co/cxH7kRJ/legospiderman.jpg

    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Lego Wonderland | All Toys</title>
            </Helmet>
            <h2 className='text-3xl font-bold text-center my-5'>All Toys</h2>
            <div className='my-5'>
                <input type="text" onChange={(e) => { setQuery(e.target.value) }} placeholder="Search Toys" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='my-5'>
                <div className="overflow-x-auto rounded-lg border">
                    <table className="table bg-slate-50">
                        {/* head */}
                        <thead className='border-b-4 rounded-lg'>
                            <tr>
                                <th className='text-lg font-bold'>Toy Name</th>
                                <th className='text-lg font-bold'>Seller</th>
                                <th className='text-lg font-bold'>Category</th>
                                <th className='text-lg font-bold'>Price</th>
                                <th className='text-lg font-bold'>Quantity</th>
                                <th className='text-lg font-bold'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                toyData.map(toy => (
                                    <tr className='border-b-2' key={toy._id}>
                                        <td className=''>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-24 h-24">
                                                        <img src={toy.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{toy.name}</div>
                                                    <div className="text-sm opacity-50">{toy.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {toy.sellerName}
                                        </td>
                                        <td>{toy.category}</td>
                                        <td>${toy.price}</td>
                                        <td>{toy.quantity}</td>
                                        <th>
                                            <Link to={`/toy/${toy._id}`}>
                                                <button className="btn bg-zinc-400 btn-xs">details</button>
                                            </Link>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;