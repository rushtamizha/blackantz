"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, CheckCircle2, AlertTriangle, FileText, ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

const TermsPage = () => {
  const terms = [
    {
      id: "01",
      title: "Services",
      icon: <FileText size={20} />,
      content: "Blackantz Creatives provides Graphic Design, Branding, Printing, Signage, and Digital Marketing. All services are subject to availability and confirmation."
    },
    {
      id: "02",
      title: "Payments",
      icon: <CheckCircle2 size={20} />,
      content: "All projects require 100% advance payment unless otherwise agreed. Payments are non-refundable. Extra charges apply for revisions or urgent delivery."
    },
    {
      id: "03",
      title: "Design Approval",
      icon: <Scale size={20} />,
      content: "Clients must approve designs before production. Once approved, no changes can be made. We are not responsible for errors (spelling/content) after approval."
    },
    {
      id: "04",
      title: "Printing Disclaimer",
      icon: <AlertTriangle size={20} />,
      content: "Final output may have ±10% color variation from digital screens. Variations in size or finish are industry standards and not considered defects."
    },
    {
      id: "05",
      title: "Intellectual Property",
      icon: <ShieldCheck size={20} />,
      content: "Designs remain our property until full payment. Upon payment, usage rights are granted. We reserve the right to showcase work in our portfolio."
    },
    {
      id: "06",
      title: "Governing Law",
      icon: <Scale size={20} />,
      content: "These terms are governed by Indian law. Any disputes shall be subject to the exclusive jurisdiction of Madurai, Tamil Nadu."
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">Agreement</h4>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1B] tracking-tighter mb-6 ">
              Terms & <span className="text-[#F37021] not-">Conditions.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              By engaging with Blackantz Creatives, you agree to the following professional terms. 
              We ensure transparency to deliver the highest quality results.
            </p>
          </motion.div>
        </div>

        {/* Main Terms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {terms.map((term, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#F37021] shadow-sm">
                  {term.icon}
                </div>
                <span className="text-2xl font-black text-gray-200 uppercase tracking-tighter">{term.id}</span>
              </div>
              <h3 className="text-xl font-black text-[#1A1A1B] uppercase tracking-tight mb-4">{term.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Full Detail List (For smaller points) */}
        <div className="mt-20 space-y-8 max-w-4xl border-t border-gray-100 pt-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-black text-[#1A1A1B] uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F37021]" /> Client Responsibilities
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Clients must provide high-quality, print-ready files (PDF/CDR/AI). Blackantz is not responsible for poor output due to low-resolution or incorrect source files.
              </p>
            </div>
            <div>
              <h4 className="font-black text-[#1A1A1B] uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <AlertTriangle size={14} className="text-[#F37021]" /> Cancellation Policy
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Orders cannot be cancelled after production begins. Any cancellation prior to production may be subject to administrative deductions.
              </p>
            </div>
            <div>
              <h4 className="font-black text-[#1A1A1B] uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F37021]" /> Delivery Timelines
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Standard timelines are shared at confirmation. Delays caused by late approvals or external logistics are beyond our control. Transport charges are additional.
              </p>
            </div>
            <div>
              <h4 className="font-black text-[#1A1A1B] uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#F37021]" /> Liability
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are not liable for indirect damages, loss of business revenue, or data loss due to external factors beyond our creative control.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-10 rounded-[3rem] bg-[#1A1A1B] text-center"
        >
          <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em]">
            Last Updated: <span className="text-white">April 2026</span> • Subject to modification without prior notice.
          </p>
          <p className="text-gray-600 text-[10px] mt-4 uppercase font-bold">
            Blackantz Creatives Branding & Printing Service • Madurai • Sivagangai
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default TermsPage;