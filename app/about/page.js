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
  CheckCircle2,
  Lightbulb,
  Palette,
  Settings,
  Truck,
  MessageSquare
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

  const workflow = [
    { title: "Discovery & Consultation", desc: "Understanding your business, goals, and target audience to build a clear creative direction.", icon: <MessageSquare size={20}/> },
    { title: "Research & Strategy", desc: "Analyzing market trends and user behavior to develop a strong foundation for communication.", icon: <Search size={20}/> },
    { title: "Concept & Design", desc: "Transforming ideas into visually compelling concepts that are unique and modern.", icon: <Palette size={20}/> },
    { title: "Feedback & Refinement", desc: "Collaborating closely to ensure every detail meets your expectations.", icon: <Settings size={20}/> },
    { title: "Production & Execution", desc: "High-quality production of signage and print with precision and consistency.", icon: <Lightbulb size={20}/> },
    { title: "Delivery & Support", desc: "On-time delivery and ongoing support to ensure brand performance.", icon: <Truck size={20}/> },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-10 bg-[#0F0F10] text-white">
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
              We Make <span className="text-[#F37021]">Wonderful</span> <br />
              Creations.
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed">
              A leading creative and advertising agency in Tamil Nadu, delivering innovative branding, 
              modern signage, and print solutions for businesses across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-12 -mt-1 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#1A1A1B]">{stat.value}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
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
                Blackantz Creatives is a professional design and printing agency that helps brands grow by combining strategic thinking with creative excellence. We specialize in transforming ideas into impactful visual experiences that help businesses stand out in a competitive market.
              </p>
              <p>
                As a growing boutique agency, we offer a <span className="text-[#1A1A1B] font-bold">personalized, flexible, and cost-effective approach</span>. We focus on delivering high-quality work that builds brand recognition, customer trust, and long-term loyalty through attention to every detail.
              </p>
              <p className="font-bold text-[#1A1A1B] border-l-4 border-[#F37021] pl-6">
                “Digital Era. Creative Excellence. Real Impact”
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100"
          >
            <h3 className="text-xl font-black text-[#1A1A1B] uppercase tracking-widest mb-6 text-[#F37021]">What we do Best</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Brand Identity Design", 
                "Modern Signage Solutions", 
                "Interior Branding", 
                "Print Production", 
                "Digital Creatives", 
                "Advertising",
                "Graphic Design",
                "Event Branding"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-bold uppercase text-[10px] tracking-wider">
                  <CheckCircle2 size={16} className="text-[#F37021] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Best of Blackantz / Methodology Section */}
      <section className="py-24 bg-[#0F0F10] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">Strategic Excellence</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              BEST OF <span className="text-[#F37021]">BLACKANTZ</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Our strategic approach creates impactful messages across multiple platforms, ensuring consistency with your brand identity and promise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1A1A1B] p-8 rounded-[2.5rem] border border-white/5 group hover:border-[#F37021]/50 transition-all duration-500"
              >
                <div className="text-4xl font-black text-white/10 mb-4 group-hover:text-[#F37021]/20 transition-colors">{item.step}</div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Workflow Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">Our Workflow</h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1B] tracking-tighter leading-none">
                STRUCTURED TO <span className="text-[#F37021]">DELIVER.</span>
              </h2>
            </div>
            <p className="text-gray-500 font-medium max-w-xs italic border-l-2 border-gray-100 pl-4">
              Ensuring every project aligns perfectly with your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#F37021] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-extrabold text-[#1A1A1B] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1B] uppercase tracking-tighter mb-8 leading-tight">
            We think like our users.
          </h2>
          <div className="w-20 h-1 bg-[#F37021] mx-auto rounded-full mb-8" />
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <p className="text-gray-600 font-medium leading-relaxed">
              We specialize in advertising, logo development, event branding, and a wide range of digital services. By leveraging the power of digital technology, we treat online media as a strategic platform to manage, measure, and enhance every aspect of customer relationships and brand interaction.
            </p>
            <p className="text-gray-600 font-medium leading-relaxed">
              Our approach focuses on delivering elegant, attractive, and trend-driven designs that are both visually compelling and uniquely tailored to each brand. We continuously strive for excellence, pushing boundaries to deliver innovative solutions that elevate brands.
            </p>
          </div>
        </div>
      </section>


    </main>
  );
};

export default AboutPage;