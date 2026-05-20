import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "../data";

interface TestimonialsProps {
  isDark: boolean;
}

export default function Testimonials({ isDark }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className={`py-20 sm:py-28 transition-colors duration-500 relative overflow-hidden ${
        isDark ? "bg-[#230A10] text-[#FFF4F5]" : "bg-white text-[#2C0E14]"
      }`}
    >
      {/* Decorative floral/leaves vector overlay in background */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-[#E0537E] w-64 h-64 p-8">
        <Quote className="w-full h-full transform scale-x-[-1]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#E0537E]/10 px-3 py-1.5 rounded-full mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#E0537E]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E]">
              Seattle Voice
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Loved by the Community
          </h2>
          <p className="text-xs text-gray-500 mt-2">Verified Google reviews &bull; Seattle neighborhood favorites</p>
          <div className="w-16 h-1 bg-[#E0537E] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Carousel Framework */}
        <div className="relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4 }}
              className={`p-8 sm:p-12 rounded-3xl border shadow-xl relative ${
                isDark ? "bg-[#2C0E14] border-white/5" : "bg-white border-[#E0537E]/10"
              }`}
            >
              <Quote className="absolute top-6 left-6 text-[#E0537E]/15 w-16 h-16 pointer-events-none" />

              {/* Verified Badge */}
              <div className="absolute top-6 right-6 flex items-center space-x-1 border border-green-500/20 bg-green-500/10 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-green-600 dark:text-green-400 font-bold">Verified</span>
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E0537E] text-[#E0537E]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg sm:text-xl font-serif font-medium italic leading-relaxed mb-8">
                &ldquo;{TESTIMONIALS[currentIndex].text}&rdquo;
              </blockquote>

              {/* Reviewer signature */}
              <div className="flex items-center justify-between border-t border-[#E0537E]/10 pt-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={TESTIMONIALS[currentIndex].image}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#E0537E]"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-base">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-xs font-mono text-[#C05C72] uppercase tracking-wider mt-0.5">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-gray-400 block">{TESTIMONIALS[currentIndex].date}</span>
                  <span className="text-[10px] text-[#E0537E] font-semibold">Google Local Guide &bull; 4.8★ Rating</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
               id="slider-prev-btn"
               onClick={prevReview}
               className={`p-3 rounded-full transition-colors ${
                 isDark ? "bg-[#2C0E14] hover:bg-[#4E3E3E] text-[#FFF4F5]" : "bg-white hover:bg-pink-100/30 text-[#2C0E14]"
               } border border-[#E0537E]/10`}
               title="Previous Testimonial"
             >
               <ChevronLeft className="w-5 h-5 text-[#E0537E]" />
             </button>

             {/* Pagination dots */}
             <div className="flex space-x-2">
               {TESTIMONIALS.map((_, i) => (
                 <button
                   key={i}
                   onClick={() => setCurrentIndex(i)}
                   className={`w-2.5 h-2.5 rounded-full transition-colors ${
                     currentIndex === i ? "bg-[#E0537E]" : "bg-[#E0537E]/25"
                   }`}
                   title={`Go to slide ${i + 1}`}
                 />
               ))}
             </div>

             <button
               id="slider-next-btn"
               onClick={nextReview}
               className={`p-3 rounded-full transition-colors ${
                 isDark ? "bg-[#2C0E14] hover:bg-[#4E3E3E] text-[#FFF4F5]" : "bg-white hover:bg-pink-100/30 text-[#2C0E14]"
               } border border-[#E0537E]/10`}
               title="Next Testimonial"
             >
               <ChevronRight className="w-5 h-5 text-[#E0537E]" />
             </button>
          </div>

        </div>

      </div>
    </section>
  );
}
