import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from '../Components/Footer/Footer';
import IntroAboutUs from '../Components/AboutUsComponents/IntroAboutUs/IntroAboutUs';
import MainAboutUs from '../Components/AboutUsComponents/MainAboutUs/MainAboutUs';
import AboutUsVideo from '../Components/AboutUsComponents/AboutUsVideo/AboutUsVideo';
import TestimonialSlider from '../Components/AboutUsComponents/TestimonialSlider/TestimonialSlider';
import Navbar from '../Components/Navbar/Navbar';
import ContactUsMap from '../Components/ContactUsComponents/ContactUsMap/ContactUsMap';
import ContactUsMain from '../Components/ContactUsComponents/ContactUsMap/ContactUsMain/ContactUsMain';

const ContactUsPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <ParallaxProvider>
                <div className="text-gold min-h-screen relative">
                    <Navbar />
                    <div className='px-9 py-12'>
                        <div className='px-3 sm:px-28 relative z-10 mb-36'>
                            <ContactUsMap />
                        </div>
                        <div className='px-3 sm:px-28 relative z-10 '>
                            <ContactUsMain />
                        </div>
                    </div>
                    <div className='px-3 sm:px-28 relative z-10 mt-28 mb-20'>
                        <div className="border-b-[1px] border-[#c8aa8180] w-full mx-auto mt-7"></div>
                        <Footer />
                    </div>
                    {/* Decorative golden lines */}
                    <div className="fixed top-0 left-0 sm:left-28 w-1 h-full bg-gradient-to-b from-gold/0 via-gold to-gold/0 pointer-events-none" style={{ opacity: 0.3 + scrollY * 0.001 }} />
                    <div className="fixed top-0 right-0 sm:right-28 w-1 h-full bg-gradient-to-b from-gold/0 via-gold to-gold/0 pointer-events-none" style={{ opacity: 0.3 + scrollY * 0.001 }} />
                </div>
            </ParallaxProvider>
        </>
    );
};

export default ContactUsPage;