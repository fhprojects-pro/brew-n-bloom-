import React from "react";
import { Coffee, ChevronUp, Instagram, Facebook, Twitter, Mail, HelpCircle, FileText } from "lucide-react";
import { CAFE_INFO } from "../data";

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="main-footer"
      className={`pt-16 pb-8 border-t border-[#E0537E]/10 transition-colors duration-500 overflow-hidden ${
        isDark ? "bg-[#1A060A] text-[#FFF4F5]" : "bg-[#2C0E14] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & Sourcing Pledge column (4 columns) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#E0537E]/10">
                <Coffee className="w-6 h-6 text-[#E0537E] transform group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-[#E0537E]">
                  Brew & Bloom
                </span>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase -mt-1">
                  Velvet Grind Roastery
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              We slow-roast small coffee batches twice a week in Seattle, sourcing berries directly from Colombian & Ethiopian micro-lots under strict ethical trade parameters.
            </p>

            {/* Social handles with glowing overlays */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                id="footer-insta"
                href={CAFE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E0537E] hover:text-white flex items-center justify-center text-gray-300 transition-all focus:outline-none"
                title={`${CAFE_INFO.name} on Instagram`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-fb"
                href={CAFE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E0537E] hover:text-white flex items-center justify-center text-gray-300 transition-all focus:outline-none"
                title={`${CAFE_INFO.name} on Facebook`}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-x"
                href={CAFE_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E0537E] hover:text-white flex items-center justify-center text-gray-300 transition-all focus:outline-none"
                title={`${CAFE_INFO.name} on X/Twitter`}
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            
            <div className="text-[10px] text-gray-500 font-mono space-y-1">
              <div>TAGS: @VelvetGrindCo</div>
              <div>X: @VelvetGrind</div>
              <div>TikTok: @VelvetGrindBaristas</div>
            </div>
          </div>

          {/* Links Directory column (2 columns) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E] mb-4">
              Explore Spaces
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#home" className="hover:text-[#E0537E] transition-colors">Back to Entrance</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E0537E] transition-colors">Our Sourcing Heritage</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E0537E] transition-colors">Signature Menu</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#E0537E] transition-colors">Weekly Events</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E0537E] transition-colors">Atmosphere Gallery</a>
              </li>
              <li>
                <a href="#whyus" className="hover:text-[#E0537E] transition-colors">Modern Amenities</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E0537E] transition-colors">Get Directions</a>
              </li>
            </ul>
          </div>

          {/* Quick Hours matrix duplicate (3 columns) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E] mb-4">
              Weekly Hours
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Mon &ndash; Fri:</span>
                <span className="font-semibold text-white">{CAFE_INFO.hours.weekdays}</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Sat &ndash; Sun:</span>
                <span className="font-semibold text-white">{CAFE_INFO.hours.weekends}</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Holidays:</span>
                <span className="font-semibold text-[#C05C72]">{CAFE_INFO.hours.holidays}</span>
              </li>
              <li className="text-[10px] text-gray-500 italic mt-1 leading-snug">
                * Our small-batch roasters operate live inside the Sunroom every single Tuesday & Friday morning.
              </li>
            </ul>
          </div>

          {/* Sourcing Address & Contacts details (3 columns) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E] mb-4">
              Visit Seattle
            </h4>
            <div className="text-xs text-gray-400 space-y-2">
              <p className="font-semibold text-white">{CAFE_INFO.address}</p>
              <p className="font-mono text-gray-400">Ph: {CAFE_INFO.phone}</p>
              
              <div className="pt-2 flex items-center space-x-1.5 text-gray-500 hover:text-[#E0537E] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#E0537E]" />
                <a href={`mailto:${CAFE_INFO.email.general}`} className="text-[11px] font-semibold">{CAFE_INFO.email.general}</a>
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[9px] font-mono uppercase tracking-wider text-green-400 font-bold block mb-0.5">Zero Waste Achieved</span>
              <p className="text-[10px] text-gray-400 leading-tight">We divert 85% of waste from landfills via composted grids.</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal line credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Brew & Bloom Café &bull; Velvet Grind Coffee. All rights reserved. 
            <span className="block sm:inline sm:ml-2 text-gray-600">Specialty neighborhood roastery establishment since 2026.</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Scroll back to top */}
            <button
              id="scroll-to-top-btn"
              onClick={scrollBackToTop}
              className="flex items-center space-x-1 hover:text-[#E0537E] transition-colors focus:outline-none font-semibold text-xs border border-white/15 rounded-lg px-3 py-1 bg-white/5"
            >
              <span>To Top Entrance</span>
              <ChevronUp className="w-3.5 h-3.5 text-[#E0537E]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
