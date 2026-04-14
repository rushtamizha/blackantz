"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import faqData from "@/faq.json";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-6 md:p-8 rounded-[2rem] transition-all duration-300 text-left ${
          isOpen ? "bg-[#1A1A1B] text-white shadow-xl shadow-orange-100" : "bg-gray-50 text-[#1A1A1B] hover:bg-gray-100"
        }`}
      >
        <span className="text-sm md:text-lg font-black uppercase tracking-tight pr-4">
          {question}
        </span>
        <div className={`flex-shrink-0 p-2 rounded-full ${isOpen ? "bg-[#F37021] text-white" : "bg-white text-[#1A1A1B]"}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-8 text-gray-500 leading-relaxed font-medium text-sm md:text-base border-x border-b border-gray-100 rounded-b-[2rem] -mt-8 pt-12">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openId, setOpenId] = useState(1); // Default first item open

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-[#FDF2EB] text-[#F37021] px-4 py-2 rounded-full mb-6"
          >
            <HelpCircle size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Support Center</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1B] tracking-tighter">
            Common <span className="text-[#F37021]">Queries.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-2">
          {faqData.questions.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-gray-50 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100"
        >
          <div className="text-center md:text-left">
            <h4 className="text-[#1A1A1B] font-black uppercase tracking-tight">Still have questions?</h4>
            <p className="text-gray-500 text-xs font-medium">Get an instant response from our team.</p>
          </div>
          <button 
            onClick={() => window.open("https://wa.me/919894500868?text=I have a custom question about Blackantz services.")}
            className="bg-[#F37021] text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-orange-100"
          >
            Message on WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;