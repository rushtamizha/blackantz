"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { MessageCircle, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroSlides = [
  { 
    url: "https://i.pinimg.com/236x/36/61/c2/3661c2687024c590bc6b00af8572e5c7.jpg", 
    highlight: "Outstanding",
    title: "Branding",
    subtitle: "Build a strong brand identity, use more virtual media, and attract more devoted clients."
  },
  { 
    url: "https://themarketingbirds.com/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-05-at-20.04.30.jpeg", 
    highlight: "Innovative",
    title: "Packaging",
    subtitle: "A good packaging design will encourage you to differentiate your products from those of your rivals."
  },
  { 
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d8d39017351855.5e7baa24c9dcc.jpg", 
    highlight: "Magic of",
    title: "Printing",
    subtitle: "We create a wonderful and efficient printing service for classy business people in a digital world."
  },
  { 
    url: "https://pbs.twimg.com/media/D3oUcXSXsAACT12.jpg", 
    highlight: "High-Impact",
    title: "Signage",
    subtitle: "Modern and aesthetic signage solutions tailored for offices, restaurants, and retail spaces."
  },
];

const CreativeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919894500868?text=Hi Blackantz!", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-[#0F0F10] flex items-center pt-24 pb-12 overflow-hidden">
      
      {/* Background Text Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none opacity-[0.03] select-none text-center">
        <h2 className="text-[25vw] font-black leading-none uppercase text-white">
          {heroSlides[activeIndex].title}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Content - Dynamic based on activeIndex */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tighter">
                <span className="text-[#F37021]">We </span>
                create <br />
                <span className="text-[#F37021]">{heroSlides[activeIndex].highlight}</span> <br/>
                {heroSlides[activeIndex].title}
              </h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-base md:text-xl font-medium max-w-lg leading-relaxed mt-6"
              >
                {heroSlides[activeIndex].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-[#F37021] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#1A1A1B] transition-all duration-500"
            >
              Start Project <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Side Slider */}
        <motion.div className="lg:col-span-5 relative order-1 lg:order-2">
          <div className="relative aspect-square lg:aspect-[5/6] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              speed={1000}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="h-full w-full"
            >
              {heroSlides.map((slide, idx) => (
                <SwiperSlide key={idx} className="relative">
                  <img 
                    src={slide.url} 
                    alt={slide.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-transparent to-[#0F0F10]/40" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CreativeHero;