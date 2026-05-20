import React from "react";
import { motion } from "motion/react";
import { Coffee, Flame, HeartHandshake, ShieldAlert, Award } from "lucide-react";
import { CAFE_INFO, TEAM_MEMBERS } from "../data";

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-20 sm:py-28 transition-colors duration-500 relative overflow-hidden ${
        isDark ? "bg-[#2C0E14] text-[#FFF4F5]" : "bg-[#FFF4F5] text-[#2C0E14]"
      }`}
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#E0537E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#C05C72]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E] bg-[#E0537E]/10 px-3 py-1.5 rounded-full">
            Our Heritage & Vision
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-3 mb-4">
            Curating the Seattle Coffee Culture Since 2026
          </h2>
          <div className="w-16 h-1 bg-[#E0537E] mx-auto rounded-full"></div>
        </div>

        {/* Brand Mission & Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#E0537E]">
              Where organic botany blooms, and premium velvet beans grind.
            </h3>
            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-[#4E3E3E]"}`}>
              Founded in the serene neighbourhood of Westside Village, Seattle, <strong>{CAFE_INFO.name}</strong> was born from a vision of slow craft in a fast world. 
              Our coffee label, <strong>{CAFE_INFO.brand}</strong>, champions direct-trade sourcing directly from micro-lots in Colombia and Ethiopia. Every single Tuesday and Friday morning, our roastery team profiles small green coffee batches on-site.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-700"}`}>
              We support a fully integrated sensory environment. From local floral installations framing our espresso bar to our rotating neighborhood gallery wall, every detail celebrates artisanal craft. We operate with deep respect for the Earth, achieving an <strong>85% zero-waste</strong> milestone with compostable cups, reusable discounts, and solar-assisted roaster venting filters.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className={`p-4 rounded-xl border flex items-start space-x-3 transition-all ${
                isDark ? "bg-[#2C0E14]/40 border-white/5" : "bg-white/60 border-[#E0537E]/10"
              }`}>
                <div className="p-2 bg-[#E0537E]/15 rounded-lg text-[#E0537E]">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-sm">Fresh Batch Roasting</h4>
                  <p className="text-xs text-gray-500 mt-1">Scenting Westside Village every Tuesday & Friday morning.</p>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start space-x-3 transition-all ${
                isDark ? "bg-[#2C0E14]/40 border-white/5" : "bg-white/60 border-[#E0537E]/10"
              }`}>
                <div className="p-2 bg-[#C05C72]/15 rounded-lg text-[#C05C72]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-sm">Ethical Direct Trade</h4>
                  <p className="text-xs text-gray-500 mt-1">Guaranteeing 50%+ above Fair Trade minimums back to individual farmers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase - Side by Side Stacked */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=650&h=700&q=80"
                alt="Close up of hand sorting green coffee beans on-site"
                className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2C0E14]/90 to-transparent p-6 text-white">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#E0537E]">The Roasting Room</span>
                <h4 className="text-lg font-serif">On-site small batch Probat cooling tray</h4>
              </div>
            </div>
            
            {/* Flanking badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-[#E0537E] text-white p-5 rounded-2xl shadow-xl flex flex-col items-center justify-center transform -rotate-6 max-w-[150px]">
              <Award className="w-8 h-8 text-white mb-1" />
              <span className="text-xl font-bold font-serif">4.8★</span>
              <span className="text-[9px] font-mono uppercase tracking-wider text-center">Google Rated 2100+ Votes</span>
            </div>
          </div>

        </div>

        {/* TEAM MEMBERS SECTION */}
        <div className="pt-16 border-t border-[#E0537E]/10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C05C72]">The Artisans</span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight mt-1 mb-2">
              Meet Our Leadership
            </h3>
            <p className="text-xs text-gray-500">Every cup is powered by our collaborative community leaders.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                id={`team-member-${member.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group rounded-2xl overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 ${
                  isDark ? "bg-[#3A1921]/75 border-white/5" : "bg-white border-[#E0537E]/10"
                }`}
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-square h-48 sm:h-auto w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-[10px] text-gray-300 italic leading-snug">{member.bio}</p>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-4 text-center">
                  <h4 className="font-serif font-bold text-base text-[#E0537E] group-hover:text-[#BD254F] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs font-mono tracking-wider text-[#C05C72] uppercase mt-1">
                    {member.role}
                  </p>
                  
                  {/* Bio fallback for touch screens that do not support hover */}
                  <p className={`text-xs mt-2 text-center line-clamp-3 block group-hover:hidden transition-all ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {member.bio}
                  </p>
                  <p className="text-[10px] text-[#E0537E] mt-2 font-mono font-medium hidden group-hover:block transition-all animate-pulse">
                    Hovered bio locked &bull;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
