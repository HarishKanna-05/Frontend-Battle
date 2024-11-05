import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-8 pt-10 mt-4">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Club Info */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
          {/* Club Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-2">DEVS CLUB</h2>
            <p className="text-gray-400 max-w-xs">
              Devs Club is dedicated to bringing together developers, designers,
              and tech enthusiasts to learn, collaborate, and innovate.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-gray-300">
              About Us
            </a>
            <a href="#events" className="hover:text-gray-300">
              Events
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-700 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Devs Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
