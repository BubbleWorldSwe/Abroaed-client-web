import React from "react";
import Header from "../Components/Header";
import TestPrepContent from "../pages/TestPrep/TestPrepOverviewContent";
import TestPrepHero from "../pages/TestPrep/TestPrepHero";
import TestPrepForm from "../pages/TestPrep/TestPrepForm";
import Footer from "../Components/Footer";

function TestPrepLayout() {
  return (
    <div>
      <Header />
      <TestPrepHero />
      <TestPrepForm />
      <Footer />
    </div>
  );
}

export default TestPrepLayout;
