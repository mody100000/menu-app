import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from '../Components/Footer/Footer';
import IntroHome from '../Components/HomeComponents/IntroHome/IntroHome';
import AboutUs from '../Components/HomeComponents/AboutUs/AboutUs';
import CommentsSlider from '../Components/HomeComponents/CommentsSlider/CommentsSlider';
import Recommendations from '../Components/HomeComponents/Recommendations/Recommendations';
import MenuSelection from '../Components/HomeComponents/MenuSelection/MenuSelection';
import Philosophy from '../Components/HomeComponents/Philosophy/Philosophy';
import AboutUsVideo from '../Components/AboutUsComponents/AboutUsVideo/AboutUsVideo';
import MenuCategory from '../Components/HomeComponents/MenuCategory/MenuCategory';
import BookATable from '../Components/HomeComponents/BookATable/BookATable';

const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <ParallaxProvider>
                <div className="text-gold min-h-screen relative overflow-x-hidden">
                    {/* Decorative golden lines */}
                    <div className="fixed top-0 left-0 sm:left-28 w-1 h-full bg-gradient-to-b from-gold/0 via-gold to-gold/0 pointer-events-none z-30" style={{ opacity: 0.3 + scrollY * 0.001 }} />
                    <div className="fixed top-0 right-0 sm:right-28 w-1 h-full bg-gradient-to-b from-gold/0 via-gold to-gold/0 pointer-events-none z-30" style={{ opacity: 0.3 + scrollY * 0.001 }} />

                    {/* Content */}
                    <div className=''>
                        <div className='relative z-10'>
                            <IntroHome />
                        </div>
                        <div className='px-3 sm:px-28 relative z-10 mb-28 '>
                            <AboutUs />
                        </div>
                        <div className='relative z-10 '>
                            <CommentsSlider />
                        </div>
                        <div className='relative z-10 '>
                            <Recommendations />
                        </div>
                        <div className='relative z-10 '>
                            <MenuSelection />
                        </div>
                        <div className='relative z-10 '>
                            <Philosophy />
                        </div>
                        <div className='relative z-10 px-0 sm:px-28'>
                            <AboutUsVideo />
                        </div>
                        <div className='px-3 sm:px-28 relative z-10 mb-28 '>
                            <MenuCategory />
                        </div>
                        <div className='relative z-10'>
                            <BookATable />
                        </div>
                    </div>
                    <div className='px-3 sm:px-28 relative z-10 mb-20'>
                        <div className="border-b-[1px] border-[#c8aa8180] w-full mx-auto"></div>
                        <Footer />
                    </div>
                </div>
            </ParallaxProvider>
        </>
    );
};

export default HomePage;
