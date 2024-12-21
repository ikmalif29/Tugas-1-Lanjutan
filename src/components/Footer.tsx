import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <img src="logo.png" alt="Artist Gallery Logo" className="max-w-xs" />
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
              <li><a href="#home" className="hover:text-orange-400 transition duration-300">Home</a></li>
              <li><a href="#list" className="hover:text-orange-400 transition duration-300">List</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition duration-300">About</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-white hover:text-orange-400 transition duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://instagram.com" className="text-white hover:text-orange-400 transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://twitter.com" className="text-white hover:text-orange-400 transition duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Artist Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
