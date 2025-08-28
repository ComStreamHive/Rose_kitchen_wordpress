import React, { useState, useRef } from 'react';
import { ChevronDown } from "lucide-react";
import logo from '../assets/logo1.svg';

const Navbar2 = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = {
    'about': ['Our Story', 'Our Team', 'Mission & Vision', 'Company History'],
    'categories': ['Kitchen Equipment', 'Food Processors', 'Commercial Ovens', 'Refrigeration', 'Storage Solutions'],
    'terms': ['Terms of Service', 'Privacy Policy', 'Return Policy', 'Warranty Information'],
    'account': ['My Profile', 'Order History', 'Wishlist', 'Account Settings', 'Logout']
  };

  const handleMouseEnter = (item) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    // Add a small delay before hiding the dropdown
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  const handleDropdownMouseEnter = (item) => {
    // Clear timeout when mouse enters dropdown
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(item);
  };

  const handleDropdownMouseLeave = () => {
    // Add delay when leaving dropdown
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  return (
    <nav className="bg-white shadow-md px-8 py-6 flex items-center justify-between relative">
      {/* Logo Section - Left Side */}
      <div className="flex items-center">
        <img
          src={logo} // Replace with your actual logo path
          alt="Rose Kitchen Logo"
          className="h-18"
        />
      </div>

      {/* Nav Links - Right Side */}
      <ul className="flex items-center space-x-2 text-base font-medium text-gray-800 ml-auto">
        {/* About Us with Dropdown */}
        <li 
          className="relative"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`flex items-center gap-1 cursor-pointer px-3 py-2 rounded transition-all duration-200 ${
            hoveredItem === 'about' ? 'bg-red-600 text-white' : 'hover:bg-red-600 hover:text-white'
          }`}>
            About Us <ChevronDown size={16} />
          </div>
          
          {/* Dropdown Menu */}
          {hoveredItem === 'about' && (
            <div 
              className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
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
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 hover:bg-red-600 hover:text-white block"
          >
            Service
          </a>
        </li>

        {/* Contact Us */}
        <li>
          <a 
            href="/contact"
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 hover:bg-red-600 hover:text-white block"
          >
            Contact Us
          </a>
        </li>

        {/* Home link */}
        <li>
          <a 
            href="/home"
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 hover:bg-red-600 hover:text-white block"
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
          <div className={`flex items-center gap-1 cursor-pointer px-3 py-2 rounded transition-all duration-200 ${
            hoveredItem === 'categories' ? 'bg-red-600 text-white' : 'hover:bg-red-600 hover:text-white'
          }`}>
            Categories List <ChevronDown size={16} />
          </div>
          
          {/* Dropdown Menu */}
          {hoveredItem === 'categories' && (
            <div 
              className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
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
          <div className={`flex items-center gap-1 cursor-pointer px-3 py-2 rounded transition-all duration-200 ${
            hoveredItem === 'terms' ? 'bg-red-600 text-white' : 'hover:bg-red-600 hover:text-white'
          }`}>
            Terms <ChevronDown size={16} />
          </div>
          
          {/* Dropdown Menu */}
          {hoveredItem === 'terms' && (
            <div 
              className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
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
          <div className={`flex items-center gap-1 cursor-pointer px-3 py-2 rounded transition-all duration-200 ${
            hoveredItem === 'account' ? 'bg-red-600 text-white' : 'hover:bg-red-600 hover:text-white'
          }`}>
            My Account <ChevronDown size={16} />
          </div>
          
          {/* Dropdown Menu */}
          {hoveredItem === 'account' && (
            <div 
              className="absolute top-full right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
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
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 hover:bg-red-600 hover:text-white block"
          >
            Privacy Policy
          </a>
        </li>

        {/* Test */}
        <li>
          <a 
            href="/test"
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 hover:bg-red-600 hover:text-white block"
          >
            Test
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;