"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Database, 
  Eye, 
  Lock, 
  UserCheck, 
  Bell, 
  Phone, 
  Mail 
} from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "May 02, 2026";

  const policySections = [
    {
      title: "Information We Collect",
      icon: <Database className="text-[#F37021]" size={24} />,
      content: [
        "Contact information: Name, email, phone number, and mailing address.",
        "Interaction data: Communication history and specific project details.",
        "Financial data: Payment information for transaction fulfillment.",
        "Usage data: IP address, browser type, and browsing behavior on our site."
      ]
    },
    {
      title: "How We Use Data",
      icon: <Eye className="text-[#F37021]" size={24} />,
      content: [
        "Providing and improving our branding and printing services.",
        "Processing payments and fulfilling your orders accurately.",
        "Analyzing trends to enhance user experience on our digital platforms.",
        "Complying with mandatory legal obligations."
      ]
    },
    {
      title: "Data Disclosure",
      icon: <UserCheck className="text-[#F37021]" size={24} />,
      content: [
        "We share data only with service providers assisting our operations.",
        "We disclose information when required by law or to protect rights.",
        "STRICT POLICY: We do not sell or rent your personal data to third parties for marketing."
      ]
    },
    {
      title: "Security & Retention",
      icon: <Lock className="text-[#F37021]" size={24} />,
      content: [
        "We implement reasonable measures to prevent unauthorized access.",
        "Note: No internet transmission is 100% secure; we strive for maximum protection.",
        "You have the right to access, update, or delete your information at any time."
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-[#0F0F10] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-6">
              Security Commitment
            </h4>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              Privacy <br />
              <span className="text-[#F37021]">Policy.</span>
            </h1>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              At Blackantz Creatives, we take great pride in safeguarding the privacy of our 
              partners, customers, and website users. We value the trust you place in our agency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {policySections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#1A1A1B] uppercase tracking-tight">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-500 text-sm font-medium leading-relaxed">
                      <span className="text-[#F37021] font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Children & Updates Section */}
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 p-10 rounded-[3rem] bg-[#1A1A1B] text-white flex items-center justify-between overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="text-[#F37021]" size={20} />
                  <h3 className="text-lg font-black uppercase tracking-tight">Children's Privacy & Updates</h3>
                </div>
                <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xl">
                  Our services are not directed at children under 13. We may update this policy 
                  to reflect changes in practices; material changes will be posted here.
                </p>
              </div>
              <ShieldCheck className="absolute -right-8 -bottom-8 text-white/5" size={200} />
            </motion.div>

            <div className="p-10 rounded-[3rem] border-2 border-gray-100 flex flex-col justify-center text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Version Control</p>
              <p className="text-[#1A1A1B] font-black text-sm uppercase">Last Updated</p>
              <p className="text-[#F37021] font-black text-2xl tracking-tighter">{lastUpdated}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#1A1A1B] uppercase tracking-tighter mb-12">
            Questions about your <span className="text-[#F37021]">Data?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="tel:+919894500868"
              className="flex items-center justify-center gap-4 p-8 bg-white rounded-[2rem] border border-gray-200 hover:border-[#F37021] transition-all group"
            >
              <Phone className="text-[#F37021] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#1A1A1B]">+91 98945 00868</span>
            </a>
            <a 
              href="mailto:hello@blackantz.in"
              className="flex items-center justify-center gap-4 p-8 bg-white rounded-[2rem] border border-gray-200 hover:border-[#F37021] transition-all group"
            >
              <Mail className="text-[#F37021] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#1A1A1B]">hello@blackantz.in</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;