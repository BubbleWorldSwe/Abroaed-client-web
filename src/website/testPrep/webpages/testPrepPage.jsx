// import TestPrepContent from "../../../pages/TestPrep/TestPrepOverviewContent";
import TestPrepHero from "./sections/testPrepHeroSection";
// import TestPrepForm from "../../../pages/TestPrep/TestPrepForm";
import TextPrepAbout from "./sections/testPrepAboutSection";
import TestPrepBatchDetaileSection from "./sections/testPrepBatchDetailSection";
import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import TextPrepFaqSection from "./sections/textPrepFaqSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTestPrepDetailsById } from "../../../api/testPrepsApi";
import PageLoader from "../../../commons/components/loader/pageLoader";
import ContactUsForm from "../../comman/components/contactUsForm";
import TestPrepSimplifyThings from "./sections/testPrepSimplifyThings";
import Blogs from "../../comman/components/blogs";

function TestPrepLayout() {
  const { id } = useParams();
  // const { state: destinationDetails } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [testPrepsDetails, setTestPrepsDetails] = useState(null);

  async function fetchData() {
    try {
      const data = await getTestPrepDetailsById(id);

      if (data?.status === 200) {
        setTestPrepsDetails(data.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(testPrepsDetails);

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetchData();
  }, [id]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-rethink">
      <Header testPrepsDetails={testPrepsDetails} />
      <TestPrepHero testPrepsDetails={testPrepsDetails} />
      <TextPrepAbout testPrepsDetails={testPrepsDetails} />
      <div className="relative ">
        <TestPrepSimplifyThings testPrepsDetails={testPrepsDetails} />
        <div className="absolute bottom-20 left-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>

      {testPrepsDetails?.batches.length > 0 && (
        <div className="relative ">
          <TestPrepBatchDetaileSection testPrepsDetails={testPrepsDetails} />
          <div className="absolute bottom-0 right-0 z-0">
            <img
              className="rounded-lg max-w-full "
              src={vectorleftNose}
              alt="Counselling session"
            />
          </div>
        </div>
      )}

      {testPrepsDetails?.faqs.length > 0 && (
        <div className="relative ">
          <TextPrepFaqSection testPrepsDetails={testPrepsDetails} />
          <div className="absolute -top-10 left-0 z-0">
            <img
              className="rounded-lg max-w-full "
              src={vectorDownNose}
              alt="Counselling session"
            />
          </div>
        </div>
      )}

      <Blogs />
      <ContactUsForm />

      <Footer />
    </div>
  );
}

export default TestPrepLayout;
