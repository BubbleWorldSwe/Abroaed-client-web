/* eslint-disable react-hooks/exhaustive-deps */
// import Pricing from "../../../Components/Pricing";
// import PartnerUnis from "../../../Components/PartnerUnis";
// import TimelineSlider from "../../../Components/TimelineSlider";
// import cover from "../../../assets/cover.jpg";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
// import OurPartners from "../../comman/sections/ourPartnersSection";
import HomeServicesSection from "./sections/homeServicesSection";
// import HomeTestimonialsSection from "./sections/homeTestimonialsSection";
import HomeHeroSection from "./sections/homeHeroSection";
import HomeKpiMatrixSection from "./sections/homeKpiMatrixSection";
import HomePathwaySection from "./sections/homePathwaySection";
import HomePromoSection from "./sections/homePromoSection";
import HomeDownloadApp from "./sections/homeDownloadAppSection";
// import HomeAbroaedUpdateSection from "./sections/homeAbroaedUpdateSection";
// import HomeBlogsSection from "./sections/homeBlogsSection";
// import HomeLeadForm from "./sections/homeLeadForm";
import {
  fetchAllDestinationsRequest,
  // fetchDestinationsRequest,
} from "../../../redux/actions/destinationActions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import PageLoader from "../../../commons/components/loader/pageLoader";
import { fetchAllTestPrepsRequest } from "../../../redux/actions/testPrepsActions";
import { fetchAllLanguagePrepsRequest } from "../../../redux/actions/languagePrepsActions";
import ContactUsForm from "../../comman/components/contactUsForm";
import Blogs from "../../comman/components/blogs";
import Testimonials from "../../comman/components/testimonials";
// import vectorDownNose from "../../../assets/vectorDownNose.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorRightNoseCurve from "../../../assets/vectorRightNoseCurve.png";
import vectorBelow from "../../../assets/vectorBelow.png";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { entity, source } from "../../../constants/values";

import HomeSlidingImg from "./sections/homeSlidingImg";

function HomeLayout() {
  const dispatch = useDispatch();

  const handleAddLead = (data) => {
    console.log("handleAddLead");
    console.log(data);

    dispatch(addLeadRequest(data));
  };

  return (
    <div className="font-rethink">
      <Header />
      <HomeHeroSection />
      <HomeSlidingImg />
      <div className="relative ">
 <HomeKpiMatrixSection
        title={"Why ABROAED?"}
        header={"What Sets Us Apart?"}
        subtitle={
          "ABROAED distinguishes itself through its highly personalized and student-centric approach to study abroad consulting. We offer end-to-end support, customizing every step—from university selection and application strategy to visa assistance and pre-departure preparation—to align with each student’s unique goals and aspirations. Leveraging data-driven insights and a proven track record of success, we ensure students target the best-fit programs that align with their academic and career ambitions. At ABROAED, we’re not just helping you move across borders; we’re helping you create a future filled with endless possibilities."
        }
      />
     <div className="absolute top-0 left-0 -z-20">
          <img
            className="rounded-lg max-w-full"
            src={vectoreLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
     
      <HomePathwaySection />
      <div className="relative ">
        <HomeServicesSection />
        <div className="absolute top-0 right-0 -z-20">
          <img
            className="rounded-lg max-w-full"
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <HomePromoSection
        onFormSubmit={handleAddLead}
        source={source.home}
        entity={entity.bookCounselling}
      />
      <Testimonials />
      <div className="relative ">
        <div className="absolute -top-10 left-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectorRightNoseCurve}
            alt="Counselling session"
          />
        </div>
        <HomeDownloadApp />
      </div>
      <div className="relative ">
        <div className="absolute top-28 right-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectorBelow}
            alt="Counselling session"
          />
        </div>
        <Blogs />
      </div>
      <ContactUsForm
        onFormSubmit={handleAddLead}
        source={source.home}
        entity={entity.contactUs}
      />
      <Footer />
    </div>
  );
}

export default HomeLayout;
