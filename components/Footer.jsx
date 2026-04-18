"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

const EnterpriseFooter = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-[#0F0F10] text-white pt-24 pb-10 overflow-hidden">
      {/* Background Brand Watermark (Enterprise Style) */}
      <div className="absolute -bottom-16 -right-16 pointer-events-none select-none z-0">
        <h2 className="text-[18vw] font-black text-white/[0.02] leading-none uppercase tracking-tighter">
          Blackantz
        </h2>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] opacity-[0.015] grayscale">
          <img
            src="/Logo.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Link href="/" className="flex flex-col group">
              <span className="text-xl md:text-2xl font-black text-white leading-none tracking-tighter">
                BLACK<span className="text-[#F37021]">ANTZ</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-gray-500 group-hover:text-[#F37021] transition-colors">
                Creative Society
              </span>
            </Link>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#F37021]/10 group-hover:text-[#F37021] transition-all">
                  <FaMapMarkerAlt size={16} />
                </div>
                <p className="text-sm text-gray-400 font-medium leading-relaxed pt-1">
                  Madurai & Sivagangai, <br />
                  Tamil Nadu, India.
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#F37021]/10 group-hover:text-[#F37021] transition-all">
                  <FaPhoneAlt size={14} />
                </div>
                <p className="text-sm text-gray-400 font-bold">
                  +91 98945 00868
                </p>
              </div>
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#F37021] mb-8">
              Capabilities
            </h4>
            <ul className="space-y-4">
              {[
                "Brand Identity",
                "Packaging Design",
                "LED Signage",
                "UV Printing",
                "Ad Campaigns",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="/#services"
                    className="text-sm font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#F37021] opacity-0 group-hover:opacity-100 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#F37021] mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {["About Us", "Our Process", "Case Studies", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={link === "Contact" ? "/contact" : "/about"}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 rounded-full bg-[#F37021] opacity-0 group-hover:opacity-100 transition-all" />
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Social Presence */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#F37021] mb-5">
              Follow Us
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaInstagram />, label: "Insta", href: "#" },
                { icon: <FaFacebookF />, label: "Fb", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-[#F37021] hover:border-[#F37021] transition-all group"
                >
                  <span className="text-white group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className=" border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">
              Copyright © {currentYear} BLACKANTZ
            </p>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <Link
              href="/privacy"
              className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>

          <Link
            href="https://wepzite.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer"
          >
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest transition-colors group-hover:text-gray-400">
              Digitalized By
            </span>
            <div className="flex items-center gap-1">
              <h4 className="text-sm font-black tracking-tighter text-white/40 group-hover:text-[#F37021] transition-all duration-300 uppercase">
                WEPZITE<span className="text-[#F37021]">.</span>
              </h4>
              {/* Subtile indicator for an external link */}
              <div className="w-0 h-0 border-t-4 border-r-4 border-transparent group-hover:border-[#F37021] transition-all duration-300 self-start mt-1" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default EnterpriseFooter;
