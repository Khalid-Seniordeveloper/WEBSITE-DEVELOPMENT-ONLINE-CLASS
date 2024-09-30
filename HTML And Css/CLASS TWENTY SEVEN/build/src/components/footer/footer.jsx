import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Navigation */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Fashion Varieties */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Fashion Varieties</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/men"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Kids' Fashion
                </Link>
              </li>
              <li>
                <Link
                  to="/accessories"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/sales"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Sales & Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-white hover:text-gray-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-gray-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white hover:text-gray-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-gray-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-gray-300">
          <p>&copy; 2024 Elegant Attire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
