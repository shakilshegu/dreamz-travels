import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      title: "Discover Your Next Adventure",
      subtitle: "Explore breathtaking destinations around the world with our curated travel experiences",
      backgroundImage: "https://images.unsplash.com/photo-1529057299613-a565b7ce93aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Unforgettable Journeys Await",
      subtitle: "From pristine beaches to majestic mountains, create memories that last a lifetime",
      backgroundImage: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Experience Nature's Wonders",
      subtitle: "Immerse yourself in the beauty of untouched landscapes and wild adventures",
      backgroundImage: "https://images.unsplash.com/photo-1572431447238-425af66a273b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax Effect */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform
            ${index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
            }
          `}
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        />
      ))}

      {/* Enhanced Dark Overlay with Premium Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-900/20 via-neutral-900/30 to-accent-800/40" />

      {/* Animated Background Elements - Brand Colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-accent-400/15 to-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-r from-secondary-400/15 to-secondary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-300/5 to-primary-300/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Container - Properly Centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-20">

          {/* Main Content - Centered Vertically and Horizontally */}
          <div className={`
            w-full text-center transition-all duration-1000 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>

            {/* Hero Badge - Brand Enhanced */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white/95 text-sm font-medium shadow-lg hover:bg-white/20 transition-all duration-300">
                <svg className="w-4 h-4 mr-2 text-secondary-400 drop-shadow-sm animate-glow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                ✨ Most Trusted Travel Agency 2025
              </div>
            </div>

            {/* Main Headline - Enhanced with Brand Typography */}
            <div className="mb-6">
              <h1 className="heading-1 text-white leading-tight tracking-tight text-center text-shadow-lg animate-fade-in">
                {heroSlides[currentSlide].title}
              </h1>
            </div>

            {/* Subtitle - Enhanced with Better Contrast */}
            <div className="mb-10 flex justify-center">
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed text-center text-shadow-lg animate-slide-up">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* CTA Buttons - Brand Styled */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => {
                  document.getElementById('destinations').scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="btn-primary min-w-[200px] inline-flex items-center justify-center py-4 px-8 rounded-xl transform hover:scale-105 animate-scale-in"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Explore Destinations
              </button>

              <button className="btn-ghost min-w-[200px] inline-flex items-center justify-center py-4 px-8 rounded-xl hover:text-secondary-200 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Brand Enhanced */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 glass-dark rounded-full px-4 py-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125
              ${index === currentSlide
                ? 'bg-accent-400 shadow-lg shadow-accent-400/50 scale-110'
                : 'bg-white/40 hover:bg-white/60'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Brand Enhanced */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white/90 glass-dark rounded-lg px-3 py-2">
          <span className="text-sm mb-2 font-medium text-shadow">Scroll</span>
          <svg className="w-6 h-6 text-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating Elements - Brand Colors */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-r from-secondary-400/25 to-secondary-500/15 rounded-full blur-xl animate-float hidden lg:block pointer-events-none" />
      <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-r from-accent-400/25 to-primary-400/15 rounded-full blur-xl animate-bounce-gentle hidden lg:block pointer-events-none" />
      <div className="absolute bottom-1/4 left-20 w-16 h-16 bg-gradient-to-r from-secondary-300/25 to-secondary-400/15 rounded-full blur-xl animate-pulse hidden lg:block pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-accent-400/20 to-primary-400/10 rounded-full blur-xl animate-float hidden xl:block pointer-events-none" style={{ animationDelay: '1s' }} />
      
      {/* Additional Brand Elements */}
      <div className="absolute top-3/4 left-1/3 w-8 h-8 bg-gradient-to-r from-secondary-400/30 to-secondary-500/20 rounded-full blur-lg animate-pulse hidden lg:block pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-gradient-to-r from-accent-300/20 to-primary-300/15 rounded-full blur-xl animate-bounce-gentle hidden lg:block pointer-events-none" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};

export default Hero;