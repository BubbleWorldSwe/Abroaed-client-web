import React from "react";
import DestinationHero from "../pages/destinations/DestinationHero";
import DestinationInfo from "../pages/destinations/DestinationInfo";
import FAQsection from "../Components/FAQsection";
import Header from "../Components/Header";
import { HomeForm } from "../Components/AnimatedTabs";
import FunFacts from "../Components/FunFacts";
import UniCoursersCard from "../pages/destinations/UniCoursersCard";
import Footer from "../Components/Footer";
import AccomodationLeadForm from "../pages/accomodation/AccomodationLeadForm";
import AbroaedUpdatesCards from "../Components/AbroaedUpdatesCards";

function LayoutPageDestination() {
  return (
    <div>
      <Header />
      <DestinationHero />
      <DestinationInfo />

      <FunFacts/>
      <UniCoursersCard/>
      <FAQsection />
      <AbroaedUpdatesCards/>
      <AccomodationLeadForm/>
      <Footer/>
    </div>
  );
}

export default LayoutPageDestination;
