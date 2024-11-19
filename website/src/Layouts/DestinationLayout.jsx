import React from 'react';
import DestinationHero from '../pages/destinations/DestinationHero';
import DestinationInfo from '../pages/destinations/DestinationInfo';
import Header from '../components/Navbar';
import FAQ from '../components/FAQ';
import { HomeForm } from '../components/AnimatedFormsTab';

function LayoutPageDestination() {
  return (
    <div>
      <Header />
      <DestinationHero />
      <DestinationInfo />
      <HomeForm />
      <FAQ />
    </div>
  );
}

export default LayoutPageDestination;
