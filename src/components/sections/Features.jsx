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
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="heading-2 text-neutral-800 mb-6">
            Why Choose <span className="text-gradient">DreamAdventures?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another travel agency. We're your trusted partner in creating extraordinary adventures that inspire, educate, and transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card hover:shadow-2xl hover:shadow-primary-100/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="heading-4 text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50K+</div>
              <div className="text-primary-100 font-medium">Happy Travelers</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">200+</div>
              <div className="text-primary-100 font-medium">Destinations</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-100 font-medium">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <div className="text-primary-100 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;