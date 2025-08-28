import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronRight } from "lucide-react";

const Footer2 = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const timeoutRef = useRef(null);
  const subTimeoutRef = useRef(null);

  const customRed = '#B22222'; // Changed to firebrick

  const menuItems = {
    about: ['Recent Projects', 'Design/Consulting'],
    categories: {
      'Bar Equipment': ['Cocktail Shakers', 'Bar Tools', 'Glassware', 'Ice Machines'],
      'Cooking': ['Chef Knives', 'Cookware', 'Small Appliances', 'Grills & Griddles'],
      'Dishwashers':[],
      'Food Preparation': ['Cutting Boards', 'Food Processors', 'Hand Prep Tools', 'Mixers','Peelers And Slicers','pizza supplies'],
      'Ice Makers':[],
      'Janitorial': ['Cleaning Supplies', 'Floor Care', 'Rest room Necessities', 'Trash Cans'],
      'Parts':[],
      'Refrigeration Equipment': ['Glass Door Refrigeration Equipment ', 'Glass Door Refrigeration Equipment','Under Counter Refrigeration' ],
      'Smallwares': ['Bakeware ', 'Kitchen Utensils','Pans And Accessories','Pots and Pans'],
      'Super Market Equipments': ['Protection shields '],
      'Storage and Transport': ['Shelving ', 'Transporting']
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
    <footer style={{ backgroundColor: customRed }} className="py-8">
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
                className="absolute bottom-full left-0 mb-1 w-56 border rounded-lg shadow-lg z-50"
                style={{ backgroundColor: customRed, borderColor: '#A00000' }}
                onMouseEnter={() => handleDropdownMouseEnter('about')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <ul className="py-2">
                  {menuItems.about.map((item, index) => (
                    <li key={index}>
                      <a
                        href={`https://yourexternalwebsite.com/about/${item.toLowerCase().replace(/\s+/g, '-').replace('/', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-sm text-white transition-all duration-150 hover:underline"
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
              href="https://yourexternalwebsite.com/service"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-3 py-2 transition-all duration-200 hover:text-red-200 block"
            >
              Service
            </a>
          </li>

          {/* Contact Us */}
          <li>
            <a 
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-3 py-2 transition-all duration-200 hover:text-red-200 block"
            >
              Contact Us
            </a>
          </li>

          {/* Home */}
          <li>
            <a 
              href="https://yourexternalwebsite.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-3 py-2 transition-all duration-200 hover:text-red-200 block"
            >
              Home
            </a>
          </li>

          {/* Categories List with Multi-level Dropdown */}
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
                className="absolute bottom-full left-0 mb-1 w-64 border rounded-lg shadow-lg z-50"
                style={{ backgroundColor: customRed, borderColor: '#A00000' }}
                onMouseEnter={() => handleDropdownMouseEnter('categories')}
                onMouseLeave={handleDropdownMouseLeave}
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
                        href={`https://yourexternalwebsite.com/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 text-sm text-white transition-all duration-150 hover:underline"
                      >
                        <span>{category}</span>
                        <ChevronRight size={14} />
                      </a>
                      
                      {/* Subcategory Dropdown */}
                      {hoveredSubcategory === category && subcategories.length > 0 && (
                        <div 
                          className="absolute bottom-0 left-full ml-1 w-56 border rounded-lg shadow-lg z-60"
                          style={{ backgroundColor: customRed, borderColor: '#A00000' }}
                          onMouseEnter={() => handleSubcategoryMouseEnter(category)}
                          onMouseLeave={handleSubcategoryMouseLeave}
                        >
                          <div className="py-2">
                            {subcategories.map((subcategory, subIndex) => (
                              <a
                                key={subIndex}
                                href={`https://yourexternalwebsite.com/categories/${category.toLowerCase().replace(/\s+/g, '-')}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-sm text-white transition-all duration-150 hover:underline"
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
              className="cursor-pointer px-3 py-2 transition-all duration-200 hover:text-red-200 block"
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
            <div className={`flex items-center gap-1 cursor-pointer px-3 py-2 transition-all duration-200 ${
              hoveredItem === 'account' ? 'text-red-200' : 'hover:text-red-200'
            }`}>
              My Account <ChevronDown size={16} />
            </div>
            
            {/* Dropdown Menu */}
            {hoveredItem === 'account' && (
              <div 
                className="absolute bottom-full right-0 mb-1 w-56 border rounded-lg shadow-lg z-50"
                style={{ backgroundColor: customRed, borderColor: '#A00000' }}
                onMouseEnter={() => handleDropdownMouseEnter('account')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="py-2">
                  {menuItems.account.map((item, index) => (
                    <a
                      key={index}
                      href={`https://yourexternalwebsite.com/account/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      target="_blank"
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