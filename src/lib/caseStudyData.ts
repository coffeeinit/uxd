export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  accent: string;
  kind: string;
  external?: string;
};

export const caseStudies: CaseStudy[] = [
  { slug: "hyper-local-connect", title: "Hyper Local News Updates", category: "MOBILE PRODUCT · COMMUNITY", description: "A mobile application for hyper-local news, events, business listings, personalised recommendations, and community engagement.", image: "https://uxdstudio.com/files/case-study-uxdstudio-dubai-newApp_gif.gif", accent: "#d8ff5e", kind: "01" },
  { slug: "grideye", title: "AI-Powered Cybersecurity Analytics", category: "AI · CYBERSECURITY", description: "A smart-grid and DER-aware platform providing visibility at the edge through continuous monitoring and cybersecurity analytics.", image: "https://uxdstudio.com/files/case-study-uxdstudio-dubai-gridEye_gif.gif", accent: "#b7a4ff", kind: "02" },
  { slug: "la-orchid", title: "Luxury Hotel Booking", category: "HOSPITALITY · DIGITAL EXPERIENCE", description: "A clean, luxurious hotel booking experience that makes the property’s distinctive qualities easy to discover.", image: "https://uxdstudio.com/files/case-study-uxd-studio-dubai-laOrchid_gif.gif", accent: "#ff6b54", kind: "03" },
  { slug: "divo", title: "Divo — A Digital Media & Music Company", category: "MEDIA · MUSIC PLATFORM", description: "A digital media experience helping content producers build and grow their online video businesses across India and APAC.", image: "https://uxdstudio.com/files/uxdstudio-dubai-casestudy-heroBanner-3.png", accent: "#d8ff5e", kind: "04" },
  { slug: "empowering-talents", title: "Empowering Talents", category: "EVENTS · REGISTRATION", description: "A focused registration experience that makes marathon participation easy and keeps essential information clear.", accent: "#b7a4ff", kind: "05" },
  { slug: "jewelone", title: "Spreading Beauty of Jewellery Globally", category: "E-COMMERCE · JEWELLERY", description: "A minimal, product-first jewellery experience designed to make discovery and decision-making easier.", image: "https://uxdstudio.com/files/6-uxdstudio-dubai-casestudy-heroBanner.png", accent: "#ff6b54", kind: "06" },
  { slug: "energy-efficiency-refined", title: "Energy Efficiency Refined", category: "WEB · INDUSTRIAL", description: "A digital experience built to attract potential customers and make a complex product story easier to understand.", accent: "#d8ff5e", kind: "07" },
  { slug: "chennai-properties", title: "Search, Buy, Sell and Rent Property in Chennai", category: "WEB PORTAL · REAL ESTATE", description: "A property platform for searching, listing, buying, selling, and renting homes and commercial spaces across Chennai.", image: "https://uxdstudio.com/files/uxdstudio-dubai-casestudy-visualDesign-chennai-properties.png", accent: "#b7a4ff", kind: "08", external: "https://www.chennaiproperties.in/" },
  { slug: "snabbmaten", title: "Snabbmaten", category: "MOBILE APP · FOOD", description: "Fast, convenient online food ordering that helps people discover restaurants, explore menus, and order with ease.", image: "https://uxdstudio.com/files/uxdstudio-dubai-casestudy-snabbmatenApp.jpg", accent: "#ff6b54", kind: "09" },
  { slug: "cachemaster", title: "CacheMaster", category: "MOBILE APP · UTILITY", description: "An Android cache cleaner and optimizer that frees storage and keeps devices moving smoothly.", image: "https://uxdstudio.com/files/uxdstudio-dubai-casestudy-cacheCleaner.jpg", accent: "#d8ff5e", kind: "10" },
];

