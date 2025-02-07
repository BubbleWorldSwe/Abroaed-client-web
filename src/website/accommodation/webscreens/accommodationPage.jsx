import AccommodationHeroSection from "./sections/accommodationHeroSection";
import AccommodationResultForCountry from "./sections/accomodationResultForCountry";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import AccommodationHowItWorkSection from "./sections/accommodationHowItWorkSection";
import AccommodationFaqSection from "./sections/accommodationFaqSection";
import AccommodationBlogSection from "./sections/accommodationBlogSection";
import AccommodationLeadFormSection from "./sections/accommodationLeadFormSection";

function AccomodationPage() {
  return (
    <div>
      <Header />
      <AccommodationHeroSection />
      <AccommodationResultForCountry />
      <AccommodationHowItWorkSection />
      <div >
        <AccommodationFaqSection />
      </div>
      <div >
        <AccommodationBlogSection />
      </div>
      <div >
        <AccommodationLeadFormSection />
      </div>
      <Footer />
    </div>
  );
}

export default AccomodationPage;
