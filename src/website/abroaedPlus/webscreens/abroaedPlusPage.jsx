import ContactUsForm from "../../comman/components/contactUsForm";
import Testimonials from "../../comman/components/testimonials";
import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import AbroaedPlusContent from "./sections/abroaedPlusContent";
import AbroaedPlusHero from "./sections/abroaedPlusHero";
import AbroaedPlusHowItWork from "./sections/abroaedPlusHowItWork";
import AbroaedPlusWhyChoose from "./sections/abroaedPlusWhyChoose";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import AbroaedPlusFaq from "./sections/abroaedPlusFaq";
import { useDispatch } from "react-redux";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { entity, source } from "../../../constants/values";
import SectionComponent from "../../styleComponents/sectionComponent";
import AbroaedPlusExplorePlan from "./sections/abroaedPlusExplorePlan";

const AbroaedPlusPage = () => {
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
      <AbroaedPlusHero />
      <div className="grid grid-cols-1 gap-10 md:gap-16  ">
        <SectionComponent >
          <AbroaedPlusContent />
        </SectionComponent>
        <div className="relative">
          <SectionComponent >
            <AbroaedPlusWhyChoose />
          </SectionComponent>
          <div className="absolute top-0 left-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectoreLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>
        <div className="relative">
          <SectionComponent >
            <AbroaedPlusHowItWork />
          </SectionComponent>
          <div className="absolute -bottom-16 right-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorleftNose}
              alt="Counselling session"
            />
          </div>
        </div>
        <SectionComponent >
          <AbroaedPlusExplorePlan />
        </SectionComponent>

        <div className="relative">
          <SectionComponent >
            <AbroaedPlusFaq />
          </SectionComponent>
          <div className="absolute top-32 left-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorDownNose}
              alt="Counselling session"
            />
          </div>
        </div>
        <div >
          <Testimonials />
        </div>
        <SectionComponent >
          <ContactUsForm
            onFormSubmit={handleAddLead}
            source={source.abroaedPlus}
            entity={`${entity.contactUs}`}
          />
        </SectionComponent>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AbroaedPlusPage;
