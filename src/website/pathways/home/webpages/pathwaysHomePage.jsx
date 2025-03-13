import PathwaysHomeHero from "./sections/pathwaysHomeHeroSection";
import vectorleftNose from "../../../../assets/vectorleftNose.png";
import vectorLeftFlat from "../../../../assets/vectoreLeftFlat.png";
import Header from "../../../comman/sections/headerSection";
import Footer from "../../../comman/sections/footerSection";
import OurPartners from "../../../comman/sections/ourPartnersSection";
import PathwaysHomeHowItWorkSection from "./sections/pathwaysHomeHowItWorkSection";
import PathwaysHomeFaqSection from "./sections/pathwaysHomeFaqSection";
// import PathwaysHomeLeadForm from "./sections/pathwaysHomeLeadFormSection";
import ContactUsForm from "../../../comman/components/contactUsForm";

function PathwaysHomePage() {
  return (
    <div className="font-rethink">
      <Header />
      <PathwaysHomeHero />
      <div className="relative">
        <PathwaysHomeHowItWorkSection />
        <div className="absolute bottom-20 left-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <OurPartners />
      {/* <PathwayHomeProgramExplore /> */}
      {/* <div className='relative'>
        <PathwaysHomeBlogSection />
        <div className="absolute bottom-20 left-0 z-10" >
          <img
            className="rounded-lg max-w-full "
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div> */}
      <PathwaysHomeFaqSection />
      <div className="relative">
        <div className="absolute bottom-10 right-0 -z-10">
          <img
            className="rounded-lg max-w-full "
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
        <ContactUsForm
        // title="abcd"
        //  text="vvv"
        />
      </div>

      <Footer />
    </div>
  );
}

export default PathwaysHomePage;
