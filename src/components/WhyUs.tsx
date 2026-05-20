import React from "react";
import { motion } from "motion/react";
import { Coffee, Wifi, Zap, Heart, Palette, Leaf, Star, Sparkles } from "lucide-react";
import { CAFE_INFO } from "../data";

interface WhyUsProps {
  isDark: boolean;
}

export default function WhyUs({ isDark }: WhyUsProps) {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "Coffee":
        return <Coffee className="w-6 h-6 text-[#E0537E]" />;
      case "Wifi":
        return <Wifi className="w-6 h-6 text-[#E0537E]" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-[#E0537E]" />;
      case "Heart":
        return <Heart className="w-6 h-6 text-[#E0537E]" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-[#E0537E]" />;
      case "Leaf":
        return <Leaf className="w-6 h-6 text-[#C05C72]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#E0537E]" />;
    }
  };

  return (
    <section
      id="whyus"
      className={`py-20 sm:py-28 transition-colors duration-500 relative ${
        isDark ? "bg-[#2C0E14] text-[#FFF4F5]" : "bg-[#FFF4F5] text-[#2C0E14]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E] bg-[#E0537E]/10 px-3 py-1.5 rounded-full">
            Modern Conveniences
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-3 mb-4">
            Designed for Coffee Devotees
          </h2>
          <div className="w-16 h-1 bg-[#E0537E] mx-auto rounded-full"></div>
        </div>

        {/* Feature Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAFE_INFO.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              id={`whyus-card-${highlight.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl ${
                isDark
                  ? "bg-[#3A1921]/75 border-white/5 hover:bg-[#4E3E3E]"
                  : "bg-white border-[#E0537E]/10 hover:border-[#E0537E]/25"
              }`}
            >
              <div className={`p-4 rounded-2xl w-14 h-14 flex items-center justify-center mb-6 shadow-sm ${
                isDark ? "bg-[#2C0E14]" : "bg-[#FFF4F5]"
              }`}>
                {getFeatureIcon(highlight.icon)}
              </div>

              <h3 className="font-serif text-xl font-bold mb-3">{highlight.title}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? "text-gray-300" : "text-[#4E3E3E]"}`}>
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner with capacity & credentials */}
        <div className={`mt-20 p-8 sm:p-12 rounded-3xl border bg-cover bg-center overflow-hidden relative ${
          isDark ? "border-white/5" : "border-[#E0537E]/10"
        }`}
          style={{
            backgroundImage: `linear-gradient(rgba(44, 14, 20, 0.85), rgba(44, 14, 20, 0.9)), url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80')`
          }}
        >
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E0537E]">Space & Availability</span>
              <h4 className="font-serif text-3xl font-bold">Unwind in Cozy Corners or Catch the Afternoon Sun</h4>
              <p className="text-xs text-white/75 leading-relaxed">
                Whether you need a dedicated desk for complex software coding, a quiet floral nook for reading, or an open skyline spot to share with companion dogs, we have you covered.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-mono">45 Comfortable Indoor Seats</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-mono">20 Sunlit Side Walk Patio Seats</span>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E0537E] text-[#E0537E]" />
                ))}
              </div>
              <blockquote className="text-sm font-serif italic text-white/90">
                "One of the single best laptop-friendly cafés in Seattle. Incredible whole bean roasts, generous charging ports, and a real zero-waste soul."
              </blockquote>
              <cite className="block text-xs font-mono text-[#E0537E] not-italic">— Seattle Weekly Herald</cite>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
