
import React from 'react';

const menuItems = [
    { name: "Creole Cream Cheesecake", price: 17, description: "Creole cream cheese, chocolate filigree, and warm caramel" },
    { name: "Bananas Foster", price: 41, description: "Bananas with Caribbean rum served with vanilla ice cream" },
    { name: "Southern Pecan Pie", price: 29, description: "Warm buttery caramel, chocolate syrup, and ice cream" },
    { name: "Lemon Meringue Pie", price: 32, description: "Dark chocolate mousse, candied pecan crunch, and caramel" },
    { name: "Bananas Foster", price: 25, description: "Bananas with Caribbean rum served with vanilla ice cream" },
    { name: "Texas Apple Cobbler", price: 38, description: "Southern Pecan Streusel, creole cream, and cheese ice cream" }
];


const Desserts = () => {
    return (
        <div className="container mx-auto px-10 py-16 mt-24 h-screen">
            <h3 className='text-xl text-gold font-miniver text-center mb-4'>Sweet dreams </h3>
            <div className="flex items-center justify-center mb-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="mr-4">
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                </svg>
                <h2 className="text-4xl text-gold text-center">DESSERTS</h2>
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
                        <p className="text-sm text-white mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Desserts;