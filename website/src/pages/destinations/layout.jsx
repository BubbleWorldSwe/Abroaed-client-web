import React from 'react';
import Header from '../../Components/Navbar';
import DestinationHero from './DestinationHero';
import DestinationInfo from './DestinationInfo';
import FAQ from '../../Components/FAQ';

function LayoutPage() {
  return (
    <div>
      <Header />
      <DestinationHero />
      <DestinationInfo />
      <FAQ />
    </div>
  );
}

export default LayoutPage;
