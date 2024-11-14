import React from 'react';
import Header from '../../Components/Navbar';
import DestinationHero from './DestinationHero';
import DestinationInfo from './DestinationInfo';
import FAQ from '../../Components/FAQ';
import { HomeForm } from '../../Components/AnimatedFormsTab';

function LayoutPage() {
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

export default LayoutPage;
