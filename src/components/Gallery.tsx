import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GALLERY_PHOTOS } from "../data";
import { GalleryPhoto } from "../types";

interface GalleryProps {
  isDark: boolean;
}

export default function Gallery({ isDark }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "interior" | "roastery" | "coffee" | "community">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Angles" },
    { id: "interior", label: "Cozy Spaces" },
    { id: "roastery", label: "Our Roastery" },
    { id: "coffee", label: "Latte Art & Brews" },
    { id: "community", label: "Host events" }
  ] as const;

  // Multi-step filtering
  const visiblePhotos = GALLERY_PHOTOS.filter(
    (photo) => activeFilter === "all" || photo.category === activeFilter
  );

  const openLightbox = (photoId: string) => {
    const globalIdx = GALLERY_PHOTOS.findIndex((p) => p.id === photoId);
    if (globalIdx !== -1) setLightboxIndex(globalIdx);
  };

  const navLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    let nextIdx = direction === "next" ? lightboxIndex + 1 : lightboxIndex - 1;
    
    // Bounds wrap
    if (nextIdx >= GALLERY_PHOTOS.length) nextIdx = 0;
    if (nextIdx < 0) nextIdx = GALLERY_PHOTOS.length - 1;
    
    setLightboxIndex(nextIdx);
  };

  return (
    <section
      id="gallery"
      className={`py-20 sm:py-28 transition-colors duration-500 relative ${
        isDark ? "bg-[#230A10] text-[#FFF4F5]" : "bg-white text-[#2C0E14]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E] bg-[#E0537E]/10 px-3 py-1.5 rounded-full">
            Atmosphere & Vibe
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-3 mb-4">
            Basking in Velvet Light
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Take a visual tour around our Seattle roastery hub, dog friendly sunrooms, local art walls, and steaming espresso bar.
          </p>
          <div className="w-16 h-1 bg-[#E0537E] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              id={`gallery-filter-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 border ${
                activeFilter === filter.id
                  ? "bg-[#E0537E] text-white border-[#E0537E] shadow-lg shadow-[#E0537E]/25"
                  : isDark
                  ? "bg-white/5 text-gray-300 border-white/5 hover:bg-white/10"
                  : "bg-white text-[#2C0E14] border-[#E0537E]/10 hover:bg-[#FFF4F5]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visiblePhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                id={`gallery-photo-${photo.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-stone-300 cursor-pointer"
                onClick={() => openLightbox(photo.id)}
              >
                {/* Photo Element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Overlaid details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C0E14]/90 via-[#2C0E14]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                  <span className="text-white/60 text-[9px] font-mono uppercase tracking-widest">{photo.category} Showcase</span>
                  <h4 className="text-white font-serif text-base font-semibold mt-1 mb-2 line-clamp-1">{photo.caption}</h4>
                  
                  <span className="inline-flex items-center space-x-1 text-xs text-[#E0537E] font-semibold">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View in Fullscreen</span>
                  </span>
                </div>

                {/* Aesthetic expand button for mobile */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/25 backdrop-blur-md text-white opacity-100 group-hover:bg-[#E0537E] group-hover:text-white transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* LIGHTBOX POPUP COMPONENT */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          >
            {/* Top Toolbar panel */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
              <span className="text-xs font-mono tracking-widest text-white/60">
                Photo {lightboxIndex + 1} of {GALLERY_PHOTOS.length}
              </span>
              
              <button
                id="gallery-close-lightbox"
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Action Frame */}
            <div className="relative w-full max-w-4xl max-h-[75vh] flex justify-center items-center">
              
              {/* Image Frame */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_PHOTOS[lightboxIndex].src}
                alt={GALLERY_PHOTOS[lightboxIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              {/* Prev Button */}
              <button
                id="gallery-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navLightbox("prev");
                }}
                className="absolute left-2 sm:left-4 p-2.5 rounded-full bg-black/50 hover:bg-[#E0537E] text-white hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                id="gallery-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navLightbox("next");
                }}
                className="absolute right-2 sm:right-4 p-2.5 rounded-full bg-black/50 hover:bg-[#E0537E] text-white hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Bottom Caption and Alt descriptor panel */}
            <div className="max-w-2xl text-center text-white mt-6 px-4">
              <span className="text-[10px] font-mono tracking-widest text-[#E0537E] uppercase bg-[#E0537E]/10 px-3 py-1 rounded-full">
                {GALLERY_PHOTOS[lightboxIndex].category} Showcase
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold mt-2.5">
                {GALLERY_PHOTOS[lightboxIndex].caption}
              </h3>
              <p className="text-xs text-gray-400 font-sans mt-1">
                {GALLERY_PHOTOS[lightboxIndex].alt}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
