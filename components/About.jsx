"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Zap, Shield, Search, BarChart2, Brush, Rocket } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Successful Brands", value: "50+", icon: <Target className="text-[#F37021]" size={24} /> },
    { label: "Years of Experience", value: "14+", icon: <Zap className="text-[#F37021]" size={24} /> },
    { label: "Hours of Expertise", value: "25k+", icon: <Shield className="text-[#F37021]" size={24} /> },
    { label: "Creative Team", value: "Experts", icon: <Users className="text-[#F37021]" size={24} /> },
  ];

  const steps = [
    { title: "Info Gathering", desc: "Researching product heritage, consumers, and competition environment.", icon: <Search size={20} /> },
    { title: "Brand Evaluation", desc: "Collecting the cluster of feelings and perceptions that form consumer opinions.", icon: <BarChart2 size={20} /> },
    { title: "Brand Processing", desc: "Distilling insights into a vivid expression of words and visual images.", icon: <Brush size={20} /> },
    { title: "Brand Application", desc: "Defining every marketing decision, from advertising to digital collateral.", icon: <Rocket size={20} /> },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">
              Agency Introduction
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1B] leading-tight mb-8 tracking-tighter">
              Creative Perfectionists in <br /> 
              <span className="text-[#F37021]">Madurai & Sivagangai.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                <span className="font-bold text-[#1A1A1B]">Blackantz Creatives</span> is a Design and Printing agency dedicated to building ongoing brands that live as part of consumers’ energies. We support our clients in accomplishing business objectives through successful branding and creative design campaigns.
              </p>
              <p>
                As a startup enterprise with <span className="text-[#1A1A1B] font-bold">14+ years of industry experience</span>, we have the unique advantage of being detail-minded, flexible, and cost-effective. We customize every service—from packaging to digital promotions—to meet your specific requirements.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-[#F37021] mt-1">{step.icon}</div>
                    <div>
                      <h5 className="font-black text-[10px] uppercase tracking-widest text-[#1A1A1B]">{step.title}</h5>
                      <p className="text-[11px] leading-snug text-gray-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats & Philosophy */}
          <div className="space-y-12">
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

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1B] p-10 rounded-[3rem] relative overflow-hidden"
            >
              <div className="relative z-10">
                <h4 className="text-[#F37021] font-black uppercase tracking-widest text-xs mb-4">Our Vision</h4>
                <p className="text-white text-xl font-medium leading-relaxed ">
                  "A brand is the single most important asset any company has. We create attention-getting messages that make a promise consistent and true to the brand’s image."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#F37021]"></div>
                  <span className="text-gray-400 text-xs uppercase font-black tracking-widest">Blackantz Excellence</span>
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#F37021] opacity-10 rounded-full blur-3xl"></div>
            </motion.div>
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
            <span className="text-[#1A1A1B] font-black uppercase text-xs tracking-widest">The Core Team</span>
            <p className="text-sm text-gray-500">Designers, printers, and creative perfectionists with shared passion.</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#1A1A1B] font-black uppercase text-xs tracking-widest">Digital Delight</span>
            <p className="text-sm text-gray-500">Managing every aspect of customer relationships in the digital world.</p>
          </div>
          <div className="flex flex-col gap-2 border-r-0">
            <span className="text-[#1A1A1B] font-black uppercase text-xs tracking-widest">Flexible Solutions</span>
            <p className="text-sm text-gray-500">Range of services can be taken individually or as a complete solution.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;