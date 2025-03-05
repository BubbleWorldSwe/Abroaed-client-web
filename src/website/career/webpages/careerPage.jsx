
import CareerJobSection from "./sections/careerJobSection";
import CareerJoinTeam from "./sections/careerJoinTeamSection";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import CareerHeroSections from "./sections/careerHeroSection";
import CareerGallerySection from "./sections/careerGallerySection";
import CareerContentSection from "./sections/careerContentSection";

function CareerPage() {
  return (
    <div className="font-rethink">
      <Header />
      <CareerHeroSections />
      <CareerContentSection />
      <CareerJobSection />
      <CareerJoinTeam />
      <CareerGallerySection />
      <Footer />
    </div>
  );
}

export default CareerPage;
