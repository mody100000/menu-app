import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RiDoubleQuotesR } from "react-icons/ri";

const testimonials = [
    {
        text: "Duis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incidid sens as out labore et. Ut enim ad minim venia quis nostrud exercitation co laboris nisi ut aliquip ex ea commodo conse.",
        author: "ANDREA CHUNG",
        job: "Cook",
    },
    {
        text: "Duis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incidid sens as out labore et. Ut enim ad minim venia quis nostrud exercitation co laboris nisi ut aliquip ex ea commodo conse.",
        author: "JOHN DOE",
        job: "Chef",
    },
    {
        text: "Duis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incidid sens as out labore et. Ut enim ad minim venia quis nostrud exercitation co laboris nisi ut aliquip ex ea commodo conse.",
        author: "JANE SMITH",
        job: "Sous Chef",
    },
];

const TestimonialSlider = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="mb-4 flex justify-center items-center text-gold">
                <RiDoubleQuotesR className='text-center' size={50} />
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
                speed={600}
                className="w-[70%]"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-gray-400 px-4 py-8 sm:px-8 md:px-12 lg:px-16">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-miniver text-center leading-relaxed mb-4 sm:mb-6">{testimonial.text}</p>
                            <h5 className="text-lg sm:text-xl md:text-2xl text-gold font-semibold text-center tracking-wider mb-2">{testimonial.author}</h5>
                            <p className="text-base sm:text-lg md:text-xl text-center mb-10">{testimonial.job}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation - hidden on mobile */}
            <div className="swiper-button-prev !text-gold absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:block sm:ml-4 md:ml-8 lg:ml-32"></div>
            <div className="swiper-button-next !text-gold absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:block sm:mr-4 md:mr-8 lg:mr-32"></div>

            {/* Pagination */}
            <div className="swiper-pagination flex justify-center mt-4"></div>
        </div>
    );
};

export default TestimonialSlider;