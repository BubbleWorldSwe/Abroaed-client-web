import AboutUsHeroSection from "./sections/aboutUsHeroSection";
import AboutUsCtaSection from "./sections/aboutUsCtaSection";
import AboutUsOurTeam from "./sections/aboutUsOurTeam";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import AboutUsContentSection from "./sections/aboutUsContentSection";
import SectionComponent from "../../styleComponents/sectionComponent";
import AboutUsFounderSection from "./sections/aboutUsfounderSection";
import AboutUsOurMentors from "./sections/aboutUsOurMentors";
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectorRightNoseCurve from "../../../assets/vectorRightNoseCurve.png";

function AboutUsPage() {
  return (
    <div className="font-rethink">
      <Header />
      <AboutUsHeroSection />
      <div className="grid grid-cols-1 gap-10 md:gap-16  ">
        <div className="relative">
          <SectionComponent>
            <AboutUsContentSection />
          </SectionComponent>
          <div className="absolute top-1/3 left-0 -z-20">
            <img
              className="rounded-lg max-w-full"
              src={vectoreLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>
        <div className="relative">
          <SectionComponent>
            <AboutUsFounderSection />
          </SectionComponent>
          <div className="absolute top-0 right-0 -z-20">
            <img
              className="rounded-lg max-w-full"
              src={vectorleftNose}
              alt="Counselling session"
            />
          </div>
        </div>
        <SectionComponent>
          <AboutUsOurMentors />
        </SectionComponent>
        <div className="relative">
          <SectionComponent>
            <AboutUsOurTeam />
          </SectionComponent>
          <div className="absolute -top-10 left-0 -z-10">
            <img
              className="rounded-lg max-w-full "
              src={vectorRightNoseCurve}
              alt="Counselling session"
            />
          </div>
        </div>

        <SectionComponent>
          <AboutUsCtaSection />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;
