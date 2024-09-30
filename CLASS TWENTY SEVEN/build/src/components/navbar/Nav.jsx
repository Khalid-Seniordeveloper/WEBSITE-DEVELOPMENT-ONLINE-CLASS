import React from 'react';
import { Link , useLocation } from 'react-router-dom'; // Import Link from react-router-dom


const Nav = () => {
    const location = useLocation(); // Get the current route
  
    return (
      <nav className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center px-6">
          <ul className="flex space-x-12">
            <li className="relative">
              <Link
                to="/"
                className={`relative text-lg font-semibold group ${
                  location.pathname === '/' ? 'text-gray-300' : 'text-white'
                }`}
              >
                Home
                <span
                  className={`absolute bottom-[-4px] left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-300 ${
                    location.pathname === '/' ? 'scale-x-100' : 'group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/about"
                className={`relative text-lg font-semibold group ${
                  location.pathname === '/about' ? 'text-gray-300' : 'text-white'
                }`}
              >
                About
                <span
                  className={`absolute bottom-[-4px] left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-300 ${
                    location.pathname === '/about' ? 'scale-x-100' : 'group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/contact"
                className={`relative text-lg font-semibold group ${
                  location.pathname === '/contact' ? 'text-gray-300' : 'text-white'
                }`}
              >
                Products
                <span
                  className={`absolute bottom-[-4px] left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-300 ${
                    location.pathname === '/contact' ? 'scale-x-100' : 'group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }; 
  
  export default Nav;