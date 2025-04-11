
import AboutUsHeroSection from "./sections/aboutUsHeroSection";
import AboutUsCtaSection from "./sections/aboutUsCtaSection";
import AboutUsOurTeam from "./sections/aboutUsOurTeam";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import AboutUsContentSection from "./sections/aboutUsContentSection";

let containerClass = {
  outerContainer: 'md:max-w-screen-2xl px-12 mx-auto w-full lg:px-12',
  internalContainer: ''
}

function AboutUsPage() {
  return (
    <div className="font-rethink">
      <Header />
      <AboutUsHeroSection />
      <div className="grid grid-cols-1 gap-16  ">
        <div className={containerClass.outerContainer}>
          <AboutUsContentSection />
        </div>
        <div className={containerClass.outerContainer}>
          <AboutUsOurTeam />
        </div>
        <div className={containerClass.outerContainer}>
          <AboutUsCtaSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;
