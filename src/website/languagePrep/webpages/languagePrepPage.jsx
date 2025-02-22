import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getLanguagePrepDetailsById } from "../../../api/languagePrepsApi";
import LanguagePrepHero from "./sections/languagePrepHeroSection";
import LanguagePrepAbout from "./sections/languagePrepAboutSection";
import LanguagePrepSimplifyThings from "./sections/languagePrepSimplifyThings";
import LanguagePrepBatchDetaileSection from "./sections/languagePrepBatchDetailSection";
import LanguagePrepFaqSection from "./sections/languagePrepFaqSection";
import Blogs from "../../comman/components/blogs";
import ContactUsForm from "../../comman/components/contactUsForm";
import PageLoader from "../../../commons/components/loader/pageLoader";

function LanguagePrepLayout() {
  const { id } = useParams();
  // const { state: destinationDetails } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [languagePrepsDetails, setLanguagePrepsDetails] = useState(null);

  async function fetchData() {
    try {
      const data = await getLanguagePrepDetailsById(id);

      if (data.status === 200) {
        setLanguagePrepsDetails(data.data);
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
      <LanguagePrepHero languagePrepsDetails={languagePrepsDetails} />
      <div className="relative ">
        <LanguagePrepAbout languagePrepsDetails={languagePrepsDetails} />
        <div className="absolute bottom-20 left-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative ">
        <LanguagePrepSimplifyThings
          languagePrepsDetails={languagePrepsDetails}
        />
        <div className="absolute bottom-0 right-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <LanguagePrepBatchDetaileSection
        languagePrepsDetails={languagePrepsDetails}
      />
      <div className="relative ">
        <LanguagePrepFaqSection languagePrepsDetails={languagePrepsDetails} />
        <div className="absolute -top-10 left-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectorDownNose}
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

export default LanguagePrepLayout;
