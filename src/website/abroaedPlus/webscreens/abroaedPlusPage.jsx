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
  let containerClass = {
    outerContainer: 'md:max-w-screen-2xl px-14 mx-auto w-full ',
    internalContainer: ''
  }

  return (
    <div className="font-rethink">
      <Header />
      <AbroaedPlusHero />
      <div className="grid grid-cols-1 gap-16  ">
        <div className={containerClass.outerContainer}>
          <AbroaedPlusContent />
        </div>
        <div className="relative">
          <div className={containerClass.outerContainer}>
            <AbroaedPlusWhyChoose />
          </div>
          <div className="absolute top-0 left-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectoreLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>
        <div className="relative">
          <div className={containerClass.outerContainer}>
            <AbroaedPlusHowItWork />
          </div>
          <div className="absolute -bottom-16 right-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorleftNose}
              alt="Counselling session"
            />
          </div>
        </div>
        <div className={containerClass.outerContainer}>
          <Testimonials />
        </div>
        <div className="relative">]
          <div className={containerClass.outerContainer}>
            <AbroaedPlusFaq />
          </div>
          <div className="absolute top-32 left-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorDownNose}
              alt="Counselling session"
            />
          </div>
        </div>
        <div className={containerClass.outerContainer}>
          <ContactUsForm
            onFormSubmit={handleAddLead}
            source={source.abroaedPlus}
            entity={`${entity.contactUs}`}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AbroaedPlusPage;
