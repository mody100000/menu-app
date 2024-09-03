import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import AboutUsBg from "@assets/AboutUsBg.jpg";
import Navbar from '../../Navbar/Navbar';

const IntroAboutUs = () => {
    return (
        <div className="relative h-[100vh] sm:h-[65vh]">
            <Parallax y={[-20, 20]} speed={-10} className='absolute inset-0'>
                <img src={AboutUsBg} alt="Menu Background" className="w-full h-full object-cover" />
            </Parallax>
            <div className="absolute top-0 left-0 right-0">
                <Navbar />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-gold font-semibold leading-[61px] text-6xl text-center mt-32">ABOUT US</h1>
            </div>
        </div>
    );
};

export default IntroAboutUs;
