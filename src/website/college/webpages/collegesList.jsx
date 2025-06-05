/* eslint-disable react-hooks/exhaustive-deps */

import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";

import ContactUsForm from "../../comman/components/contactUsForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PageLoader from "../../../commons/components/loader/pageLoader";
import { getAccommodationsByDestinationId } from "../../../api/accomodationApi";
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
import { getCollegesByDestinationId } from "../../../api/collegesApi";

function CollegesList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [collegeList, setCollegeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { allDestinations } = useSelector((state) => state.destinations);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { studentId } = useSelector((state) => state.auth);
  const destinationsList = [...allDestinations]; // Removed "all" option

  async function fetchColleges(destinationId) {
    try {
      setIsDataLoading(true);
      setCollegeList([]);

      const data = await getCollegesByDestinationId(destinationId);

      if (data.status === 200) {
        const publishedCollege = data.data.result.filter(
          (item) => item.status === "publish"
        );
        setCollegeList(publishedCollege);
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
      if (id) {
        const initialCountry = destinationsList.find(
          (country) => country._id === id
        );
        if (initialCountry) {
          setSelectedCountry(initialCountry);
          fetchColleges(initialCountry._id);
        } else {
          // fallback if id not found
          setSelectedCountry(destinationsList[0]);
          fetchColleges(destinationsList[0]._id);
        }
      } else {
        setSelectedCountry(destinationsList[0]);
        fetchColleges(destinationsList[0]._id);
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
              if (newSelectedCountry) {
                setSelectedCountry(newSelectedCountry);
                fetchColleges(destinationId);
              }
            }}
            collegeList={collegeList}
            isLoading={isDataLoading}
            selectedCountry={selectedCountry}
            destinationsList={destinationsList}
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
