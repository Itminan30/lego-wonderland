import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { HelmetProvider } from 'react-helmet-async';

const Main = () => {
    const helmetContext = {};
    return (
        <div className='w-full md:w-4/5 mx-auto'>
            <HelmetProvider context={helmetContext}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </HelmetProvider>
        </div>
    );
};

export default Main; <Outlet></Outlet>