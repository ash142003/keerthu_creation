import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const items = [
    {
      id: 1,
      title: "Handcrafted with Heart",
      category: "SPECIAL MOMENTS",
      image: "/images/1.png",
      tag: "BESTSELLER",
    },
    {
      id: 2,
      title: "Our Signature Designs",
      category: "SWEET MESSAGES",
      image: "/images/2.png",
      tag: "NEW ARRIVAL",
    },
    {
      id: 3,
      title: "Moments Made Beautiful",
      category: "ROMANTIC CLASSICS",
      image: "/images/3.png",
      tag: "SIGNATURE",
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Creations
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our collection of handmade treasures. Each piece is unique
            and crafted with attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Tag Badge */}
                <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs px-3 py-1 rounded-full z-10">
                  {item.tag}
                </span>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold tracking-wider text-rose-500 uppercase">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                  {item.title}
                </h3>

                <div className="w-full h-0.5 bg-gray-100 mt-4 mb-4 group-hover:bg-rose-200 transition-colors"></div>

                {/* <button className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors">
                  View Details
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
