// components/sections/Features.jsx
import React from 'react';
import Container from '../common/Container';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Curated Destinations",
      description: "Hand-picked locations by travel experts with insider knowledge of hidden gems and must-visit spots around the globe."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock assistance from our dedicated travel specialists to ensure your journey is smooth and worry-free."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Safe & Secure",
      description: "Your safety is our priority. All trips include comprehensive insurance and adherence to international safety standards."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Personalized Experience",
      description: "Tailored itineraries crafted to match your interests, budget, and travel style for truly unforgettable experiences."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Best Price Guarantee",
      description: "We guarantee the best prices on all our packages. Find a lower price elsewhere and we'll match it plus give you 5% off."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      ),
      title: "Sustainable Travel",
      description: "Committed to responsible tourism that benefits local communities and preserves natural environments for future generations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-green-50/20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-40 w-80 h-80 bg-gradient-to-r from-green-200/10 to-emerald-200/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-60 h-60 bg-gradient-to-r from-teal-200/8 to-green-200/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-100/5 to-green-100/3 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="text-center mb-16 relative">
          <h2 className="heading-2 text-neutral-800 mb-6 drop-shadow-sm">
            Why Choose <span className="text-gradient bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Dreamzz Travels?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            We're not just another travel agency. We're your trusted partner in creating extraordinary adventures that inspire, educate, and transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card bg-white/80 backdrop-blur-sm border border-gray-100/50 hover:shadow-2xl hover:shadow-green-100/30 transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/95"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-green-500/25 border border-green-400/20">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="heading-4 text-neutral-800 mb-3 group-hover:text-green-600 transition-colors duration-300 font-bold text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm group-hover:text-neutral-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Subtle hover accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-20 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300/15 rounded-full blur-xl" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
            <div className="text-white group">
              <div className="text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">50K+</div>
              <div className="text-green-100 font-medium text-sm lg:text-base tracking-wide">Happy Travelers</div>
            </div>
            <div className="text-white group">
              <div className="text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">200+</div>
              <div className="text-green-100 font-medium text-sm lg:text-base tracking-wide">Destinations</div>
            </div>
            <div className="text-white group">
              <div className="text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-green-100 font-medium text-sm lg:text-base tracking-wide">Years Experience</div>
            </div>
            <div className="text-white group">
              <div className="text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-green-100 font-medium text-sm lg:text-base tracking-wide">Satisfaction Rate</div>
            </div>
          </div>

          {/* Decorative border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/50 via-green-300/70 to-emerald-400/50" />
        </div>
      </Container>
    </section>
  );
};

export default Features;