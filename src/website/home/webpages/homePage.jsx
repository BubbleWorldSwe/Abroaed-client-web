/* eslint-disable react-hooks/exhaustive-deps */
// import Pricing from "../../../Components/Pricing";
// import PartnerUnis from "../../../Components/PartnerUnis";
// import TimelineSlider from "../../../Components/TimelineSlider";
// import cover from "../../../assets/cover.jpg";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import OurPartners from "../../comman/sections/ourPartnersSection";
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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PageLoader from "../../../commons/components/loader/pageLoader";
import { fetchAllTestPrepsRequest } from "../../../redux/actions/testPrepsActions";
import { fetchAllLanguagePrepsRequest } from "../../../redux/actions/languagePrepsActions";
import ContactUsForm from "../../comman/components/contactUsForm";
import Blogs from "../../comman/components/blogs";
import Testimonials from "../../comman/components/testimonials";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import VectorleftNose from "../../../assets/VectorleftNose.png";
import vectorRightNoseCurve from "../../../assets/vectorRightNoseCurve.png";
import vectorBelow from "../../../assets/vectorBelow.png";
import { addLeadRequest } from "../../../redux/actions/leadsActions";

function HomeLayout() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.destinations);

  async function fetchData() {
    try {
      dispatch(fetchAllTestPrepsRequest());
      dispatch(fetchAllLanguagePrepsRequest());
      dispatch(fetchAllDestinationsRequest());
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddLead = (data) => {
    //  setIsAddModalOpen(false);
    console.log("handleAddLead");
    console.log(data);

    dispatch(addLeadRequest(data));
  };

  if (loading) {
    // return <PageLoader />;
  }

  return (
    <div className="font-rethink">
      <Header />
      <HomeHeroSection />
      <HomeKpiMatrixSection
        title={"Why Abroaed?"}
        header={"What sets us apart?"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
      />
      <HomePathwaySection />
      <div className="relative mt-10">
        <HomeServicesSection />
        <div className="absolute -top-10 right-0 -z-20">
          <img
            className="rounded-lg max-w-full "
            src={VectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <HomePromoSection />
      {/* <PartnerUnis /> */}
      {/* <TimelineSlider slides={slidesData} /> */}
      <div className="relative my-5">
        <OurPartners />
        <div className="absolute -top-10 left-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>

      {/* <HomeTestimonialsSection /> */}
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

      {/* <HomeTestimonialsSection /> */}

      {/* <Pricing /> */}
      {/* <FAQsection /> */}

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
        source="Home"
        entity="Contact Us"
      />
      <Footer />
    </div>
  );
}

export default HomeLayout;
