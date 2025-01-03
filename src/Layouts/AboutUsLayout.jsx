import React from "react";

import Header from "../Components/Header";
import ContentSection from "../Components/ContentSection";
import HeroSection from "../pages/AboutUs/HeroSection";
import Footer from "../Components/Footer";
import CtaSection from "../pages/AboutUs/CtaSection";
import OurTeam from "../pages/AboutUs/OurTeam";

function AboutUsLayout() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContentSection />
      <OurTeam/>
      <CtaSection />
      <Footer />
    </div>
  );
}

export default AboutUsLayout;
