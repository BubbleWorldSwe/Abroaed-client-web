/* eslint-disable react-hooks/exhaustive-deps */

import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";

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

import {
  addSavedPreferenceRequest,
  deleteSavedPreferenceRequest,
} from "../../../redux/actions/savedPreferencesActions";
import SectionComponent from "../../styleComponents/sectionComponent";

import CollegeHeaderTextSection from "./sections/collegeHeaderTextSection";
import CollegeHeroSection from "./sections/collegeHeroSection";
import CollegeResultForCountry from "./sections/collegeResultForCountry";
import CollegeListHeroSection from "./sections/collegeListHeroSection";

function CollegesList() {
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
      <CollegeListHeroSection selectedCountry={selectedCountry} />
      <div className="grid grid-cols-1 gap-10 md:gap-16">
        <SectionComponent>
          <CollegeHeaderTextSection />
        </SectionComponent>
        <SectionComponent>
          <CollegeResultForCountry
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

        <SectionComponent>
          <ContactUsForm
            onFormSubmit={handleAddLead}
            entity={entity.college}
            source={`Website`}
          />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default CollegesList;
