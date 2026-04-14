"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const serviceCategories = [
  {
    title: "Creative Design",
    desc: "Impactful branding that defines your business identity.",
    items: ["Logo & Identity", "Corporate Profile", "Event Design", "Social Media Posters"],
    whatsapp: "Hi Blackantz, I need a Creative Design quote.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Product Packaging",
    desc: "Specialized retail packaging for food, medicine, and FMCG.",
    items: ["Carton & Pouch Design", "Pizza & Sweet Boxes", "Oil & Rice Bags", "Masala Packets"],
    whatsapp: "Hi Blackantz, I'm interested in Product Packaging design.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Premium Signage",
    desc: "High-visibility boards for shops, malls, and industries.",
    items: ["ACP & LED Acrylic", "Gold Letter Sign", "Totem / Pylon Signs", "Slim Backlit Boards"],
    whatsapp: "Hi Blackantz, I want to inquire about Shop Sign Boards.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Printing Services",
    desc: "Quality offset and digital printing with premium finishes.",
    items: ["Matt/Glossy Cards", "Brochures & Catalogs", "Lanyards & ID Cards", "Vehicle Branding"],
    whatsapp: "Hi Blackantz, I need Printing Service details.",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Hospitality & Retail",
    desc: "End-to-end branding for restaurants and retail outlets.",
    items: ["Menu Card Design", "Display UV Printing", "Inshop Branding", "Sandwich Boards"],
    whatsapp: "Hi Blackantz, I need branding for my Restaurant/Shop.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
  }
];

const Services = () => {
  const openWhatsApp = (msg) => {
    const phone = "919894500868";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">What We Do</h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1B] tracking-tighter">
              Integrated <span className="text-[#F37021]">Creative</span> Solutions
            </h2>
          </motion.div>
          <p className="text-gray-500 font-medium max-w-sm">
            From digital concepts to physical fabrication, we provide a complete 360° advertising ecosystem.
          </p>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="pb-20 !overflow-visible"
        >
          {serviceCategories.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 h-full flex flex-col group">
                
                {/* Image & Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-black uppercase tracking-tight">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-bold text-[#1A1A1B] uppercase tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F37021]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* WhatsApp CTA */}
                  <button 
                    onClick={() => openWhatsApp(service.whatsapp)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-2xl group/btn hover:bg-[#25D366] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle size={20} className="text-[#25D366] group-hover/btn:text-white" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1B] group-hover/btn:text-white">
                        Inquire Now
                      </span>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #F37021 !important;
        }
      `}</style>
    </section>
  );
};

export default Services;