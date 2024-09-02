import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-center space-x-10 mt-10 text-xl">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'border-b-2 border-gold text-gold' : 'text-white'
                    }
                >
                    Menu
                </NavLink>
                <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                        isActive ? 'border-b-2 border-gold text-gold' : 'text-white'
                    }
                >
                    Contact Us
                </NavLink>
                <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                        isActive ? 'border-b-2 border-gold text-gold' : 'text-white'
                    }
                >
                    About Us
                </NavLink>
            </nav>
            <div className="border-b-[1px] border-[#c8aa8180] w-[85%] mx-auto mt-7"></div>
        </>
    );
};

export default Navbar;
