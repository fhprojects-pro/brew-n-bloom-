import React from "react";
import { motion } from "motion/react";
import { Coffee, ArrowRight, MapPin, Star } from "lucide-react";
import { CAFE_INFO } from "../data";

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#2C0E14]"
    >
      {/* Background Image with elegant overlay filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 active:scale-100 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1920&q=85')`,
        }}
      />
      
      {/* Multi-layered custom gradient overlay for premium contrast and depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C0E14] via-[#2C0E14]/70 to-[#170307]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C0E14]/80 via-transparent to-[#2C0E14]/50" />

      {/* Hero Content Wrapper */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 z-10">
        
        {/* Established Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#E0537E]/25 to-[#E0537E]/5 backdrop-blur-md border border-[#E0537E]/35 px-4 py-2 rounded-full mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#E0537E] animate-ping"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#E0537E] font-semibold">
            Serving Seattle Since 2026
          </span>
          <span className="text-[#E0537E]/40">|</span>
          <span className="flex items-center space-x-1 text-xs text-white">
            <Star className="w-3 h-3 fill-[#E0537E] text-[#E0537E]" />
            <span className="font-bold">4.8★</span>
          </span>
        </motion.div>

        {/* Master Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#FFF4F5] font-bold tracking-tight leading-tight"
        >
          {CAFE_INFO.name}
        </motion.h1>

        {/* Brand Label Accent */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-[#E0537E] font-display text-lg sm:text-xl md:text-2xl italic tracking-wide font-medium mt-2 mb-6"
        >
          {CAFE_INFO.brand}
        </motion.p>
        
        {/* Main Tagline & Secondary Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto space-y-3 mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-white/95 font-medium italic">
            &ldquo;{CAFE_INFO.taglines[0]}&rdquo;
          </h2>
          <p className="text-sm sm:text-base text-[#FFF4F5]/75 font-sans tracking-wide max-w-lg mx-auto">
            {CAFE_INFO.taglines[1]} &bull; Small-batch micro-lot roasting and artisanal daily bakes in the heart of Westside Village.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
        >
          <a
            id="hero-order-cta"
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold tracking-wider text-xs uppercase bg-[#E0537E] hover:bg-[#BD254F] text-white flex items-center justify-center space-x-2 shadow-xl hover:shadow-[#E0537E]/25 transition-all duration-300 transform hover:-translate-y-1 gold-glow-hover"
          >
            <span>Order Fresh Coffee</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
          <a
            id="hero-visit-cta"
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold tracking-wider text-xs uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center space-x-2 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
          >
            <MapPin className="w-4 h-4 text-[#E0537E]" />
            <span>Visit The Café</span>
          </a>
        </motion.div>

        {/* Live Status Board Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6 rounded-2xl bg-[#2C0E14]/40 backdrop-blur-md border border-white/5 max-w-4xl mx-auto"
        >
          {CAFE_INFO.stats.map((stat, i) => (
            <div 
              key={i} 
              id={`hero-stat-${i}`}
              className="text-center border-r last:border-r-0 border-white/10 px-2"
            >
              <div className="text-xl sm:text-2xl font-serif text-[#E0537E] font-semibold">{stat.value}</div>
              <div className="text-xs text-white/95 font-medium tracking-wide mt-1">{stat.label}</div>
              <div className="text-[10px] text-white/50">{stat.detail}</div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Floating Animated Scroll Down Badge */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest text-[#E0537E]/70 uppercase mb-1">
          Slow Down & Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-[#E0537E]/40 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 rounded-full bg-[#E0537E]"
          />
        </div>
      </div>
    </section>
  );
}
