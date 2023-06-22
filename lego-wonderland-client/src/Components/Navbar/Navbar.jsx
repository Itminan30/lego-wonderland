import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo/logo.png"
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    // const user = {
    //     displayName: "Itminan",
    //     photoUrl: "https://images.unsplash.com/photo-1530695440407-21fef47230b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    // }
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const navList = <>
        <li className='font-semibold'><Link to="/">Home</Link></li>
        <li className='font-semibold'><Link to="/alltoys">All Toys</Link></li>
        {
            user && <>
                <li className='font-semibold'><Link to={`/mytoys`}>My Toys</Link></li>
                <li className='font-semibold'><Link to="/addtoys">Add Toys</Link></li>
            </>
        }

        <li className='font-semibold'><Link to="/blogs">Blogs</Link></li>
    </>

    const handleLogout = () => {
        logOut()
        .then(() => {
            navigate(location.pathname);
            console.log("User logged out");
        })
    }
    return (
        <div className=''>
            <div className="navbar bg-[#F8F6F4] mt-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                            {navList}
                        </ul>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <Link className='w-16 flex-0 md:w-32' to="/">
                            <img className='w-full' src={logo} alt="" />
                        </Link>
                        <p className='text-md md:text-2xl font-bold'>
                            <span>Lego</span> <br />
                            Wonderland
                        </p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="dropdown dropdown-end">
                            <div className="tooltip tooltip-bottom" data-tip={user ? user?.displayName : "No User"}>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                            </div>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w- z-10">
                                <li><Link to={`/mytoys`}>My Toys</Link></li>
                                <li><Link to="/addtoys">Add Toys</Link></li>
                                <li onClick={handleLogout}><Link>Logout</Link></li>
                            </ul>
                        </div>
                        :
                        <Link className='btn' to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;