import React, { useContext, useState } from 'react';
import authImg from "../../assets/images/authentication/authenticationImg.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const [regError, setRegError] = useState("");

    const { createUser, updateUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

        if (password.length < 6) {
            setRegError("Password have to be 6 characters or more");
            return;
        }

        const user = {
            name,
            email,
            photo
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUser(name, photo)
                    .then(() => {
                        fetch(`${import.meta.env.VITE_API_LINK}/user`, {
                            method: "PATCH",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(user)
                        })
                        form.reset();
                        window.location.reload(false);
                    })
                    .catch(error => {
                        console.log(error);
                        setRegError(error.message);
                    })
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200 my-4 md:my-10">
            <Helmet>
                <title>Lego Wonderland | Register</title>
            </Helmet>
            <div className="hero-content grid grid-cols-1 gap-14 lg:grid-cols-2">
                <div className="">
                    <img src={authImg} alt="" />
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold mb-2">Register!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="URL" name="photo" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                                <span className="label-text-alt p-1 text-error">{regError}</span>
                            </div>
                            <div className="form-control mt-1 p-1">
                                <small>Already have an account!? <Link className="text-[#799eb0] font-bold" to="/login">Login</Link></small>
                            </div>
                            <div className="form-control mt-5">
                                <input className="btn bg-[#799eb0]" value="Register" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;