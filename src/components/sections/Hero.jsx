import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroSlides = [
    {
      title: "Discover Your Next Adventure",
      subtitle: "Explore breathtaking destinations around the world with our curated travel experiences",
      backgroundImage: "https://images.unsplash.com/photo-1529057299613-a565b7ce93aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accent: "#FF6B35"
    },
    {
      title: "Unforgettable Journeys Await",
      subtitle: "From pristine beaches to majestic mountains, create memories that last a lifetime",
      backgroundImage: "https://images.unsplash.com/photo-1517713982677-4b66332f98de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accent: "#00B4D8"
    },
    {
      title: "Experience Nature's Wonders",
      subtitle: "Immerse yourself in the beauty of untouched landscapes and wild adventures",
      backgroundImage: "https://images.unsplash.com/photo-1572431447238-425af66a273b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accent: "#7B2CBF"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Main Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-6000 ease-out "
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                transform: `scale(1.1) translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`
              }}
            />
            
            {/* Color Overlay */}
            <div 
              className="absolute inset-0 mix-blend-multiply opacity-20"
              style={{ backgroundColor: slide.accent }}
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black opacity-40" />
          </div>
        ))}
      </div>

      {/* Geometric Shapes - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles - Hidden on small screens */}
        <div
          className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-2 border-white opacity-5 sm:opacity-10 rounded-full hidden sm:block"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            animation: 'spin 20s linear infinite'
          }}
        />
        <div
          className="absolute w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border border-white opacity-8 sm:opacity-15 rounded-full hidden sm:block"
          style={{
            bottom: '25%',
            right: '15%',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            animation: 'spin 15s linear infinite reverse'
          }}
        />
        
        {/* Floating rectangles - Smaller on mobile */}
        <div
          className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white opacity-3 sm:opacity-5 rotate-45 hidden sm:block"
          style={{
            top: '30%',
            right: '20%',
            transform: `rotate(45deg) translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white opacity-5 sm:opacity-8 rotate-12 hidden sm:block"
          style={{
            bottom: '40%',
            left: '25%',
            transform: `rotate(12deg) translate(${mousePosition.x * -0.06}px, ${mousePosition.y * -0.06}px)`,
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center md:mt-0 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-16 lg:py-0">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left order-1 lg:order-1">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                
                {/* Badge */}

                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  <span className="block">{heroSlides[currentSlide].title.split(' ').slice(0, 2).join(' ')}</span>
                  <span 
                    className="block font-light"
                    style={{ color: heroSlides[currentSlide].accent }}
                  >
                    {heroSlides[currentSlide].title.split(' ').slice(2).join(' ')}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-full lg:max-w-2xl leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                  <button
                    onClick={() => {
                      document.getElementById('destinations')?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-none bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center sm:justify-start">
                      <span className="text-sm sm:text-base">START EXPLORING</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                  <button className="group px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold bg-transparent border-2 border-transparent hover:border-white transition-all duration-300 w-full sm:w-auto">
                    <span className="flex items-center justify-center sm:justify-start">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span className="text-sm sm:text-base">WATCH STORY</span>
                    </span>
                  </button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
                  {[
                    { number: '50+', label: 'Destinations' },
                    { number: '3K+', label: 'Happy Travelers' },
                    { number: '5', label: 'Years Experience' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center sm:text-left">
                      <div 
                        className="text-2xl sm:text-3xl font-bold mb-1"
                        style={{ color: heroSlides[currentSlide].accent }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Element */}
            <div className="lg:col-span-5 relative order-2 lg:order-2 mt-8 lg:mt-0">
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                
                {/* Destination Cards Preview */}
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10" />
                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">Popular This Month</h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        { name: 'Coorg', price: '₹5,499', image: 'https://images.unsplash.com/photo-1529057299613-a565b7ce93aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                        { name: 'Munnar, Kerala', price: '₹999', image: 'https://images.unsplash.com/photo-1616388969587-8196f32388b4?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                        { name: 'Goa', price: '₹3,200', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
                      ].map((destination, index) => (
                        <div 
                          key={index} 
                          className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                        >
                          <div 
                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cover bg-center rounded-lg flex-shrink-0"
                            style={{ backgroundImage: `url(${destination.image})` }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-medium group-hover:text-opacity-80 transition-all text-sm sm:text-base truncate">
                              {destination.name}
                            </div>
                            <div className="text-white/60 text-xs sm:text-sm">
                              Starting from
                            </div>
                          </div>
                          <div 
                            className="text-lg sm:text-xl lg:text-2xl font-bold flex-shrink-0"
                            style={{ color: heroSlides[currentSlide].accent }}
                          >
                            {destination.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Slide Indicators - Responsive */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 z-20">
        <div className="flex sm:flex-col flex-row sm:space-y-3 space-x-3 sm:space-x-0">
          {heroSlides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className="group relative"
            >
              <div className={`transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-8 sm:w-1 h-1 sm:h-16 bg-white' 
                  : 'w-4 sm:w-1 h-1 sm:h-8 bg-white/40 hover:bg-white/60'
              }`} />
              {index === currentSlide && (
                <div 
                  className="absolute top-0 left-0 transition-all duration-6000 ease-linear w-0 sm:w-1 h-1 sm:h-0"
                  style={{ 
                    backgroundColor: slide.accent,
                    animation: window.innerWidth >= 640 ? 'slideProgressVertical 6s linear infinite' : 'slideProgressHorizontal 6s linear infinite'
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Responsive */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-20">
        <div className="flex sm:flex-col flex-row items-center sm:space-y-2 space-x-2 sm:space-x-0 text-white/80">
          <div className="text-xs uppercase tracking-wide sm:rotate-90 sm:origin-center sm:mb-8 mb-0">
            SCROLL
          </div>
          <div className="w-8 sm:w-px h-px sm:h-16 bg-white/40 relative">
            <div 
              className="absolute top-0 left-0 w-2 sm:w-px h-px sm:h-4 animate-pulse"
              style={{ backgroundColor: heroSlides[currentSlide].accent }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        
        @keyframes slideProgressVertical {
          0% { height: 0%; }
          100% { height: 100%; }
        }
        
        @keyframes slideProgressHorizontal {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @media (max-width: 640px) {
          .clip-path-mobile {
            clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;