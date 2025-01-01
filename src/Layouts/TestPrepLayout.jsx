import React from "react";
import Header from "../Components/Header";
import TestPrepContent from "../pages/TestPrep/TestPrepOverviewContent";
import TestPrepHero from "../pages/TestPrep/TestPrepHero";
import TestPrepForm from "../pages/TestPrep/TestPrepForm";
import Footer from "../Components/Footer";
import AboutTest from "../pages/TestPrep/AboutTest";
import HowItWorks from "../pages/Finance/HowItWorks";
import AbroaedUpdatesCards from "../Components/AbroaedUpdatesCards";

function TestPrepLayout() {
  return (
    <div>
      <Header />
      <TestPrepHero />
      <AboutTest/>
      <HowItWorks/>
      <TestPrepForm />
      <AbroaedUpdatesCards/>
      <Footer />
    </div>
  );
}

export default TestPrepLayout;
