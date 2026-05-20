import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ChevronDown, Map, Compass } from "lucide-react";
import { CAFE_INFO } from "../data";

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "general", // "general" | "wholesale" | "events" | "feedback"
    message: ""
  });

  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple verification
    const currentErrors: Record<string, string> = {};
    if (!formData.name.trim()) currentErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      currentErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      currentErrors.email = "Invalid email formatting.";
    }
    if (!formData.message.trim()) currentErrors.message = "Message body cannot be empty.";

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    // Submit state simulation
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSent(true);
      
      // Clear values
      setFormData({ name: "", email: "", inquiry: "general", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-28 transition-colors duration-500 relative ${
        isDark ? "bg-[#2C0E14] text-[#FFF4F5]" : "bg-[#FFF4F5] text-[#2C0E14]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0537E] bg-[#E0537E]/10 px-3 py-1.5 rounded-full">
            Inquire & Plan
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-3 mb-4">
            Connect With Velvet Grind
          </h2>
          <div className="w-16 h-1 bg-[#E0537E] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Sourcing details & Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">The Roastery & Café Hub</h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-[#4E3E3E]"}`}>
                Come visit Diego, Priya, and Jordan. Breathe in fresh Tuesday morning cooling roasts, view monthly artwork highlights, or book the lounge patio for a custom Saturday cupping party.
              </p>
            </div>

            {/* Contacts Matrix list */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#E0537E]/10 text-[#E0537E] rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block">Our Address</span>
                  <p className="text-sm font-semibold">{CAFE_INFO.address}</p>
                </div>
              </div>

               <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#E0537E]/10 text-[#E0537E] rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block">General Calls</span>
                  <p className="text-sm font-semibold">{CAFE_INFO.phone}</p>
                </div>
              </div>

              {/* Multi email support based on inquiry */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#E0537E]/10 text-[#E0537E] rounded-xl mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 block">Email Channels</span>
                  <p className="text-xs">
                    <strong className="text-gray-400">General:</strong>{" "}
                    <a href={`mailto:${CAFE_INFO.email.general}`} className="text-[#E0537E] hover:underline font-semibold">{CAFE_INFO.email.general}</a>
                  </p>
                  <p className="text-xs">
                    <strong className="text-gray-400">Wholesale Sourcing:</strong>{" "}
                    <a href={`mailto:${CAFE_INFO.email.wholesale}`} className="text-[#E0537E] hover:underline font-semibold">{CAFE_INFO.email.wholesale}</a>
                  </p>
                  <p className="text-xs">
                    <strong className="text-gray-400">Lounge Bookings:</strong>{" "}
                    <a href={`mailto:${CAFE_INFO.email.events}`} className="text-[#E0537E] hover:underline font-semibold">{CAFE_INFO.email.events}</a>
                  </p>
                </div>
              </div>

              {/* Operating Hours Matrix */}
              <div className="flex items-start space-x-4 pt-2 border-t border-[#C05C72]/15">
                <div className="p-3 bg-[#C05C72]/10 text-[#C05C72] rounded-xl mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#C05C72] uppercase block tracking-wider font-semibold">Hours of Operations</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mt-1.5">
                    <span className="text-gray-500 font-medium">Monday &ndash; Friday</span>
                    <span className="font-semibold">{CAFE_INFO.hours.weekdays}</span>
                    <span className="text-gray-500 font-medium">Saturday &ndash; Sunday</span>
                    <span className="font-semibold">{CAFE_INFO.hours.weekends}</span>
                    <span className="text-gray-500 font-medium">National Holidays</span>
                    <span className="font-semibold">{CAFE_INFO.hours.holidays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Aesthetic Seattle Seattle Vector Grid / Map mock */}
            <div className={`p-5 rounded-3xl border shadow-md relative overflow-hidden transition-all duration-300 ${
              isDark ? "bg-[#3A1921]/75 border-white/5" : "bg-white border-[#E0537E]/10"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-[#E0537E]" />
                  <span className="font-serif font-bold text-sm">Seattle Neighborhood Map</span>
                </div>
                <span className="text-[9px] font-mono text-gray-500">ZOOM: x18</span>
              </div>

              {/* Styled Vector Map Grid Representing Maplewood & Village Layout */}
              <div className="h-44 bg-rose-50/10 rounded-2xl relative overflow-hidden border border-[#E0537E]/15 bg-[radial-gradient(#E0537E_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center">
                
                {/* Styled Grid streets */}
                <span className="absolute left-[30%] top-0 bottom-0 w-[4px] bg-[#E0537E]/15" />
                <span className="absolute left-[70%] top-0 bottom-0 w-[4px] bg-[#E0537E]/15" />
                <span className="absolute top-[40%] left-0 right-0 h-[4px] bg-[#E0537E]/15" />
                <span className="absolute top-[75%] left-0 right-0 h-[4px] bg-[#E0537E]/15" />
                
                {/* Landmark labeling */}
                <div className="absolute left-[10%] top-[15%] text-[9px] font-display uppercase tracking-wider text-gray-500 font-bold bg-neutral-900/10 px-1.5 py-0.5 rounded">
                  Puget Sound waters
                </div>
                <div className="absolute left-[38%] top-[55%] text-[9px] font-display uppercase tracking-wider text-gray-500 font-bold bg-neutral-900/10 px-1.5 py-0.5 rounded">
                  Westside Greenpark
                </div>

                {/* Micro Animated Green Leaf / Coffee Pin */}
                <div className="absolute left-[68%] top-[34%] z-10 flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="w-10 h-10 rounded-full bg-[#E0537E] shadow-lg flex items-center justify-center border-2 border-white"
                  >
                    <Compass className="w-5 h-5 text-white animate-spin-slow" />
                  </motion.div>
                  <span className="bg-neutral-900 text-[#E0537E] text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded shadow-lg mt-1 font-bold">
                    Brew & Bloom Cafe
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] text-gray-400">3417 Maplewood Street, Seattle</span>
                <a
                  id="google-maps-directions-link"
                  href="https://maps.google.com/?q=3417+Maplewood+Street,+Westside+Village,+Seattle,+WA+98116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E0537E]/10 hover:bg-[#E0537E] hover:text-white text-[#E0537E] rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors flex items-center space-x-1"
                >
                  <span>Get Driving Routes</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Fully Interactive Submit Request Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl relative ${
              isDark ? "bg-[#3A1921]/75 border-white/5" : "bg-white border-[#E0537E]/10"
            }`}>
              
              <h3 className="font-serif text-2xl font-bold mb-2">Send an Inquiry Notice</h3>
              <p className="text-xs text-gray-500 mb-8">
                Ready to partner for wholesale bean orders, schedule private roasting classes, or book events? Write to Diego & Sam.
              </p>

              {formSent ? (
                /* Thank you visual mockup */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C05C72]/10 text-[#C05C72] flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-[#C05C72]">Craft Notes Received!</h4>
                  <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                    Thank you for your message. Priya Sharma or Sam Torres will respond within 24 hours to secure your inquiry specifications.
                  </p>
                  <button
                    id="contact-form-reset"
                    onClick={() => setFormSent(false)}
                    className="mt-6 text-xs border border-[#C05C72] bg-[#C05C72]/10 text-[#C05C72] hover:bg-[#C05C72] hover:text-white px-5 py-2 rounded-full font-bold transition-all"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                /* Contact Input Fields */
                <form id="velvet-contact-form" onSubmit={handleFormSubmission} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="relative">
                    <label className="text-xs text-gray-400 font-mono tracking-wider font-semibold block mb-2">Full Name *</label>
                    <input
                      id="contact-name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Seattle"
                      className={`w-full text-xs p-3.5 rounded-xl border focus:outline-none transition-all ${
                        errors.name
                          ? "border-red-500 focus:ring-1 focus:ring-red-400"
                          : isDark
                          ? "bg-[#2C0E14] border-white/5 text-[#FFF4F5] focus:border-[#E0537E]"
                          : "bg-white border-gray-200 text-[#2C0E14] focus:border-[#E0537E]"
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 block mt-1.5">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label className="text-xs text-gray-400 font-mono tracking-wider font-semibold block mb-2">Email Address *</label>
                    <input
                      id="contact-email-input"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      className={`w-full text-xs p-3.5 rounded-xl border focus:outline-none transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-1 focus:ring-red-400"
                          : isDark
                          ? "bg-[#2C0E14] border-white/5 text-[#FFF4F5] focus:border-[#E0537E]"
                          : "bg-white border-gray-200 text-[#2C0E14] focus:border-[#E0537E]"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 block mt-1.5">{errors.email}</span>}
                  </div>

                  {/* Category Dropdown */}
                  <div className="relative">
                    <label className="text-xs text-gray-400 font-mono tracking-wider font-semibold block mb-2">How can we help? *</label>
                    <div className="relative">
                      <select
                        id="contact-iq-select"
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleInputChange}
                        className={`w-full text-xs p-3.5 pr-10 rounded-xl border focus:outline-none transition-all appearance-none ${
                          isDark
                            ? "bg-[#2C0E14] border-white/5 text-[#FFF4F5] focus:border-[#E0537E]"
                            : "bg-white border-gray-200 text-[#2C0E14] focus:border-[#E0537E]"
                        }`}
                      >
                        <option value="general">General Coffee Shop Inquiries</option>
                        <option value="wholesale">Wholesale Roasted Beans Sourcing</option>
                        <option value="events">Private Cuppings / Event Rentals</option>
                        <option value="feedback">Guest Customer Feedback</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="relative">
                    <label className="text-xs text-gray-400 font-mono tracking-wider font-semibold block mb-2">Message Body *</label>
                    <textarea
                      id="contact-msg-textarea"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your goals or let us know what kind of roast profile fits your workspace..."
                      className={`w-full text-xs p-3.5 rounded-xl border focus:outline-none transition-all resize-none ${
                        errors.message
                          ? "border-red-500 focus:ring-1 focus:ring-red-400"
                          : isDark
                          ? "bg-[#2C0E14] border-white/5 text-[#FFF4F5] focus:border-[#E0537E]"
                          : "bg-white border-gray-200 text-[#2C0E14] focus:border-[#E0537E]"
                      }`}
                    />
                    {errors.message && <span className="text-[10px] text-red-500 block mt-1.5">{errors.message}</span>}
                  </div>

                  {/* Formspree suggestion detail code placeholder comment */}
                  <div className="text-[10px] text-gray-400 flex items-center space-x-1.5 bg-neutral-900/5 dark:bg-white/5 p-3 rounded-lg leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-[#C05C72] shrink-0" />
                    <span>
                      <strong>Formspree comment:</strong> Replace the submission logic by adding your personal endpoint: <code>https://formspree.io/f/your_id</code> in production code.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-form-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E0537E] hover:bg-[#C04266] disabled:bg-[#E0537E]/50 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Analyzing Craft Credentials...</span>
                    ) : (
                      <>
                        <span>Transmit Invitation</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
