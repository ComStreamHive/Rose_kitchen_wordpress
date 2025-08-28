import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, X } from 'lucide-react';
import image from '../assets/contact.png';
import Navbar from './Navbar1'
import Navbar2 from './Navbar2'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    textConsent: false,
    emailConsent: false,
    marketingConsent: false
  });
  
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setShowToast(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        textConsent: false,
        emailConsent: false,
        marketingConsent: false
      });
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <><Navbar/>
    <Navbar2/>
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Side - Image */}
      <div className="relative w-full md:w-3/5 h-64 md:h-auto">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Contact Info Card */}
        <div className="absolute bottom-8 left-8 bg-white rounded-lg p-6 shadow-lg max-w-sm z-10">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Address</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                 2836 RD 17M, New Hampton,<br />
                  New York, 10958
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
                <p className="text-gray-600 text-base">(845) 418-4568</p>
                <p className="text-gray-600 text-sm mt-1">Mon - Fri , 9am-6pm</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
                <p className="text-gray-600 text-base">info@rosekitchen.net</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-2/5 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Connect with our team</h2>
            <p className="text-gray-600 text-base">Fill out the form and we'll respond promptly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your name"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors text-base ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@website.com"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors text-base ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-3">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors text-base ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
              )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-4 pt-3">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="textConsent"
                  name="textConsent"
                  checked={formData.textConsent}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="textConsent" className="text-[15px] text-gray-600 leading-relaxed">
                 I consent to receive text messages about appointment reminders, and service notification from Rose kitchen at the phone number I provided. I acknowledge that my consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for assistance or STOP to opt out of receiving messages{' '}
                 <Link 
                   to="/privacypolicy" 
                   className="text-red-600 hover:text-red-700 underline"
                   onClick={() => window.scrollTo(0, 0)}
                 >
                   Privacy Policy
                 </Link> &{' '}
                 <Link 
                   to="/termsandconditions" 
                   className="text-red-600 hover:text-red-700 underline"
                   onClick={() => window.scrollTo(0, 0)}
                 >
                   Terms
                 </Link>.
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="emailConsent"
                  name="emailConsent"
                  checked={formData.emailConsent}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="emailConsent" className="text-[15px] text-gray-600 leading-relaxed">
                  I consent to receive text messages about appointment reminders, and service notification from Rose kitchen at the phone number I provided. I acknowledge that my consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for assistance or STOP to opt out of receiving messages{' '}
                  <Link 
                    to="/privacypolicy" 
                    className="text-red-600 hover:text-red-700 underline"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Privacy Policy
                  </Link> &{' '}
                  <Link 
                    to="/termsandconditions" 
                    className="text-red-600 hover:text-red-700 underline"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Terms
                  </Link>.
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="marketingConsent" className="text-[15px] text-gray-600 leading-relaxed">
                 <b> SignUp for Emails and phone calls</b><br/>
                 I agree to receive emails and phone calls.
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-6 text-base"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
          <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-base">Message sent successfully!</p>
              <p className="text-sm opacity-90">We'll get back to you soon.</p>
            </div>
            <button onClick={() => setShowToast(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
      <Footer1/>
    <Footer2/>
    <Footer3/>
    </>
  );
};

export default ContactComponent;