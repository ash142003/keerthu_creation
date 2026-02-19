import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-stone-50 pt-16 pb-8 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gray-800">Keerthu_Creation</h3>
            <p className="text-gray-500 leading-relaxed">
              Handmade with love. Turning simple paper into everlasting memories for your special moments.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 hover:text-rose-500 transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="text-gray-500 hover:text-rose-500 transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-rose-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-rose-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/keerthu_creation?igsh=MTg1cG50aDJ2OGRmMA==" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-rose-500 hover:shadow-md transition-all">
                <FiInstagram size={20} />
              </a>
              {/* <a href="mailto:hello@keerthucreation.com" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-rose-500 hover:shadow-md transition-all">
                <FiMail size={20} />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Keerthu Creation. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
Crafted for Your Special Moments</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;