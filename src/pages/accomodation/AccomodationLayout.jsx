import React, { useRef } from 'react';
import AccHero from './accHero';

import PopularCityCards from './PopularCityCards';
import AccomodationLeadForm from './AccomodationLeadForm';
import PopularUniversityCards from './PopularUniversities';
import FAQsection from '../../Components/FAQsection';
import Header from '../../components/HeaderNav';

function AccomodationLayout() {
  // Create refs for each section
  const popularCitiesRef = useRef(null);
  const popularUnisRef = useRef(null);
  const studentAccommodationsRef = useRef(null);
  const faqRef = useRef(null);

  // Scroll handler
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      {/* Pass refs and scroll handlers as props */}
      <AccHero
        onNavigate={{
          popularCities: () => handleScroll(popularCitiesRef),
          popularUnis: () => handleScroll(popularUnisRef),
          studentAccommodations: () => handleScroll(studentAccommodationsRef),
          faq: () => handleScroll(faqRef)
        }}
      />
      <div ref={popularCitiesRef}>
        <PopularCityCards />
      </div>
      <div ref={studentAccommodationsRef}>
        <AccomodationLeadForm />
      </div>
      <div ref={popularUnisRef}>
        <PopularUniversityCards />
      </div>
      <div ref={faqRef}>
        <FAQsection />
      </div>
    </div>
  );
}

export default AccomodationLayout;
