import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Experiences from "./components/Experiences";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Check localStorage or device preference for theme preference
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("velvet-grind-theme");
    if (saved) return saved === "dark";
    // default to Elegant Dark mode by default for premium boutique spec
    return true;
  });

  // Sync theme to root class tags and save choices
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("velvet-grind-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("velvet-grind-theme", "light");
    }
  }, [isDark]);

  return (
    <div 
      id="root-container"
      className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
        isDark ? "bg-[#2C0E14] text-[#FFF4F5]" : "bg-[#FFF4F5] text-[#2C0E14]"
      }`}
    >
      {/* Sticky Top Navbar Header */}
      <input type="hidden" id="app-theme-indicator" value={isDark ? "dark" : "light"} />
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Main Page Layout Flow */}
      <main id="main-content-flow">
        
        {/* Parallax Hero Grid Entrance */}
        <Hero isDark={isDark} />

        {/* Brand Sourcing History & Leadership team details */}
        <About isDark={isDark} />

        {/* Tabbed Specialty Menu Workspace & Lightbox detailed preview */}
        <Menu isDark={isDark} />

        {/* Weekly schedule agenda events */}
        <Experiences isDark={isDark} />

        {/* Grid Masonry Atmosphere showcase with slide-lightbox */}
        <Gallery isDark={isDark} />

        {/* Modern hardware and space conveniences */}
        <WhyUs isDark={isDark} />

        {/* Community Google client reviews slider */}
        <Testimonials isDark={isDark} />

        {/* Contact form, multi inquiry router & custom landmark vector map */}
        <Contact isDark={isDark} />

      </main>

      {/* Corporate Site Map, Operations hours and Copyright legal tags */}
      <Footer isDark={isDark} />
    </div>
  );
}
