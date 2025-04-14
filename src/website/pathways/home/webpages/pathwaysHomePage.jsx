import PathwaysHomeHero from "./sections/pathwaysHomeHeroSection";
import vectorleftNose from "../../../../assets/vectorleftNose.png";
import vectorLeftFlat from "../../../../assets/vectoreLeftFlat.png";
import Header from "../../../comman/sections/headerSection";
import Footer from "../../../comman/sections/footerSection";
import PathwaysHomeHowItWorkSection from "./sections/pathwaysHomeHowItWorkSection";
import PathwaysHomeFaqSection from "./sections/pathwaysHomeFaqSection";
// import PathwaysHomeLeadForm from "./sections/pathwaysHomeLeadFormSection";
import ContactUsForm from "../../../comman/components/contactUsForm";
import { entity, source } from "../../../../constants/values";
import { addLeadRequest } from "../../../../redux/actions/leadsActions";
import { useDispatch } from "react-redux";
import SectionComponent from "../../../styleComponents/sectionComponent";

function PathwaysHomePage() {
  const dispatch = useDispatch();

  const handleAddLead = (data) => {
    try {
      console.log("handleAddLead");
      console.log(data);

      dispatch(addLeadRequest(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-rethink">
      <Header />
      <PathwaysHomeHero />
      <div className="grid grid-cols-1 gap-10 md:gap-16">
        <div className="relative">
          <SectionComponent>
            <PathwaysHomeHowItWorkSection />
          </SectionComponent>
          <div className="absolute bottom-20 left-0 -z-10">
            <img
              className="rounded-lg max-w-full "
              src={vectorLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>
        {/* <OurPartners /> */}
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
        <SectionComponent>
          <PathwaysHomeFaqSection />
        </SectionComponent>
        <div className="relative">
          <div className="absolute bottom-10 right-0 -z-10">
            <img
              className="rounded-lg max-w-full "
              src={vectorleftNose}
              alt="Counselling session"
            />
          </div>
          <SectionComponent>
            <ContactUsForm
              onFormSubmit={handleAddLead}
              source={source.pathways}
              entity={entity.contactUs}
            />
          </SectionComponent>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PathwaysHomePage;
