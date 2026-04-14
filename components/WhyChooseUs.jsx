"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  Settings2, 
  Banknote, 
  Award, 
  Users 
} from "lucide-react";

const reasons = [
  {
    title: "Detail Oriented",
    desc: "As a small company, we offer the advantage of being meticulous with every design pixel and print finish.",
    icon: <Settings2 size={24} />,
  },
  {
    title: "Enduring Brands",
    desc: "We don't just design; we build brands that earn consumer trust and loyalty for the long term.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Proven Track Record",
    desc: "Successfully delivered 250+ projects and worked with over 50+ brands across India.",
    icon: <Award size={24} />,
  },
  {
    title: "Production Power",
    desc: "Access to high-quality printers and fabrication vendors for professional-grade physical branding.",
    icon: <Users size={24} />,
  },
  {
    title: "Cost-Effective",
    desc: "Premium agency-quality services customized to meet specific business objectives without enterprise overhead.",
    icon: <Banknote size={24} />,
  },
  {
    title: "25k+ Work Hours",
    desc: "A wealth of experience in the creative industry, ensuring your project is in safe, expert hands.",
    icon: <Clock size={24} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            The Blackantz Advantage
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#1A1A1B] leading-tight tracking-tighter"
          >
            Why Brands <span className="text-[#F37021]">Trust Us</span> With Their Identity
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-start gap-6 group hover:bg-white hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#F37021] shadow-sm group-hover:bg-[#F37021] group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-black text-[#1A1A1B] uppercase tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="mt-auto pt-4 overflow-hidden w-full">
                <div className="h-1 w-12 bg-[#F37021]/20 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;