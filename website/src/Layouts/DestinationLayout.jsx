import React from 'react';
import DestinationHero from '../pages/destinations/DestinationHero';
import DestinationInfo from '../pages/destinations/DestinationInfo';
import { HomeForm } from '../components/AnimatedFormsTab';
import FAQsection from '../Components/FAQsection';
import Header from '../components/HeaderNav';

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
