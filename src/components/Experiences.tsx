import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Music, Sparkles, Trophy, Palette, BookOpen, Clock, Users } from "lucide-react";
import { CAFE_EVENTS } from "../data";
import { CafeEvent } from "../types";

interface ExperiencesProps {
  isDark: boolean;
}

export default function Experiences({ isDark }: ExperiencesProps) {
  const [filter, setFilter] = useState<"all" | "class" | "music" | "art" | "social">("all");

  const filteredEvents = CAFE_EVENTS.filter((event) => {
    if (filter === "all") return true;
    return event.type === filter;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "music":
        return <Music className="w-5 h-5 text-red-400" />;
      case "class":
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case "art":
        return <Palette className="w-5 h-5 text-purple-400" />;
      case "social":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E0537E]" />;
    }
  };

  return (
    <section
      id="experiences"
      className={`py-20 sm:py-28 transition-colors duration-500 relative ${
        isDark ? "bg-[#2C0E14] text-[#FFF4F5]" : "bg-[#FFF4F5] text-[#2C0E14]"
      }`}
    >
      {/* Background Graphic Blurs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#E0537E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#C05C72]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E] bg-[#E0537E]/10 px-3 py-1.5 rounded-full">
            Coffee & Culture
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-3 mb-4">
            Curated Cafe Experiences
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Our table is a gathering space. Take part in interactive training sessions, live musical performances, or competitive throwdowns.
          </p>
          <div className="w-16 h-1 bg-[#E0537E] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Happenings" },
            { id: "music", label: "Acoustic & Poetry" },
            { id: "class", label: "Coffee Classes" },
            { id: "art", label: "Art Galleries" },
            { id: "social", label: "Social Battles" }
          ].map((cat) => (
            <button
              key={cat.id}
              id={`events-filter-${cat.id}`}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300 ${
                filter === cat.id
                  ? "bg-[#E0537E] text-white border-[#E0537E] shadow-lg shadow-[#E0537E]/25"
                  : isDark
                  ? "bg-[#2C0E14] text-gray-300 border-white/5 hover:bg-white/10"
                  : "bg-white text-[#2C0E14] border-[#E0537E]/10 hover:bg-[#FFF4F5]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                id={`event-card-${event.id}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group flex flex-col md:flex-row rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isDark ? "bg-[#3A1921]/75 border-white/5" : "bg-white border-[#E0537E]/10"
                }`}
              >
                {/* Lateral Image column */}
                <div className="relative aspect-[16/9] md:aspect-auto md:w-2/5 min-h-[180px] bg-stone-300 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Category Accent Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-black/70 backdrop-blur-md text-xs px-3 py-1.5 rounded-full text-white">
                    {getIcon(event.type)}
                    <span className="capitalize text-[10px] font-mono tracking-wider font-semibold">
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Text Description column */}
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-1.5 text-xs font-mono font-medium tracking-wide text-[#E0537E] mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.frequency} &bull; {event.day}s</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold group-hover:text-[#E0537E] transition-colors mb-2">
                      {event.title}
                    </h3>
                    
                    <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                      isDark ? "text-gray-300" : "text-[#4E3E3E]"
                    }`}>
                      {event.description}
                    </p>
                  </div>

                  {/* Hours Info & Quick Sign Up */}
                  <div className="pt-4 border-t border-[#E0537E]/10 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-[11px] text-gray-500">
                      <Clock className="w-3.5 h-3.5 text-[#C05C72]" />
                      <span className="font-mono">{event.time}</span>
                    </div>
                    
                    <a
                      id={`event-signup-btn-${event.id}`}
                      href="#contact"
                      className="text-xs bg-[#E0537E]/10 hover:bg-[#E0537E] hover:text-white text-[#E0537E] font-semibold py-1.5 px-3 rounded-full transition-colors"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Live Art Wall Notice banner */}
        <div className={`mt-16 p-8 rounded-2xl border text-center transition-all ${
          isDark 
            ? "bg-gradient-to-r from-[#2C0E14]/60 to-[#2C0E14]/30 border-white/5" 
            : "bg-gradient-to-r from-white to-[#FFF4F5] border-[#E0537E]/10"
        }`}>
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block bg-[#E0537E]/15 text-[#E0537E] text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full">
              Calling All Seattle Artists & Craftsmen
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold italic">Want to display your physical artwork in our Café spaces?</h4>
            <p className="text-xs text-gray-500 max-w-lg mx-auto">
              Our rotating artist walls support up to 10 medium oil canvases or sketches a month. No commission fees. Submissions are reviewed every Friday.
            </p>
            <div className="pt-2">
              <a
                id="artist-collab-cta"
                href="#contact"
                className="inline-flex items-center space-x-2 border border-[#E0537E] text-[#E0537E] hover:bg-[#E0537E] hover:text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Users className="w-4 h-4" />
                <span>Submit Sourcing Portfolio</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
