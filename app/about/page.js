"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Search, 
  BarChart3, 
  Layers, 
  Rocket,
  CheckCircle2
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Successful Brands", value: "50+", icon: <Target className="text-[#F37021]" size={24} /> },
    { label: "Years Experience", value: "14+", icon: <Zap className="text-[#F37021]" size={24} /> },
    { label: "Hours Expertise", value: "25k+", icon: <Shield className="text-[#F37021]" size={24} /> },
    { label: "Creative Team", value: "Expert", icon: <Users className="text-[#F37021]" size={24} /> },
  ];

  const methodology = [
    {
      step: "01",
      title: "Information Gathering",
      desc: "Deep dive into product details, loyal/potential consumers, competition trends, and the brand environment.",
      icon: <Search className="text-[#F37021]" />
    },
    {
      step: "02",
      title: "Brand Evaluation",
      desc: "Collecting the cluster of feelings, impressions, and opinions that form consumer perceptions.",
      icon: <BarChart3 className="text-[#F37021]" />
    },
    {
      step: "03",
      title: "Brand Processing",
      desc: "Distilling information into a vivid expression of words and images that capture unique relationships.",
      icon: <Layers className="text-[#F37021]" />
    },
    {
      step: "04",
      title: "Brand Application",
      desc: "Defining every marketing decision, from advertising campaigns to web design and collateral.",
      icon: <Rocket className="text-[#F37021]" />
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0F0F10] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-6">
              About Blackantz Creatives
            </h4>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              WE MAKE <span className="text-[#F37021]">WONDERFUL</span> <br />
              CREATIONS.
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed">
              Design and Printing agency in Madurai and Sivagangai, supporting 
              clients through successful branding and creative perfectionism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#1A1A1B]">{stat.value}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-[#1A1A1B] uppercase tracking-tighter mb-8">
              Devoted to <span className="text-[#F37021]">Brands.</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At Blackantz Creatives, we find a professional team of designers, printers, 
                and creative perfectionists who share a passion to build ongoing brands 
                that live as part of consumers’ energies.
              </p>
              <p>
                As a startup enterprise, we have the advantage of being <span className="text-[#1A1A1B] font-bold">detail-minded, flexible, and cost-effective</span>. 
                Our role is to create attention-getting messages, expressed visually and verbally 
                across multiple platforms.
              </p>
              <p className="font-bold text-[#1A1A1B]  border-l-4 border-[#F37021] pl-6">
                “We are in the era of Digital World to Deliver the best.”
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100"
          >
            <h3 className="text-xl font-black text-[#1A1A1B] uppercase tracking-widest mb-6">Expertise Focus</h3>
            <ul className="space-y-4">
              {["Advertising Campaigns", "Packaging Designs", "Logos & Brochures", "Digital Technology", "Event Printings", "Online Media Management"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-bold uppercase text-xs tracking-wider">
                  <CheckCircle2 size={18} className="text-[#F37021]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">Our Workflow</h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1B] tracking-tighter">
              A 4-STEP <span className="text-[#F37021]">PROCESS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 group hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-4xl font-black text-gray-100 group-hover:text-[#F37021]/10 transition-colors mb-4">
                  {item.step}
                </div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-lg font-black text-[#1A1A1B] uppercase tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1B] uppercase tracking-tighter mb-8 leading-tight">
            We think like our users. We are a rare breed of creative perfectionists 
            constantly looking to <span className="text-[#F37021]">improve things.</span>
          </h2>
          <div className="w-20 h-1 bg-[#F37021] mx-auto rounded-full mb-12" />
          <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            Online media is a unique opportunity to manage and measure every aspect 
            of customer relationships. We create elegant, attractive, and trendy 
            designs that are enticing and unique.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;