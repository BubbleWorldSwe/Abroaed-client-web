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
import Blogs from "../../comman/components/blogs";
import Testimonials from "../../comman/components/testimonials";
import { entity, source } from "../../../constants/values";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useDispatch } from "react-redux";

function CollegePage() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [collegeDetails, setCollegeDetails] = useState(null);
  const [accList, setAccList] = useState([]);

  async function fetchData() {
    try {
      const data = await getCollegeDetailsById(id);

      if (data.status === 200) {
        setCollegeDetails(data.data);

        const acc = await getAccommodationsByStateId(data?.data?.stateId?._id);

        if (acc.status === 200) {
          setAccList(acc.data.result);
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
      <CollegeInfoSection
        collegeDetails={collegeDetails}
        header={"Why Study in United Kingdom?"}
        text1={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi."
        }
      />
      <div className="relative ">
        <CollegeFunFactSection collegeDetails={collegeDetails} />
        <div className="absolute bottom-16 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <CollegeUniversitySection collegeDetails={collegeDetails} />
      <div className="relative">
        {collegeDetails?.courses.length > 0 && (
          <CollegeCourseOfferSection
            collegeDetails={collegeDetails}
            source={`${source.college}_${source.courses}`}
            onAddLead={handleAddLead}
          />
        )}

        <div className="absolute top-0 right-0  z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative">
        {collegeDetails?.scholarships.length > 0 && (
          <CollegeScholarshipSection collegeDetails={collegeDetails} />
        )}

        <div className="absolute top-16 left-0 -z-10">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative">
        {accList.length > 0 && (
          <CollegeStudentAccommodation
            collegeDetails={collegeDetails}
            accommodationList={accList}
            source={`${source.college}_${source.accommodation}`}
            onAddLead={handleAddLead}
          />
        )}

        <div className="absolute top-0 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftNoseSmall}
            alt="Counselling session"
          />
        </div>
      </div>
      {collegeDetails?.faqSchema.length > 0 && (
        <CollegeFaqSection collegeDetails={collegeDetails} />
      )}
      <Testimonials />
      <Blogs />

      <ContactUsForm
        onFormSubmit={handleAddLead}
        source={source.college}
        entity={`${collegeDetails?.name}_${entity.contactUs}`}
      />
      <Footer />
    </div>
  );
}

export default CollegePage;
