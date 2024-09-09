import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
    { name: "Beef Burger Meal", price: 32, description: "Classic Greek salad, barrel aged feta cheese, bread" },
    { name: "Roasted Lamb Rump", price: 25, description: "Grilled lamb cutlets, pomegranate glaze, butternut squash" },
    { name: "Pan Seared Sea Bass", price: 38, description: "Saffron and mussel’s broth, new potatoes, edamame beans" },
    { name: "King Prawns and Lobster", price: 38, description: "Creamy saffron, sauce Vierge" },
    { name: "Citrus Cured Salmon", price: 41, description: "Horseradish creme fraiche, beetroot mousse, oil" },
    { name: "Pan Seared Scallops", price: 29, description: "Saffron, celeriac puree, black pudding, olive oil" },
    { name: "Baked Camembert", price: 25, description: "Red onion marmalade, garlic Focaccia bread, grilled figs" },
    { name: "Braised Ox Cheek Ravioli", price: 23, description: "Mediterranean olives casserole, celeriac puree, mushrooms" },
    { name: "Corn Fed Chicken", price: 17, description: "Wild mushrooms, truffle potatoes, braised leeks, carrots" },
    { name: "Nduja Pork Chicken Terrine", price: 41, description: "Smoked duck breast, pistachio, smoked pancetta" }
];

const MenuSelection = () => {
    return (
        <div className="relative container mx-auto px-10 lg:px-40 py-10 bg-[#0F1D22] h-full">
            <div className='py-20 sm:py-20'>
                <h3 className='text-xl text-gold font-miniver text-center mb-4'>Special selection</h3>
                <div className="flex items-center justify-center mb-16">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="mr-4 overflow-visible">
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path>
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path>
                    </svg>
                    <h2 className="text-2xl sm:text-5xl tracking-widest text-center font-semibold text-gold ">From our menu</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146" className="ml-4 overflow-visible">
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
                <div className="flex justify-center mt-16">
                    {/* //TODO:scrollToTheTopAfterNavegation */}
                    <Link to="/menu">
                        <button className="border border-gold tracking-widest px-11 font-comingSoon py-3 text-white hover:bg-gold hover:text-black transition duration-300">
                            VIEW MORE
                        </button>
                    </Link>
                </div>
            </div>
            {/* SVG positioned at the bottom left */}
            <div className="absolute bottom-0 left-[-70px] z-0 hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="eltdf-main-home-svg-pattern" width="326.209" height="160"><path fill="none" stroke="#9A7D57" strokeWidth="1.5" strokeMiterlimit="10" d="M39.856 56.993l16.741 28.924-55.01 95.043m27.896 74.47l27.114-46.848-50.59-87.406M88.565 18.483l39.03 67.434-70.997 122.666 64.441 111.339m-46.054-20.445l52.61-90.895L56.598 85.917l41.716-72.073M149.435.983l49.159 84.934-70.998 122.666 65.97 113.979m-60.944.002l65.972-113.981-70.998-122.666L176.753.987m51.125 12.859l41.714 72.07-70.998 122.666 52.61 90.896m-46.056 20.443l64.443-111.339-70.997-122.665 39.032-67.438m82.557 102.695l-50.591 87.408 27.113 46.845M286.332 56.994l-16.74 28.923 55.01 95.041M80.314 44.94V27.5l-1.891-3.31m-33.608 82.083v-17.44L32.157 66.667M9.316 167.606v-17.439l-6.85-11.997m42.349 90.769V211.5l-23.712-41.521-16.819 29.48m76.03 90.813v-17.439l-23.712-41.521-19.52 34.214m67.548 49.057l-12.528-21.938-7.26 12.725m96.399 19.041L163.1 292.644l-18.128 31.773m96.385-19.061l-7.26-12.712-12.511 21.927m-70.313-24.299v-17.439l-23.712-41.521-23.722 41.578v17.383m118.472-.001v-17.439l-23.712-41.521-23.722 41.578v17.383m114.247-24.769l-19.527-34.193-23.722 41.578v17.383m-130.062-61.333V211.5l-23.712-41.521-23.721 41.577v17.383m118.432 0V211.5L163.1 169.978l-23.722 41.578v17.383m118.432 0V211.5l-23.712-41.521-23.722 41.578v17.383m111.225-30.06l-16.505-28.902-23.722 41.578v17.383m-201.06-61.333v-17.439l-23.712-41.521-23.722 41.578v17.383m118.393-.001v-17.439l-23.712-41.521-23.722 41.578v17.383m118.472-.001v-17.439l-23.712-41.521-23.722 41.578v17.383m118.432-.001v-17.439l-23.712-41.521-23.722 41.578v17.383m77.853-29.399l-6.854 12.015v17.383m-201.061-61.333v-17.44L92.102 47.312 68.38 88.89v17.383m118.432 0v-17.44L163.1 47.312 139.378 88.89v17.383m118.432 0v-17.44l-23.712-41.521-23.722 41.578v17.383m83.67-39.593l-12.672 22.21v17.383M151.313 44.94V27.5l-14.28-25.007m-21.748 5.072l-11.406 19.992V44.94m118.432 0V27.5L210.923 7.561m-21.752-5.06l-14.294 25.056V44.94m72.91-20.734l-1.912 3.352V44.94M68.419 30.831v34.662m-23.643 0V51.53M32.92 126.826V91.892l-8.157-14.28M9.277 126.826v-16.452M32.92 249.492v-34.934l-11.819-20.693-11.824 20.722v.872m59.142 79.515v-19.083L56.6 255.198l-11.248 19.714m122.821 50.505l-5.076-8.886-5.07 8.886m-18.61-14.592v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.076-35.922l-11.255-19.705-11.823 20.723v19.081m-153.853-45.51v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64-34.033v-.901l-11.819-20.693-11.823 20.723v34.904M68.419 188.159v-34.934L56.6 132.532l-11.823 20.723v34.904m94.601 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.679 0v-34.934l-11.819-20.693-11.823 20.723v34.904m94.64 0v-34.934l-11.819-20.693-11.823 20.723v34.904m-153.853-61.333V91.892L92.099 71.199 80.275 91.921v34.904m94.641.001V91.892l-11.819-20.693-11.823 20.723v34.904m94.64 0V91.892l-11.819-20.693-11.823 20.723v34.904m94.64-16.566v16.565m-15.479-49.209l-8.163 14.306v34.904M139.417 65.493V30.559L127.598 9.866l-11.823 20.723v34.904m94.64 0V30.559L198.596 9.866l-11.823 20.723v34.904m94.64-14.005v14.005m-23.642 0V30.858M56.598 40.175v45.741m-35.499 5.159v56.051m0 66.613v28.025m35.499 33.303v10.592m70.998-10.592v46.451m70.998-46.451v46.461m70.998-46.461v10.59M92.097 213.739v56.051m70.998-56.051v56.051m70.998-56.051v56.051m70.998-56.051v28.254M56.598 152.407v56.051m70.998-56.051v56.051m70.998-56.051v56.051m70.998-56.051v56.051M92.097 91.075v56.051m70.998-56.051v56.051m70.998-56.051v56.051m70.998-56.051v56.051M127.596 29.866v56.051m35.499-85.5v24.167m35.499 5.282v56.051m70.998-45.742v45.741"></path></svg>
            </div>
        </div>
    );
};

export default MenuSelection;
