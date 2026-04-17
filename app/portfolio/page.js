"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import worksData from "@/works.json";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Flattening and memoizing the data for the "All" view
  const allWorks = useMemo(() => {
    return [
      ...worksData.aluminumfabric,
      ...worksData.expobranding,
      ...worksData.fancysignage,
      ...worksData.graphicdesign,
      ...worksData.packagedesign,
      ...worksData.siteworks,
      ...worksData.vehiclebranding,
      ...worksData.portfolio,
    ];
  }, []);

  const categories = [
    { id: "all", label: "All Projects" },
    // { id: "aluminumfabric", label: "aluminumfabric" },
    // { id: "expobranding", label: "expobranding" },
    // { id: "fancysignage", label: "fancysignage" },
    // { id: "graphicdesign", label: "graphicdesign" },
    // { id: "packagedesign", label: "packagedesign" },
    // { id: "siteworks", label: "siteworks" },
    // { id: "vehiclebranding", label: "vehiclebranding" },
    // { id: "portfolio", label: "portfolio" },
  ];

  const displayWorks = activeCategory === "all" 
    ? allWorks 
    : allWorks.filter(work => work.category === activeCategory);

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-[#F37021] font-black uppercase tracking-widest text-[10px] mb-4 hover:gap-4 transition-all">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1B] tracking-tighter">
              The <span className="text-[#F37021]">Gallery.</span>
            </h1>
          </div>
          <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.3em] max-w-[200px]">
            Showcasing 250+ Successful Projects
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat.id 
                ? "bg-[#1A1A1B] text-white shadow-xl shadow-gray-200" 
                : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100"
              >
                {/* Image Component */}
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-[#1A1A1B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="text-[#F37021] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest bg-white/10 backdrop-blur-md w-fit mb-4">
                    {work.type || work.category}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
                    {work.title}
                  </h3>
                  
                  <button 
                    onClick={() => window.open(`https://wa.me/919894500868?text=${encodeURIComponent(work.whatsapp)}`)}
                    className="flex items-center gap-3 bg-white text-[#1A1A1B] px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#F37021] hover:text-white transition-all"
                  >
                    <MessageCircle size={18} />
                    Project Inquiry
                  </button>
                </div>

                {/* Mobile Static Label */}
                
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Result State */}
        {displayWorks.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-gray-300 font-black uppercase tracking-[0.3em] text-sm ">
              Updating project archives...
            </p>
          </div>
        )}

      </div>
    </main>
  );
}