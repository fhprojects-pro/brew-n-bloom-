import { TeamMember, MenuItem, CafeEvent, Testimonial, GalleryPhoto } from "./types";

export const CAFE_INFO = {
  name: "Brew & Bloom Café",
  brand: "Velvet Grind Coffee",
  taglines: [
    "Slow Roasted. Fast Poured. Always Smooth.",
    "Every Sip Tells a Story"
  ],
  established: 2026,
  address: "3417 Maplewood Street, Westside Village, Seattle, WA 98116",
  phone: "(555) 612-9845",
  email: {
    general: "hello@velvetgrind.co",
    wholesale: "wholesale@velvetgrind.co",
    events: "events@velvetgrind.co"
  },
  hours: {
    weekdays: "6:00 AM – 8:00 PM",
    weekends: "7:00 AM – 9:00 PM",
    holidays: "8:00 AM – 4:00 PM"
  },
  socials: {
    instagram: "https://instagram.com/VelvetGrindCo",
    facebook: "https://facebook.com/VelvetGrindCoffee",
    twitter: "https://twitter.com/VelvetGrind",
    tiktok: "https://tiktok.com/@VelvetGrindBaristas"
  },
  stats: [
    { value: "4.8★", label: "Google Reviews", detail: "2,100+ happy guests" },
    { value: "Direct Trade", label: "Ethical Sourcing", detail: "Colombia & Ethiopia" },
    { value: "Bi-Weekly", label: "On-site Roasting", detail: "Every Tuesday & Friday" },
    { value: "85%", label: "Zero-Waste", detail: "Composting & solar powered" }
  ],
  highlights: [
    {
      id: "roastery",
      icon: "Coffee",
      title: "On-Site Small-Batch Roastery",
      description: "Sample origin flavors roasted directly in our classic Probat drum roaster twice a week."
    },
    {
      id: "wifi",
      icon: "Wifi",
      title: "Ultra-Fast Fiber WiFi",
      description: "Complimentary gigabit internet speeds optimized for remote developers and creators."
    },
    {
      id: "power",
      icon: "Zap",
      title: "Power at Every Table",
      description: "Abundant under-counter and table outlets so you can focus on work without stress."
    },
    {
      id: "dog",
      icon: "Heart",
      title: "Dog-Friendly Sidewalk Patio",
      description: "Our outdoor trellis terrace welcomes pets with complimentary botanical water treats."
    },
    {
      id: "gallery",
      icon: "Palette",
      title: "Rotating Seattle Art Wall",
      description: "A cozy showcase curated monthly supporting Pacific Northwest sculptors and painters."
    },
    {
      id: "cupoff",
      icon: "Leaf",
      title: "Zero-Waste Initiative",
      description: "Receive a $0.50 discount whenever you bring a reusable tumbler for any beverage."
    }
  ]
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "diego",
    name: "Diego Fernandez",
    role: "Head Roaster",
    bio: "Diego spent a decade working directly alongside small farms in Huila, Colombia. He brings scientific precision to profiling green coffee densities and acid ratios.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "priya",
    name: "Priya Sharma",
    role: "Café Manager",
    bio: "The operational genius behind our warm atmosphere, Priya designs our zero-waste workflows and local barista training programs with 12 years of community café experience.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "jordan",
    name: "Jordan Blake",
    role: "Lead Barista",
    bio: "Jordan is an award-winning latte artist in the Pacific Northwest region. When not etching delicate tulips, Jordan curates the monthly coffee cupping courses.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "emma",
    name: "Emma Lindqvist",
    role: "Pastry Chef",
    bio: "An artisanal champion from Stockholm, Emma handcrafts our signature cardamom buns daily using slow-fermented organic grains and PNW farm-grown figs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sam",
    name: "Sam Torres",
    role: "Events Coordinator",
    bio: "Sam bridges local culture and specialty coffee by organizing our highly anticipated Open Mic Nights and rotating art collaborations with local academies.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: "espresso",
    name: "Velvet House Espresso",
    price: "$4.00",
    description: "Our core double-shot espresso profile, balance of molasses sweetness and plum tartness.",
    category: "coffee",
    tags: ["Direct Trade", "House Blend", "Roasted Weekly"],
    image: "https://images.unsplash.com/photo-1510972527409-cef1903972fa?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Origin: 60% Colombia El Paraiso + 40% Ethiopia Sidama. Notes: Milk Chocolate, Red Currant, Toffee."
  },
  {
    id: "pour-over",
    name: "Single-Origin Pour-Over",
    price: "$5.50",
    description: "Brewed on a V60. Bright citric acidity, tea-like clarity, and intense floral aromatics.",
    category: "coffee",
    tags: ["Direct Trade", "Single Origin", "V60"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Origin: Colombia (Washed Geisha). Roasted lightly on Tuesday. Tasting notes: Jasmine, Bergamot, White Peach."
  },
  {
    id: "nitro",
    name: "Velvet Nitro Cold Brew",
    price: "$5.00",
    description: "Slow-dripped for 16 hours, pressurized with nitrogen gas for a thick Guinness-like head.",
    category: "coffee",
    tags: ["On Tap", "Low Acid", "Velvety"],
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Infused with high culinary-grade nitrogen. Naturally sweet. Zero sugar or cream added."
  },
  {
    id: "sig-latte",
    name: "Lavender Honey Bloom Latte",
    price: "$6.25",
    description: "Our signature espresso mixed with hand-steeped organic culinary lavender and raw Seattle honey.",
    category: "coffee",
    tags: ["Signature", "House Syrup", "Latte Art"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Infused with a rich homemade reduction of fresh English lavender petals, wild honey, and whole milk."
  },

  // ALTERNATIVES
  {
    id: "matcha",
    name: "Ceremonial Kyoto Matcha Latte",
    price: "$5.75",
    description: "Premium Uji matcha hand-whisked to order. Creamy, vegetal, and naturally sweet taste.",
    category: "alternatives",
    tags: ["Organic", "Stone-ground", "Uji Japanese"],
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Ceremonial first-harvest tea whisked in hot water at 176°F, paired beautifully with organic Oat Milk."
  },
  {
    id: "chai",
    name: "Spiced Masala Chai Latte",
    price: "$5.50",
    description: "Organic black tea slow-steeped under intense heat with ginger, cloves, and star anise.",
    category: "alternatives",
    tags: ["House-made Chai", "Spiced", "Vegan Option"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Steeped for 4 hours with fresh ginger, cinnamon sticks, toasted black peppercorn, and dark molasses."
  },
  {
    id: "turmeric",
    name: "Golden Turmeric Elixir",
    price: "$5.50",
    description: "Warm Ayurvedic tonic of yellow turmeric roots, cracked black pepper, raw honey, and steamed coconut milk.",
    category: "alternatives",
    tags: ["Decaf", "Superfood", "Warming"],
    image: "https://images.unsplash.com/photo-1616160975612-42da6701ac2a?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Antioxidant rich recipe. The black pepper activates curcumin digestion for true cellular health."
  },

  // FOOD
  {
    id: "avo-toast",
    name: "Signature Sourdough Avocado Toast",
    price: "$11.00",
    description: "Local Bread Lab sourdough, smashed organic avocado, heirloom tomatoes, micro-greens, sea salt, and a drizzle of organic lime oil.",
    category: "food",
    tags: ["Vegan", "Best Seller", "Artisanal"],
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Options: Add organic poached egg (+$1.50) or Seattle wild smoked salmon (+$3.00)."
  },
  {
    id: "salmon-bagel",
    name: "Pacific Smoked Salmon Bagel",
    price: "$13.50",
    description: "Toasted local sea salt bagel, wild-caught sockeye salmon, fresh dill cream cheese, capers, and pickled red onions.",
    category: "food",
    tags: ["Pacific NW", "Fresh", "High Protein"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Sourced sustainably from Puget Sound traditional fisheries. Lox style preparation."
  },
  {
    id: "swedish-bun",
    name: "Emma’s Cardamom Bun (Kardemummabulle)",
    price: "$4.50",
    description: "Artisanal Scandinavian cardamom-infused braided bun, pearl sugar topping. Baked fresh every morning.",
    category: "food",
    tags: ["Bakery", "Chef Emma Specialty", "Sweet"],
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Made with authentic organic ground cardamom seeds, European high-fat butter, and slow fermented sourdough yeast."
  },

  // RETAIL
  {
    id: "whole-beans",
    name: "Velvet Grind Espresso Blend (12oz)",
    price: "$18.50",
    description: "Our beloved house roast. Ideal for home espresso setup or rich French press. Resealable eco-bag.",
    category: "retail",
    tags: ["Whole Bean", "On-site Roasted", "Tuesday Fresh"],
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Tasting Notes: Dark Cocoa, Toasted Macadamia, Sweet Plum. Roasted fresh every single Tuesday and Friday."
  },
  {
    id: "retail-pottery",
    name: "Brew & Bloom Artisanal Ceramic Mug",
    price: "$24.00",
    description: "Hand-thrown in Seattle’s Westside district by local potter Studio West. Soft sand and espresso glazed design.",
    category: "retail",
    tags: ["Artisanal", "Merchandise", "Limited Edition"],
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&h=450&q=80",
    details: "Fits 12oz comfortably. Dishwasher and microwave safe. Fits beautifully in the palm of your hand."
  },
  {
    id: "retail-kettle",
    name: "Fellow Stagg EKG Custom Gold Edition",
    price: "$165.00",
    description: "Precision temperature kettle with a gorgeous custom gold handle to match our cafe design accents.",
    category: "retail",
    tags: ["Equipment", "Barista Choice", "Gold Accent"],
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&h=450&q=80",
    details: "1200 Watts for fast heating. Precise gooseneck pour control. LCD screen tracks Fahrenheit or Celsius temperature."
  }
];

export const CAFE_EVENTS: CafeEvent[] = [
  {
    id: "open-mic",
    title: "Neighborhood Open Mic",
    day: "Thursday",
    time: "7:00 PM – 9:30 PM",
    frequency: "Weekly",
    description: "Join local Westside Seattle poets, singer-songwriters, and acoustic artists. Sign-ups open at 6:30 PM. Active performers get a free single origin coffee.",
    type: "music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    id: "cupping-class",
    title: "Specialty Coffee Cupping & Aromas",
    day: "Saturday",
    time: "11:00 AM – 1:00 PM",
    frequency: "Weekly",
    description: "Evaluate raw acidity, body, and fragrance mapping alongside Head Roaster Diego. Learn to break the crust and trace geographic terroirs like a certified Q-grader.",
    type: "class",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    id: "art-gallery",
    title: "Local Artist Gallery Feature",
    day: "First Tuesday",
    time: "6:00 PM – 8:00 PM",
    frequency: "Monthly Showcase",
    description: "Explore inspiring paintings, sketches, and prints covering our local gallery space walls. Enjoy free botanical mocktails and listen to an elegant live violinist.",
    type: "art",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    id: "barista-throwdown",
    title: "Latte Art Community Throwdown",
    day: "Last Friday",
    time: "7:30 PM – Midnight",
    frequency: "Monthly",
    description: "Seattle's top baristas battle head-to-head in single elimination brackets! Free admission for spectators with rich sweet snacks, loud music, and local brewer taps.",
    type: "social",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&h=300&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "Freelance Software Engineer",
    rating: 5,
    text: "Brew & Bloom is my daily office. The fiber WiFi is incredibly fast, and there is a power socket at literally every single wooden table. That lavender honey latte is what dreams are made of.",
    date: "April 12, 2026",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "t2",
    name: "Marcus Aurelius Diaz",
    role: "Neighborhood Resident",
    rating: 5,
    text: "I sit on the dog-friendly sidewalk patio every Saturday morning with my Golden Retriever. They even bring out custom botanical dog treats! It is easily the friendliest, most luxurious spot in Seattle.",
    date: "May 2, 2026",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "t3",
    name: "Elena Rostova",
    role: "Specialty Coffee Enthusiast",
    rating: 5,
    text: "The Cupping Saturday courses with Diego totally changed how I brew at home. Their washed Geisha pour-over tastes like sparkling white peach tea. Truly professional roasting standard and direct trade philosophy.",
    date: "May 14, 2026",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Fabulous steaming espresso shot with beautiful golden crema extractions",
    caption: "The standard double extraction using our weekly Velvet Grind espresso blend.",
    category: "coffee"
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Warm interior seating arrangement of our cafe with soft glass windows and velvet pillows",
    caption: "A view of our cozy velvet indoor seating. Natural Pacific Northwest lighting.",
    category: "interior"
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Head Roaster Diego checking the roast color profile on our custom drum machine",
    caption: "Diego adjusting gas airflow on our custom restored German drum roaster.",
    category: "roastery"
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Cozy crowd drinking coffee and smiling during our weekly Open Mic Thursday evenings",
    caption: "Warm ambiance during one of our bustling Open Mic Night music evenings.",
    category: "community"
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Elegant ceramic cup holding rich Kyoto Matcha Latte on a textured oak table",
    caption: "Artisanal matcha. Whisked ceremonial grade tea paired with oat milk.",
    category: "coffee"
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Cozy wood furniture patio with beautiful green plants and blooming spring flower arrangements",
    caption: "Our sidewalk patio blooming with local organic dog-friendly ferns.",
    category: "interior"
  }
];
