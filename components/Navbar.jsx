"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  ChevronDown,
  Menu,
  X,
  Calendar,
  Lightbulb,
  ArrowRight,
  PenTool,
  Printer,
  Layers,
  Monitor,
  Layout,
  Smartphone,
  Package,
  ChevronRight,
  Home,
  Users,
} from "lucide-react";

const navData =[
  {
    label: "Services",
    icon: <PenTool size={18} />,
    children: [
      {
        title: "Creative Design",
        desc: "Branding, Identity & Ad Campaigns",
        icon: <Layout size={18} />,
        subItems: ["Branding", "Brand Development", "Advertising Campaigns", "Creative Design"]
      },
      {
        title: "Packaging Design",
        desc: "Strategic Product & Box Design",
        icon: <Package size={18} />,
        subItems: ["Carton Boxes", "Product Packaging", "Container Wrapping", "Sachets"]
      },
      {
        title: "UI & UX Design",
        desc: "Intelligent Digital Interfaces",
        icon: <Monitor size={18} />,
        subItems: ["Web Design", "Web Applications", "Mobile Apps"]
      },
      {
        title: "Printing Services",
        desc: "Multicolor Product Printing",
        icon: <Printer size={18} />,
        subItems: ["Business Cards", "Brochures", "Office Stationery", "Inshop Branding"]
      },
      {
        title: "Digital & Online",
        desc: "Digital Marketing & Social Media",
        icon: <Smartphone size={18} />,
        subItems: ["Marketing Planning", "Social Media Design", "Google Ads", "Amazon Sales Store"]
      },
      {
        title: "Sign Boards",
        desc: "ACP, Acrylic & LED Signage",
        icon: <Layers size={18} />,
        subItems: ["Acrylic Sign Boards", "Backlit Boards", "Slim UV Lighting", "Nonlit Boards"]
      },
      {
        title: "Event Services",
        desc: "Backdrops & Product Displays",
        icon: <Calendar size={18} />,
        subItems: ["Event Backdrops", "Stall Creatives", "Rollup Standees", "Visual Menus"]
      },
      {
        title: "Strategy & Workflow",
        desc: "Consulting & Brand Audits",
        icon: <Lightbulb size={18} />,
        subItems: ["Goal Workshops", "Brand Strategy", "Consumer Research", "Artwork Debugging"]
      }
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Standard Link Styling
  const linkStyle =
    "text-[13px] font-bold text-[#1A1A1B] uppercase tracking-wider hover:text-[#F37021] transition-colors px-4 py-2";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm py-3"
            : "bg-white/90 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group z-[110] select-none"
          >
            {/* Logo Image Container */}
            <div className="relative h-16  overflow-hidden transition-transform duration-500 group-hover:scale-110">
              <img 
                src="/Logo.png"
                alt="Blackantz Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Brand Text */}
            <div className="hidden flex-col">
              <span className="text-xl md:text-2xl font-black text-[#1A1A1B] leading-[0.8] tracking-tighter uppercase">
                BLACK<span className="text-[#F37021]">ANTZ</span>
              </span>
              <span className="text-[8px] md:text-[9px] uppercase font-black tracking-[0.25em] md:tracking-[0.4em] text-gray-400 group-hover:text-[#F37021] transition-colors duration-300">
                Creative Society
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className={linkStyle}>
              Home
            </Link>
            <Link href="/about" className={linkStyle}>
              About
            </Link>

            {navData.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveTab(idx)}
                onMouseLeave={() => setActiveTab(null)}
              >
                <button
                  className={`flex items-center gap-1 uppercase ${linkStyle}`}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeTab === idx ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {activeTab === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      className="absolute top-full left-0 w-72 bg-white border border-gray-100 shadow-2xl rounded-2xl mt-2 p-3 overflow-hidden"
                    >
                      {item.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href="/#services"
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FDF2EB] transition-all group"
                        >
                          <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-white group-hover:text-[#F37021] transition-colors text-gray-400">
                            {child.icon}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#1A1A1B]">
                              {child.title}
                            </p>
                            <p className="text-[11px] text-gray-500 font-medium">
                              {child.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/portfolio" className={linkStyle}>
              Portfolio
            </Link>
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="z-[110]">
            <motion.button
              whileHover={{ y: -2 }}
              className="bg-[#F37021] text-white px-7 py-3 text-xs font-black rounded-full uppercase tracking-widest shadow-lg shadow-orange-100"
            >
              Contact Us
            </motion.button></Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-[#1A1A1B]"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Professional Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#1A1A1B]/40 backdrop-blur-md z-[120] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-[130] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-50">
                <span className="text-lg font-black text-[#1A1A1B]">
                  BLACK<span className="text-[#F37021]">ANTZ</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-gray-50 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="space-y-2">
                  {/* Standard Mobile Links */}
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 py-3 text-lg font-bold text-[#1A1A1B] uppercase border-b border-gray-50"
                  >
                    <Home size={20} className="text-[#F37021]" /> Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 py-3 text-lg font-bold text-[#1A1A1B] uppercase border-b border-gray-50"
                  >
                    <Users size={20} className="text-[#F37021]" /> About
                  </Link>

                  {/* Dropdown Mobile Links */}
                  {navData.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-50 py-2">
                      <button
                        onClick={() =>
                          setExpandedMobile(expandedMobile === idx ? null : idx)
                        }
                        className="w-full flex items-center justify-between py-2"
                      >
                        <div className="flex items-center gap-4 text-[#1A1A1B]">
                          <span className="text-[#F37021]">{item.icon}</span>
                          <span className="text-lg font-bold uppercase tracking-tight">
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight
                          size={20}
                          className={`transition-transform duration-300 ${expandedMobile === idx ? "rotate-90" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedMobile === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50 rounded-2xl mt-2 px-4"
                          >
                            {item.children.map((child, cIdx) => (
                              <Link
                                key={cIdx}
                                href="/#services"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0"
                              >
                                <div className="text-gray-400">
                                  {child.icon}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#1A1A1B]">
                                    {child.title}
                                  </p>
                                  <p className="text-[11px] text-gray-500">
                                    {child.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <Link
                    href="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 py-3 text-lg font-bold text-[#1A1A1B] uppercase border-b border-gray-50"
                  >
                    <Layout size={20} className="text-[#F37021]" /> Portfolio
                  </Link>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-gray-50">
                <Link href="/contact" className="z-[110]">
                <button className="w-full bg-[#1A1A1B] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                  Contact Us <ArrowRight size={16} />
                </button></Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
