/* eslint-disable react-hooks/exhaustive-deps */
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
import Footer from "../../comman/sections/footerSection";
import { items } from "../data";
import DestinationFaqSection from "./sections/destinationFaqSection";
// import DestinationAbroaedUpdateSection from "./sections/destinationAbroaedUpdateSection";
import DestinationFunFactSection from "./sections/destinationFunFactSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDestinationDetailsById } from "../../../api/destinationApi";
import PageLoader from "../../../commons/components/loader/pageLoader";
import ContactUsForm from "../../comman/components/contactUsForm";
import Blogs from "../../comman/components/blogs";
import {
  getCollegesByDestinationId,
  getCoursesListByDestinationId,
} from "../../../api/collegesApi";
import { getAccommodationsByDestinationId } from "../../../api/accomodationApi";
import Testimonials from "../../comman/components/testimonials";
import Header from "../../comman/sections/headerSection";

function DestinationPage() {
  const { id } = useParams();

  const [destinationDetails, setDestinationDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [collegesList, setCollegesList] = useState([]);
  const [accList, setAccList] = useState([]);

  const [coursesList, setCoursesList] = useState([]);

  async function fetchData() {
    try {
      const data = await getDestinationDetailsById(id);
      const college = await getCollegesByDestinationId(id);
      const acc = await getAccommodationsByDestinationId(id);
      const course = await getCoursesListByDestinationId(id);

      if (data.status === 200) {
        setDestinationDetails(data.data);
      }

      if (college.status === 200) {
        setCollegesList(college.data.result);
      }

      if (acc.status === 200) {
        setAccList(acc.data.result);
      }

      if (course.status === 200) {
        setCoursesList(course.data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(coursesList);

  useEffect(() => {
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
        <div className="absolute -bottom-6 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>

      {collegesList.length > 0 && (
        <DestinationUniCoursersSection
          destinationDetails={destinationDetails}
          collegesList={collegesList}
          coursesList={coursesList}
        />
      )}

      <div className="relative">
        {destinationDetails?.admissionRequirements.length > 0 && (
          <DestinationAdmissionRequirementSection
            destinationDetails={destinationDetails}
          />
        )}
        <div className="absolute -bottom-44 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>

      <DestinationExpansesSection destinationDetails={destinationDetails} />
      {destinationDetails?.scholarships.length > 0 && (
        <DestinationScholarshipSection
          destinationDetails={destinationDetails}
        />
      )}

      <div className="relative">
        {destinationDetails?.immigrations.length > 0 && (
          <DestinationImmigrationDetailsSection
            destinationDetails={destinationDetails}
          />
        )}

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

      {accList.length > 0 && (
        <DestinationStudentAccommodationsSection
          destinationDetails={destinationDetails}
          accommodationList={accList}
        />
      )}

      {destinationDetails?.faqs.length > 0 && (
        <DestinationFaqSection destinationDetails={destinationDetails} />
      )}

      <div className="relative">
        <Testimonials />
        <div className="absolute top-64 left-48 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorNoseRightToLeft}
            alt="Counselling session"
          />
        </div>
      </div>
      <Blogs />
      <ContactUsForm />
      <Footer />
    </div>
  );
}

export default DestinationPage;
