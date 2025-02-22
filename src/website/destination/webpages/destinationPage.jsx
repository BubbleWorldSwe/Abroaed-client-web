import DestinationHeroSection from "./sections/destinationHeroSection";
import DestinationInfoSection from "./sections/destinationInfoSection";
import DestinationUniCoursersSection from "./sections/destinationUniCourseSection";
import DestinationRoutingSection from "./sections/destinationRoutingSection";
import DestinationAdmissionRequirementSection from "./sections/destinationAdmissionRequirementSection";
import DestinationExpansesSection from "./sections/destinationExpanseSection";
import DestinationScholarshipSection from "./sections/destinationScholarshipSection";
import DestinationImmigrationDetailsSection from "./sections/destinationImmigrationDetailSection";
import DestinationWorkOpportunitiesSection from "./sections/destinationWorkOpportunitiesSection";
import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorRightNoseCurve from "../../../assets/vectorRightNoseCurve.png";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import vectorBelow from "../../../assets/vectorBelow.png";
import destinationHeroImg from "../../../assets/destinationHeroImg.png";
import vectorNoseRightToLeft from "../../../assets/vectorNoseRightToLeft.png";
import DestinationStudentAccommodationsSection from "./sections/destinationStudentAccommodationSection";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import { items } from "../data";
import DestinationFaqSection from "./sections/destinationFaqSection";
import DestinationBlogSection from "./sections/destinationBlogSection";
import DestinationAbroaedUpdateSection from "./sections/destinationAbroaedUpdateSection";
import DestinationFunFactSection from "./sections/destinationFunFactSection";
import DestinationLeadForm from "./sections/destinationLeadForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDestinationDetailsById } from "../../../api/destinationApi";
import PageLoader from "../../../commons/components/loader/pageLoader";

function DestinationPage() {
  const { id } = useParams();

  const [destinationDetails, setDestinationDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const data = await getDestinationDetailsById(id);

      if (data.status === 200) {
        setDestinationDetails(data.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetchData();
  }, [id]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-rethink">
      <Header />
      <DestinationHeroSection
        destinationDetails={destinationDetails}
        img={destinationHeroImg}
      />
      <DestinationRoutingSection />
      <DestinationInfoSection destinationDetails={destinationDetails} />
      <div className="relative ">
        <DestinationFunFactSection
          destinationDetails={destinationDetails}
          items={items}
        />
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
        <DestinationAdmissionRequirementSection
          destinationDetails={destinationDetails}
        />
        <div className="absolute -bottom-44 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <DestinationExpansesSection destinationDetails={destinationDetails} />
      <DestinationScholarshipSection destinationDetails={destinationDetails} />
      <div className="relative">
        <DestinationImmigrationDetailsSection
          destinationDetails={destinationDetails}
        />
        <div className="absolute bottom-0 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorRightNoseCurve}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative">
        <DestinationWorkOpportunitiesSection
          destinationDetails={destinationDetails}
        />
        <div className="absolute top-0 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorBelow}
            alt="Counselling session"
          />
        </div>
      </div>
      <DestinationStudentAccommodationsSection />
      <DestinationFaqSection destinationDetails={destinationDetails} />
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
