import React from "react";
import FinanceForm from "../pages/Finance/FinanceForm";
import FinanceHeader from "../pages/Finance/FinanceHeader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HowItWorks from "../pages/Finance/HowItWorks";
import OurPartners from "../Components/OurPartners";
import FAQsection from "../Components/FAQsection";

function FinanceLayout() {
  return (
    <div>
      <Header />
      <FinanceHeader />
      <HowItWorks/>
      <OurPartners/>
      <FAQsection/>
      <FinanceForm />
      <Footer />
    </div>
  );
}

export default FinanceLayout;
