/* eslint-disable react-hooks/exhaustive-deps */

import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";

import ContactUsForm from "../../comman/components/contactUsForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PageLoader from "../../../commons/components/loader/pageLoader";
import { useParams } from "react-router-dom";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { entity } from "../../../constants/values";

import {
  addSavedPreferenceRequest,
  deleteSavedPreferenceRequest,
} from "../../../redux/actions/savedPreferencesActions";

import SectionComponent from "../../styleComponents/sectionComponent";
import CollegeHeaderTextSection from "./sections/collegeHeaderTextSection";
import CollegeResultForCountry from "./sections/collegeResultForCountry";
import CollegeListHeroSection from "./sections/collegeListHeroSection";
import { getCollegesByDestinationId } from "../../../api/collegesApi";

import { Loader2 } from "lucide-react"; // Spinner icon

function CollegesList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [collegeList, setCollegeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  const { allDestinations } = useSelector((state) => state.destinations);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { studentId } = useSelector((state) => state.auth);
  const destinationsList = [...allDestinations];
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const [states, setStates] = useState([]);

  async function fetchColleges(destinationId, page = 1, append = false) {
    try {
      if (append) {
        setIsLoadMoreLoading(true);
      } else {
        setIsDataLoading(true);
      }

      const data = await getCollegesByDestinationId(destinationId, page);

      if (data.status === 200) {
        const publishedCollege = data.data.result.filter(
          (item) => item.status === "publish"
        );

        setCollegeList((prev) =>
          append ? [...prev, ...publishedCollege] : publishedCollege
        );

        const uniqueStates = [
          ...new Map(
            publishedCollege.map((college) => [
              college?.stateId?._id,
              college?.stateId,
            ])
          ).values(),
        ];
        // setStates(uniqueStates);

        setTotalPages(data.data?.totalPages);
      }

      setIsLoadMoreLoading(false);
      setIsDataLoading(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoadMoreLoading(false);
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
          setCurrentPage(1);
          fetchColleges(initialCountry._id, 1, false);
        } else {
          setSelectedCountry(destinationsList[0]);
          setCurrentPage(1);
          fetchColleges(destinationsList[0]._id, 1, false);
        }
      } else {
        setSelectedCountry(destinationsList[0]);
        setCurrentPage(1);
        fetchColleges(destinationsList[0]._id, 1, false);
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
                setCurrentPage(1);
                fetchColleges(destinationId, 1, false);
              }
            }}
            collegeList={collegeList}
            isLoading={isDataLoading}
            selectedCountry={selectedCountry}
            destinationsList={destinationsList}
            addToSavedPreferences={addToSavedPreferences}
            removeFromSavedPreferences={removeFromSavedPreferences}
          />

          {/* Load More Button */}
          {collegeList.length > 0 && totalPages > currentPage && (
            <div className="flex justify-center mt-10">
              <button
                className="w-36 text-white bg-primary-600 hover:bg-gray-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium   rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
                //   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2 min-w-[130px]"
                onClick={() => {
                  const nextPage = currentPage + 1;
                  setCurrentPage(nextPage);
                  fetchColleges(selectedCountry._id, nextPage, true);
                }}
                disabled={isLoadMoreLoading}
              >
                {isLoadMoreLoading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  "Load More"
                )}
              </button>
            </div>
          )}
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
