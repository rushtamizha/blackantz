"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Package, 
  Printer, 
  Calendar, 
  Layout, 
  ChevronRight,
  Clock,
  CheckCircle2,
  Users2,
  HardHat
} from "lucide-react";

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "Creative Design Services",
      icon: <Palette className="text-[#F37021]" size={32} />,
      image: "http://googleusercontent.com/image_collection/image_retrieval/12873042851699095095_0",
      description: "Combining strategic thinking with creative excellence to build impactful visual identities.",
      items: ["Branding", "Brand Development", "Advertising Campaigns", "Creative Design", "Social Media Creatives", "Logo Creation"]
    },
    {
      title: "Sign Board Services",
      icon: <Layout className="text-[#F37021]" size={32} />,
      image: "http://googleusercontent.com/image_collection/image_retrieval/12197099021564088168_0",
      description: "Modern signage systems that transform spaces and enhance brand visibility.",
      items: ["ACP with Acrylic Boards", "3D LED Signage", "Backlit & Slim UV Boards", "Directory Signage", "Wayfinding Systems", "Wall Graphics"]
    },
    {
      title: "Printing Services",
      icon: <Printer className="text-[#F37021]" size={32} />,
      image: "http://googleusercontent.com/image_collection/image_retrieval/15881737468328834955_0",
      description: "High-quality print solutions with 25+ specialized vendors ensuring premium finishes.",
      items: ["Business Cards & Brochures", "Envelopes & Office Stationery", "Flyers & Handbills", "Catalogs & Danglers", "Large Scale Printing", "Vehicle Wrapping"]
    },
    {
      title: "Package Design & Events",
      icon: <Package className="text-[#F37021]" size={32} />,
       image: "http://googleusercontent.com/image_collection/image_retrieval/15881737468328834955_0",
      description: "From product packaging to high-impact event stalls and backdrops.",
      items: ["Carton Boxes", "Product Packaging", "Container Wrapping", "Event Backdrops", "Stall Creatives", "Rollup Standees"]
    }
  ];

  const capabilityStats = [
    { label: "Years Experience", value: "14+", icon: <Clock size={20} /> },
    { label: "Printing Vendors", value: "25+", icon: <Printer size={20} /> },
    { label: "Fitting Team", value: "50+", icon: <HardHat size={20} /> },
    { label: "Creative Experts", value: "Skilled", icon: <Users2 size={20} /> },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section with Image Background */}
      <section className="relative pt-40 pb-24 bg-[#0F0F10] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="http://googleusercontent.com/image_collection/image_retrieval/2851750721611841365_0" 
            alt="Agency Studio" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-6">
              Our Expertise
            </h4>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              Elevating Brands <br />
              <span className="text-[#F37021]">Through Innovation.</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
              From brand identity to modern signage, we offer a comprehensive range of 
              creative and printing services designed to help businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capability Stats Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {capabilityStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-[#F37021]">{stat.icon}</div>
                <div>
                  <div className="text-lg font-black text-[#1A1A1B]">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-[3rem] border border-gray-100 overflow-hidden transition-all duration-500 "
              >
                {service.image && (
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-black text-[#1A1A1B] uppercase tracking-tighter">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-y-3">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-[#F37021]" />
                        <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Brand Philosophy Overlay */}
      <section className="py-24 bg-[#0F0F10] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
            Establishing a consistent <span className="text-[#F37021]">brand presence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
            As a leading creative agency in Tamil Nadu, we specialize in transforming 
            spaces into engaging brand environments through aesthetically designed 
            signage and strategic visual marketing.
          </p>
        </div>
        {/* Decorative subtle image fade at the bottom */}
        <div className="absolute hidden bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F37021]/10 to-transparent pointer-events-none" />
      </section>
    </main>
  );
};

export default ServicesPage;