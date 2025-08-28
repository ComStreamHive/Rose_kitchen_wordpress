import React from 'react';

import { IoIosCall,IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import logo from '../assets/logo1.svg';
import payment from '../assets/payment1.svg'

const Footer1 = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8  mt-10">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo Section - Left Side */}
        <div className="flex items-center">
          <img
            src={logo} // Replace with your actual logo path
            alt="Rose Kitchen Logo"
            className="h-20" // Increased logo size
          />
        </div>

        {/* Contact Information - Center */}
        <div className="flex items-center space-x-12">
          {/* Phone and Email in vertical stack */}
          <div className="space-y-2">
            {/* Phone Number */}
            <div className="flex items-center space-x-3 text-black">
              <IoIosCall  size={22} className="text-black-600" />
              <span className="text-xl font-normal">(845) 418-5588</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 text-black">
              <IoMdMail size={22} className="text-black-600" />
              <span className="text-xl font-normal">sr@rosekitchen.net</span>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-center space-x-3 text-black">
            <FaClock size={22} className="text-black-600" />
            <div className="text-xl">
              <div className="font-normal">
                <span className="font-semibold">Mon - Thu:</span> 9 AM - 5 PM
              </div>
              <div className="font-normal">
                <span className="font-semibold">Fri:</span> 9 AM - 1 PM
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods - Right Side */}
        <div className="flex items-center">
          <img
            src={payment} // Replace with your actual payment methods image
            alt="Accepted Payment Methods"
            className="h-16" // Increased payment section size
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer1;