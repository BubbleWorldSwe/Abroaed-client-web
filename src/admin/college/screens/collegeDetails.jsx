/* eslint-disable no-constant-condition */
import DeleteModal from "../../../Components/Modals/DeleteModal";
import { motion } from "framer-motion";
import AddOverviewContentModal from "../../../Components/Modals/AddOverviewContentModal";
import OverviewCard from "../components/overviewCard";
import MediaGalleryCard from "../components/mediaGalleryCard";
import CoursesCard from "../components/coursesCard";
import FinancialAidCard from "../components/financialAidCard";
import FAQsCard from "../components/faqsCard";
import { useState } from "react";
import CollegeImageSection from "../components/collegeImageSection";
import OverviewModal from "../modals/overviewModal";
import MediaGallery from "../modals/mediaGallery";
import CoursesModal from "../modals/coursesModal";
import FinancialAidScholarshipsModal from "../modals/financialAidScholarshipsModal";
import FaqModalCollege from "../modals/faqModalCollege";
import { sections } from "../data";

function CollegDetails() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [activeModalIndex, setActiveModalIndex] = useState(null);

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
    setActiveModalIndex(index)
  };
  const sectionConfig = [
    { name: "Overview", component: <OverviewCard /> },
    { name: "Media Gallery", component: < MediaGalleryCard /> },
    { name: "Courses", component: <CoursesCard /> },
    { name: "Financial Aid & Scholarships", component: <FinancialAidCard /> },
    { name: "Section 6 - FAQs", component: <FAQsCard /> },
  ];

  const closeModal = () => {
    setSelectedSection(null);
  };

  const modals = {
    section0: (
      <OverviewModal closeModal={closeModal} />
    ),
    section1: (
      <MediaGallery closeModal={closeModal} />
    ),
    section2: (
      <CoursesModal closeModal={closeModal} />
    ),
    section3: (
      <FinancialAidScholarshipsModal closeModal={closeModal} />
    ),
    section4: (
      <FaqModalCollege closeModal={closeModal} />
    ),
  };

  return (
    <div >
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCloseModal}
        onConfirm={handleDeleteSection}
        title={sections[selectedSectionIndex]?.title || ""}
      />

      <AddOverviewContentModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
      />
      <main className="min-h-screen font-rethink flex flex-col gap-6 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">

        <div className="accordion space-y-4">
          <CollegeImageSection />
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
                    toggleAccordion(index)
                  }}
                >
                  <span>{sectionItem.name}</span>
                  {true ? (
                    <button
                      className="px-4 py-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(sectionItem.name, "add", index)
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
                        openModal(sectionItem.name, "edit", index)
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
              <h2 className="text-2xl font-semibold mb-4">{selectedSection} Modal</h2>
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
