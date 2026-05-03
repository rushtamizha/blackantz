"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { 
  Palette, 
  Package, 
  Printer, 
  Layout, 
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { allServices } from "@/data";


const ServicesPage = () => {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#0F0F10] text-white relative">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#F37021]/5 blur-[80px] md:blur-[120px] rounded-full -mr-12 md:-mr-24" />
        
        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6">
              Expert Solutions
            </h4>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-6 md:mb-8">
              Services <br />
              <span className="text-[#F37021]">Redefined.</span>
            </h1>
            <p className="text-gray-400 text-base md:text-2xl font-medium leading-relaxed max-w-2xl">
              From strategic identity to durable fabrication—every detail is designed 
              to scale your brand and drive real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Services Loop */}
      {allServices.map((service, sIdx) => (
        <section key={sIdx} id={service.id} className={`py-16 md:py-24 ${sIdx % 2 !== 0 ? "bg-gray-50" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${sIdx % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0F0F10] text-[#F37021] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-5xl font-black text-[#1A1A1B] tracking-tighter uppercase leading-none">
                    {service.title}
                  </h2>
                </div>
                
                <h4 className="text-[#F37021] font-black text-sm md:text-lg mb-6 md:mb-8 leading-snug">
                  {service.subtitle}
                </h4>

                <div className="space-y-4 md:space-y-6">
                  {service.content.map((para, pIdx) => (
                    <p key={pIdx} className="text-gray-600 text-sm md:text-lg leading-relaxed font-medium">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 md:px-6 md:py-3 rounded-full border border-gray-200 shadow-sm">
                    <CheckCircle2 size={14} className="text-[#F37021]" />
                    <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-gray-700">Precision Work</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 md:px-6 md:py-3 rounded-full border border-gray-200 shadow-sm">
                    <CheckCircle2 size={14} className="text-[#F37021]" />
                    <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-gray-700">Expert Team</span>
                  </div>
                </div>
              </motion.div>

              {/* Image Slider Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`${sIdx % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="relative">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3500 + (sIdx * 500), disableOnInteraction: false }}
                    className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl border border-gray-100"
                  >
                    {service.images?.map((img, iIdx) => (
                      <SwiperSlide key={iIdx}>
                        <div className="h-[300px] sm:h-[450px] md:h-[600px] relative">
                          <img 
                            src={img} 
                            alt={`${service.title} Showcase`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Decorative element - Hidden on smallest mobile */}
                  <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 bg-[#F37021]/10 rounded-full blur-2xl" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-16 md:py-24 hidden bg-[#0F0F10] text-white text-center px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-6 md:mb-8 leading-tight">
            Ready to <span className="text-[#F37021]">Transform</span> <br className="hidden md:block" />
            Your Brand?
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mb-8 md:mb-12 font-medium">
            Contact us for reliable, high-quality, and cost-effective branding solutions.
          </p>
          <button className="bg-[#F37021] text-black px-8 py-4 md:px-12 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-3 mx-auto hover:bg-white transition-all group">
            Get Started Now
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          height: 4px;
          width: 20px;
          border-radius: 2px;
          transition: all 0.3s;
        }
        @media (min-width: 768px) {
          .swiper-pagination-bullet {
            height: 6px;
            width: 30px;
          }
        }
        .swiper-pagination-bullet-active {
          background: #F37021 !important;
          width: 40px;
        }
        @media (min-width: 768px) {
          .swiper-pagination-bullet-active {
            width: 60px;
          }
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;