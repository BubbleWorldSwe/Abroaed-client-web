import React from "react";
import FinanceForm from "../pages/Finance/FinanceForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HowItWorks from "../pages/Finance/HowItWorks";
import OurPartners from "../Components/OurPartners";
import FAQsection from "../Components/FAQsection";
import HeroSection from "../pages/Finance/FinanceHeader";
import TestPrepForm from "../pages/TestPrep/TestPrepForm";
import BlogsSection from "../Components/BlogsSection";
import vectorShoe from "../assets/vectorShoe.png"
import HomePageLeadForm from "../Components/HomePageLeadForm";
function FinanceLayout() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <HowItWorks/>
      <OurPartners/>
      <div className="relative ">
        <BlogsSection/>
         <div className="absolute -bottom-4 left-0 z-0">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={vectorShoe}
                  alt="Counselling session"
                />
              </div>
      </div>
      <FAQsection/>
      {/* <TestPrepForm /> */}
<HomePageLeadForm/>
      <Footer />
    </div>
  );
}

export default FinanceLayout;
