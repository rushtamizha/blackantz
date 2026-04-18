"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { MessageCircle, ArrowRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroSlides = [
  { 
    url: "https://i.pinimg.com/236x/36/61/c2/3661c2687024c590bc6b00af8572e5c7.jpg", 
    title: "Outstanding Branding",
    subtitle: "Build a strong brand identity, use more virtual media, and attract more devoted clients."
  },
  { 
    url: "https://themarketingbirds.com/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-05-at-20.04.30.jpeg", 
    title: "Innovative Packaging",
    subtitle: "New Thinking, New Product Packaging Design to differentiate from rivals."
  },
  { 
    url: "https://pbs.twimg.com/media/D3oUcXSXsAACT12.jpg", 
    title: "UI/UX Digital Delight",
    subtitle: "Developing Intelligent Interfaces for Outstanding User Experiences."
  },
  { 
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d8d39017351855.5e7baa24c9dcc.jpg", 
    title: "Magic of Printing",
    subtitle: "Wonderful and efficient printing services for classy business people."
  },
];

const CreativeHero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919894500868?text=Hi Blackantz! I saw your portfolio and want to discuss a project.", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-[#0F0F10] flex items-center pt-35 pb-12 lg:pt-20 overflow-hidden">
      
      {/* Background Text Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none opacity-[0.03] select-none text-center">
        <h2 className="text-[25vw] font-black leading-none uppercase text-white">
          BLACKANTZ
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Box - Content Updated */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <Star size={12} className="text-[#F37021] fill-[#F37021]" />
            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
              The Right One, The Bright One
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tighter"
          >
            OUTSTANDING <br />
            <span className="text-[#F37021]">BRANDING</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base md:text-xl font-medium max-w-lg leading-relaxed"
          >
            Build your own identity with a multi-corrective strategy where every feature 
            supports your overall message and commercial goals.
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
            
            <p className="text-[10px] max-w-[200px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
              Template seeds are everywhere; <span className="text-white">We start a new line</span> for a distinctive appearance.
            </p>
          </motion.div>
        </div>

        {/* Right Side Slider - Updated with Slider Content */}
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
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
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
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-[#F37021] text-[10px] font-black uppercase tracking-widest mb-2">Service Focus</p>
                    <h4 className="text-white text-2xl lg:text-3xl font-black uppercase tracking-tight mb-2">{slide.title}</h4>
                    <p className="text-gray-300 text-xs lg:text-sm leading-relaxed font-medium">
                      {slide.subtitle}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Floating Taste Box (Right Side Box Content) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute hidden -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 max-w-[220px]"
          >
            <div className="space-y-2">
              <h5 className="text-[#1A1A1B] text-xs font-black uppercase leading-tight">
                Smell the taste through your eyes?
              </h5>
              <p className="text-[10px] text-gray-500 font-bold leading-relaxed">
                Yes. Our delightful packaging makes your taste buds awakened visually.
              </p>
              <div className="flex items-center gap-2 pt-2 text-[#F37021]">
                <MessageCircle size={14} fill="currentColor" />
                <span className="text-[9px] font-black uppercase">Visual Delight</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default CreativeHero;