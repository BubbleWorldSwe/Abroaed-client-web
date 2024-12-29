import React from "react";
import DestinationHero from "../pages/destinations/DestinationHero";
import DestinationInfo from "../pages/destinations/DestinationInfo";
import FAQsection from "../Components/FAQsection";
import Header from "../Components/Header";
import { HomeForm } from "../Components/AnimatedTabs";
import FunFacts from "../Components/FunFacts";

function LayoutPageDestination() {
  return (
    <div>
      <Header />
      <DestinationHero />
      <DestinationInfo />

      <FunFacts/>
      <HomeForm />
      <FAQsection />
    </div>
  );
}

export default LayoutPageDestination;
