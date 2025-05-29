/* eslint-disable react-hooks/exhaustive-deps */
import AccommodationHeroSection from "./sections/accommodationHeroSection";
import AccommodationResultForCountry from "./sections/accomodationResultForCountry";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import AccommodationHowItWorkSection from "./sections/accommodationHowItWorkSection";
import AccommodationFaqSection from "./sections/accommodationFaqSection";
import ContactUsForm from "../../comman/components/contactUsForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PageLoader from "../../../commons/components/loader/pageLoader";
import {
  getAccommodationsByDestinationId,
  getAllAccommodations,
} from "../../../api/accomodationApi";
import { useParams } from "react-router-dom";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { entity } from "../../../constants/values";
import AccommodationHeaderTextSection from "./sections/accommodationHeaderTextSection";
import Testimonials from "../../comman/components/testimonials";
// import OurPartners from "../../comman/sections/ourPartnersSection";
import {
  addSavedPreferenceRequest,
  deleteSavedPreferenceRequest,
} from "../../../redux/actions/savedPreferencesActions";
import SectionComponent from "../../styleComponents/sectionComponent";
import vectorBelow from "../../../assets/vectorBelow.png";
function AccomodationPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [accList, setAccList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { allDestinations } = useSelector((state) => state.destinations);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { studentId } = useSelector((state) => state.auth);
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
        const publishedAccs = acc.data.result.filter(
          (item) => item.status === "publish"
        );
        setAccList(publishedAccs);
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
      dispatch(addLeadRequest(data));
    } catch (error) {
      console.log(error);
    }
  };

  const addToSavedPreferences = (type, typeId) => {
    try {
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
      dispatch(deleteSavedPreferenceRequest(id));
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
      <div className="grid grid-cols-1 gap-10 md:gap-16">
        <SectionComponent>
          <AccommodationHeaderTextSection />
        </SectionComponent>
        <SectionComponent>
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
            onAddLead={handleAddLead}
            addToSavedPreferences={addToSavedPreferences}
            removeFromSavedPreferences={removeFromSavedPreferences}
          />
        </SectionComponent>
        <div className="relative">
          <SectionComponent>
            <AccommodationHowItWorkSection />
          </SectionComponent>
          <div className="absolute top-4  right-0 z-0">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={vectorBelow}
              alt="Counselling session"
            />
          </div>
        </div>
        {/* <OurPartners /> */}
        <SectionComponent>
          <AccommodationFaqSection />
        </SectionComponent>
        <div>
          <Testimonials />
        </div>
        <SectionComponent>
          <ContactUsForm
            onFormSubmit={handleAddLead}
            entity={entity.accommodation}
            source={`Website`}
          />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default AccomodationPage;
