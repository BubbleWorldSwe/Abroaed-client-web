import AccommodationHeroSection from "./sections/accommodationHeroSection";
import AccommodationResultForCountry from "./sections/accomodationResultForCountry";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import AccommodationHowItWorkSection from "./sections/accommodationHowItWorkSection";
import AccommodationFaqSection from "./sections/accommodationFaqSection";
import ContactUsForm from "../../comman/components/contactUsForm";
import Blogs from "../../comman/components/blogs";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PageLoader from "../../../commons/components/loader/pageLoader";
import { getAccommodationsByDestinationId } from "../../../api/accomodationApi";
import { useParams } from "react-router-dom";

function AccomodationPage() {
  const { id } = useParams();

  console.log(id);
  const [accList, setAccList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { allDestinations } = useSelector((state) => state.destinations);

  const [isDataLoading, setIsDataLoading] = useState(true);

  async function fetchAccommodations(id) {
    try {
      // setIsLoading(true);
      setIsDataLoading(true);
      setAccList([]);
      const acc = await getAccommodationsByDestinationId(id);

      if (acc.status === 200) {
        setAccList(acc.data.result);
      }

      setIsLoading(false);
      setIsDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAccommodations(id || allDestinations[0]?._id);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-rethink">
      <Header />
      <AccommodationHeroSection />
      <AccommodationResultForCountry
        onSelectCountry={fetchAccommodations}
        accList={accList}
        isLoading={isDataLoading}
        selectedDestination={id}
      />
      <AccommodationHowItWorkSection />
      <AccommodationFaqSection />

      <Blogs />
      <ContactUsForm />
      <Footer />
    </div>
  );
}

export default AccomodationPage;
