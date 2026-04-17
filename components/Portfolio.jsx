"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import worksData from "@/works.json";

// Combined list for the infinite auto-slide
const allWorks = [
      ...worksData.aluminumfabric,
      ...worksData.expobranding,
      ...worksData.fancysignage,
      ...worksData.graphicdesign,
      ...worksData.packagedesign,
      ...worksData.siteworks,
      ...worksData.vehiclebranding,
      ...worksData.portfolio,
];

const HomePortfolio = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">
            Production Reel
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1B] tracking-tighter">
            Real Projects. <span className="text-[#F37021]">Real Results.</span>
          </h2>
        </motion.div>
        
        <Link href="/portfolio">
          <motion.button 
            whileHover={{ gap: "1.5rem" }}
            className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#1A1A1B] border-b-2 border-[#F37021] pb-2 transition-all"
          >
            Explore All Work <ArrowUpRight size={16} />
          </motion.button>
        </Link>
      </div>

      {/* Infinite Smooth Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={1.4}
          spaceBetween={20}
          loop={true}
          speed={6000} // Adjust speed for the "gliding" effect
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.8 },
            1440: { slidesPerView: 4.5 },
          }}
          className="portfolio-auto-swiper"
        >
          {allWorks.map((work, idx) => (
            <SwiperSlide key={`${work.id}-${idx}`}>
              <div className="relative group aspect-[4/4] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-50 shadow-sm">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#F37021] text-[9px] font-black uppercase tracking-[0.2em] mb-2 block">
                    {work.category}
                  </span>
                  <h3 className="text-white text-lg font-bold leading-tight uppercase mb-4">
                    {work.title}
                  </h3>
                  
                  {/* WhatsApp Quick Action */}
                  <div className="overflow-hidden h-0 group-hover:h-10 transition-all duration-500">
                    <button 
                      onClick={() => window.open(`https://wa.me/919894500868?text=${encodeURIComponent(work.whatsapp)}`)}
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-[#F37021] hover:border-[#F37021] transition-all"
                    >
                      Enquire on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Edge Fades for Premium Look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 hidden lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 hidden lg:block" />
      </div>

      <style jsx global>{`
        .portfolio-auto-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default HomePortfolio;