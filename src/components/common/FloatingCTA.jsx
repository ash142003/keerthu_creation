import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-[100] md:hidden"
    >
      <Link
        to="/contact"
        className="flex items-center justify-center w-14 h-14 bg-rose-600 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(225,29,72,0.5)] hover:bg-rose-700 transition-colors active:scale-95"
      >
        <SafeIcon icon={FiShoppingBag} size={24} />
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;