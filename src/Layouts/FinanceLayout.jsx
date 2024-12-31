import React from "react";
import FinanceForm from "../pages/Finance/FinanceForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HowItWorks from "../pages/Finance/HowItWorks";
import OurPartners from "../Components/OurPartners";
import FAQsection from "../Components/FAQsection";
import HeroSection from "../pages/Finance/FinanceHeader";

function FinanceLayout() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <HowItWorks/>
      <OurPartners/>
      <FAQsection/>
      <FinanceForm />
      <Footer />
    </div>
  );
}

export default FinanceLayout;
