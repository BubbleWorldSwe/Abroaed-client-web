import React from "react";
import DestinationHero from "../pages/destinations/DestinationHero";
import DestinationInfo from "../pages/destinations/DestinationInfo";
import FAQsection from "../Components/FAQsection";
import Header from "../Components/Header";
import { HomeForm } from "../Components/AnimatedTabs";

function LayoutPageDestination() {
  return (
    <div>
      <Header />
      <DestinationHero />
      <DestinationInfo />
      <HomeForm />
      <FAQsection />
    </div>
  );
}

export default LayoutPageDestination;
