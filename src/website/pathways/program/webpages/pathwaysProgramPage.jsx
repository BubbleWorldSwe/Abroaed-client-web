import vectorDownNose from "../../../../assets/vectorDownNose.png";
import dark from "../../../../assets/dark.png";
import vectorBelow from "../../../../assets/vectorBelow.png";
import PathwaysProgramOverview from "./sections/pathwaysProgramOverviewSection";
import vectorleftNose from "../../../../assets/vectorleftNose.png";
import PathwaysProgramEligibilityCriteria from "./sections/pathwaysProgramEligibilityCriteriaSection";
import vectorLeftNoseSmall from "../../../../assets/vectorLeftNoseSmall.png";
import Header from "../../../comman/sections/headerSection";
import Footer from "../../../comman/sections/footerSection";
import PathwaysProgramHeroSection from "./sections/pathwaysProgramHeroSection";
import PathwaysProgramKpiMatrixSection from "./sections/pathwaysProgramKpiMatrixSection";
import PathwaysProgramExpanseSection from "./sections/pathwaysProgramExpanseSection";
import PathwaysProgramAdmissionRequirementSection from "./sections/pathwaysProgramAdmissionRequirementSection";
import PathwaysProgramScholarshipSection from "./sections/pathwaysProgramScholarshipSection";
import PathwaysProgramImmigrationDetailsSection from "./sections/pathwaysProgramImmigrationDetailsSection";
import PathwaysProgramWorkOpportunitiesSection from "./sections/pathwaysProgramWorkOpportunitiesSection";
import PathwaysProgramStudentAccommodationSection from "./sections/pathwaysProgramStudentAccommodationSection";
// import PathwaysProgramBlogSection from "./sections/pathwaysProgramBlogSection";
import PathwaysProgramFaqSection from "./sections/pathwaysProgramFaqSection";
// import PathwaysProgramAbroaedUpdateSection from "./sections/pathwaysProgramAbroaedUpdateSection";
// import PathwaysProgramLeadFormSection from "./sections/pathwaysProgramLeadFormSection";
import ContactUsForm from "../../../comman/components/contactUsForm";
import Testimonials from "../../../comman/components/testimonials";
import Blogs from "../../../comman/components/blogs";

const PathwaysProgramPage = () => {
  return (
    <div className="font-rethink">
      <Header />
      <PathwaysProgramHeroSection
        header={"Pathways Program Name"}
        text={"Batch Starts: Jan 1, 2025 | Abroaed Intake: Aug’ 2025"}
        img={dark}
      />
      <PathwaysProgramKpiMatrixSection
        title={""}
        header={"Key Benefits of Program"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
      />
      <div className="relative ">
        <PathwaysProgramOverview />
        <div className="absolute top-24 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
        <PathwaysProgramEligibilityCriteria />
      </div>

      <div className="relative">
        <PathwaysProgramAdmissionRequirementSection />
        <div className="absolute top-5 left-0 -z-10">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <PathwaysProgramExpanseSection />
      <div className="relative">
        <PathwaysProgramScholarshipSection />
        <div className="absolute bottom-10 right-0 -z-10">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftNoseSmall}
            alt="Counselling session"
          />
        </div>
      </div>
      <PathwaysProgramImmigrationDetailsSection />
      <div className="relative">
        <PathwaysProgramWorkOpportunitiesSection />
        <div className="absolute -top-96 left-40 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorBelow}
            alt="Counselling session"
          />
        </div>
      </div>
      <PathwaysProgramStudentAccommodationSection />
      <Testimonials />
      <PathwaysProgramFaqSection />
      <Blogs />
      <ContactUsForm
      // onFormSubmit={handleAddLead}
      // source={source.destination}
      // entity={`${destinationDetails?.countryId?.name}_${entity.contactUs}`}
      />
      <Footer />
    </div>
  );
};

export default PathwaysProgramPage;
