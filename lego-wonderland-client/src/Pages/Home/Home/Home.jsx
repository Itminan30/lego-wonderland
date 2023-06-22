import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import { Helmet } from 'react-helmet-async';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Lego Wonderland</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;