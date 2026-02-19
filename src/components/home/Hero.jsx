import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-stone-50">
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-600"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-[0.15em]">Handcrafted with Love</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold text-gray-900 leading-[1.1] tracking-tight">
                Turning Paper <br/>
                <span className="text-rose-600 italic block mt-3">Into Memories</span>
              </h1>
              <div className="w-32 h-1.5 bg-rose-600 rounded-full opacity-20"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              We transform simple materials into timeless treasures. Perfect for birthdays, 
              surprises, and every "just because" moment in between.
            </p>

            <div className="flex flex-wrap gap-5 pt-6">
              <Link 
                to="/contact" 
                className="relative px-10 py-5 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-rose-700 transition-all flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(225,29,72,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(225,29,72,0.5)] group overflow-hidden"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <SafeIcon icon={FiShoppingBag} className="text-xl" />
                Order Your Surprise
                <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link to="/gallery" className="px-10 py-5 bg-white border-2 border-stone-200 text-gray-800 rounded-2xl font-black uppercase tracking-widest text-sm hover:border-rose-300 hover:text-rose-600 transition-all shadow-sm hover:shadow-md">
                Browse Gallery
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] max-w-[550px] mx-auto">
              <div className="absolute -inset-6 bg-rose-100/40 rounded-[60px] -rotate-6 blur-xl"></div>
              <div className="absolute -inset-6 bg-rose-50/60 rounded-[60px] rotate-3"></div>
              
              <div className="relative h-full rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white z-10 group">
<img 
  src="images/4.png"
  alt="Artisan Paper Craft"
  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Quality Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-6 md:-left-16 bg-white p-8 rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-stone-50 z-20 max-w-[280px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-200">
                    <span className="text-lg font-black italic">100%</span>
                  </div>
                  <div>
                    <span className="block text-sm font-black text-gray-900 leading-tight">Artisan Made</span>
                    <span className="text-xs text-rose-500 font-bold uppercase tracking-tighter">Premium Quality</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  "Every fold, every cut, and every detail is handled with extreme care."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;