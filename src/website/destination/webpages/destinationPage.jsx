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
import DestinationFunFactSection from "./sections/destinationFunFactSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDestinationDetailsById } from "../../../api/destinationApi";
import PageLoader from "../../../commons/components/loader/pageLoader";
import ContactUsForm from "../../comman/components/contactUsForm";
// import Blogs from "../../comman/components/blogs";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import {
  getCollegesByDestinationId,
  getCoursesListByDestinationId,
} from "../../../api/collegesApi";

import { getAccommodationsByDestinationId } from "../../../api/accomodationApi";
import Testimonials from "../../comman/components/testimonials";
import Header from "../../comman/sections/headerSection";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useDispatch, useSelector } from "react-redux";
import { entity, source } from "../../../constants/values";
import {
  addSavedPreferenceRequest,
  deleteSavedPreferenceRequest,
} from "../../../redux/actions/savedPreferencesActions";
import SectionComponent from "../../styleComponents/sectionComponent";

function DestinationPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { studentId } = useSelector((state) => state.auth);

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
        const publishedColleges = college.data.result.filter(
          (item) => item.status === "publish"
        );
        setCollegesList(publishedColleges);
      }

      if (acc.status === 200) {
        const publishedAccs = acc.data.result.filter(
          (item) => item.status === "publish"
        );
        setAccList(publishedAccs);
      }

      if (course.status === 200) {
        setCoursesList(course.data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddLead = (data) => {
    try {
      console.log("handleAddLead");
      console.log(data);

      dispatch(addLeadRequest(data));
    } catch (error) {
      console.log(error);
    }
  };

  const addToSavedPreferences = (type, typeId) => {
    try {
      console.log("addToSavedPreferences");
      console.log(type, typeId);

      dispatch(
        addSavedPreferenceRequest({
          user: studentId,
          type,
          typeId,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromSavedPreferences = (id) => {
    try {
      console.log("removeFromSavedPreferences");
      console.log(id);

      dispatch(deleteSavedPreferenceRequest(id));
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="hidden md:block">
        <DestinationRoutingSection />
      </div>
      <div className="grid grid-cols-1 gap-10 md:gap-16">
        <SectionComponent>
          <DestinationInfoSection destinationDetails={destinationDetails} />
        </SectionComponent>
        <div className="relative ">
          <SectionComponent>
            <DestinationFunFactSection
              destinationDetails={destinationDetails}
              items={items}
            />
          </SectionComponent>
          <div className="absolute -bottom-28 left-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>

        {collegesList.length > 0 && (
          <div className="relative">
            <SectionComponent>
              <DestinationUniCoursersSection
                destinationDetails={destinationDetails}
                collegesList={collegesList}
                coursesList={coursesList}
                source={`${source.destination}_${source.courses}`}
                onAddLead={handleAddLead}
                addToSavedPreferences={addToSavedPreferences}
                removeFromSavedPreferences={removeFromSavedPreferences}
              />
            </SectionComponent>
            <div className="absolute right-0 top-20 -z-10">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={vectorleftNose}
                alt="Counselling session"
              />
            </div>
          </div>
        )}

        {destinationDetails?.admissionRequirements.length > 0 && (
          <div className="relative">
            <SectionComponent>
              <DestinationAdmissionRequirementSection
                destinationDetails={destinationDetails}
              />
            </SectionComponent>
            <div className="absolute -bottom-44 left-0 -z-10">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={vectorDownNose}
                alt="Counselling session"
              />
            </div>
          </div>
        )}

        {destinationDetails?.expenses?.length > 0 && (
          <SectionComponent>
            <DestinationExpansesSection
              destinationDetails={destinationDetails}
            />
          </SectionComponent>
        )}

        {destinationDetails?.scholarships.length > 0 && (
          <SectionComponent>
            <DestinationScholarshipSection
              destinationDetails={destinationDetails}
            />
          </SectionComponent>
        )}

        {destinationDetails?.immigrations.length > 0 && (
          <div className="relative">
            <SectionComponent>
              <DestinationImmigrationDetailsSection
                destinationDetails={destinationDetails}
              />
            </SectionComponent>
            <div className="absolute bottom-0 left-0 -z-10">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={vectorRightNoseCurve}
                alt="Counselling session"
              />
            </div>
          </div>
        )}
        {destinationDetails?.workOpportunities && (
          <div className="relative">
            <SectionComponent>
              <DestinationWorkOpportunitiesSection
                destinationDetails={destinationDetails}
              />
            </SectionComponent>
            <div className="absolute top-0 right-0 -z-10">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={vectorBelow}
                alt="Counselling session"
              />
            </div>
          </div>
        )}

        {accList.length > 0 && (
          <SectionComponent>
            <DestinationStudentAccommodationsSection
              destinationDetails={destinationDetails}
              accommodationList={accList}
              source={`${source.destination}_${source.accommodation}`}
              onAddLead={handleAddLead}
              addToSavedPreferences={addToSavedPreferences}
              removeFromSavedPreferences={removeFromSavedPreferences}
            />
          </SectionComponent>
        )}

        {destinationDetails?.faqs.length > 0 && (
          <SectionComponent>
            <DestinationFaqSection destinationDetails={destinationDetails} />
          </SectionComponent>
        )}

        <div className="relative">
          <div>
            <Testimonials />
          </div>
          <div className="absolute top-64 left-48 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorNoseRightToLeft}
              alt="Counselling session"
            />
          </div>
        </div>
        {/* <SectionComponent>
          <Blogs />
        </SectionComponent> */}
        <SectionComponent>
          <ContactUsForm
            onFormSubmit={handleAddLead}
            source={source.destination}
            entity={`${destinationDetails?.countryId?.name}_${entity.contactUs}`}
          />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default DestinationPage;
