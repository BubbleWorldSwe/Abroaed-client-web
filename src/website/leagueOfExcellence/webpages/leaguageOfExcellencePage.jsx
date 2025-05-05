// import Blogs from "../../comman/components/blogs";
import ContactUsForm from "../../comman/components/contactUsForm";
import Testimonials from "../../comman/components/testimonials";
import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import LeaguageOfExcellenceExplorePlan from "./sections/leaguageOfExcellenceExplorePlan";
import LeaguageOfExcellenceFaq from "./sections/leaguageOfExcellenceFaq";
import LeaguageOfExcellenceHero from "./sections/leaguageOfExcellenceHero";
import LeaguageOfExcellenceServicesOverviews from "./sections/leaguageOfExcellenceServicesOverviews";
import LeaguageOfExcellenceUniversity from "./sections/leaguageOfExcellenceUniversity";
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import vectorLeftNoseSmall from "../../../assets/vectorLeftNoseSmall.png";
import { entity, source } from "../../../constants/values";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { countriesName } from "../data";
import SectionComponent from "../../styleComponents/sectionComponent";

const LeaguageOfExcellencePage = () => {
  const [selectCountry, setSelectCountry] = useState({
    code: countriesName[0].code,
    name: countriesName[0].name,
  });

  const dispatch = useDispatch();
  const handleAddLead = (data) => {
    try {
      console.log("handleAddLead");
      //  console.log(data);

      dispatch(addLeadRequest(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="font-rethink">
      <Header />
      <LeaguageOfExcellenceHero />
      <div className="grid grid-cols-1 gap-10 md:gap-16">
        <SectionComponent>
          <LeaguageOfExcellenceServicesOverviews
            setCountry={setSelectCountry}
            countriesName={countriesName}
          />
        </SectionComponent>
        <div className="relative">
          <div>
            <LeaguageOfExcellenceUniversity
              selectCountry={selectCountry}
              onFormSubmit={handleAddLead}
            />
          </div>
          <div className="absolute bottom-72 left-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectoreLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>
        <div className="relative">
          <SectionComponent>
            <LeaguageOfExcellenceExplorePlan
              onFormSubmit={handleAddLead}
              source={source.leaguageOfExcellence}
              entity={entity.explorePlans}
            />
          </SectionComponent>
          <div className="absolute top-20 right-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorleftNose}
              alt="Counselling session"
            />
          </div>
        </div>
        <SectionComponent>
          <LeaguageOfExcellenceFaq />
        </SectionComponent>
        <div className="relative">
          <div>
            <Testimonials />
          </div>
          <div className="absolute top-32 left-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorDownNose}
              alt="Counselling session"
            />
          </div>
        </div>
        {/* <SectionComponent>
          <Blogs />
        </SectionComponent> */}
        <div className="relative">
          <SectionComponent>
            <ContactUsForm
              onFormSubmit={handleAddLead}
              source={source.leaguageOfExcellence}
              entity={entity.contactUs}
            />
          </SectionComponent>
          <div className="absolute -top-16 right-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorLeftNoseSmall}
              alt="Counselling session"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LeaguageOfExcellencePage;
