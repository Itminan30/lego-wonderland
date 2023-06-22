import React, { useContext } from 'react';
import altBackgroundImg from "../../assets/images/background/altBackgroundImg.jpg"
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddToys = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(name, sellerEmail, sellerName, photo, category, price, rating, quantity, description);
        const toy = { name, sellerEmail, sellerName, photo, category, price, rating, quantity, description }

        fetch(`${import.meta.env.VITE_API_LINK}/addtoy`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        // position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/mytoys")
                }
            })
    }
    return (
        <div style={{ backgroundImage: `url(${altBackgroundImg})` }} className="h-fit my-5 rounded-lg bg-none md:bg-cover flex justify-center md:justify-end items-center">
            <Helmet>
                <title>Lego Wonderland | Add Toys</title>
            </Helmet>
            <div className='w-full md:w-1/2 px-8 md:px-14 py-7 md:py-10 m-5 md:m-10 rounded-lg bg-slate-100'>
                <h2 className='text-3xl font-bold text-center'>
                    Add toys
                </h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='space-y-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Toy Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Toy Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Seller Name</span>
                                </label>
                                <input type="text" name='sellerName' required placeholder="Seller Name" defaultValue={user.displayName} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Seller Email</span>
                                </label>
                                <input type="text" name='sellerEmail' required placeholder="Seller Email" defaultValue={user.email} className="input input-bordered w-full" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Image</span>
                                </label>
                                <input type="text" name='photo' required placeholder="Image" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Select Toy Category</span>
                                </label>
                                <select name='category' defaultValue={"DEFAULT"} required className="select select-bordered">
                                    <option disabled value={"DEFAULT"}>Category</option>
                                    <option value="Classic">Classic Lego</option>
                                    <option value="Lego City">Lego City</option>
                                    <option value="Lego Rides">Lego Rides</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <input type="number" name='price' required placeholder="$$$" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Rating</span>
                                </label>
                                <input type="text" name='rating' required placeholder="Rating" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Available Quantity</span>
                                </label>
                                <input type="text" name='quantity' required placeholder="Quantity" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Toy Description</span>
                                </label>
                                <textarea name='description' required placeholder="Description" className="textarea textarea-bordered textarea-md h-40" ></textarea>
                            </div>
                            <input type='submit' className="btn btn-block bg-slate-500" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;