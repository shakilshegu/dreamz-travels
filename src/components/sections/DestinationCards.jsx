import React, { useState } from 'react';
import { tourPackages } from '../../utils/Data';

const DestinationCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('All');

  // Get unique destinations from your tour packages
  const destinations = ['All', ...new Set(tourPackages.map(pkg => pkg.destination))];

  // Filter packages based on selected destination
  const filteredPackages = selectedDestination === 'All' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.destination === selectedDestination);

  const PackageCard = ({ pkg, index }) => {
    const isHovered = hoveredCard === pkg.id;

    return (
      <div
        className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50"
        onMouseEnter={() => setHoveredCard(pkg.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Image Section with Overlay */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.destination}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />

          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20">
              {pkg.badge}
            </div>
          </div>

          {/* Discount Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold animate-pulse shadow-lg backdrop-blur-sm border border-white/20">
              {pkg.discount}
            </div>
          </div>

          {/* Destination Info */}
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white text-2xl font-bold drop-shadow-lg">{pkg.destination}</h3>
            <p className="text-white/90 text-sm drop-shadow-md">{pkg.tagline}</p>
          </div>

          {/* Rating */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-xs drop-shadow-sm">({pkg.reviewCount})</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Package Header */}
          <div className="mb-4">
            <h4 className="text-xl font-bold text-gray-800 mb-2 drop-shadow-sm">{pkg.packageName}</h4>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                <svg className="w-4 h-4 mr-1 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {pkg.duration}
              </span>
              {pkg.id === 17 ? (
                <div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Pricing Tiers</div>
                    <div className="space-y-1 bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">6 pax:</span>
                        <span className="text-sm font-bold text-emerald-600">₹14,000 per head</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">12 pax:</span>
                        <span className="text-sm font-bold text-emerald-600">₹12,500 per head</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">12+ pax:</span>
                        <span className="text-sm font-bold text-emerald-600">₹11,500 per head</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-right bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-3 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 drop-shadow-sm">{pkg.tariff}</div>
                  <div className="text-xs text-gray-500">per person</div>
                </div>
              )}
            </div>
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="flex items-center text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg">
              <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {pkg.pickupLocation}
            </div>
            <div className="flex items-center text-gray-600 bg-gray-50/80 px-3 py-2 rounded-lg">
              <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Min {pkg.minimumMembers} members
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <h5 className="font-semibold text-gray-800 mb-3 text-sm flex items-center">
              <span className="text-amber-400 mr-1">✨</span>
              Highlights
            </h5>
            <div className="space-y-2 bg-gradient-to-r from-gray-50/80 to-emerald-50/50 p-4 rounded-xl">
              {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                <div key={idx} className="text-xs text-gray-600 flex items-start">
                  <span className="text-emerald-500 mr-2 font-bold">•</span>
                  {highlight}
                </div>
              ))}
              {pkg.highlights.length > 3 && (
                <div className="text-xs text-emerald-600 font-medium bg-emerald-100 px-2 py-1 rounded-md inline-block">
                  +{pkg.highlights.length - 3} more attractions
                </div>
              )}
            </div>
          </div>

          {/* Stay Info */}
          <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl border border-gray-100/80">
            <div className="flex items-center text-sm text-gray-700">
              <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
              </svg>
              <span className="font-medium">Stay:</span>
              <span className="ml-1 font-semibold text-gray-800">{pkg.stayName}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 cursor-pointer">
            <a
              href="https://wa.me/916362040932?text=Hi%20Dreamzz%20Travels%20%F0%9F%91%8B%2C%20I%E2%80%99d%20like%20to%20book%20a%20trip%20and%20get%20the%20detailed%20itinerary%2C%20please%21"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <button className="cursor-pointer flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg border border-emerald-400/30">
              Book Now
            </button>
            <button className="cursor-pointer px-4 py-3 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hover Details Overlay - Enhanced */}
        <div className={`
          absolute inset-0 bg-white/98 backdrop-blur-md transition-all duration-500 transform border border-emerald-100/50
          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}>
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-gray-800 drop-shadow-sm">{pkg.packageName}</h4>
              <button
                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                onClick={() => setHoveredCard(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Itinerary */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">📅</span>
                Itinerary
              </h5>
              <div className="space-y-4 bg-gradient-to-r from-gray-50/80 to-emerald-50/30 p-4 rounded-xl">
                {pkg.itinerary.map((day, idx) => (
                  <div key={idx} className="border-l-3 border-emerald-300 pl-4 bg-white/60 p-3 rounded-r-lg shadow-sm">
                    <div className="text-sm font-bold text-emerald-600">Day {day.day}</div>
                    <div className="text-sm font-semibold text-gray-800 mb-1">{day.title}</div>
                    <div className="text-xs text-gray-600">
                      {day.activities.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/50 p-4 rounded-xl border border-green-100/50">
                <h6 className="font-semibold text-green-600 text-sm mb-3 flex items-center">
                  <span className="mr-2">✅</span>
                  Inclusions
                </h6>
                <div className="space-y-2">
                  {pkg.inclusions.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="text-xs text-gray-600 flex items-start">
                      <span className="text-green-500 mr-2 font-bold">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50/80 to-orange-50/50 p-4 rounded-xl border border-red-100/50">
                <h6 className="font-semibold text-red-600 text-sm mb-3 flex items-center">
                  <span className="mr-2">❌</span>
                  Exclusions
                </h6>
                <div className="space-y-2">
                  {pkg.exclusions.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="text-xs text-gray-600 flex items-start">
                      <span className="text-red-500 mr-2 font-bold">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/80">
              <a
                href="https://wa.me/916362040932?text=Hi%20Dreamzz%20Travels%20%F0%9F%91%8B%2C%20I%E2%80%99d%20like%20to%20book%20a%20trip%20and%20get%20the%20detailed%20itinerary%2C%20please%21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cursor-pointer w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-4 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-emerald-400/30">
                  Get Detailed Itinerary
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="destinations" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-40 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-60 h-60 bg-teal-200/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-100/80 to-teal-100/80 backdrop-blur-sm border border-emerald-200/50 rounded-full text-emerald-700 text-sm font-medium mb-6 shadow-lg">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured Destinations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 drop-shadow-sm">
            Discover Amazing
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Places</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto drop-shadow-sm">
            Handpicked destinations with carefully crafted itineraries for unforgettable experiences
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <span className="text-gray-700 font-medium text-sm sm:text-base">Filter by Destination:</span>
            <div className="relative">
              <select 
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="appearance-none bg-white/90 backdrop-blur-sm border border-gray-300/80 rounded-xl px-4 py-3 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 cursor-pointer hover:border-emerald-400 shadow-md hover:shadow-lg"
              >
                {destinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="text-sm text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
            Showing <span className="font-semibold text-emerald-600">{filteredPackages.length}</span> 
            {selectedDestination !== 'All' && (
              <span> {selectedDestination}</span>
            )} packages
          </div>
        </div>

        {/* Cards Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-12 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No packages found</h3>
            <p className="text-gray-500">No packages available for the selected destination.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-emerald-400/30">
            <span>View All Destinations</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationCards;