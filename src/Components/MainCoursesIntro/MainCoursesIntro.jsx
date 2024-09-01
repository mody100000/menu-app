import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import menu1 from "@assets/menu1.jpg";

const MainCoursesItro = () => {
    return (
        <div className='m-0 p-0 relative h-[75vh]'>
            <Parallax y={[-20, 20]} speed={-15} className="absolute inset-0">
                <img
                    src={menu1}
                    alt="Seafood platter"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
            </Parallax>
        </div>
    );
};

export default MainCoursesItro;