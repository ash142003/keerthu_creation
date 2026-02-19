import React from 'react';
import { motion } from 'framer-motion';
import { FiGift, FiScissors, FiHeart } from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const Features = () => {
  const features = [
    {
      icon: FiGift,
      title: "Perfect Surprises",
      desc: "Thoughtfully designed items that make every unveiling a magical moment."
    },
    {
      icon: FiScissors,
      title: "Custom Precision",
      desc: "Meticulous attention to detail in every fold, cut, and personalized embellishment."
    },
    {
      icon: FiHeart,
      title: "Emotional Value",
      desc: "We don't just sell paper; we provide a vessel for your most precious feelings."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Crafting Joy, One Note at a Time</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            At Keerthu_Creation, we specialize in luxury handmade stationery and gifts that stand the test of time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group p-10 rounded-[32px] bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-8 bg-white rounded-3xl shadow-sm flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <SafeIcon icon={feature.icon} className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;