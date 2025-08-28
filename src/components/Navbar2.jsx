import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronRight } from "lucide-react";
import logo from '../assets/logo1.svg'

const Navbar2 = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const timeoutRef = useRef(null);
  const subTimeoutRef = useRef(null);

  const customRed = '#D62039';
  const customRedBorder = '#C01E36';

  const menuItems = {
    about: ['Recent Projects', 'Design/Consulting'],
    categories: {
      'Bar Equipment': ['Cocktail Shakers', 'Bar Tools', 'Glassware', 'Ice Machines'],
      'Cooking': ['Chef Knives', 'Cookware', 'Small Appliances', 'Grills & Griddles'],
      'Commercial Ovens': ['Convection Ovens', 'Pizza Ovens', 'Combi Ovens', 'Deck Ovens'],
      'Refrigeration': ['Walk-in Coolers', 'Display Cases', 'Under-counter Fridges', 'Freezers'],
      'Storage Solutions': ['Shelving Units', 'Food Storage', 'Cabinets', 'Mobile Storage']
    },
    account: ['Order Tracking']
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
      setHoveredSubcategory(null);
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
      setHoveredSubcategory(null);
    }, 200);
  };

  const handleSubcategoryMouseEnter = (subcategory) => {
    if (subTimeoutRef.current) {
      clearTimeout(subTimeoutRef.current);
    }
    setHoveredSubcategory(subcategory);
  };

  const handleSubcategoryMouseLeave = () => {
    subTimeoutRef.current = setTimeout(() => {
      setHoveredSubcategory(null);
    }, 200);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md px-8 py-6 flex items-center justify-between relative z-50">
      {/* Logo Section - Left Side */}
      <div className="flex items-center">
        <a 
          href="https://www.rosekitchen.net"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="Rose Kitchen Logo"
            className="h-18"
          />
        </a>
      </div>

      {/* Nav Links - Right Side */}
      <ul className="flex items-center space-x-2 text-base font-medium text-gray-800 ml-auto">
        {/* About Us with Dropdown */}
       
<li 
  className="relative"
  onMouseEnter={() => handleMouseEnter('about')}
  onMouseLeave={handleMouseLeave}
>
  <div 
    className={`flex items-center gap-1 cursor-pointer px-3 py-2 rounded transition-all duration-200 ${
      hoveredItem === 'about' ? 'text-white' : 'text-gray-800'
    }`}
    style={{
      backgroundColor: hoveredItem === 'about' ? customRed : 'transparent',
    }}
  >
    About Us <ChevronDown size={16} />
  </div>
  
  {hoveredItem === 'about' && (
    <div 
      className="absolute top-full left-0 mt-1 w-56 rounded-lg shadow-lg z-50"
      style={{ backgroundColor: customRed, border: `1px solid ${customRedBorder}` }}
    >
      <ul className="py-2">
        {menuItems.about.map((item, index) => (
          <li key={index}>
            <a
              href={`https://www.rosekitchen.net/about/${item.toLowerCase().replace(/\s+/g, '-').replace('/', '')}`}
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm text-white transition-all duration-150 hover:bg-[#C01E36]"
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
            href="https://www.rosekitchen.net/service"
            rel="noopener noreferrer"
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 block"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = customRed;
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '';
            }}
          >
            Service
          </a>
        </li>

        {/* Contact Us */}
        <li>
          <a 
            href="/contact"
            
            rel="noopener noreferrer"
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 block"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = customRed;
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '';
            }}
          >
            Contact Us
          </a>
        </li>

        {/* Home link */}
        <li>
          <a 
            href="https://www.rosekitchen.net/home"
            
            rel="noopener noreferrer"
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 block"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = customRed;
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '';
            }}
          >
            Home
          </a>
        </li>

        {/* Categories List with Multi-level Dropdown */}
     {/* Categories List with Multi-level Dropdown */}
<li 
  className="relative"
  onMouseEnter={() => handleMouseEnter('categories')}
  onMouseLeave={handleMouseLeave}
>
  <div 
    className={`flex items-center gap-1 cursor-pointer px-3 py-2 rounded transition-all duration-200 ${
      hoveredItem === 'categories' ? 'text-white' : 'text-gray-800'
    }`}
    style={{
      backgroundColor: hoveredItem === 'categories' ? customRed : 'transparent',
    }}
  >
    Categories List <ChevronDown size={16} />
  </div>
  
  {hoveredItem === 'categories' && (
    <div 
      className="absolute top-full left-0 mt-1 w-64 rounded-lg shadow-lg z-50"
      style={{ backgroundColor: customRed, border: `1px solid ${customRedBorder}` }}
    >
      <div className="py-2">
        {Object.entries(menuItems.categories).map(([category, subcategories], index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleSubcategoryMouseEnter(category)}
            onMouseLeave={handleSubcategoryMouseLeave}
          >
            <a
              href={`https://www.rosekitchen.net/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
              
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 text-sm text-white transition-all duration-150 hover:bg-[#C01E36]"
            >
              <span>{category}</span>
              <ChevronRight size={14} />
            </a>
            
            {/* Subcategory Dropdown */}
            {hoveredSubcategory === category && (
              <div 
                className="absolute top-0 left-full ml-1 w-56 rounded-lg shadow-lg z-60"
                style={{ backgroundColor: customRed, border: `1px solid ${customRedBorder}` }}
              >
                <div className="py-2">
                  {subcategories.map((subcategory, subIndex) => (
                    <a
                      key={subIndex}
                      href={`https://www.rosekitchen.net/categories/${category.toLowerCase().replace(/\s+/g, '-')}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                      
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm text-white transition-all duration-150 hover:bg-[#C01E36]"
                    >
                      {subcategory}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )}
</li>


        {/* Terms - Simple Link */}
        <li>
          <a 
            href="/termsandconditions"
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 block"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = customRed;
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '';
            }}
          >
            Terms
          </a>
        </li>

        {/* My Account with Dropdown */}
        <li 
          className="relative"
          onMouseEnter={() => handleMouseEnter('account')}
          onMouseLeave={handleMouseLeave}
        >
         <div 
  className={`flex items-center gap-1 cursor-pointer px-3 py-2 rounded transition-all duration-200 ${
    hoveredItem === 'account' ? 'text-white' : 'text-gray-800'
  }`}
  style={{
    backgroundColor: hoveredItem === 'account' ? customRed : 'transparent',
  }}
>
  My Account <ChevronDown size={16} />
</div>

          
          {hoveredItem === 'account' && (
            <div 
              className="absolute top-full right-0 mt-1 w-56 rounded-lg shadow-lg z-50"
              style={{ backgroundColor: customRed, borderColor: customRedBorder, border: `1px solid ${customRedBorder}` }}
              onMouseEnter={() => handleDropdownMouseEnter('account')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="py-2">
                {menuItems.account.map((item, index) => (
                  <a
                    key={index}
                    href={`https://www.rosekitchen.net/account/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-white transition-all duration-150 hover:underline"
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
            href="/privacypolicy"
            className="cursor-pointer px-3 py-2 rounded transition-all duration-200 block"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = customRed;
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '';
            }}
          >
            Privacy Policy
          </a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar2;