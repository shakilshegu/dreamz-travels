import React from 'react';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Destinations', href: '#destinations' },
        { name: 'Packages', href: '#packages' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-20 w-40 h-40 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-500/3 rounded-full blur-2xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    
                    {/* Brand */}
                    <div className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-lg transition-all duration-300 group-hover:shadow-green-500/20 group-hover:scale-105">
                            <img
                                src="/images/accommodations/logo.jpg"
                                alt="Logo"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Enhanced fallback
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">DT</div>';
                                }}
                            />
                        </div>
                        <span className="font-bold text-xl tracking-tight drop-shadow-sm group-hover:text-green-200 transition-colors duration-300">Dreamzz Travels</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {quickLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 relative py-1 px-2 rounded-md hover:bg-white/5 hover:scale-105
                                after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r 
                                after:from-green-400 after:to-green-500 after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2
                                after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Social & Contact */}
                    <div className="flex items-center space-x-6 text-sm">
                        {/* Social Icons */}
                        <div className="flex items-center space-x-3">
                            <a href="https://www.facebook.com/people/Dreamzz-Travels/61561306974415/?ref=_xav_ig_profile_page_web" className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 hover:from-blue-500/30 hover:to-blue-600/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg hover:shadow-blue-500/20 border border-white/10">
                                <svg className="w-5 h-5 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/dreamzz_travels/?igsh=MTZ6eWh6dms3MzR4bQ%3D%3D" className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 hover:from-pink-500/30 hover:to-purple-600/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg hover:shadow-pink-500/20 border border-white/10">
                                <svg className="w-5 h-5 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                        
                        {/* Phone */}
                        <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            <svg className="w-4 h-4 text-green-400 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="font-medium">+91 6362 040 932</span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-gradient-to-r from-transparent via-white/20 to-transparent text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    <p className="text-white/80 text-sm font-medium drop-shadow-sm relative">
                        © 2024 <span className="text-green-400">Dreamzz Travels</span>. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Decorative Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/50 via-green-400/70 to-green-500/50" />
        </footer>
    );
};

export default Footer;