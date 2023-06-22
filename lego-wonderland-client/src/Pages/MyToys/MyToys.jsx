import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import UpdateModal from './UpdateModal';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sort, setSort] = useState("asc");
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_LINK}/mytoys/${user.email}?sort=${sort}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [sort])

    const handleDelete = id => {
        const toyId = id;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_LINK}/deletetoy/${toyId}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const newToyList = toys.filter(toy => toy._id !== toyId);
                            setToys(newToyList);
                        }
                    })
            }
        })

    }

    return (
        <div>
            <Helmet>
                <title>Lego Wonderland | My Toys</title>
            </Helmet>
            <h2 className='text-3xl font-bold text-center my-5'>My Toys</h2>
            <div className='flex justify-end gap-8'>
                <button onClick={() => { setSort("asc") }} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Ascending (Price)</button>
                <button onClick={() => { setSort("desc") }} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Descending (Price)</button>
            </div>
            <div>
                <div className='my-5'>
                    <div className="overflow-x-auto rounded-lg border">
                        <table className="table bg-slate-50">
                            {/* head */}
                            <thead className='border-b-4 rounded-lg'>
                                <tr>
                                    <th className='text-lg font-bold'>Toy Name</th>
                                    <th className='text-lg font-bold'>Description</th>
                                    <th className='text-lg font-bold'>Category</th>
                                    <th className='text-lg font-bold'>Price</th>
                                    <th className='text-lg font-bold'>Quantity</th>
                                    <th className='text-lg font-bold'></th>
                                    <th className='text-lg font-bold'></th>
                                    <th className='text-lg font-bold'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    toys.map(toy => (
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
                                                <p>
                                                    {toy.description}
                                                </p>
                                            </td>
                                            <td>{toy.category}</td>
                                            <td>${toy.price}</td>
                                            <td>{toy.quantity}</td>
                                            <th>
                                                <Link to={`/toy/${toy._id}`}>
                                                    <button className="btn bg-zinc-400 btn-xs">details</button>
                                                </Link>
                                            </th>
                                            <th>
                                                <UpdateModal toy={toy}></UpdateModal>
                                            </th>
                                            <th>
                                                <button onClick={() => { handleDelete(toy._id) }} className="btn bg-zinc-400 btn-xs">Delete Toy</button>
                                            </th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToys;