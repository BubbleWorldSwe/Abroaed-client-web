import CareerJobSection from "./sections/careerJobSection";
import CareerJoinTeam from "./sections/careerJoinTeamSection";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import CareerHeroSections from "./sections/careerHeroSection";
import CareerContentSection from "./sections/careerContentSection";
import SectionComponent from "../../styleComponents/sectionComponent";
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png"
function CareerPage() {
  return (
    <div className="font-rethink">
      <Header isHeaderBgWhite={true} />
      <div className="grid grid-cols-1 gap-10 md:gap-16  ">
        <div className=" relative">
          <SectionComponent >
            <CareerHeroSections />
          </SectionComponent>
          <div className="absolute top-0 left-[-100px] z-0">
            <img
              src={vectoreLeftFlat}
              alt="Background blog image"
              className="w-full "
            />
          </div>
        </div>
        <SectionComponent >
          <CareerContentSection />
        </SectionComponent>
        <SectionComponent >
          <CareerJobSection />
        </SectionComponent>
        <div >
          <CareerJoinTeam />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CareerPage;
