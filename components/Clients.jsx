"use client";

import React from "react";
import { motion } from "framer-motion";
import logoData from "@/logo.json";

const LogoTrack = ({ items, direction = "left" }) => {
  // Triple the items to ensure the infinite loop is physically longer than the screen width
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden select-none group">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          ease: "linear",
          duration: 30, // Adjust speed here (higher = slower)
          repeat: Infinity,
        }}
        className="flex flex-nowrap gap-8 md:gap-12 py-4"
      >
        {duplicatedItems.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center w-36 h-20 md:w-52 md:h-28 bg-gray-50 rounded-[2rem] border border-gray-100 px-8 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-orange-100/50"
          >
            <img 
              src={logo.image} 
              alt={logo.alt} 
              className="max-w-full max-h-full object-contain pointer-events-none"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Clients = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F37021] font-black uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Our Network
          </motion.h4>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1B] tracking-tighter mb-6">
            Trusted by <span className="text-[#F37021]">Industry</span> Leaders.
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl">
            From local startups to established enterprises, we’ve delivered 250+ projects 
            across Tamil Nadu and India.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-6 md:gap-10">
        {/* Row 1: Top Track (Left) */}
        <LogoTrack items={logoData.topRow} direction="left" />

        {/* Row 2: Bottom Track (Right) */}
        <LogoTrack items={logoData.bottomRow} direction="right" />

        {/* Edge Masking: Creates the "fade-in/fade-out" effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      </div>
    </section>
  );
};

export default Clients;