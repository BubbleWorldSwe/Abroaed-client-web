import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContentSection from "../Components/ContentSection";
import Hero from "../pages/Careers/Hero";
import JobCard from "../pages/Careers/JobCard";

function CareersLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <ContentSection />
      <JobCard/>
      <Footer />
    </div>
  );
}

export default CareersLayout;
