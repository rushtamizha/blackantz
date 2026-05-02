"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  ArrowUpRight, 
  CheckCircle2, 
  Palette, 
  Package, 
  Printer, 
  Layout, 
  Calendar,
  Zap
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Services = () => {
  const openWhatsApp = (msg) => {
    const phone = "919894500868";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const serviceCategories = [
    {
      title: "Creative Design",
      icon: <Palette size={24} />,
      desc: "Branding, Brand Development, and Advertising Campaigns that elevate your brand identity.",
      items: ["Branding & Identity", "Advertising Campaigns", "Social Media Creatives", "Logo Creation"],
      whatsapp: "Hi Blackantz, I need a Creative Design quote.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
    },
    {
      title: "Package Design",
      icon: <Package size={24} />,
      desc: "From Carton Boxes to Container Wrapping Stickers and Sachets, we pack with impact.",
      items: ["Carton & Product Boxes", "Container Wrapping", "Sachets & Pouches", "Product Infographics"],
      whatsapp: "Hi Blackantz, I'm interested in Package Design services.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Printing Services",
      icon: <Printer size={24} />,
      desc: "High-quality Office Stationery, Catalogs, and Large Scale Printing with 25+ specialized vendors.",
      items: ["Business Cards & Brochures", "Inshop Branding", "Vehicle Stickers / Wrapping", "Office Stationery"],
      whatsapp: "Hi Blackantz, I need a Printing service quote.",
      image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1932&auto=format&fit=crop"
    },
    {
      title: "Sign Board Services",
      icon: <Layout size={24} />,
      desc: "ACP with Acrylic, LED Signage, and Slim UV lighting boards for maximum visibility.",
      items: ["ACP Acrylic Signage", "3D LED / Backlit Boards", "Slim UV Lighting", "Directory Signage"],
      whatsapp: "Hi Blackantz, I need a Sign Board installation quote.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Event Services",
      icon: <Calendar size={24} />,
      desc: "Event Backdrops, Stall Creatives, and Digital Visual Menus for seamless brand experiences.",
      items: ["Event Backdrops", "Stall Backdrop Creatives", "Rollup Standees", "Digital Visual Menus"],
      whatsapp: "Hi Blackantz, I need Event Branding support.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const stats = [
    { label: "Experience", value: "14+ Years", icon: <ClockIcon /> },
    { label: "Vendors", value: "25+ Expert", icon: <Printer size={16} /> },
    { label: "Fitting Crew", value: "50+ Staff", icon: <CheckCircle2 size={16} /> },
    { label: "Status", value: "Unstoppable", icon: <Zap size={16} /> }
  ];

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">Comprehensive Solutions</h4>
            <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1B] tracking-tighter leading-[0.9] mb-6">
              Strategic Design. <br />
              <span className="text-[#F37021]">Flawless Execution.</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-lg leading-relaxed">
              As a leading creative agency in Tamil Nadu, we provide customized, cost-effective solutions 
              that elevate your brand, strengthen customer connections, and drive long-term business success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 hidden">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 flex flex-col gap-2">
                <div className="text-[#F37021]">{stat.icon}</div>
                <div>
                  <h3 className="text-xl font-black text-[#1A1A1B]">{stat.value}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-20 !overflow-visible"
        >
          {serviceCategories.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm flex flex-col h-[620px] group transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1B] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-[#F37021] flex-shrink-0" />
                        <span className="text-[11px] font-bold text-[#1A1A1B] uppercase tracking-wider">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => openWhatsApp(service.whatsapp)}
                    className="w-full flex items-center justify-between p-5 bg-[#0F0F10] rounded-[1.5rem] group/btn hover:bg-[#F37021] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle size={20} className="text-[#F37021] group-hover/btn:text-white" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                        Get A Quote
                      </span>
                    </div>
                    <ArrowUpRight size={20} className="text-white/30 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Closing Expertise Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-gray-50 rounded-[3.5rem] border border-gray-100 text-center"
        >
          <h3 className="text-xl md:text-2xl font-black text-[#1A1A1B] uppercase tracking-tighter mb-4">
            Reliable Service for Prominent Companies
          </h3>
          <p className="text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            We are expanding our technological range to reflect our 14+ years of experience. With 
            highly skilled designers, trendy social media specialists, and a massive network of printing 
            and fitting experts, we ensure all signage, printing, and digital work is <span className="text-[#F37021] font-black italic">unstoppable</span>.
          </p>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #D1D1D1;
          opacity: 1;
          height: 4px;
          width: 20px;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #F37021 !important;
          width: 40px;
        }
      `}</style>
    </section>
  );
};

// Helper Icon
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default Services;