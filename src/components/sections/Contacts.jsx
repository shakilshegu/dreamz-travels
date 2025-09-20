import { useState } from 'react';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    tripType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container-custom">
          <div className="text-center text-white animate-fade-in">
            <h1 className="heading-1 mb-6 text-shadow-lg">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Ready to plan your next sustainable adventure? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="card">
                <h2 className="heading-3 mb-8 text-primary-800">
                  Send us a Message
                </h2>
                
                <div className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Trip Type Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-2">
                        Trip Type
                      </label>
                      <select
                        name="tripType"
                        value={formData.tripType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select trip type</option>
                        <option value="eco-adventure">Eco Adventure</option>
                        <option value="wildlife-safari">Wildlife Safari</option>
                        <option value="sustainable-tours">Sustainable Tours</option>
                        <option value="green-hotels">Green Hotels</option>
                        <option value="custom">Custom Trip</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your dream eco-adventure..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                
                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="card-glass">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-800 mb-2">Visit Our Office</h3>
                        <p className="text-neutral-600 leading-relaxed">
                          123 Green Avenue<br />
                          Eco District, Nature City<br />
                          EC 12345, Earth
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="card-glass">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-800 mb-2">Call Us</h3>
                        <p className="text-neutral-600">
                          <a href="tel:+1555123456" className="hover:text-primary-600 transition-colors">
                            +1 (555) 123-4567
                          </a>
                        </p>
                        <p className="text-sm text-neutral-500 mt-1">
                          Mon-Fri: 9AM-6PM EST
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="card-glass">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-800 mb-2">Email Us</h3>
                        <p className="text-neutral-600">
                          <a href="mailto:hello@ecotravel.com" className="hover:text-primary-600 transition-colors">
                            hello@ecotravel.com
                          </a>
                        </p>
                        <p className="text-neutral-600">
                          <a href="mailto:support@ecotravel.com" className="hover:text-primary-600 transition-colors">
                            support@ecotravel.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="card bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary-800 mb-2">Quick Response</h3>
                    <p className="text-primary-700 text-sm">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card">
                  <h3 className="font-semibold text-neutral-800 mb-4">Follow Our Journey</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-lg flex items-center justify-center text-white transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-lg flex items-center justify-center text-white transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.901 8.198 7.052 7.708 8.349 7.708s2.448.49 3.323 1.297c.896.896 1.386 2.047 1.386 3.344s-.49 2.448-1.297 3.323c-.875.896-2.026 1.386-3.323 1.386z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-lg flex items-center justify-center text-white transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-20 bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 text-primary-800">Find Us</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Located in the heart of the eco-district, our office is easily accessible by public transport and bike paths.
            </p>
          </div>
          
          <div className="card max-w-4xl mx-auto">
            <div className="aspect-video bg-neutral-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-neutral-500">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Interactive Map Placeholder</p>
                <p className="text-sm mt-2">Integrate with Google Maps, Mapbox, or your preferred mapping service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;