import React from "react";

import Header from "../Components/Header";
import ContentSection from "../Components/ContentSection";
import HeroSection from "../pages/AboutUs/HeroSection";
import Footer from "../Components/Footer";
import CtaSection from "../pages/AboutUs/CtaSection";

function AboutUsLayout() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContentSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default AboutUsLayout;
