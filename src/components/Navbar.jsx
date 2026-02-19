import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiInstagram, FiShoppingBag } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-lg border-b border-stone-100 py-3' : 'bg-transparent py-7'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif font-black text-gray-900 tracking-tighter group flex items-center gap-2">
          Keerthu<span className="text-rose-600 transition-colors group-hover:text-rose-700">_Creation</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-black tracking-[0.2em] uppercase transition-all relative group ${
                location.pathname === link.path ? 'text-rose-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-rose-600 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          
          <div className="flex items-center gap-6 pl-6 border-l border-stone-200">
            <a
              href="https://www.instagram.com/keerthu_creation?igsh=MTg1cG50aDJ2OGRmMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-rose-600 transition-all hover:scale-110"
            >
              <SafeIcon icon={FiInstagram} size={22} />
            </a>
            
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-rose-600 text-white text-xs font-black uppercase tracking-[0.15em] rounded-2xl hover:bg-rose-700 transition-all shadow-[0_15px_30px_-8px_rgba(225,29,72,0.3)] hover:shadow-[0_20px_35px_-10px_rgba(225,29,72,0.4)] hover:translate-y-[-2px] flex items-center gap-2"
            >
              <SafeIcon icon={FiShoppingBag} size={16} />
              Order Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-md text-gray-900 active:scale-90 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SafeIcon icon={isOpen ? FiX : FiMenu} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-50 bg-white"
          >
            <div className="flex flex-col h-full p-10 pt-32">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-stone-100"
              >
                <SafeIcon icon={FiX} size={24} />
              </button>

              <div className="space-y-8 mb-16">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block text-4xl font-serif font-black ${
                      location.pathname === link.path ? 'text-rose-600' : 'text-gray-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <Link
                  to="/contact"
                  className="block w-full text-center py-6 bg-rose-600 text-white rounded-[24px] font-black uppercase tracking-widest text-lg shadow-xl shadow-rose-200"
                >
                  Order Now
                </Link>
                <div className="flex justify-center gap-6 pt-6">
                  <a href="#" className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-gray-600">
                    <SafeIcon icon={FiInstagram} size={28} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;