/* eslint-disable react-hooks/exhaustive-deps */
import AccommodationHeroSection from "./sections/accommodationHeroSection";
import AccommodationResultForCountry from "./sections/accomodationResultForCountry";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import AccommodationHowItWorkSection from "./sections/accommodationHowItWorkSection";
import AccommodationFaqSection from "./sections/accommodationFaqSection";
import ContactUsForm from "../../comman/components/contactUsForm";
import Blogs from "../../comman/components/blogs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PageLoader from "../../../commons/components/loader/pageLoader";
import {
  getAccommodationsByDestinationId,
  getAllAccommodations,
} from "../../../api/accomodationApi";
import { useParams } from "react-router-dom";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { entity, source } from "../../../constants/values";

function AccomodationPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [accList, setAccList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { allDestinations } = useSelector((state) => state.destinations);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const destinationsList = [
    { _id: "all", countryId: { name: "All", emoji: "🌍" } },
    ...allDestinations,
  ];

  async function fetchAccommodations(destinationId = "all") {
    try {
      setIsDataLoading(true);
      setAccList([]);

      let acc;
      if (destinationId === "all") {
        acc = await getAllAccommodations();
      } else {
        acc = await getAccommodationsByDestinationId(destinationId);
      }

      if (acc.status === 200) {
        setAccList(acc.data.result);
      }
      setIsDataLoading(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsDataLoading(false);
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
    if (destinationsList.length > 0) {
      if (id && id !== "all") {
        const initialCountry =
          destinationsList.find((country) => country._id === id) ||
          destinationsList[1];
        setSelectedCountry(initialCountry);
        fetchAccommodations(initialCountry._id);
      } else {
        setSelectedCountry(destinationsList[0]);
        fetchAccommodations("all");
      }
    }
  }, [id, allDestinations]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-rethink">
      <Header />
      <AccommodationHeroSection selectedCountry={selectedCountry} />
      <AccommodationResultForCountry
        onSelectCountry={(destinationId) => {
          const newSelectedCountry = destinationsList.find(
            (country) => country._id === destinationId
          );
          setSelectedCountry(newSelectedCountry);
          fetchAccommodations(destinationId);
        }}
        accList={accList}
        isLoading={isDataLoading}
        selectedCountry={selectedCountry}
        destinationsList={destinationsList}
      />
      <AccommodationHowItWorkSection />
      <AccommodationFaqSection />
      <Blogs />
      <ContactUsForm
        onFormSubmit={handleAddLead}
        source={source.accommodation}
        entity={`${entity.contactUs}`}
      />
      <Footer />
    </div>
  );
}

export default AccomodationPage;
