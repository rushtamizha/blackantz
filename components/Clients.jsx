"use client";

import React from "react";
import { motion } from "framer-motion";

// Provided Data
const logoData = [
    { "id": 1, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 81A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 2, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 82A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 3, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 83A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 4, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 84A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 5, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 85A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 6, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 86A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 7, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 87A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 8, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 88A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 9, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 89A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 10, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 90A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 11, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 91A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 12, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 92A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 13, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 93A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 14, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 94A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 15, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 95A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 16, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 96A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 17, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 100A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 18, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 102A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 19, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 103A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 20, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 104A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 21, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 105A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 22, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 106A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 23, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 107A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 24, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 108A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 25, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 109A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 26, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 110A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 27, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 111A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 28, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 112A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 29, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 113A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 30, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 114A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 31, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 115A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 32, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 116A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 33, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 117A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 34, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 118A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 35, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 119A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 36, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Asset 120A1.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 37, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Iglo.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 38, "name": "Legalla Galaxy", "image": "/NEW CLIENT/MGM.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 39, "name": "Legalla Galaxy", "image": "/NEW CLIENT/Restaurant Font Glass-Artworks.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 40, "name": "Legalla Galaxy", "image": "/NEW CLIENT/STEP_SIGN.png", "alt": "Legalla Galaxy Creative Client" },
    { "id": 41, "name": "Legalla Galaxy", "image": "/NEW CLIENT/TCB LOGO.png", "alt": "Legalla Galaxy Creative Client" }
  ]

const LogoTrack = ({ items, direction = "left" }) => {
  // Multiply items to ensure the loop is seamless regardless of screen size
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden select-none">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          ease: "linear",
          duration: 500, // Adjust for faster/slower scroll
          repeat: Infinity,
        }}
        className="flex flex-nowrap gap-6 md:gap-10 py-4"
      >
        {duplicatedItems.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center w-40 h-24 md:w-56 md:h-32   px-8  transition-all duration-500   hover:bg-white  group"
          >
            <img 
              src={logo.image} 
              alt={logo.alt} 
              className="max-w-full max-h-full object-contain pointer-events-none group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Clients = () => {
  // To create a multi-row effect with limited data, we can reverse or shuffle for the second row
  const topRow = [...logoData];
  const bottomRow = [...logoData].reverse();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-orange-50 mb-6"
          >
            <span className="text-[#F37021] font-black uppercase tracking-[0.3em] text-[9px]">
              Our Creative Network
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1B] tracking-tighter mb-6">
            Trusted by <span className="text-[#F37021]">Industry</span> Leaders.
          </h2>
          
          <p className="text-gray-500 font-medium max-w-2xl text-base md:text-lg">
            From Madurai to Sivagangai and across India, we’ve partnered with brands 
            to deliver visual artwork that creates lasting emotional linkages.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-4 md:gap-8">
        {/* Row 1: Left Scroll */}
        <LogoTrack items={topRow} direction="left" />

        {/* Row 2: Right Scroll */}
        <LogoTrack items={bottomRow} direction="right" />

        {/* Gradient Overlays for smooth entry/exit */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      </div>

      <div className="mt-16 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
          50+ Brands • 250+ Projects • 12+ Years Experience
        </p>
      </div>
    </section>
  );
};

export default Clients;