/* eslint-disable no-constant-condition */
import { motion } from "framer-motion";

import OverviewCard from "../components/overviewCard";
import MediaGalleryCard from "../components/mediaGalleryCard";
import CoursesCard from "../components/coursesCard";
import FinancialAidCard from "../components/financialAidCard";
import FAQsCard from "../components/faqsCard";
import { useEffect, useState } from "react";

import OverviewModal from "../modals/overviewModal";
import MediaGallery from "../modals/mediaGalleryModal";
import CoursesModal from "../modals/coursesModal";
import FinancialAidScholarshipsModal from "../modals/financialAidScholarshipsModal";
import FaqModalCollege from "../modals/faqModalCollege";
import { sections } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteCollegeRequest,
  editCollegeRequest,
  setSelectedCollege,
  uploadCollegeImageRequest,
} from "../../../redux/actions/collegeActions";
import { getStatesByCountryId } from "../../../api/countriesApi";
import { getAllDestinations } from "../../../api/destinationApi";
import LocationModal from "../modals/locationModal";
import CollegeLocation from "../components/collegeLocation";
import CollegeImageSection from "../components/collegeImageSection";
import DeleteModal from "../../../commons/modal/deletedModal";
import {
  getCollegeDetailsById,
  setDeleteCollegeImage,
} from "../../../api/collegesApi";
import { toast } from "react-toastify";

function CollegDetails() {
  const dispatch = useDispatch();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [destinationsList, setDestinationsList] = useState([]);
  const [statesList, setStatesList] = useState([]);
  const navigate = useNavigate();
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);

  const [formdata, setFormdata] = useState(null);

  async function onUpdate(data) {
    try {
      dispatch(editCollegeRequest(collegeDetails?._id, data));

      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  function onEditFaq(params) {
    console.log("Edit FAQ");
    setFormdata(params);
    openModal("FAQs", "edit", 4);
  }

  function onEditCourses(params) {
    console.log("Edit Courses");
    setFormdata(params);
    openModal("Courses", "edit", 2);
  }

  function onEditScholarship(params) {
    console.log("Edit Scholarship");
    setFormdata(params);
    openModal("Financial Aid & Scholarships", "edit", 3);
  }

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

  const handleDelete = () => {
    dispatch(deleteCollegeRequest(collegeDetails?._id));
    navigate("/admin/colleges");
  };

  const openModal = (section, type, index) => {
    setSelectedSection(section);
    setActiveModalIndex(index);
  };

  const handleAddImageClick = () => {
    const galleryLength =
      collegeDetails?.images?.filter((img) => img.type === "gallery")?.length ||
      0;

    if (galleryLength < 4) {
      openModal("Media Gallery", "add", 1); // open Media Gallery Modal
    } else {
      alert("You can upload up to 4 images only");
    }
  };

  const sectionConfig = [
    { name: "Overview", component: <OverviewCard /> },
    {
      name: "Media Gallery",
      component: <MediaGalleryCard onDeleteImage={onDeleteGalleryImage} />,
    },
    { name: "Location", component: <CollegeLocation /> },
    {
      name: "Courses",
      component: <CoursesCard onEdit={onEditCourses} onUpdate={onUpdate} />,
    },
    {
      name: "Financial Aid & Scholarships",
      component: (
        <FinancialAidCard onEdit={onEditScholarship} onUpdate={onUpdate} />
      ),
    },
    {
      name: "FAQs",
      component: <FAQsCard onEdit={onEditFaq} onUpdate={onUpdate} />,
    },
  ];

  const closeModal = () => {
    setSelectedSection(null);
    setFormdata(null);
  };

  const modals = {
    section0: <OverviewModal closeModal={closeModal} onUpdate={onUpdate} />,
    section1: (
      <MediaGallery closeModal={closeModal} onUploadImage={onUploadImage} />
    ),
    section2: (
      <LocationModal
        closeModal={closeModal}
        onUpdate={onUpdate}
        destinationsList={destinationsList}
        statesList={statesList}
        getStatesList={fetchStatesList}
      />
    ),
    section3: (
      <CoursesModal
        closeModal={closeModal}
        filledData={formdata}
        onUpdate={onUpdate}
      />
    ),
    section4: (
      <FinancialAidScholarshipsModal
        closeModal={closeModal}
        filledData={formdata}
        onUpdate={onUpdate}
      />
    ),
    section5: (
      <FaqModalCollege
        filledData={formdata}
        closeModal={closeModal}
        onUpdate={onUpdate}
      />
    ),
  };

  async function fetchData() {
    try {
      const list = await getAllDestinations();
      fetchCollegeDetails();

      if (list.status === 200) {
        setDestinationsList(list?.data?.result);

        let cId = collegeDetails?.destinationId?.countryId?._id;

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

  async function onUploadImage(data, type) {
    console.log(data, type);
    try {
      dispatch(
        uploadCollegeImageRequest(collegeDetails?._id, {
          files: data,
          type,
        })
      );

      // await fetchCollegeDetails();

      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCollegeDetails() {
    try {
      console.log(" fetchCollegeDetails");
      const data = await getCollegeDetailsById(collegeDetails?._id);

      //  console.log(data);

      if (data.status === 200) {
        // console.log(data.message);
        dispatch(setSelectedCollege(data.data));
      }
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  async function onDeleteImage(id, imageData, type) {
    try {
      const data = await setDeleteCollegeImage(id);

      if (data.status === 200) {
        //  console.log(data.message);
        onUploadImage(imageData, type);
      } else {
        toast.error(data.message);
      }

      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  async function onDeleteGalleryImage(id) {
    try {
      const data = await setDeleteCollegeImage(id);

      if (data.status === 200) {
        toast.success("Image Delete Sucessfully");
        fetchCollegeDetails();
        // onUploadImage(imageData, type);
      } else {
        toast.error(data.message);
      }

      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCloseModal}
        onConfirm={handleDeleteSection}
        title={sections[selectedSectionIndex]?.title || ""}
      />

      <main className="min-h-screen font-rethink flex flex-col gap-6 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
        <div className="accordion space-y-4">
          <CollegeImageSection
            onUploadImage={onUploadImage}
            handleDelete={handleDelete}
            onDeleteImage={onDeleteImage}
            fetchCollegeDetails={fetchCollegeDetails}
          />
          {sectionConfig.map((sectionItem, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 px-8 border-gray-400 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800"
            >
              {/* Accordion Header */}
              <h2 id={`accordion-header-${index}`}>
                <div
                  className="flex justify-between items-center w-full px-4 py-1 text-2xl font-semibold text-left text-gray-600 dark:bg-gray-700 dark:text-white rounded-t-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAccordion(index);
                  }}
                >
                  <span>{sectionItem.name}</span>
                  <button
                    disabled={!isWriteAccess}
                    className="px-4 py-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (sectionItem.name === "Media Gallery") {
                        const galleryLength =
                          collegeDetails?.images?.filter(
                            (img) => img.type === "gallery"
                          )?.length || 0;
                        if (galleryLength < 4) {
                          openModal(sectionItem.name, "add", index);
                        } else {
                          toast.error("You can upload up to 4 images only");
                        }
                      } else {
                        openModal(sectionItem.name, "add", index);
                      }
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
                </div>
              </h2>
              {/* Accordion Content */}
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
        {selectedSection && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-3/4 max-w-max max-h-[550px] overflow-auto  relative">
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
      </main>
    </div>
  );
}

export default CollegDetails;
