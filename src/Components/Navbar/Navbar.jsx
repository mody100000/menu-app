import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-center space-x-7 sm:space-x-20 text-xl font-comingSoon relative z-10">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'border-b-2 border-gold text-gold mt-10' : 'text-white mt-10'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                        isActive ? 'border-b-2 border-gold text-gold mt-10' : 'text-white mt-10'
                    }
                >
                    Menu
                </NavLink>
                <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                        isActive ? 'border-b-2 border-gold text-gold mt-10' : 'text-white mt-10'
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                        isActive ? 'border-b-2 border-gold text-gold mt-10' : 'text-white mt-10'
                    }
                >
                    Contact Us
                </NavLink>
            </nav>
            <div className="border-b-[1px] border-[#c8aa8180] w-[100%] mx-auto mt-7 z-10 relative"></div>
        </>
    );
};

export default Navbar;
