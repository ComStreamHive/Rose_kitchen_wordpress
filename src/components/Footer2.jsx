import React, { useState, useRef } from 'react';
import { ChevronDown } from "lucide-react";

const Footer2 = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = {
    'about': ['Our Story', 'Our Team', 'Mission & Vision', 'Company History'],
    'categories': ['Kitchen Equipment', 'Food Processors', 'Commercial Ovens', 'Refrigeration', 'Storage Solutions'],
    'terms': ['Terms of Service', 'Privacy Policy', 'Return Policy', 'Warranty Information'],
    'account': ['My Profile', 'Order History', 'Wishlist', 'Account Settings', 'Logout']
  };

  const handleMouseEnter = (item) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  const handleDropdownMouseEnter = (item) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(item);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  return (
    <footer className="bg-[#df3030ff] py-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Navigation Links - Centered */}
        <ul className="flex items-center justify-center space-x-8 text-xl font-normal text-white">
          {/* About Us with Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`flex items-center gap-1 cursor-pointer px-3 py-2 transition-all duration-200 ${
              hoveredItem === 'about' ? 'text-red-200' : 'hover:text-red-200'
            }`}>
              About Us <ChevronDown size={16} />
            </div>
            
            {/* Dropdown Menu */}
            {hoveredItem === 'about' && (
              <div 
                className="absolute bottom-full left-0 mb-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                onMouseEnter={() => handleDropdownMouseEnter('about')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <ul className="py-2">
                  {menuItems.about.map((item, index) => (
                    <li key={index}>
                      <a
                        href={`/about/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Service */}
          <li>
            <a 
              href="/service"
              className="cursor-pointer px-3 py-2 transition-all duration-200 hover:text-red-200 block"
            >
              Service
            </a>
          </li>

          {/* Contact Us */}
          <li>
            <a 
              href="/contact"
              className="cursor-pointer px-3 py-2 transition-all duration-200 hover:text-red-200 block"
            >
              Contact Us
            </a>
          </li>

          {/* Home */}
          <li>
            <a 
              href="/home"
              className="cursor-pointer px-3 py-2 transition-all duration-200 hover:text-red-200 block"
            >
              Home
            </a>
          </li>

          {/* Categories List with Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter('categories')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`flex items-center gap-1 cursor-pointer px-3 py-2 transition-all duration-200 ${
              hoveredItem === 'categories' ? 'text-red-200' : 'hover:text-red-200'
            }`}>
              Categories List <ChevronDown size={16} />
            </div>
            
            {/* Dropdown Menu */}
            {hoveredItem === 'categories' && (
              <div 
                className="absolute bottom-full left-0 mb-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                onMouseEnter={() => handleDropdownMouseEnter('categories')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="py-2">
                  {menuItems.categories.map((item, index) => (
                    <a
                      key={index}
                      href={`/categories/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Terms with Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter('terms')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`flex items-center gap-1 cursor-pointer px-3 py-2 transition-all duration-200 ${
              hoveredItem === 'terms' ? 'text-red-200' : 'hover:text-red-200'
            }`}>
              Terms <ChevronDown size={16} />
            </div>
            
            {/* Dropdown Menu */}
            {hoveredItem === 'terms' && (
              <div 
                className="absolute bottom-full left-0 mb-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                onMouseEnter={() => handleDropdownMouseEnter('terms')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="py-2">
                  {menuItems.terms.map((item, index) => (
                    <a
                      key={index}
                      href={`/terms/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* My Account with Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter('account')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`flex items-center gap-1 cursor-pointer px-3 py-2 transition-all duration-200 ${
              hoveredItem === 'account' ? 'text-red-200' : 'hover:text-red-200'
            }`}>
              My Account <ChevronDown size={16} />
            </div>
            
            {/* Dropdown Menu */}
            {hoveredItem === 'account' && (
              <div 
                className="absolute bottom-full right-0 mb-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                onMouseEnter={() => handleDropdownMouseEnter('account')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="py-2">
                  {menuItems.account.map((item, index) => (
                    <a
                      key={index}
                      href={`/account/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Privacy Policy */}
          <li>
            <a 
              href="/privacy-policy"
              className="cursor-pointer px-3 py-2 transition-all duration-200 hover:text-red-200 block"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer2;