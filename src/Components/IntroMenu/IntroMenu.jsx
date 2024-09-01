import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import menubg from "@assets/menubg.jpg";

const IntroMenu = () => {
    return (
        <div className='m-0 p-0 relative h-[75vh]'>
            <Parallax y={[-20, 20]} speed={-15} className="absolute inset-0">
                <img
                    src={menubg}
                    alt="Seafood platter"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
            </Parallax>
            <div className="relative z-10 h-full flex items-center justify-center">
                <h1 className="text-6xl text-gold">OUR MENU</h1>
            </div>
        </div>
    );
};

export default IntroMenu;