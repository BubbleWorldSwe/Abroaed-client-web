export const courseLevels = [
  "Bachelor’s Degree",
  "Master's Degree",
  "PhD",
  "Doctorate",
  "Certificate",
  "Diploma",
];

export const intake = ["Spring", "Summer", "Fall", "Winter"];

export const docCategory = [
  "Government",
  "Academic",
  "Finance",
  "Applications",
];

export const courseDomains = [
  "Engineering",
  "Medical",
  "Law",
  "Management",
  "Arts & Humanities",
  "Science",
];

export const paymentMode = [
  "Credit Card",
  "Debit Card",
  "Cash",
  "UPI",
  "Bank Transfer",
];

export const languages = [
  "English",
  "Hindi",
  "French",
  "Spanish",
  "German",
  "Mandarin",
  "Japanese",
];
export const testMode = ["Online", "Offline"];

export const pageDataLimit = 20;

export const targetYear = ["2025", "2026", "2027", "2028", "2029", "2030"];

export const applyingFor = [
  "Bachelor’s Degree",
  "Master's Degree",
  "PhD",
  "Doctorate",
  "Certificate",
  "Diploma",
];

export const highestEducation = [
  "12th",
  "Diploma",
  "Graduation",
  "Post Graduation",
];

export const appointmentType = ["Virtual Consellings", "Home", "In-Person"];

export const servicerType = [
  "ABROAED Plus",
  "ABROAED Standard",
  "ABROAED Pathways",
  "ABROAED LOE",
];

export const planType = ["Basic", "Advance", "Elite"];

export const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY;

export const source = {
  home: "Home",
  destination: "Destination",
  courses: "Courses",
  accommodation: "Accommodation",
  college: "College",
  languagePrep: "Language Prep",
  testPrep: "Test Prep",
  finance: "Finance",
  abroaedPlus: "ABROAED Plus",
  homeCounselling: "Home Counselling",
  leaguageOfExcellence: "Leaguage Of Excellence",
  pathways: "Pathways",
  pathwaysProgram: "Pathways Program",
  menu: "Menu",
  forex: "Forex"
};

export const entity = {
  contactUs: "Contact Us",
  explorePlans: "Explore Plans",
  bookCounselling: "Book Counselling",
};

export const statusSequence = [
  "to_start",
  "verifying_documents",
  "application_filled",
  "awaiting_response",
  "rejected",
  "offer_letter_received",
];

// src/constants/menuItems.js
export const destinationMenuItems = [
  { name: "UK", flag: "🇬🇧", link: "/uk" },
  { name: "Ireland", flag: "🇮🇪", link: "/ireland" },
  { name: "Germany", flag: "🇩🇪", link: "/germany" },
  { name: "France", flag: "🇫🇷", link: "/france" },
  { name: "Italy", flag: "🇮🇹", link: "/italy" },
  { name: "Poland", flag: "🇵🇱", link: "/poland" },
  { name: "Australia", flag: "🇦🇺", link: "/australia" },
  { name: "USA", flag: "🇺🇸", link: "/usa" },
  { name: "Canada", flag: "🇨🇦", link: "/canada" },
  { name: "Dubai", flag: "🇦🇪", link: "/dubai" },
  { name: "Europe", flag: "🇪🇺", link: "/europe" },
  { name: "Netherlands", flag: "🇳🇱", link: "/netherlands" },
  { name: "Spain", flag: "🇪🇸", link: "/spain" },
  { name: "New Zealand", flag: "🇳🇿", link: "/newzealand" },
];

export const destinationSequence = [
  "United Kingdom",
  "Ireland",
  "United States",
  "Canada",
  "Australia",
  "New Zealand",
  "United Arab Emirates",
  "Germany",
  "Italy",
  "Japan",
  "South Korea",
  "France",
  "Czech Republic",
  "Netherlands",
  "Poland",
  "Spain",
];

export const testPrepsSequence = [
  "IELTS",
  "TOEFL",
  "Duolingo",
  "PTE",
  "SAT",
  "GRE",
  "GMAT",
];

export const tabColors = {
  "To Start": "bg-[#FECCE1]",
  "Verifying Documents": "bg-[#FFFCC2]",
  "Application Filed": "bg-[#BAE6FF]",
  "Application Filled": "bg-[#BAE6FF]",
  "Awaiting Response": "bg-[#D4D4D8]",
  Rejected: "bg-[#DB4437]",
  "Offer Letter Received": "bg-[#DBFDEC]",
};
