import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        const handleClickOutside = (e) => {
            if (isMobileMenuOpen && !e.target.closest('header')) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('click', handleClickOutside);
            // Prevent body scroll when mobile menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: 'Home', to: '/' },
        { name: 'Destinations', to: '#destinations', isAnchor: true },
        { name: 'Packages', to: '#packages', isAnchor: true },
        { name: 'About', to: '#about', isAnchor: true },
        { name: 'Contact', to: '/contacts' }
    ];


    const handleNavClick = (href) => {
        setIsMobileMenuOpen(false);
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-500
                ${isScrolled
                    ? 'bg-white/95 backdrop-blur-lg shadow-xl shadow-green-100/20 border-b border-green-100/50'
                    : 'bg-transparent'
                }
            `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center">
                                <img
                                    src="/images/accommodations/logo3.png"
                                    alt="Dreamzz Travels Logo"
                                    className="w-18 h-18 drop-shadow-md"
                                    onError={(e) => {
                                        // Fallback if image doesn't load
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">DT</div>';
                                    }}
                                />
                            </div>
                            <span
                                className={`
            font-bold text-2xl transition-colors duration-300 tracking-tight
            ${isScrolled ? 'text-green-600 drop-shadow-sm' : 'text-white drop-shadow-md'}
        `}
                            >
                                Dreamzz Travels
                            </span>
                        </div>


                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={`
        font-medium transition-all duration-300 hover:scale-105 relative py-2 px-1
        ${isScrolled
                                            ? "text-gray-700 hover:text-green-600"
                                            : "text-white hover:text-green-200"}
        after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r 
        after:from-green-500 after:to-green-600 after:left-0 after:bottom-0 
        after:transition-all after:duration-300 hover:after:w-full
      `}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden md:flex items-center">
                            <a
                                href="https://wa.me/918304046814?text=Hi%20Dream%20Adventures%20%F0%9F%91%8B%2C%20I%E2%80%99d%20like%20to%20book%20a%20trip%20and%20get%20the%20detailed%20itinerary%2C%20please%21"
                                target="_blank"
                                rel="noopener noreferrer"
                            ></a>
                            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-7 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-green-400/30">
                                Book Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`
                                md:hidden p-2 rounded-lg transition-all duration-300 z-60 shadow-md
                                ${isScrolled
                                    ? 'text-gray-700 hover:bg-green-50 shadow-green-100/50'
                                    : 'text-white hover:bg-white/15 backdrop-blur-sm shadow-black/20'}
                            `}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`
                fixed inset-0 z-40 md:hidden transition-all duration-300
                ${isMobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                }
            `}>
                {/* Background Overlay */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Mobile Menu Panel */}
                <div className={`
                    absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 border-l border-green-100/50
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100/80 bg-gradient-to-r from-green-50/50 to-emerald-50/30">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                                <svg className="w-5 h-5 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="font-bold text-xl text-green-600 tracking-tight">Dream-Adventures</span>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100/80 rounded-lg transition-all duration-200 shadow-sm"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="py-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                onClick={(e) => {
                                    if (item.isAnchor) {
                                        e.preventDefault();
                                        handleNavClick(item.to); // smooth scroll handler
                                    }
                                }}
                                className={`
        block px-6 py-4 text-lg font-medium text-gray-800 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50/70 hover:to-emerald-50/50 transition-all duration-200
        transform hover:translate-x-2 border-l-4 border-transparent hover:border-green-400/50
      `}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="flex items-center space-x-3">
                                    <span>{item.name}</span>
                                    <svg
                                        className="w-4 h-4 opacity-50 transform transition-transform duration-200 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>


                    {/* Mobile CTA Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100/80 bg-gradient-to-r from-gray-50/80 to-green-50/30 backdrop-blur-sm">
                        <button
                            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-green-400/30"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Book Now</span>
                            </div>
                        </button>

                        {/* Contact Info */}
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">Need help?</p>
                            <p className="text-sm font-semibold text-green-600 drop-shadow-sm">+91 8304046814</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;