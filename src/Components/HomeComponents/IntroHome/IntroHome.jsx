import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import menu1 from "@assets/menu1.jpg"
import menu2 from "@assets/menu2.jpg"
import menu4 from "@assets/menu4.jpg"
import Navbar from '../../Navbar/Navbar';
import { Parallax } from 'react-scroll-parallax';

const slides = [
    {
        title: "THE BEST DISHES",
        subtitle: "the most delicious flavor combos",
        description: "Experimentation in the kitchen and focus on excellence are among our main driving forces in cooking.",
        image: menu1
    },
    {
        title: "CULINARY DELIGHTS",
        subtitle: "exploring taste sensations",
        description: "Our passion for innovative cuisine drives us to create unforgettable dining experiences.",
        image: menu2
    },
    {
        title: "GOURMET JOURNEY",
        subtitle: "a feast for the senses",
        description: "Embark on a culinary adventure with our expertly crafted dishes and unique flavor profiles.",
        image: menu4
    }
];

const IntroHome = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Navbar positioned outside of Swiper */}
            <div className="absolute top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    renderBullet: (index, className) => {
                        return `<span class="${className}">${index + 1}</span>`;
                    },
                    bulletClass: 'swiper-pagination-number',
                    bulletActiveClass: 'swiper-pagination-number-active',
                }}
                autoplay={{ delay: 5000 }}
                loop
                speed={1100}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Parallax y={[-20, 20]} speed={-100} className='absolute inset-0'>
                                <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                            </Parallax>
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                                <p className="text-gold text-2xl tracking-widest font-miniver">{slide.subtitle}</p>
                                <h2 className="text-4xl md:text-6xl font-zentokyo tracking-widest my-8 text-gold">{slide.title}</h2>
                                <p className="text-center max-w-2xl text-2xl tracking-widest font-thin font-josefin text-gray-300 mb-8">{slide.description}</p>
                                <button className="border border-gold tracking-widest px-11 font-comingSoon py-3 hover:bg-gold hover:text-black transition duration-300">
                                    VIEW MORE
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination !text-gold absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2"></div>

            </Swiper>

            <div className="swiper-button-prev arrowes !text-gold px-0 sm:px-10"></div>
            <div className="swiper-button-next arrowes !text-gold px-0 sm:px-10"></div>
            {/* <div className="swiper-pagination !text-gold absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2"></div>
             */}
            {/* <div className="swiper-pagination flex justify-center !z-10 mt-4"></div> */}

        </div>
    );
};

export default IntroHome;