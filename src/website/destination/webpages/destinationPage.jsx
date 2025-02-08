
import DestinationHeroSection from "./sections/destinationHeroSection";
import DestinationInfoSection from "./sections/destinationInfoSection";
import DestinationUniCoursersSection from "./sections/destinationUniCourseSection";
import DestinationRoutingSection from "./sections/destinationRoutingSection";
import DestinationAdmissionRequirementSection from "./sections/destinationAdmissionRequirementSection";
import DestinationExpansesSection from "./sections/destinationExpanseSection";
import DestinationScholarshipSection from "./sections/destinationScholarshipSection";
import DestinationImmigrationDetailsSection from "./sections/destinationImmigrationDetailSection";
import DestinationWorkOpportunitiesSection from "./sections/destinationWorkOpportunitiesSection";
import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png"
import vectorRightNoseCurve from "../../../assets/vectorRightNoseCurve.png"
import vectorDownNose from "../../../assets/vectorDownNose.png"
import vectorBelow from "../../../assets/vectorBelow.png"
import destinationHeroImg from "../../../assets/destinationHeroImg.png"
import vectorNoseRightToLeft from "../../../assets/vectorNoseRightToLeft.png"
import DestinationStudentAccommodationsSection from "./sections/destinationStudentAccommodationSection";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import { items } from "../data";
import DestinationFaqSection from "./sections/destinationFaqSection";
import DestinationBlogSection from "./sections/destinationBlogSection";
import DestinationAbroaedUpdateSection from "./sections/destinationAbroaedUpdateSection";
import DestinationFunFactSection from "./sections/destinationFunFactSection";
import DestinationLeadForm from "./sections/destinationLeadForm";

function DestinationPage() {

  return (
    <div>
      <Header />
      <DestinationHeroSection header={'Study in United Kingdom'} text={`Learn more about the exciting places where you can study`} img={destinationHeroImg} />
      <DestinationRoutingSection />
      <DestinationInfoSection header={"Why Study in United Kingdom?"} text1={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi."} />
      <div className="relative ">
        <DestinationFunFactSection items={items} />
        <div className="absolute bottom-16 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <DestinationUniCoursersSection />
      <div className="relative">
        <DestinationAdmissionRequirementSection />
        <div className="absolute -bottom-44 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <DestinationExpansesSection />
      <DestinationScholarshipSection />
      <div className="relative">
        <DestinationImmigrationDetailsSection />
        <div className="absolute bottom-0 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorRightNoseCurve}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative">
        <DestinationWorkOpportunitiesSection />
        <div className="absolute top-0 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorBelow}
            alt="Counselling session"
          />
        </div>
      </div>
      <DestinationStudentAccommodationsSection />
      <DestinationFaqSection />
      <div className="relative">
        <DestinationBlogSection />
        <div className="absolute top-64 left-48 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorNoseRightToLeft}
            alt="Counselling session"
          />
        </div>
      </div>
      <DestinationAbroaedUpdateSection />
      <DestinationLeadForm />
      <Footer />
    </div>
  );
}

export default DestinationPage;
