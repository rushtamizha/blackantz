"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Zap,
  Shield,
  Search,
  BarChart2,
  Brush,
  Rocket,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      label: "Successful Brands",
      value: "50+",
      icon: <Target className="text-[#F37021]" size={15} />,
    },
    {
      label: "Years of Experience",
      value: "14+",
      icon: <Zap className="text-[#F37021]" size={15} />,
    },
    {
      label: "Hours of Expertise",
      value: "25k+",
      icon: <Shield className="text-[#F37021]" size={15} />,
    },
    {
      label: "Creative Team",
      value: "Experts",
      icon: <Users className="text-[#F37021]" size={15} />,
    },
  ];

  const steps = [
    {
      title: "Info Gathering",
      desc: "Researching product heritage, consumers, and competition environment.",
      icon: <Search size={20} />,
    },
    {
      title: "Brand Evaluation",
      desc: "Collecting the cluster of feelings and perceptions that form consumer opinions.",
      icon: <BarChart2 size={20} />,
    },
    {
      title: "Brand Processing",
      desc: "Distilling insights into a vivid expression of words and visual images.",
      icon: <Brush size={20} />,
    },
    {
      title: "Brand Application",
      desc: "Defining every marketing decision, from advertising to digital collateral.",
      icon: <Rocket size={20} />,
    },
  ];

  return (
    <section id="about" className="py-10 bg-white overflow-hidden">
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
              About
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1B] leading-tight mb-8 tracking-tighter">
              Creative Perfectionists
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Blackantz Creatives is a leading creative and advertising agency
                in Tamil Nadu, delivering innovative branding, graphic design,
                modern signage, interior signage, and print solutions for
                businesses across India. We help brands grow by combining
                strategic thinking with creative excellence to create impactful
                visual and marketing experiences. Our expertise includes brand
                identity design, advertising, modern signage solutions, interior
                branding, signage systems, print production, and digital
                creatives, ensuring a complete solution for businesses looking
                to establish a strong and professional presence. We specialize
                in creating eye-catching outdoor signage and aesthetically
                designed interior signage that enhance brand visibility and
                transform spaces into engaging brand environments. With a
                dedicated team of designers, printing professionals, and
                creative strategists, we focus on delivering high-quality work
                that builds brand recognition, customer trust, and long-term
                loyalty. As a boutique agency, Blackantz Creatives offers a
                personalized, flexible, and cost-effective approach, making us
                the ideal partner for businesses seeking customized solutions
                with attention to every detail.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 hidden">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start p-4 rounded-2xl bg-gray-50 border border-gray-100"
                  >
                    <div className="text-[#F37021] mt-1">{step.icon}</div>
                    <div>
                      <h5 className="font-black text-[10px] uppercase tracking-widest text-[#1A1A1B]">
                        {step.title}
                      </h5>
                      <p className="text-[11px] leading-snug text-gray-500 mt-1">
                        {step.desc}
                      </p>
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
                  className={`p-5 rounded-2xl border border-gray-100 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-500 ${
                    idx === 1 || idx === 2 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <div className="w-8 h-8 bg-white rounded-md shadow-sm flex items-center justify-center border border-gray-100">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#1A1A1B] tracking-tight">
                      {stat.value}
                    </h3>
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
              className="bg-[#1A1A1B] p-5 rounded-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h4 className="text-[#F37021] font-black uppercase tracking-widest text-xs mb-4">
                  Our Vision
                </h4>
                <p className="text-white text-xl font-medium leading-relaxed ">
                  "To be a leading creative agency that empowers businesses with innovative design, strong branding, and modern signage to grow and stand out."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#F37021]"></div>
                  <span className="text-gray-400 text-xs uppercase font-black tracking-widest">
                    Blackantz Excellence
                  </span>
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#F37021] opacity-10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;