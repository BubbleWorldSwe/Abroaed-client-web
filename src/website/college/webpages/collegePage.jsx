/* eslint-disable react-hooks/exhaustive-deps */
import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import vectorLeftNoseSmall from "../../../assets/vectorLeftNoseSmall.png";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import collegeHero from "../../../assets/collegeHero.png";
import CollegeHeroSection from "./sections/collegeHeroSection";
import CollegeInfoSection from "./sections/collegeInfoSection";
import CollegeFunFactSection from "./sections/collegeFunFactSection";
import CollegeUniversitySection from "./sections/collegeUniversitySection";
import CollegeCourseOfferSection from "./sections/collegeCourseOfferSection";
import CollegeScholarshipSection from "./sections/collegeScholarshipSection";
import CollegeStudentAccommodation from "./sections/collegeStudentAccommodation";
import CollegeFaqSection from "./sections/collegeFaqSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageLoader from "../../../commons/components/loader/pageLoader";
import { getCollegeDetailsById } from "../../../api/collegesApi";
import ContactUsForm from "../../comman/components/contactUsForm";
import { getAccommodationsByStateId } from "../../../api/accomodationApi";
// import Blogs from "../../comman/components/blogs";
import Testimonials from "../../comman/components/testimonials";
import { entity, source } from "../../../constants/values";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useDispatch, useSelector } from "react-redux";
import {
  addSavedPreferenceRequest,
  deleteSavedPreferenceRequest,
} from "../../../redux/actions/savedPreferencesActions";
import SectionComponent from "../../styleComponents/sectionComponent";

function CollegePage() {
  const { id } = useParams();
  const { studentId } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [collegeDetails, setCollegeDetails] = useState(null);
  const [accList, setAccList] = useState([]);

  const logoImage = collegeDetails?.images?.find((img) => img.type === "logo");
  const coverImage = collegeDetails?.images?.find(
    (img) => img.type === "cover"
  );

  async function fetchData() {
    try {
      const data = await getCollegeDetailsById(id);

      if (data.status === 200) {
        setCollegeDetails(data.data);

        const acc = await getAccommodationsByStateId(data?.data?.stateId?._id);

        if (acc.status === 200) {
          const publishedAccs = acc.data.result.filter(
            (item) => item.status === "publish"
          );
          setAccList(publishedAccs);
        }
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
      <CollegeHeroSection collegeDetails={collegeDetails} img={collegeHero} />
      <div className="grid grid-cols-1 gap-10 md:gap-16  ">
        <SectionComponent>
          <CollegeInfoSection
            collegeDetails={collegeDetails}
            header={"Why Study in United Kingdom?"}
          />
        </SectionComponent>
        <div className="relative ">
          <SectionComponent>
            <CollegeFunFactSection collegeDetails={collegeDetails} />
          </SectionComponent>
          <div className="absolute bottom-16 left-0 z-0">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorLeftFlat}
              alt="Counselling session"
            />
          </div>
        </div>
        <div>
          <CollegeUniversitySection collegeDetails={collegeDetails} />
        </div>
        {collegeDetails?.courses.length > 0 && (
          <div className="relative">
            <SectionComponent>
              <CollegeCourseOfferSection
                collegeDetails={collegeDetails}
                source={`${source.college}_${source.courses}`}
                onAddLead={handleAddLead}
                addToSavedPreferences={addToSavedPreferences}
                removeFromSavedPreferences={removeFromSavedPreferences}
              />
            </SectionComponent>
            <div className="absolute top-0 right-0  -z-10">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={vectorleftNose}
                alt="Counselling session"
              />
            </div>
          </div>
        )}
        {collegeDetails?.scholarships.length > 0 && (
          <div className="relative">
            <SectionComponent>
              <CollegeScholarshipSection collegeDetails={collegeDetails} />
            </SectionComponent>
            <div className="absolute top-16 left-0 -z-10">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={vectorDownNose}
                alt="Counselling session"
              />
            </div>
          </div>
        )}

        <div className="relative">
          {accList.length > 0 && (
            <SectionComponent>
              <CollegeStudentAccommodation
                collegeDetails={collegeDetails}
                accommodationList={accList}
                source={`${source.college}_${source.accommodation}`}
                onAddLead={handleAddLead}
                addToSavedPreferences={addToSavedPreferences}
                removeFromSavedPreferences={removeFromSavedPreferences}
              />
            </SectionComponent>
          )}
          <div className="absolute top-0 right-0 -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorLeftNoseSmall}
              alt="Counselling session"
            />
          </div>
        </div>
        {collegeDetails?.faqSchema.length > 0 && (
          <SectionComponent>
            <CollegeFaqSection collegeDetails={collegeDetails} />
          </SectionComponent>
        )}
        <div>
          <Testimonials />
        </div>
        {/* <Blogs /> */}
        <SectionComponent>
          <ContactUsForm
            onFormSubmit={handleAddLead}
            source={source.college}
            entity={`${collegeDetails?.name}_${entity.contactUs}`}
          />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default CollegePage;
