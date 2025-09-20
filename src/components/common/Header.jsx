import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

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

    const isActive = (item) => {
        if (item.isAnchor) {
            return false; // anchor links are handled differently
        }
        return location.pathname === item.to;
    };

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
                fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full
                ${isScrolled
                    ? 'bg-white/95 backdrop-blur-lg shadow-xl shadow-teal-100/30 border-b border-accent-200/50'
                    : 'bg-transparent'
                }
            `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between py-3 sm:py-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                            <div className="flex items-center justify-center">
                                <img
                                    src="/images/accommodations/logo3.png"
                                    alt="Dreamzz Travels Logo"
                                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 drop-shadow-md"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-accent-600 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">DT</div>';
                                    }}
                                />
                            </div>
                            <Link to="/" className="flex-shrink-0">
                                <span className={`
                                    font-bold text-lg sm:text-xl lg:text-2xl transition-colors duration-300 tracking-tight text-shadow cursor-pointer
                                    ${isScrolled ? 'text-accent-700 drop-shadow-sm' : 'text-white drop-shadow-md'}
                                `}>
                                    <span className="hidden xs:inline">Dreamzz Travels</span>
                                    <span className="xs:hidden">Dreamzz Travels</span>
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                            {navItems.map((item) => (
                                item.isAnchor ? (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.to);
                                        }}
                                        className={`
                                            font-medium py-2 px-1 transition-all duration-300 hover:scale-105 whitespace-nowrap
                                            ${isScrolled ? 'text-neutral-700 hover:text-accent-600' : 'text-white hover:text-secondary-200'}
                                        `}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`
                                            font-medium py-2 px-1 transition-all duration-300 hover:scale-105 whitespace-nowrap
                                            ${isActive(item) ? 'text-accent-600 font-bold' : isScrolled ? 'text-neutral-700 hover:text-accent-600' : 'text-white hover:text-secondary-200'}
                                        `}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:flex items-center flex-shrink-0">
                            <a
                                href="https://wa.me/916362040932?text=Hi%20Dreamzz%20Travels%20%F0%9F%91%8B%2C%20I%E2%80%99d%20like%20to%20book%20a%20trip%20and%20get%20the%20detailed%20itinerary%2C%20please%21"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-600 hover:to-primary-600 text-white font-semibold py-2.5 px-5 xl:py-3 xl:px-7 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-accent-500/30 border border-accent-400/30 text-sm xl:text-base whitespace-nowrap">
                                    Book Now
                                </button>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`
                                lg:hidden p-2 rounded-lg transition-all duration-300 z-60 shadow-md flex-shrink-0
                                ${isScrolled
                                    ? 'text-neutral-700 hover:bg-accent-50 shadow-accent-100/50'
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
                fixed inset-0 z-80 lg:hidden transition-all duration-300
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
                    absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 border-l border-accent-200/50
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200/80 bg-gradient-to-r from-accent-50/60 to-secondary-50/40">
                        <div className="flex items-center space-x-2">
                            <span className="font-bold text-lg sm:text-xl text-accent-700 tracking-tight">
                                Dreamzz Travels
                            </span>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100/80 rounded-lg transition-all duration-200 shadow-sm"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="py-4 sm:py-6 flex-1 overflow-y-auto">
                        {navItems.map((item, index) => (
                            item.isAnchor ? (
                                <a
                                    key={item.name}
                                    href={item.to}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.to);
                                    }}
                                    className="block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium text-neutral-800 hover:text-accent-600 hover:bg-gradient-to-r hover:from-accent-50/70 hover:to-secondary-50/50 transition-all duration-200 transform hover:translate-x-2 border-l-4 border-transparent hover:border-accent-400/50"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="flex items-center justify-between">
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
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`
                                        block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium text-neutral-800 hover:text-accent-600 hover:bg-gradient-to-r hover:from-accent-50/70 hover:to-secondary-50/50 transition-all duration-200 transform hover:translate-x-2 border-l-4 border-transparent hover:border-accent-400/50
                                        ${isActive(item) ? 'text-accent-600 font-bold bg-accent-50/30 border-accent-400/50' : ''}
                                    `}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="flex items-center justify-between">
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
                            )
                        ))}
                    </div>

                    {/* Mobile CTA Section */}
                    <div className="p-4 sm:p-6 border-t border-neutral-200/80 bg-gradient-to-r from-neutral-50/80 to-accent-50/40 backdrop-blur-sm">
                        <a
                            href="https://wa.me/916362040932?text=Hi%20Dreamzz%20Travels%20%F0%9F%91%8B%2C%20I%E2%80%99d%20like%20to%20book%20a%20trip%20and%20get%20the%20detailed%20itinerary%2C%20please%21"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <button className="w-full bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-600 hover:to-primary-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-accent-500/30 border border-accent-400/30">
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm sm:text-base">Book Now</span>
                                </div>
                            </button>
                        </a>

                        {/* Contact Info */}
                        <div className="mt-3 sm:mt-4 text-center">
                            <p className="text-xs sm:text-sm text-neutral-600">Need help?</p>
                            <p className="text-xs sm:text-sm font-semibold text-accent-600 drop-shadow-sm">+91 6362 040 932</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;