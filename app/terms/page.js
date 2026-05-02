"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Scale, 
  AlertCircle, 
  FileText, 
  Clock, 
  CreditCard, 
  Printer, 
  Lock 
} from "lucide-react";

const TermsPage = () => {
  const sections = [
    {
      id: "01",
      title: "Services",
      icon: <FileText className="text-[#F37021]" size={20} />,
      content: "Blackantz Creatives provides services including Graphic Design & Branding, Printing Services, Signage & Advertising Solutions, and Digital Marketing. All services are subject to availability and confirmation."
    },
    {
      id: "02",
      title: "Payments",
      icon: <CreditCard className="text-[#F37021]" size={20} />,
      content: "All projects require 100% advance payment unless otherwise agreed. Payments are non-refundable. Additional charges apply for revisions, urgent delivery, or work beyond the agreed scope."
    },
    {
      id: "03",
      title: "Design & Approval",
      icon: <ShieldCheck className="text-[#F37021]" size={20} />,
      content: "Clients must approve all designs before production. Once approved, no changes can be made. We are not responsible for errors (spelling, content, etc.) after client approval."
    },
    {
      id: "04",
      title: "Printing Disclaimer",
      icon: <Printer className="text-[#F37021]" size={20} />,
      content: "Final output may have ±10% color variation compared to screens. Slight variations in size or finish are standard industry tolerances and not considered defects."
    },
    {
      id: "05",
      title: "Delivery & Logistics",
      icon: <Clock className="text-[#F37021]" size={20} />,
      content: "Timelines are shared during confirmation. Delays caused by client approval or unforeseen circumstances are not our responsibility. Transport charges are additional unless specified."
    },
    {
      id: "06",
      title: "Intellectual Property",
      icon: <Lock className="text-[#F37021]" size={20} />,
      content: "Designs remain our property until full payment. Upon payment, clients receive usage rights. We reserve the right to showcase completed work in our portfolio."
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#0F0F10] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-6">
              Legal Framework
            </h4>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              Terms & <br />
              <span className="text-[#F37021]">Conditions.</span>
            </h1>
            <p className="text-gray-400 text-lg font-medium">
              Please read these terms carefully. By engaging with Blackantz Creatives, 
              you agree to be bound by the following professional guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 font-black text-2xl tracking-tighter">{item.id}</span>
                </div>
                <h3 className="text-xl font-black text-[#1A1A1B] uppercase tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Legal Points */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-[#0F0F10] text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="text-[#F37021]" size={24} />
                <h3 className="text-xl font-black uppercase tracking-tight">Liability & Cancellation</h3>
              </div>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li className="flex gap-3">
                  <span className="text-[#F37021]">•</span>
                  Orders cannot be cancelled once production begins.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F37021]">•</span>
                  We are not liable for indirect damages or loss of business/data.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F37021]">•</span>
                  Delays due to external factors beyond our control are excluded from liability.
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] border-2 border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="text-[#F37021]" size={24} />
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#1A1A1B]">Governing Law</h3>
                </div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  These Terms shall be governed by the laws of India. Any disputes shall be 
                  subject to the exclusive jurisdiction of the courts in 
                  <span className="text-[#1A1A1B] font-bold"> Madurai, Tamil Nadu</span>.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Last Updated: May 2026
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Responsibility CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1B] uppercase tracking-tighter mb-6">
            Help us deliver <span className="text-[#F37021]">Excellence</span>
          </h2>
          <p className="text-gray-500 font-medium mb-10 leading-relaxed italic">
            "Clients must provide high-quality, print-ready files (PDF/CDR/AI). 
            Blackantz Creatives is not responsible for poor output due to low-resolution 
            or incorrect files provided by the client."
          </p>
          <div className="w-20 h-1 bg-[#F37021] mx-auto rounded-full" />
        </div>
      </section>
    </main>
  );
};

export default TermsPage;