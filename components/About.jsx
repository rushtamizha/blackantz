"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Zap, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Successful Brands", value: "50+", icon: <Target className="text-[#F37021]" size={24} /> },
    { label: "Projects Completed", value: "250+", icon: <Zap className="text-[#F37021]" size={24} /> },
    { label: "Hours of Expertise", value: "25k+", icon: <Shield className="text-[#F37021]" size={24} /> },
    { label: "Talented Creatives", value: "Team", icon: <Users className="text-[#F37021]" size={24} /> },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">
              Our Journey
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1B] leading-tight mb-8 tracking-tighter">
              Crafting Enduring Brands <br /> 
              Across <span className="text-[#F37021]">India.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Blackantz Creatives! is a premier creative and advertising agency with offices in 
                <span className="font-bold text-[#1A1A1B]"> Tamil Nadu</span>, serving a diverse 
                clientele across the nation. We help businesses achieve their objectives through 
                impactful branding and innovative design campaigns.
              </p>
              <p>
                Starting as a freelance venture, we have evolved into a full-scale agency 
                featuring talented designers, high-quality printers, and specialized fabrication 
                vendors. We offer the agility of a small team with the production power of a large firm.
              </p>
              <p className="italic border-l-4 border-[#F37021] pl-6 py-2 bg-gray-50 rounded-r-xl">
                "Our mission is to build brands that become part of consumers' lives, 
                earning their trust and loyalty through creative perfection."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Stats Bento Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-[2.5rem] border border-gray-100 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-500 ${
                  idx === 1 || idx === 2 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#1A1A1B] tracking-tight">{stat.value}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8 py-10 border-t border-gray-100"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[#1A1A1B] font-black uppercase text-xs tracking-widest">Detail Oriented</span>
            <p className="text-sm text-gray-500">Every pixel and print is inspected for perfection.</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#1A1A1B] font-black uppercase text-xs tracking-widest">Cost Effective</span>
            <p className="text-sm text-gray-500">Premium agency quality at highly flexible rates.</p>
          </div>
          <div className="flex flex-col gap-2 border-r-0">
            <span className="text-[#1A1A1B] font-black uppercase text-xs tracking-widest">Fully Dedicated</span>
            <p className="text-sm text-gray-500">Customized services tailored to your specific goals.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;