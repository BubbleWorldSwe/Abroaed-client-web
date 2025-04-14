
import AboutUsHeroSection from "./sections/aboutUsHeroSection";
import AboutUsCtaSection from "./sections/aboutUsCtaSection";
import AboutUsOurTeam from "./sections/aboutUsOurTeam";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import AboutUsContentSection from "./sections/aboutUsContentSection";
import SectionComponent from "../../styleComponents/sectionComponent";
import AboutUsFounderSection from "./sections/aboutUsfounderSection";

function AboutUsPage() {
  return (
    <div className="font-rethink">
      <Header />
      <AboutUsHeroSection />
      <div className="grid grid-cols-1 gap-10 md:gap-16  ">
        <SectionComponent >
          <AboutUsContentSection />
        </SectionComponent>
        <SectionComponent >
          <AboutUsFounderSection />
        </SectionComponent>
        <SectionComponent >
          <AboutUsOurTeam />
        </SectionComponent>
        <SectionComponent >
          <AboutUsCtaSection />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;
