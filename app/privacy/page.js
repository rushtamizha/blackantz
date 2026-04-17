"use client";

import React from "react";
import { motion } from "framer-motion";
import {  Mail, Phone, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "1",
      title: "Information We Collect",
      content: "We may collect personal information directly from you or automatically when you use our website or services. This may include contact information (name, email, phone), project details, communication history, payment information, and usage data like IP addresses and browsing behavior."
    },
    {
      id: "2",
      title: "Use of Information",
      content: "We use the gathered information to provide and improve our services, process payments, personalize your experience, and communicate project updates. We also analyze trends to enhance our website functionality and ensure compliance with legal obligations."
    },
    {
      id: "3",
      title: "Disclosure of Information",
      content: "We share information with service providers who assist our operations, or when required by law to protect our rights. We strictly do not sell or rent your personal information to third parties for marketing purposes."
    },
    {
      id: "4",
      title: "Data Security",
      content: "We implement reasonable security measures to protect your data. However, please note that no method of electronic transmission is 100% secure; while we strive for absolute protection, we cannot guarantee it."
    },
    {
      id: "5",
      title: "Your Choices",
      content: "You have the right to access, update, or delete your personal information. You can opt-out of marketing communications at any time via provided instructions or by contacting our team directly."
    },
    {
      id: "6",
      title: "Children's Privacy",
      content: "Our services are not directed at children under 13. If we discover we have inadvertently collected data from a child, we will take immediate steps to delete it."
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#F37021]/10 rounded-2xl flex items-center justify-center text-[#F37021]">
              <Mail size={28} />
            </div>
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs">Security First</h4>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#1A1A1B] tracking-tighter mb-6">
            Privacy <span className="text-[#F37021]">Policy.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            At Blackantz Creatives, we take great pride in safeguarding the privacy of our partners, customers, and website users.
          </p>
        </motion.div>

        {/* Policy Content */}
        <div className="space-y-12">
          {sections.map((section) => (
            <motion.section 
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex gap-6">
                <span className="text-4xl font-black text-gray-100 group-hover:text-[#F37021]/20 transition-colors">
                  0{section.id}
                </span>
                <div>
                  <h2 className="text-xl font-black text-[#1A1A1B] uppercase tracking-tight mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact & Footer Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gray-50 border border-gray-100"
        >
          <h3 className="text-2xl font-black text-[#1A1A1B] uppercase tracking-tight mb-8">
            Contact & Support
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#F37021]">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call Us</p>
                <p className="font-bold text-[#1A1A1B]">+91 9894500868</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#F37021]">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Us</p>
                <p className="font-bold text-[#1A1A1B]">hello@blackantz.in</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar size={14} />
              <span className="text-xs font-bold uppercase tracking-widest">Last Updated: 01.04.2026</span>
            </div>
            <p className="text-xs text-gray-400 font-medium">
              &copy; {new Date().getFullYear()} Blackantz Creatives. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;