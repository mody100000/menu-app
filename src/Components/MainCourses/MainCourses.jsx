import React from 'react';

const menuItems = [
    { name: "Corn fed chicken", price: 17, description: "Wild mushrooms, truffle potatoes, braised leeks, carrots" },
    { name: "Nduja pork chicken terrine", price: 41, description: "Smoked duck breast, pistachio, smoked pancetta" },
    { name: "Pan seared scallops", price: 29, description: "Saffron, celeriac puree, black pudding, Parma ham" },
    { name: "Baked Camembert", price: 25, description: "Red onion marmalade, garlic Focaccia bread, grilled figs" },
    { name: "Braised ox cheek ravioli", price: 23, description: "Mediterranean olives casserole, celeriac puree, mushrooms" },
    { name: "Nduja pork chicken terrine", price: 41, description: "Smoked duck breast, pistachio, smoked pancetta" },
    { name: "Beef burger meal", price: 32, description: "Classic Greek salad, barrel-aged Feta cheese, pitta bread" },
    { name: "Roasted lamb rump", price: 25, description: "Grilled lamb cutlets, pomegranate glaze, butternut squash" },
    { name: "Pan seared sea bass", price: 38, description: "Saffron and mussels broth, new potatoes, edamame beans" },
    { name: "King prawns and lobster", price: 38, description: "Creamy saffron, sauce Vierge" },
    { name: "Citrus cured salmon", price: 41, description: "Horseradish creme fraiche, beetroot mousse, citrus oil" },
    { name: "Pan seared sea bass", price: 38, description: "Saffron and mussels broth, new potatoes, edamame beans" }
];


const MainCourses = () => {
    return (
        <div className="container mx-auto px-10 py-16 mt-24 h-full">
            <h3 className='text-xl text-gold font-miniver text-center mb-4'>Reservations</h3>
            <div className="flex items-center justify-center mb-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="mr-4">
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                </svg>
                <h2 className="text-4xl text-gold text-center">MAIN COURSES</h2>
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

export default MainCourses;