
import TestimonialsSection from "./TestimonialsSection";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";
import PromoSection from "./PromoSection";
import PartnerUnis from "./PartnerUnis";
import TimelineSlider from "./TimelineSlider";
import cover from "../assets/cover.jpg";
import Header from "./Header";
// import { HomeForm, VirtualForm, VisitUsForm } from "./AnimatedTabs";
import Footer from "./Footer";
import FAQsection from "./FAQsection";
import DownloadApp from "./DownloadApp";
import BlogsSection from "./BlogsSection";
import OurPartners from "./OurPartners";
import HomePageLeadForm from "./HomePageLeadForm";
import { KpiMatrix } from "./KpiMatrix";
// import AbroaedUpdatesCards from "./AbroaedUpdatesCards";
import PathwaySection from "./PathwaySection";
import HomeServicesCards from "./HomeServices";

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
// const tabData = [
//   { title: "Home", value: "home", content: <HomeForm /> },
//   { title: "Virtual", value: "virtual", content: <VirtualForm /> },
//   { title: "Visit Us", value: "visit", content: <VisitUsForm /> },
// ];

function HomeLayout() {
  return (
    <>
      <Header />
      <HeroSection />
      <KpiMatrix />
      <PathwaySection />
      <HomeServicesCards />
      <PromoSection />
      <PartnerUnis />
      <TimelineSlider slides={slidesData} />
      <OurPartners />
      <TestimonialsSection />
      <DownloadApp />
      <BlogsSection />
      <Pricing />
      <FAQsection />
      <AbroaedUpdatesCards/>
      <HomePageLeadForm />
      <Footer />
    </>
  );
}

export default HomeLayout;
