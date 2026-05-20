export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: "coffee" | "alternatives" | "food" | "retail";
  tags: string[]; // e.g., ["Direct Trade", "Organic", "Vegan", "GF"]
  image: string;
  details?: string; // Additional roast details/ingredients
}

export interface CafeEvent {
  id: string;
  title: string;
  day: string;
  time: string;
  frequency: string;
  description: string;
  type: "class" | "music" | "art" | "social";
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "interior" | "roastery" | "coffee" | "community";
}
