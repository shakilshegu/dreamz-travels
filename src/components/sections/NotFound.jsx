import { useState, useEffect } from 'react';

const NotFoundPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center px-4 pt-20">
            <div className="max-w-4xl mx-auto text-center">

                {/* Animated 404 Illustration */}
                <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <div className="relative">
                        {/* Large 404 Text */}
                        <div className="text-8xl md:text-9xl font-bold text-primary-200 select-none">
                            404
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {/* Mountain silhouette */}
                            <div className="w-32 h-16 relative opacity-60">
                                <div className="absolute bottom-0 left-4 w-8 h-8 bg-primary-400 transform rotate-45 origin-bottom-left"></div>
                                <div className="absolute bottom-0 left-8 w-12 h-12 bg-primary-500 transform rotate-45 origin-bottom-left"></div>
                                <div className="absolute bottom-0 left-16 w-8 h-8 bg-primary-400 transform rotate-45 origin-bottom-left"></div>
                            </div>

                            {/* Floating leaves */}
                            <div className="absolute -top-8 -right-8 w-3 h-3 bg-primary-400 rounded-full animate-bounce-gentle"></div>
                            <div className="absolute -top-4 -left-8 w-2 h-2 bg-primary-300 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute -bottom-4 right-4 w-2 h-2 bg-primary-500 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
                    <h1 className="heading-2 mb-6 text-primary-800">
                        Oops! This Adventure Doesn't Exist
                    </h1>
                    <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Looks like you've wandered off the beaten path. The page you're looking for might have been moved, deleted, or is temporarily unavailable.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => window.history.back()}
                            className="btn-secondary"
                        >
                            <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Go Back
                        </button>
                        <a href="/" className="btn-primary">
                            <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Return Home
                        </a>
                    </div>
                </div>

                {/* Help Section */}
                <div className={`mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <div className="card-glass max-w-2xl mx-auto">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="font-semibold text-neutral-800 mb-2">Still Need Help?</h3>
                        <p className="text-neutral-600 mb-4">
                            Our travel experts are here to help you find the perfect eco-adventure.
                        </p>
                        <a href="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                            Contact Support
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Floating Elements */}
                <div className="fixed top-1/4 left-1/4 w-1 h-1 bg-primary-300 rounded-full animate-ping opacity-60"></div>
                <div className="fixed top-1/3 right-1/3 w-1 h-1 bg-primary-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
                <div className="fixed bottom-1/4 left-1/3 w-1 h-1 bg-primary-200 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
                <div className="fixed bottom-1/3 right-1/4 w-1 h-1 bg-primary-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
            </div>
        </div>
    );
};

export default NotFoundPage;