import React, { useState, useEffect } from "react";
import { Coffee, Menu, X, Sun, Moon, Instagram, Facebook, Twitter, PhoneCall } from "lucide-react";
import { CAFE_INFO } from "../data";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Signature Menu", href: "#menu" },
    { name: "Experiences", href: "#experiences" },
    { name: "Atmosphere", href: "#gallery" },
    { name: "Why Us", href: "#whyus" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? isDark
            ? "bg-[#2C0E14]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#E0537E]/20"
            : "bg-[#FFFBFB]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#E0537E]/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            id="nav-logo-link"
            href="#home"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#E0537E]/10 group-hover:bg-[#E0537E]/20 transition-all duration-300">
              {/* Custom hybrid Bloom + Coffee Bean SVG/Icon */}
              <Coffee className="w-6 h-6 text-[#E0537E] transform group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#E0537E] group-hover:text-[#E0537E-hover] transition-colors">
                Brew & Bloom
              </span>
              <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors -mt-1 ${
                isDark ? "text-gray-400" : "text-[#451B25]"
              }`}>
                Velvet Grind Seattle
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`desktop-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-all duration-300 focus:outline-none hover:text-[#E0537E] relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#E0537E] after:transition-all hover:after:w-4/5 hover:after:left-[10%] ${
                  isDark ? "text-gray-200 hover:text-white" : "text-[#2C0E14] hover:text-[#E0537E]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Icons & Theme Toggle */}
          <div className="hidden sm:flex items-center space-x-4">
            
            {/* Social Icons */}
            <div className="flex items-center space-x-2 border-r border-[#E0537E]/20 pr-4">
              <a
                id="social-instagram"
                href={CAFE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-full hover:scale-110 hover:text-[#E0537E] transition-all ${
                  isDark ? "text-gray-300 hover:bg-[#2C0E14]" : "text-espresso hover:bg-[#FFFFFF]"
                }`}
                title="Follow Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="social-facebook"
                href={CAFE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-full hover:scale-110 hover:text-[#E0537E] transition-all ${
                  isDark ? "text-gray-300 hover:bg-[#2C0E14]" : "text-espresso hover:bg-[#FFFFFF]"
                }`}
                title="Follow Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Dark & Light Toggle */}
            <button
              id="theme-toggler"
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full focus:outline-none transition-all duration-300 shadow-sm border border-[#E0537E]/15 ${
                isDark ? "bg-[#2C0E14] text-[#E0537E] hover:bg-[#451B25]" : "bg-white text-[#E0537E] hover:bg-pink-50"
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 animate-spin-slow" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Phone Quick CTA */}
            <a
              id="header-phone-cta"
              href="tel:5556129845"
              className="flex items-center space-x-1 bg-[#E0537E] hover:bg-[#BD254F] text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-3 h-3" />
              <span>(555) 612-9845</span>
            </a>
          </div>

          {/* Toggle buttons for Mobile Layout */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              id="mobile-theme-toggler"
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full focus:outline-none transition-all shadow-sm border border-[#E0537E]/15 ${
                isDark ? "bg-[#2C0E14] text-[#E0537E]" : "bg-white text-[#E0537E]"
              }`}
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isDark ? "text-white hover:bg-espresso" : "text-[#2C0E14] hover:bg-pink-100/30"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E0537E]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`lg:hidden animate-fade-in transition-all border-b border-[#E0537E]/20 ${
            isDark ? "bg-[#2C0E14] text-[#FFF4F5]" : "bg-[#FFFFFF] text-[#2C0E14]"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium border-b border-dashed border-[#E0537E]/10 hover:text-[#E0537E] transition-all"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 flex items-center justify-between px-3">
              <span className="text-xs font-mono tracking-widest text-[#E0537E] uppercase">Connect With Us</span>
              <div className="flex items-center space-x-3">
                <a
                  href={CAFE_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-[#E0537E]/10 rounded-full text-[#E0537E]"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={CAFE_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-[#E0537E]/10 rounded-full text-[#E0537E]"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="tel:5556129845"
                className="w-full text-center flex items-center justify-center space-x-2 bg-[#E0537E] text-white py-3 rounded-xl font-bold shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call (555) 612-9845</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
