import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Leaf, Croissant, ShoppingBag, Eye, X, Info, Search, Heart } from "lucide-react";
import { MENU_ITEMS, CAFE_INFO } from "../data";
import { MenuItem } from "../types";

interface MenuProps {
  isDark: boolean;
}

export default function Menu({ isDark }: MenuProps) {
  const [activeTab, setActiveTab] = useState<"coffee" | "alternatives" | "food" | "retail">("coffee");
  const [searchQuery, setSearchQuery] = useState("");
  const [chosenItem, setChosenItem] = useState<MenuItem | null>(null);

  const tabs = [
    { id: "coffee", label: "Specialty Coffee", icon: Coffee },
    { id: "alternatives", label: "Botanicals & Teas", icon: Leaf },
    { id: "food", label: "Artisanal Bakes", icon: Croissant },
    { id: "retail", label: "Velvet Grind Shop", icon: ShoppingBag }
  ] as const;

  // Filter items based on active tab and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = item.category === activeTab;
      const matchQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && (searchQuery === "" ? true : matchQuery);
    });
  }, [activeTab, searchQuery]);

  return (
    <section
      id="menu"
      className={`py-20 sm:py-28 transition-colors duration-500 relative ${
        isDark ? "bg-[#230A10]" : "bg-white text-[#2C0E14]"
      }`}
    >
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#E0537E]/5 via-[#E0537E]/30 to-[#E0537E]/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E] bg-[#E0537E]/10 px-3 py-1.5 rounded-full">
            Taste Crafted Flavours
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-3 mb-4">
            Our Signature Offerings
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Choose from double espresso extractions, organic alternative brews, freshly baked treats, and premium hardware.
          </p>
          <div className="w-16 h-1 bg-[#E0537E] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Tab & Search Control panel */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-[#E0537E]/10 pb-6">
          
          {/* Tabs Container */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`menu-tab-${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchQuery(""); // clear search on tab switch
                  }}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-[#E0537E] text-white shadow-md shadow-[#E0537E]/25 border border-[#E0537E]"
                      : isDark
                      ? "bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10"
                      : "bg-white border border-[#E0537E]/10 hover:bg-pink-100/20 text-[#2C0E14]"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              id="menu-search-input"
              type="text"
              placeholder={`Search in ${tabs.find((t) => t.id === activeTab)?.label}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full text-xs py-3 pl-10 pr-4 rounded-full border focus:outline-none transition-all ${
                isDark
                  ? "bg-white/5 border-white/10 text-white focus:border-[#E0537E]/50 focus:ring-1 focus:ring-[#E0537E]/30"
                  : "bg-white border-gray-200 text-[#2C0E14] focus:border-[#E0537E] focus:ring-1 focus:ring-[#E0537E]"
              }`}
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-3.5 text-xs text-gray-400 hover:text-[#E0537E]"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                id={`menu-item-card-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-xl ${
                  isDark ? "bg-[#2C0E14]/45 border-white/5" : "bg-white border-[#E0537E]/10"
                }`}
              >
                {/* Image Container with Hover zoom + Info Reveal */}
                <div className="relative overflow-hidden aspect-[4/3] w-full bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle Elegant Dark Overlay of Item Name & Price on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C0E14]/85 via-[#2C0E14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-white/60 text-[10px] font-mono tracking-widest uppercase">Click to inspect origin</span>
                    <button
                      id={`inspect-btn-${item.id}`}
                      onClick={() => setChosenItem(item)}
                      className="mt-2 inline-flex items-center space-x-1.5 self-start bg-[#E0537E] text-white py-1.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Details</span>
                    </button>
                  </div>

                  {/* Top Badges (Vegan, Premium, etc.) */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono uppercase tracking-wider font-semibold bg-[#2C0E14]/75 text-white backdrop-blur-md px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price Bubble */}
                  <div className="absolute top-3 right-3 bg-[#E0537E] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                    {item.price}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg font-bold group-hover:text-[#E0537E] transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                  </div>
                  
                  <p className={`text-xs line-clamp-2 leading-relaxed ${isDark ? "text-gray-300" : "text-[#4E3E3E]"}`}>
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#E0537E]/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                      {item.category === "coffee" ? "Direct Sourcing" : item.category === "food" ? "Baked Fresh" : "Retail Goods"}
                    </span>
                    <button
                      id={`inspect-link-${item.id}`}
                      onClick={() => setChosenItem(item)}
                      className="text-xs font-semibold text-[#E0537E] hover:text-[#BD254F] cursor-pointer flex items-center space-x-1"
                    >
                      <span>Craft Notes</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty Search Result */}
          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-sm">No items match your criteria. Try adjusting your query or tab.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs bg-[#E0537E] text-white px-4 py-2 rounded-full font-bold"
              >
                Reset Search
              </button>
            </div>
          )}
        </motion.div>

        {/* Bring-a-cup Discount callout */}
        <div className={`mt-16 p-6 rounded-2xl border text-center max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:text-left justify-between gap-4 transition-all duration-300 ${
          isDark ? "bg-[#2C0E14] border-white/5" : "bg-white border-[#E0537E]/10"
        }`}>
          <div>
            <h4 className="font-serif font-bold text-lg text-[#E0537E]">Help Us Keep Seattle Green</h4>
            <p className="text-xs text-gray-500 mt-1">Bring your own reusable tumbler, vacuum container, or cup to score a <strong>$0.50 discount</strong> on any hot or iced drink.</p>
          </div>
          <div className="shrink-0">
            <span className="inline-block bg-[#E0537E] text-white text-xs px-4 py-2 rounded-full font-semibold">
              $0.50 OFF Every Order
            </span>
          </div>
        </div>

      </div>

      {/* DETAILED LIGHTBOX DRAWER PREVIEW */}
      <AnimatePresence>
        {chosenItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className={`relative w-full max-w-2xl rounded-3xl overflow-hidden border shadow-2xl ${
                isDark ? "bg-[#2C0E14] border-white/10 text-[#FFF4F5]" : "bg-[#FFFBFB] border-gray-200 text-[#2C0E14]"
              }`}
            >
              {/* Close Button */}
              <button
                id="close-lightbox-btn"
                onClick={() => setChosenItem(null)}
                className={`absolute top-4 right-4 z-10 p-2.5 rounded-full transition-colors ${
                  isDark ? "bg-[#2C0E14] text-white hover:bg-neutral-800" : "bg-white text-[#2C0E14] hover:bg-neutral-200"
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Photo */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[220px] bg-stone-300">
                  <img
                    src={chosenItem.image}
                    alt={chosenItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#E0537E] text-white font-bold px-3 py-1 rounded-full text-xs">
                    {chosenItem.price}
                  </div>
                </div>

                {/* Stats & Notes */}
                <div className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#E0537E] font-semibold">
                      {chosenItem.category === "coffee" ? "Slow Roasted Blend" : "Artisanal PNW Craft"}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold mt-1 mb-3">
                      {chosenItem.name}
                    </h3>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {chosenItem.description}
                    </p>

                    {/* Specifications List */}
                    {chosenItem.details && (
                      <div className={`p-4 rounded-xl text-xs mb-4 border ${
                        isDark ? "bg-[#2C0E14]/60 border-white/5 text-gray-300" : "bg-white border-[#E0537E]/10"
                      }`}>
                        <div className="flex items-center space-x-1.5 text-[#E0537E] font-serif font-semibold mb-1">
                          <Info className="w-4 h-4" />
                          <span>Roaster Specs & Tasting Notes</span>
                        </div>
                        <p className="italic leading-relaxed">{chosenItem.details}</p>
                      </div>
                    )}

                    {/* Flavor Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {chosenItem.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-[#E0537E]/10 text-[#E0537E] font-mono text-[9px] uppercase tracking-wider font-semibold py-1 px-2.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sourcing Pledge */}
                  <div className="mt-6 pt-4 border-t border-[#E0537E]/10 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">Est. 2026 &bull; Seattle WA</span>
                    <span className="text-xs text-green-600 dark:text-green-400 flex items-center space-x-1">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>Direct Sourced</span>
                    </span>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
