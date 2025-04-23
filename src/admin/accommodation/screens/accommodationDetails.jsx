/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";
import DeleteModal from "../../../Components/Modals/DeleteModal";
import AddOverviewContentModal from "../../../Components/Modals/AddOverviewContentModal";
import AccommodationImageSection from "../components/accommodationImgSection";
import AccommodationDescription from "../components/accommodationDescription";
import AccommodationLocation from "../components/accommodationLocation";
import AccommodationPrice from "../components/accommodationPrice";
import { motion } from "framer-motion";
import DescriptionModal from "../modals/descriptionModal";
import LocationModal from "../modals/locationModal";
import PriceModal from "../modals/priceModal";
import AvailabilityModal from "../modals/availabilityModal";
import { sectionsData } from "../data";
import AccommodationAvailability from "../components/accommodationAvailability";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAccommodationRequest,
  editAccommodationRequest,
  fetchAccommodationsRequest,
  uploadAccommodationImageRequest,
} from "../../../redux/actions/accommodationActions";
import { getAllDestinations } from "../../../api/destinationApi";
import { getStatesByCountryId } from "../../../api/countriesApi";
import { useNavigate } from "react-router-dom";

const AccommodationDetails = () => {
  const { isWriteAccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );
  const navigate = useNavigate();
  const [destinationsList, setDestinationsList] = useState([]);
  const [statesList, setStatesList] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleDeleteCloseModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedSectionIndex(null);
  };
  const handleDeleteSection = () => {
    handleDeleteCloseModal();
  };
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };
  const openModal = (section, type, index) => {
    setSelectedSection(section);
    setModalType(type);
    setActiveModalIndex(index);
  };
  const sectionComponents = [
    { name: "Description", component: <AccommodationDescription /> },
    { name: "Location", component: <AccommodationLocation /> },
    { name: "Price", component: <AccommodationPrice /> },
    { name: "Availability", component: <AccommodationAvailability /> },
  ];
  const closeModal = () => {
    setModalType(null);
    setSelectedSection(null);
  };

  async function onUpdate(data) {
    try {
      dispatch(editAccommodationRequest(accommodationDetails._id, data));
      // dispatch(fetchAccommodationsRequest(1));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  const modals = {
    section0: <DescriptionModal closeModal={closeModal} onUpdate={onUpdate} />,
    section1: (
      <LocationModal
        closeModal={closeModal}
        onUpdate={onUpdate}
        destinationsList={destinationsList}
        statesList={statesList}
        getStatesList={fetchStatesList}
      />
    ),
    section2: <PriceModal closeModal={closeModal} onUpdate={onUpdate} />,
    section3: <AvailabilityModal closeModal={closeModal} onUpdate={onUpdate} />,
  };

  async function fetchData() {
    try {
      const list = await getAllDestinations();

      if (list.status === 200) {
        setDestinationsList(list.data.result);

        let cId = accommodationDetails?.destinationId?.countryId?._id;

        if (cId) {
          fetchStatesList(cId);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStatesList(countryId) {
    try {
      setStatesList([]);
      const statesList = await getStatesByCountryId(countryId);

      if (statesList.status === 200) {
        setStatesList(statesList.data.result.states);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = () => {
    dispatch(deleteAccommodationRequest(accommodationDetails?._id));
    navigate("/admin/accommodation");
  };

  async function onUploadImage(data) {
    try {
      console.log(data);
      dispatch(
        uploadAccommodationImageRequest(accommodationDetails._id, {
          files: data,
          type: "cover",
        })
      );
      //  fetchTestPrepsDetails();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 font-rethink">
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCloseModal}
        onConfirm={handleDeleteSection}
        title={sectionsData[selectedSectionIndex]?.title || ""}
      />
      <AddOverviewContentModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
      />
      <div className="accordion space-y-4 ">
        <AccommodationImageSection
          onUploadImage={onUploadImage}
          handleDelete={handleDelete}
        />
        {sectionComponents.map((sectionItem, index) => (
          <div
            key={index}
            className="rounded-2xl border-2 px-8 border-gray-400 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800"
          >
            {/* Accordion Header */}
            <h2 id={`accordion-header-${index}`}>
              <div
                className="flex justify-between items-center w-full px-4 py-1 text-2xl font-semibold text-left text-gray-600 dark:bg-gray-700 dark:text-white rounded-t-lg"
                onClick={() => toggleAccordion(index)}
              >
                <span>{sectionItem.name}</span>
                {true ? (
                  <button
                    className="px-4 py-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(sectionItem.name, "add", index);
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-7 7V5"
                      ></path>
                    </svg>
                  </button>
                ) : (
                  // Pencil icon for editing
                  <button
                    className="px-4 py-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(sectionItem.name, "edit");
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.779 17.779L4.36 19.918 6.5 13.5m4.279 4.279l8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14l6.213-6.504M12.75 7.04L17 11.28"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>
            </h2>
            <motion.div
              id={`accordion-content-${index}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                height: activeIndex === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4">{sectionItem.component}</div>
            </motion.div>
          </div>
        ))}
      </div>
      {modalType && selectedSection && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/3 min-w-max relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">{selectedSection}</h2>
            <div className="mt-4">
              {/* Render the dynamic content based on modalType */}
              {modals[`section${activeModalIndex}`]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccommodationDetails;
