import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UpdateModal = ({ toy }) => {
    const [showModal, setShowModal] = useState(false);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const id = toy?._id;

        const updateDoc = {
            price, quantity, description, photo, id
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update Toy!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_LINK}/updatetoy/${toy?._id}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updateDoc)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Update Succesful!',
                                'Your Toy has been Updated.',
                                'success'
                            )
                            location.reload();
                        }
                    })
            }
        })

    }
    return (
        <div>
            <button
                className="btn bg-zinc-400 btn-xs"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Update Toy
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-3/4 md:w-1/3 my-6 mx-auto max-w-4xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <h2 className='text-center mt-3 text-xl text-neutral-700'>Update {toy.name}</h2>
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleUpdate} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full space-y-2">
                                        <div>
                                            <label className="block text-black text-sm font-semibold mb-1">
                                                Price
                                            </label>
                                            <input defaultValue={toy?.price} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" name='price' />
                                        </div>
                                        <div>
                                            <label className="block text-black text-sm font-semibold mb-1">
                                                Quantity
                                            </label>
                                            <input defaultValue={toy?.quantity} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" name='quantity' />
                                        </div>
                                        <div>
                                            <label className="block text-black text-sm font-semibold mb-1">
                                                Description
                                            </label>
                                            <input defaultValue={toy?.description} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" name='description' />
                                        </div>
                                        <div>
                                            <label className="block text-black text-sm font-semibold mb-1">
                                                Photo Url
                                            </label>
                                            <input defaultValue={toy?.photo} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" name='photo' />
                                        </div>
                                        <div className="flex items-center justify-end pt-3 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <input
                                                className="font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="Submit"
                                                defaultValue="Update"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default UpdateModal;