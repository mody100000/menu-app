import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import IntroMenu from '../Components/IntroMenu/IntroMenu';
import AppetizersMenu from '../Components/AppetizersMenu/AppetizersMenu';
import MainCoursesItro from '../Components/MainCoursesIntro/MainCoursesIntro';
import MainCourses from '../Components/MainCourses/MainCourses';
import DessertsIntro from '../Components/DessertsIntro/DessertsIntro';
import Desserts from '../Components/Desserts/Desserts';
import IntroFooter from '../Components/IntroFooter/IntroFooter';
import Footer from '../Components/Footer/Footer';

const MenuPage = () => {
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
                    <IntroMenu />
                    <div className='px-3 sm:px-28 relative z-10 my-52'>
                        <AppetizersMenu />
                    </div>
                    <div className=''>
                        <MainCoursesItro />
                    </div>
                    <div className='px-3 sm:px-28 relative z-10 my-52'>
                        <MainCourses />
                    </div>
                    <DessertsIntro />
                    <div className='px-3 sm:px-28 relative z-10 my-48'>
                        <Desserts />
                    </div>
                    <IntroFooter />
                    <div className='px-3 sm:px-28 relative z-10 mt-28 mb-20'>
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

export default MenuPage;