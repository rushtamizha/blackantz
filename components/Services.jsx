"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const serviceCategories = [
  {
    title: "Creative Design",
    desc: "Eye-catching strategic designs building brand awareness through passionate solutions.",
    items: ["Branding & Brand Development", "Advertising Campaigns", "Logo & Identity", "Corporate Creative Design"],
    whatsapp: "Hi Blackantz, I need a Creative Design quote.",
    image: "https://www.creativepoint.in/wp-content/uploads/2024/07/brand-development-768x588-1.webp"
  },
  {
    title: "Packaging Design",
    desc: "Modern retail packaging from amenity packs to food and beauty products.",
    items: ["Carton & Product Boxes", "Container Wrapping", "Sachets & Pouches", "Product Design Strategy"],
    whatsapp: "Hi Blackantz, I'm interested in Product Packaging design.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/3/396327002/IH/CM/WU/9357456/pouch-designing-services-500x500.jpg"
  },
  {
    title: "Printing & Signage",
    desc: "100+ valuable vendors ensuring high-quality multicolor product printing.",
    items: ["Acrylic & LED Sign Boards", "Slim UV Lighting Boards", "Brochures & Catalogs", "Inshop Branding"],
    whatsapp: "Hi Blackantz, I need Printing and Signage details.",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/3d-vinyl-led-letter-sign-board-for-advertising-2217257308-x6y3gsii.jpg"
  },
  {
    title: "Digital & Events",
    desc: "Social media management and event backdrop creatives for maximum impact.",
    items: ["Digital Marketing Planning", "Social Media Content", "Event Backdrops", "Stall & POP Designs"],
    whatsapp: "Hi Blackantz, I need help with Digital Marketing or Events.",
    image: "https://img.freepik.com/free-psd/digital-marketing-3d-design-social-media-post-template_47987-21589.jpg"
  }
];

const Services = () => {
  const openWhatsApp = (msg) => {
    const phone = "919894500868";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const workflowItems = [
    "Business Goal Workshops",
    "Product/Brand Strategy",
    "Visual Identity Systems",
    "Pre-press Debugging"
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">Branding & Creative Services</h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1B] tracking-tighter leading-tight">
              Real and <span className="text-[#F37021]">Ethereal Results</span> for Growing ROI
            </h2>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            {workflowItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                <CheckCircle2 size={14} className="text-[#F37021]" />
                <span className="text-[10px] font-black uppercase tracking-tight text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="pb-20 !overflow-visible"
        >
          {serviceCategories.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm group transition-all duration-500 h-[550px] flex flex-col hover:shadow-2xl hover:shadow-orange-100/50">
                
                {/* Image & Overlay */}
                <div className="relative h-48 overflow-hidden">
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
                  <p className="text-gray-500 text-[13px] font-medium mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-[#1A1A1B] uppercase tracking-wide">
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

        {/* Experience Counter Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
            Unstoppable service with <span className="text-[#1A1A1B]">14+ Years of Industry Experience</span> & 100+ Specialized Vendors
          </p>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #F37021 !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Services;