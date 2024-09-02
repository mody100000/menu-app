import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const menuItems = [
    { name: "Four Cheese Garlic Bread", price: 32, description: "Toasted French bread topped with romano, cheddar" },
    { name: "Shrimp Scampi", price: 25, description: "Jumbo shrimp sauteed in white wine, butter and garlic" },
    { name: "Fried Calamari", price: 38, description: "Breaded calamari, lightly fried in canola oil" },
    { name: "Peachy Jalapeno Guacamole", price: 38, description: "Ground cumin, avocados, peeled and cubed" },
    { name: "Rastrami Roll", price: 29, description: "Spreadable cream cheese, crumbled blue cheese" },
    { name: "Brownie Batter Dip", price: 25, description: "Cream cheese, softened butter, brown sugar" },
    { name: "Caprese Salad Kabobs", price: 23, description: "Cherry-size fresh mozzarella cheese balls" },
    { name: "Shrimp Scampi", price: 17, description: "Jumbo shrimp sauteed in white wine, butter and garlic" }
];

const AppetizersMenu = () => {
    return (
        <div className="container mx-auto px-10 py-16 mt-24 h-full">
            <h3 className='text-xl text-gold font-miniver text-center mb-4'>Starters</h3>
            <div className="flex items-center justify-center mb-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="mr-4">
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                </svg>
                <h2 className="text-4xl text-gold ">APPETIZERS</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="ml-4">
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-20">
                {menuItems.map((item, index) => (
                    <div key={index} className="border-b border-gold/30 pb-4">
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-xl">{item.name}</h3>
                            <span className="text-xl">${item.price}</span>
                        </div>
                        <p className="text-sm text-white mt-1 font-josefin">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppetizersMenu;