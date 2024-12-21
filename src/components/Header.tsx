import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            Artis<span className="text-pink-500">Gallery</span>
          </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="hover:text-pink-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/list"
            className="hover:text-pink-500 transition duration-300"
          >
            List Artis
          </Link>
          <Link
            to="/about"
            className="hover:text-pink-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-500 transition duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl hover:text-pink-500 transition duration-300"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block text-lg hover:text-pink-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                onClick={toggleMenu}
                className="block text-lg hover:text-pink-500 transition duration-300"
              >
                List Artis
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block text-lg hover:text-pink-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block text-lg hover:text-pink-500 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
