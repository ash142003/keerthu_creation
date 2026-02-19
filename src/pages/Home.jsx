import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      
      <Features />
      
      {/* Featured Collection */}
      <section className="py-24 bg-rose-50/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Recent Masterpieces</h2>
              <p className="text-gray-600">Each creation is a labor of love, designed to capture a specific moment in time.</p>
            </div>
            <Link to="/gallery" className="group flex items-center gap-3 text-rose-600 font-bold hover:gap-5 transition-all">
              View Entire Collection <SafeIcon icon={FiArrowRight} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "images/1.png",
                // tag: "Bestseller",
                title: "Handcrafted with Heart"
              },
              {
                src: "images/2.png",
                // tag: "New Arrival",
                title: "Our Signature Designs"
              },
              {
                src: "images/3.png",
                // tag: "Signature",
                title: "Moments Made Beautiful"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[32px] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 rounded-full bg-rose-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif italic mb-8 max-w-4xl mx-auto leading-tight">
            "In a world of digital messages, a handmade note is a tangible hug that lasts forever."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-rose-500"></div>
            <span className="text-rose-500 font-bold uppercase tracking-[0.2em] text-sm">Keerthu Creation</span>
            <div className="w-12 h-[1px] bg-rose-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;