import React from "react";
import DestinationHero from "../pages/destinations/DestinationHero";
import DestinationInfo from "../pages/destinations/DestinationInfo";
import FAQsection from "../Components/FAQsection";
import Header from "../Components/Header";
import { HomeForm } from "../Components/AnimatedTabs";
import FunFacts from "../Components/FunFacts";
import UniCoursersCard from "../pages/destinations/UniCoursersCard";
import Footer from "../Components/Footer";
import AccomodationLeadForm from "../pages/accommodation/AccomodationLeadForm";
import AbroaedUpdatesCards from "../Components/AbroaedUpdatesCards";
import DestinationRouting from "../pages/destinations/DestinationRouting";
import vectorLeftFlat from "../assets/vectoreLeftFlat.png"
import AdmissionRequirement from "../pages/destinations/AdmissionRequirement";
import DestinationExpanses from "../pages/destinations/DestinationExpanses";
import vectorDownNose from "../assets/vectorDownNose.png"
import DestinationScholarship from "../pages/destinations/DestinationScholarship";
import ImmigrationDetails from "../pages/destinations/ImmigrationDetails";
import vectorRightNoseCurve from "../assets/vectorRightNoseCurve.png"
import WorkOpportunities from "../pages/destinations/WorkOpportunities";
import vectorBelow from "../assets/vectorBelow.png"
import StudentAccommodations from "../pages/destinations/StudentAccommodations";
import BlogsSection from "../Components/BlogsSection";
import vectorNoseRightToLeft from "../assets/vectorNoseRightToLeft.png"
function LayoutPageDestination() {
  return (
    <div>
      <Header />
      <DestinationHero />
      <DestinationRouting />
      <DestinationInfo />
      <div className="relative ">
      <FunFacts />
<div className="absolute bottom-16 left-0 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorLeftFlat}
          alt="Counselling session"
        />
      </div>
      </div>
      <UniCoursersCard />
      <div className="relative">
      <AdmissionRequirement/>
<div className="absolute -bottom-44 left-0 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorDownNose}
          alt="Counselling session"
          />
      </div>
      </div>
          <DestinationExpanses/>
          <DestinationScholarship/>
          <div className="relative">
          <ImmigrationDetails/>
          <div className="absolute bottom-0 left-0 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorRightNoseCurve}
          alt="Counselling session"
          />
      </div>
          </div>
          <div className="relative">
          <WorkOpportunities/>
          <div className="absolute top-0 right-0 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorBelow}
          alt="Counselling session"
          />
      </div>
          </div>
          <StudentAccommodations/>
            <FAQsection />
          <div className="relative">
          <BlogsSection />
          <div className="absolute top-64 left-48 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorNoseRightToLeft}
          alt="Counselling session"
          />
      </div>
          </div>
      <AbroaedUpdatesCards />
      <AccomodationLeadForm />
      <Footer />
    </div>
  );
}

export default LayoutPageDestination;
