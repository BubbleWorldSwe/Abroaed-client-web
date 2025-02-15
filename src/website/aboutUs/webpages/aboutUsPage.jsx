
import AboutUsHeroSection from "./sections/aboutUsHeroSection";
import AboutUsCtaSection from "./sections/aboutUsCtaSection";
import AboutUsOurTeam from "./sections/aboutUsOurTeam";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import AboutUsContentSection from "./sections/aboutUsContentSection";


function AboutUsPage() {
  return (
    <div className="font-rethink">
      <Header />
      <AboutUsHeroSection />
      <AboutUsContentSection />
      <AboutUsOurTeam />
      <AboutUsCtaSection />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
