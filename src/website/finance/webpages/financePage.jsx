import FinanceHowItWorks from "./sections/financeHowItWorkSection";
import FinanceHeroSection from "./sections/financeHeroSection";
// import vectorShoe from "../../../assets/vectorShoe.png";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import OurPartners from "../../comman/sections/ourPartnersSection";
// import FinanceBlogSection from "./sections/financeBlogSection";
import FinanceFaqSection from "./sections/financeFaqSection";
import { useDispatch } from "react-redux";
import ContactUsForm from "../../comman/components/contactUsForm";
import { entity, source } from "../../../constants/values";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import SectionComponent from "../../styleComponents/sectionComponent";
import vectorleftNose from "../../../assets/vectorleftNose.png"
function FinancePage() {
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
      <FinanceHeroSection />
      <div className="grid grid-cols-1 gap-10 md:gap-16">
        <SectionComponent>
          <FinanceHowItWorks />
        </SectionComponent>
        <div className="relative">
          <SectionComponent>
            <OurPartners />
          </SectionComponent>
          <div className="absolute top-4  right-0 z-0">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorleftNose}
              alt="Counselling session"
            />
          </div>
        </div>

        {/* <div className="relative ">
        <FinanceBlogSection />
        <div className="absolute -bottom-4 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorShoe}
            alt="Counselling session"
          />
        </div>
      </div> */}
        <SectionComponent>
          <FinanceFaqSection />
        </SectionComponent>
        {/*  <FinanceLeadFromSection /> */}
        <SectionComponent>
          <ContactUsForm
            onFormSubmit={handleAddLead}
            source={source.finance}
            entity={`${entity.contactUs}`}
            buttonText="Register Now To Know More"
            title={"Keen to know more?"}
            text="Schedule your counselling session today Our specialized home counselling session is available at your convenience. Don’t waste a minute—take a stride towards your future by contacting our study abroad expert today."
          />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default FinancePage;
