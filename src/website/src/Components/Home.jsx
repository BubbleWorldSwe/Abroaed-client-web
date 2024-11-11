import React from "react";
import FAQ from "./FAQ";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";
import Navbar from "./Navbar";
import Header from "./Navbar";
import PromoSection from "./PromoSection";
import Tabs, { HomeForm, VirtualForm, VisitUsForm } from "./AnimatedFormsTab";
import PartnerUnis from "./PartnerUnis";
import TimelineSlider from "./TimelineSlider";
import cover from "../assets/cover.jpg";

// Usage Example
const slidesData = [
  {
    image: cover,
    title: "Shortlisting ✅",
    description:
      "Find your Right-Fit Universities and Courses. Share your profile, and let our tools recommend the best-matched universities and courses for you.",
    buttonText: "Explore Shortlisting",
  },
  {
    image: cover,
    title: "Counselling 🗣️",
    description:
      "Get Expert Advice from our Counsellors. Take the pivotal first step and engage in a personalized conversation with our expert mentors.",
    buttonText: "Start Counselling",
  },
  {
    image: cover,
    title: "Test Prep 📝",
    description:
      "Ace IELTS, TOEFL and other standardized tests with comprehensive test preparation at Leverage Live for IELTS, TOEFL, PTE, GMAT, GRE and SAT.",
    buttonText: "Prepare Now",
  },
  {
    image: cover,
    title: "Meeting Universities 🌐",
    description:
      "Engage with 850+ World-Renowned Universities. Connect one-on-one with university representatives and secure instant offers.",
    buttonText: "See Events",
  },
  {
    image: cover,
    title: "Loans & Scholarships 💰",
    description:
      "Finance your Study Abroad Dream. Secure affordable education loans through Fly Finance.",
    buttonText: "Get Financial Help",
  },
];

// Tabs Content
const tabData = [
  { title: "Home", value: "home", content: <HomeForm /> },
  { title: "Virtual", value: "virtual", content: <VirtualForm /> },
  { title: "Visit Us", value: "visit", content: <VisitUsForm /> },
];

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PromoSection />
      <Tabs
        tabs={tabData}
        containerClassName="mb-4"
        activeTabClassName="bg-gray-200 dark:bg-zinc-800"
        tabClassName="hover:bg-gray-300 dark:hover:bg-zinc-700"
        contentClassName="transition-opacity duration-500"
      />
      <PartnerUnis />
      <TimelineSlider slides={slidesData} />

      <TestimonialsSection />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
