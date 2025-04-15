/* eslint-disable no-constant-condition */
import AboutLanguagePrep from "../components/aboutLanguagePrep";
import Batches from "../components/batchesLanguagePrep";
import LanguageFaqs from "../components/faqLanguagePrep";

import { useState } from "react";
import { motion } from "framer-motion";
import LanguageImageSection from "../components/imageSectionLanguagePrep";
import AboutLanguagePrepModal from "../modals/aboutLanguagePrepModal";

import BatchesLanguagePrepModal from "../modals/batchesLanguagePrepModal";
import FaqLanguagePrepModal from "../modals/faqLanguagePrepModal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  deleteLanguagePrepRequest,
  editLanguagePrepRequest,
  uploadLanguagePrepImageRequest,
} from "../../../redux/actions/languagePrepsActions";
import { useDispatch, useSelector } from "react-redux";

const LanguagePrepDetails = () => {
  const { isWriteAccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [selectedSection, setSelectedSection] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const [formdata, setFormdata] = useState(null);

  async function onUpdate(data) {
    try {
      dispatch(editLanguagePrepRequest(id, data));

      closeModal();
      setFormdata(null);
    } catch (error) {
      console.log(error);
    }
  }

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const openModal = (section, type, index) => {
    setSelectedSection(section);
    setActiveModalIndex(index);
  };

  function onEditFaq(params) {
    console.log("Edit FAQ");
    setFormdata(params);
    openModal("FAQs", "edit", 2);
  }

  function onEditBatches(params) {
    console.log("Edit Batches");
    setFormdata(params);
    openModal("Batches", "edit", 1);
  }

  async function onUploadImage(data) {
    try {
      console.log(data);
      dispatch(
        uploadLanguagePrepImageRequest(id, {
          files: data,
          type: "logo",
        })
      );
      //  fetchTestPrepsDetails();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = () => {
    dispatch(deleteLanguagePrepRequest(id));
    navigate("/admin/langPrep");
  };

  const sectionConfig = [
    {
      name: "About Language Preparation",
      component: <AboutLanguagePrep />,
    },

    {
      name: "Batches",
      component: <Batches onEdit={onEditBatches} onUpdate={onUpdate} />,
    },
    {
      name: "FAQs",
      component: <LanguageFaqs onEdit={onEditFaq} onUpdate={onUpdate} />,
    },
  ];

  const closeModal = () => {
    setSelectedSection(null);
  };

  const modals = {
    section0: (
      <AboutLanguagePrepModal onUpdate={onUpdate} closeModal={closeModal} />
    ),

    section1: (
      <BatchesLanguagePrepModal
        onUpdate={onUpdate}
        filledData={formdata}
        closeModal={closeModal}
      />
    ),
    section2: (
      <FaqLanguagePrepModal
        onUpdate={onUpdate}
        filledData={formdata}
        closeModal={closeModal}
      />
    ),
  };

  return (
    <main className="min-h-screen font-rethink flex flex-col gap-6 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
      <div className="accordion space-y-4">
        <LanguageImageSection
          onUploadImage={onUploadImage}
          handleDelete={handleDelete}
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
                onClick={() => toggleAccordion(index)}
              >
                <span>{sectionItem.name}</span>
                {
                  <button
                    disabled={!isWriteAccess}
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
                }
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
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 min-w-max relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4">{selectedSection}</h2>
            <div className="mt-4">{modals[`section${activeModalIndex}`]}</div>
          </div>
        </div>
      )}
    </main>
  );
};

export default LanguagePrepDetails;
