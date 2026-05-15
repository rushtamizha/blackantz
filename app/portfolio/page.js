// "use client";

// import React, { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, ExternalLink, ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import worksData from "@/works.json";

// export default function PortfolioPage() {
//   const [activeCategory, setActiveCategory] = useState("all");

//   // Flattening and memoizing the data for the "All" view
//   const allWorks = useMemo(() => {
//     return [
//       ...worksData.advertising,
//       ...worksData.brochure,
//       ...worksData.common,
//       ...worksData.creative,
//       ...worksData.flyer,
//       ...worksData.logo,
//       ...worksData.packaging,
//       ...worksData.signage,
//       ...worksData.vehicle,
//     ];
//   }, []);

//   const categories = [
//     { id: "all", label: "All Projects" },
//     { id: "advertising", label: "advertising" },
//     { id: "brochure", label: "brochure" },
//     { id: "common", label: "common" },
//     { id: "creative", label: "creative" },
//     { id: "flyer", label: "flyer" },
//     { id: "logo", label: "logo" },
//     { id: "packaging", label: "packaging" },
//     { id: "signage", label: "signage" },
//     { id: "vehicle", label: "vehicle" },
//   ];

//   const displayWorks = activeCategory === "all" 
//     ? allWorks 
//     : allWorks.filter(work => work.category === activeCategory);

//   return (
//     <main className="min-h-screen bg-white pt-32 pb-20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header Area */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-2 text-[#F37021] font-black uppercase tracking-widest text-[10px] mb-4 hover:gap-4 transition-all">
//               <ArrowLeft size={14} /> Back to Home
//             </Link>
//             <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1B] tracking-tighter">
//               The <span className="text-[#F37021]">Gallery.</span>
//             </h1>
//           </div>
//           <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.3em] max-w-[200px]">
//             Showcasing 250+ Successful Projects
//           </p>
//         </div>

//         {/* Category Filter Bar */}
//         <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-8">
//           {categories.map((cat , i) => (
//             <button
//               key={i}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
//                 activeCategory === cat.id 
//                 ? "bg-[#1A1A1B] text-white shadow-xl shadow-gray-200" 
//                 : "bg-gray-50 text-gray-400 hover:bg-gray-100"
//               }`}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         {/* Dynamic Grid */}
//         <motion.div 
//           layout
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           <AnimatePresence mode="popLayout">
//             {displayWorks.map((work) => (
//               <motion.div
//                 key={work.id}
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.4 }}
//                 className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100"
//               >
//                 {/* Image Component */}
//                 <img 
//                   src={work.image} 
//                   alt={work.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 {/* Info Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-[#1A1A1B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
//                   <span className="text-[#F37021] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest bg-white/10 backdrop-blur-md w-fit mb-4">
//                     {work.type || work.category}
//                   </span>
//                   <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 leading-tight hidden">
//                     {work.title}
//                   </h3>
                  
//                   <button 
//                     onClick={() => window.open(`https://wa.me/919894500868?text=${encodeURIComponent(work.whatsapp)}`)}
//                     className="flex items-center gap-3 bg-white text-[#1A1A1B] px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#F37021] hover:text-white transition-all"
//                   >
//                     <MessageCircle size={18} />
//                     Project Inquiry
//                   </button>
//                 </div>

//                 {/* Mobile Static Label */}
                
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Empty Result State */}
//         {displayWorks.length === 0 && (
//           <div className="py-40 text-center">
//             <p className="text-gray-300 font-black uppercase tracking-[0.3em] text-sm ">
//               Updating project archives...
//             </p>
//           </div>
//         )}

//       </div>
//     </main>
//   );
// }


"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowLeft, X, Maximize2 } from "lucide-react";
import Link from "next/link";
import worksData from "@/works.json";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  // State for the Image Preview Modal
  const [selectedWork, setSelectedWork] = useState(null);

  const allWorks = useMemo(() => {
    return [
      ...worksData.advertising,
      ...worksData.brochure,
      ...worksData.common,
      ...worksData.creative,
      ...worksData.flyer,
      ...worksData.logo,
      ...worksData.packaging,
      ...worksData.signage,
      ...worksData.vehicle,
    ];
  }, []);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "advertising", label: "advertising" },
    { id: "brochure", label: "brochure" },
    { id: "common", label: "common" },
    { id: "creative", label: "creative" },
    { id: "flyer", label: "flyer" },
    { id: "logo", label: "logo" },
    { id: "packaging", label: "packaging" },
    { id: "signage", label: "signage" },
    { id: "vehicle", label: "vehicle" },
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
          {categories.map((cat, i) => (
            <button
              key={i}
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
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 cursor-pointer"
              >
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Quick Preview Button (Visible on Hover) */}
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedWork(work); }}
                  className="absolute top-6 right-6 z-10 p-4 bg-white/10 backdrop-blur-lg rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#F37021]"
                >
                  <Maximize2 size={20} />
                </button>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-[#1A1A1B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="text-[#F37021] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest bg-white/10 backdrop-blur-md w-fit mb-4">
                    {work.type || work.category}
                  </span>
                  
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => setSelectedWork(work)}
                      className="w-full flex items-center justify-center gap-3 bg-white text-[#1A1A1B] px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all"
                    >
                      View Preview
                    </button>
                    <button 
                      onClick={() => window.open(`https://wa.me/919894500868?text=${encodeURIComponent(work.whatsapp)}`)}
                      className="w-full flex items-center justify-center gap-3 bg-[#F37021] text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all"
                    >
                      <MessageCircle size={18} />
                      WhatsApp Inquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {displayWorks.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-gray-300 font-black uppercase tracking-[0.3em] text-sm ">
              Updating project archives...
            </p>
          </div>
        )}
      </div>

      {/* --- FULLSCREEN PREVIEW MODULE --- */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
            className="fixed inset-0 z-[100] bg-[#1A1A1B]/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
          >
            {/* Close Button */}
            <motion.button 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedWork(null)}
            >
              <X size={40} />
            </motion.button>

            {/* Content Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative  max-w-5xl w-full flex flex-col gap-6"
            >
              <div className="relative aspect-video md:aspect-[16/9]  rounded-3xl overflow-hidden  ">
                <img 
                  src={selectedWork.image} 
                  alt={selectedWork.title}
                  className="w-full  h-full object-contain rounded-[1rem]  shadow-2xl  "
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
                <div className="text-center md:text-left">
                  <span className="text-[#F37021] text-xs font-black uppercase tracking-[0.3em]">
                    {selectedWork.category}
                  </span>
                  <h3 className="text-white text-3xl font-black uppercase tracking-tighter mt-1">
                    {selectedWork.title}
                  </h3>
                </div>
                
                <button 
                  onClick={() => window.open(`https://wa.me/919894500868?text=${encodeURIComponent(selectedWork.whatsapp)}`)}
                  className="flex items-center gap-3 bg-[#F37021] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#F37021]/20"
                >
                  <MessageCircle size={20} />
                  Enquire via WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}