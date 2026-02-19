import React from 'react';
import { FiHeart, FiStar, FiCoffee } from 'react-icons/fi';

const About = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1000&auto=format&fit=crop" 
                alt="Crafting Table" 
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-rose-100 rounded-full -z-10 hidden md:block"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-stone-100 rounded-full -z-10 hidden md:block"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              The Story of <br/>
              <span className="text-rose-500">Keerthu Creation</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to Keerthu Creation, where we believe that the best gifts are the ones made by hand and heart. 
              Our journey began with a simple passion for paper crafting and a desire to make birthdays and special occasions truly memorable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              "Turning paper into memories" isn't just our tagline; it's our philosophy. In a digital world, receiving a handmade note or a personalized scrapbook brings a unique warmth that pixels cannot replicate.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-stone-50 rounded-xl">
                <FiHeart className="mx-auto text-rose-500 mb-2" size={24} />
                <span className="block font-bold text-gray-900">Passion</span>
              </div>
              <div className="text-center p-4 bg-stone-50 rounded-xl">
                <FiStar className="mx-auto text-rose-500 mb-2" size={24} />
                <span className="block font-bold text-gray-900">Quality</span>
              </div>
              <div className="text-center p-4 bg-stone-50 rounded-xl">
                <FiCoffee className="mx-auto text-rose-500 mb-2" size={24} />
                <span className="block font-bold text-gray-900">Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;