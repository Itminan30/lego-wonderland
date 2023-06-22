import React, { useEffect } from 'react';
import img1 from "../../../assets/images/gallery/img1.jpg";
import img2 from "../../../assets/images/gallery/img2.jpg";
import img3 from "../../../assets/images/gallery/img3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" className='my-3 md:my-7'>
            <h2 className='text-center text-4xl font-bold my-5 text-slate-800'>Lego Gallery</h2>
            <p className='text-center text-sm font-semibold text-slate-400 my-5 w-11/12 md:w-3/4 mx-auto'>
                Immerse yourself in the captivating world of LEGO through our exclusive Lego gallery section. Feast your eyes on a stunning showcase of remarkable creations crafted by talented builders from around the globe. Marvel at intricate cityscapes, breathtaking spaceships, and imaginative fantasy realms brought to life brick by brick.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className=''>
                    <img src={img1} className='w-full rounded-lg' alt="" />
                </div>

                <div>
                    <img src={img2} className='w-full rounded-lg' alt="" />
                </div>

                <div>
                    <img src={img3} className='w-full rounded-lg' alt="" />
                </div>

                <div>
                    <img src={img1} className='w-full rounded-lg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;