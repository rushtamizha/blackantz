"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  History, 
  Compass, 
  BarChart3, 
  Palette, 
  Crown 
} from "lucide-react";

const reasons = [
  {
    title: "Customer Insights",
    desc: "The first phase of our workflow is to determine exactly what the consumer needs and the specific requirements of the brand.",
    icon: <Search size={24} />,
  },
  {
    title: "Heritage Research",
    desc: "We research the traditions and history of your product to find its distinctive uniqueness and original story.",
    icon: <History size={24} />,
  },
  {
    title: "Brand Strategy",
    desc: "A comprehensive plan used to shape and position your brand in the market, including identity, audience, and messaging.",
    icon: <Compass size={24} />,
  },
  {
    title: "Strategic Growth",
    desc: "A workflow that connects your goals with market trends and consumer perceptions to support long-term success.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Visual Excellence",
    desc: "We produce visual artwork on a solid base that creates deep emotional linkages between the brand and the customer.",
    icon: <Palette size={24} />,
  },
  {
    title: "Market Strength",
    desc: "Our main vision is to give your company legitimate strength in the market, solid visibility, and enduring customer loyalty.",
    icon: <Crown size={24} />,
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
            The Manner In Which We Operate
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#1A1A1B] leading-tight tracking-tighter"
          >
            The Genuine <span className="text-[#F37021]">Touch of Excellence</span> in Results
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