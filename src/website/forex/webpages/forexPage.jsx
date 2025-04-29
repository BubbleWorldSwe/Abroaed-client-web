import { useDispatch } from "react-redux";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import Header from "../../comman/sections/headerSection";
import SectionComponent from "../../styleComponents/sectionComponent";
import ContactUsForm from "../../comman/components/contactUsForm";
import { entity, source } from "../../../constants/values";
import Footer from "../../comman/sections/footerSection";
import ForexHeroSection from "./sections/forexHeroSection";
import ForexHowItWorks from "./sections/forexHowItWorkSection";
import ForexFaqSection from "./sections/forexFaqSection"
import WhychooseUsSection from "./sections/whychooseUsSection";
import FrexAdvantangeSection from "./sections/forexAdvantangeSection";
import ForexWireTransfer from "./sections/forexWireTransfer";

const ForexPage = () => {

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
            <ForexHeroSection />
            <div className="grid grid-cols-1 gap-10 md:gap-16">
                <SectionComponent>
                    <ForexHowItWorks />
                </SectionComponent>
                <div>
                    <WhychooseUsSection />
                </div>
                <SectionComponent>
                    <FrexAdvantangeSection />
                </SectionComponent>
                <SectionComponent>
                    <ForexWireTransfer />
                </SectionComponent>

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
                    <ForexFaqSection />
                </SectionComponent>
                {/*  <FinanceLeadFromSection /> */}
                <SectionComponent>
                    <ContactUsForm
                        onFormSubmit={handleAddLead}
                        source={source.forex}
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


export default ForexPage