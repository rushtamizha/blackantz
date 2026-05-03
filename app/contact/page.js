"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Branding",
    message: "",
  });

  const openWhatsApp = () => {
    const msg = `Hi Blackantz! My name is ${formData.name}. I'm interested in ${formData.service} services.`;
    window.open(
      `https://wa.me/919894500868?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-xs mb-4">
              Get In Touch
            </h4>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1B] tracking-tighter mb-6 leading-tight">
              Let’s Build Your <br />
              <span className="text-[#F37021]">Stunning Brand.</span>
            </h1>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              We serve clients across India. Ready to take your business to the
              next level?
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#F37021] shadow-sm">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Call Anytime
                  </p>
                  <p className="text-lg font-black text-[#1A1A1B]">
                    +91 98945 00868
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#F37021] shadow-sm">
                  <HiOutlineMailOpen size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Email Us
                  </p>
                  <p className="text-lg font-black text-[#1A1A1B]">
                    hello@blackantz.in
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-[#1A1A1B] text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl  font-black uppercase tracking-tight mb-4">
                  Our Locations
                </h3>
                <div className="flex items-start gap-4 mb-8">
                  <FaMapMarkerAlt size={20} className="text-[#F37021] mt-1" />
                  <p className="text-gray-400 font-medium leading-relaxed">
                    Ram Complex, 2nd floor,
                    <br /> 16-Sakthivelammal Street,
                    <br />
                    Byepass Road, S.S Colony, <br />
                    Madurai - 625016, Tamil Nadu, India.
                  </p>
                </div>

                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4">
                  Follow Our Creative Journey
                </h4>
                <div className="flex gap-4">
                  {[FaInstagram, FaFacebookF].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F37021] hover:border-[#F37021] transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F37021] opacity-10 rounded-full blur-3xl"></div>
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full p-6 rounded-[2rem] bg-[#25D366] text-white flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-green-100 transition-all group"
            >
              <FaWhatsapp size={24} />
              <span className="font-black uppercase tracking-widest text-sm group-hover:scale-105 transition-transform">
                Quick Chat on WhatsApp
              </span>
            </button>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John doe"
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#F37021] font-bold text-[#1A1A1B] transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hello@company.com"
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#F37021] font-bold text-[#1A1A1B] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">
                  Select Service
                </label>
                <select
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#F37021] font-bold text-[#1A1A1B] transition-all appearance-none"
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option>Branding & Creative Design</option>
                  <option>Packaging Solutions</option>
                  <option>Printing & Signage</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">
                  Project Brief
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your brand goals..."
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#F37021] font-bold text-[#1A1A1B] transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-[#1A1A1B] text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-[#F37021] transition-all duration-300 shadow-lg hover:shadow-orange-200">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
