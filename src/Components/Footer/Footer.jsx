import React from 'react';
import footerLogo from "@assets/footer-logo.webp"
const Footer = () => {
    return (
        <footer className="py-16">
            <div className="container mx-auto text-center text-gray-300 leading-relaxed">
                <div className="mb-6">
                    <div className="inline-block">
                        <img
                            src={footerLogo}
                            alt="Logo"
                            className="mx-auto mb-5"
                        />
                    </div>
                </div>
                <p className="text-lg mb-6 leading-10">
                    Laurent Restaurant & Fine Dining, 71 Madison Ave
                </p>
                <p className="mb-6">
                    10013 New York, 914-309-7030, reservations@laurent.com
                </p>
                <p className="mb-6">
                    Open: 09:00 am - 01:00 pm
                </p>
                <div className="flex justify-center space-x-12 mt-12">
                    <a href="#" className="hover:text-gray-100 border-b-2 border-gold">Facebook</a>
                    <a href="#" className="hover:text-gray-100 border-b-2 border-gold">Instagram</a>
                    <a href="#" className="hover:text-gray-100 border-b-2 border-gold">Trip Advisor</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
