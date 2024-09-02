import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import menubg from "@assets/menubg.jpg";
import Navbar from '../Navbar/Navbar';

const IntroMenu = () => {
    return (
        <div className="relative h-[100vh] sm:h-[65vh]">
            <Parallax y={[-20, 20]} speed={-10} className='absolute inset-0'>
                <img src={menubg} alt="Menu Background" className="w-full h-full object-cover" />
            </Parallax>
            <div className="absolute top-0 left-0 right-0">
                <Navbar />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-gold font-bold text-6xl text-center mt-32">OUR MENU</h1>
            </div>
        </div>
    );
};

export default IntroMenu;
