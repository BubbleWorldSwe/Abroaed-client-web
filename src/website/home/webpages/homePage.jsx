
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import HomeServicesSection from "./sections/homeServicesSection";
import HomeHeroSection from "./sections/homeHeroSection";
import HomeKpiMatrixSection from "./sections/homeKpiMatrixSection";
import HomePathwaySection from "./sections/homePathwaySection";
import HomePromoSection from "./sections/homePromoSection";
import HomeDownloadApp from "./sections/homeDownloadAppSection";
import { useDispatch } from "react-redux";
import ContactUsForm from "../../comman/components/contactUsForm";
import Blogs from "../../comman/components/blogs";
import Testimonials from "../../comman/components/testimonials";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorRightNoseCurve from "../../../assets/vectorRightNoseCurve.png";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { entity, source } from "../../../constants/values";
import HomeSlidingImg from "./sections/homeSlidingImg";
import SectionComponent from "../../styleComponents/sectionComponent";
import vectorBelow from "../../../assets/vectorBelow.png";

function HomeLayout() {
  const dispatch = useDispatch();

  const handleAddLead = (data) => {
    dispatch(addLeadRequest(data));
  };
  let containerClass = {
    outerContainer: 'md:max-w-screen-2xl px-8 mx-auto w-full lg:px-12',
    internalContainer: ''
  }


  return (
    <div className="font-rethink relative">
      <Header />
      <HomeHeroSection />
      <HomeSlidingImg />
      <div className="grid grid-cols-1 gap-10 md:gap-16  ">
        <div className=" relative">
          <SectionComponent >
            <HomeKpiMatrixSection
              title={"Why ABROAED?"}
              header={"What Sets Us Apart?"}
              subtitle={
                "ABROAED distinguishes itself through its highly personalized and student-centric approach to study abroad consulting. We offer end-to-end support, customizing every step—from university selection and application strategy to visa assistance and pre-departure preparation—to align with each student’s unique goals and aspirations. Leveraging data-driven insights and a proven track record of success, we ensure students target the best-fit programs that align with their academic and career ambitions. At ABROAED, we’re not just helping you move across borders; we’re helping you create a future filled with endless possibilities."
              }
            />

          </SectionComponent>
          <div className="absolute top-0 left-0 -z-20">
            <img
              className="rounded-lg max-w-full"
              src={vectoreLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>
        <SectionComponent >
          <HomePathwaySection />
        </SectionComponent>
        <div className="relative">
          <div >
            <HomeServicesSection />
          </div>
          <div className="absolute top-0 right-0 -z-20">
            <img
              className="rounded-lg max-w-full"
              src={vectorleftNose}
              alt="Counselling session"
            />
          </div>
        </div>
        <SectionComponent >
          <HomePromoSection
            onFormSubmit={handleAddLead}
            source={source.home}
            entity={entity.bookCounselling}
          />
        </SectionComponent>
        <SectionComponent>
          <Testimonials />
        </SectionComponent>
        <div className="relative ">
          <SectionComponent >
            <HomeDownloadApp />
          </SectionComponent>
          <div className="absolute -top-10 left-0 -z-10">
            <img
              className="rounded-lg max-w-full "
              src={vectorRightNoseCurve}
              alt="Counselling session"
            />
          </div>
        </div>
        {/* <div className="relative ">
          <div>
            <Blogs />
          </div>
          <div className="absolute top-28 right-0 -z-20">
            <img
              className="rounded-lg max-w-full "
              src={vectorBelow}
              alt="Counselling session"
            />
          </div>

        </div> */}
        <SectionComponent className={containerClass.outerContainer}>
          <ContactUsForm
            onFormSubmit={handleAddLead}
            source={source.home}
            entity={entity.contactUs}
          />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
