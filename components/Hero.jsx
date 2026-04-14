"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { MessageCircle, ArrowRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroImages = [
  { url: "https://i.pinimg.com/236x/36/61/c2/3661c2687024c590bc6b00af8572e5c7.jpg", title: "Premium LED Signage" },
  { url: "https://themarketingbirds.com/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-05-at-20.04.30.jpeg", title: "Innovative Packaging" },
  { url: "https://pbs.twimg.com/media/D3oUcXSXsAACT12.jpg", title: "Brand Identity" },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d8d39017351855.5e7baa24c9dcc.jpg", title: "High-End UV Printing" },
];

const CreativeHero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919894500868?text=Hi Blackantz! I saw your portfolio and want to discuss a project.", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-[#0F0F10] flex items-center pt-28 pb-12 lg:pt-20 overflow-hidden">
      
      {/* Background Text Watermark - Adjusted size for mobile */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[30vw] lg:text-[25vw] font-black leading-none uppercase text-white">
          Creative
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Bold Typography */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <Star size={12} className="text-[#F37021] fill-[#F37021]" />
            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-gray-300">
              Premium Agency Since 2020
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tighter"
          >
            WE BUILD <br />
            <span className="text-[#F37021]">VISUAL</span> <br className="hidden lg:block" />
            LEGACIES.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base md:text-xl font-medium max-w-lg leading-relaxed"
          >
            Transforming businesses into brands through industrial-grade signage, 
            expert packaging, and high-impact digital design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
          >
            <button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-[#F37021] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#1A1A1B] transition-all duration-500"
            >
              Start Project <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0F0F10] bg-gray-800 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
                </div>
              ))}
              <p className="pl-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span className="text-white block">50+ Brands</span> Trusted Us
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Creative Image Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative order-1 lg:order-2"
        >
          <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              speed={1000}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              className="h-full w-full"
            >
              {heroImages.map((img, idx) => (
                <SwiperSlide key={idx} className="relative">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                    <p className="text-[#F37021] text-[9px] font-black uppercase tracking-widest mb-1">Featured Work</p>
                    <h4 className="text-white text-xl lg:text-2xl font-black uppercase tracking-tight">{img.title}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Floating Stats Card - Optimized Position for Mobile */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-left-8 bg-white p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-2xl z-20"
          >
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#F37021]/10 rounded-xl lg:rounded-2xl flex items-center justify-center text-[#F37021]">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-[8px] lg:text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Active Support</p>
                <h5 className="text-[#1A1A1B] text-xs lg:text-sm font-black uppercase">WhatsApp</h5>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Side Label - Hidden on Mobile to prevent overflow */}
      <div className="absolute right-6 bottom-20 vertical-text hidden lg:block">
        <span className="text-gray-700 text-[10px] font-black uppercase tracking-[1em] rotate-90 inline-block">
          Explore
        </span>
      </div>
    </section>
  );
};

export default CreativeHero;