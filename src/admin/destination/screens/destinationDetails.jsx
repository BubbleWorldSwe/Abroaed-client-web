/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";

import AdmissionReqDest from "../components/admissionReqDest";
import ExpensesDest from "../components/expensesDest";
import ScholarshipsDest from "../components/scholarshipsDest";
import DestinationFAQ from "../components/destinationFAQ";
import DestinationImage from "../components/destinationImage";
import { motion } from "framer-motion";
import ImmigrationDetailsAdmin from "../components/immigrationDetailsAdmin";
import WorkOpportunitiesAdmin from "../components/workOpportunitiesAdmin";
import OverviewAddModal from "../modals/overviewAddModal";
import AdmissionRequirementAddModal from "../modals/admissionRequirementAddModal";
import ExpensesAddModal from "../modals/expensesAddModal";
import ScholarshipModal from "../modals/scholarshipModal";
import ImmigrationDetailsModal from "../modals/immigrationDetailsModal";
import WorkOpportunitiesModal from "../modals/workOpportunitiesModal";
import FaqModal from "../modals/faqModal";
import { useLocation, useParams } from "react-router-dom";
import { getAdmissionDocuments, getVisaTypesList } from "../../../api/api";
import { getDestinationDetailsById } from "../../../api/destinationApi";
import {
  editDestinationRequest,
  setSelectedDestination,
} from "../../../redux/actions/destinationActions";
import { useDispatch, useSelector } from "react-redux";

import { getStatesByCountryId } from "../../../api/countriesApi";
import OverviewDest from "../components/overviewDest";

function DestinationDetails() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [documentsList, setDocumentsList] = useState([]);
  const destinationDetails = useSelector(
    (state) => state.destinations.selectedDestination
  );
  const [visaTypes, setVisaTypes] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [states, setStates] = useState([]);
  const [formdata, setFormdata] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const closeModal = () => {
    setSelectedSection(null);
    setFormdata(null);
  };

  const openModal = (section, type, index) => {
    setSelectedSection(section);
    setActiveModalIndex(index);

    if (type === "add") {
      setFormdata(null);
    }
  };

  const sections = [
    {
      name: "Overview",
      component: <OverviewDest />,
    },
    {
      name: "Admission Requirements",
      component: <AdmissionReqDest />,
    },
    {
      name: "Expenses",
      component: <ExpensesDest />,
    },
    {
      name: "Scholarships",
      component: (
        <ScholarshipsDest onEdit={onEditScholarship} onUpdate={onUpdate} />
      ),
    },
    {
      name: "Immigration Details",
      component: (
        <ImmigrationDetailsAdmin
          onEdit={onEditImmigration}
          onUpdate={onUpdate}
        />
      ),
    },
    {
      name: "Work Opportunities",
      component: <WorkOpportunitiesAdmin />,
    },
    {
      name: "FAQs",
      component: <DestinationFAQ onEdit={onEditFaq} onUpdate={onUpdate} />,
    },
  ];

  const modals = {
    section0: (
      <OverviewAddModal
        closeModal={closeModal}
        onUpdate={onUpdate}
        states={states}
      />
    ),
    section1: (
      <AdmissionRequirementAddModal
        documentsList={documentsList}
        closeModal={closeModal}
        onUpdate={onUpdate}
      />
    ),
    section2: <ExpensesAddModal onUpdate={onUpdate} closeModal={closeModal} />,
    section3: (
      <ScholarshipModal
        closeModal={closeModal}
        filledData={formdata}
        onUpdate={onUpdate}
      />
    ),
    section4: (
      <ImmigrationDetailsModal
        closeModal={closeModal}
        filledData={formdata}
        visaTypes={visaTypes}
        onUpdate={onUpdate}
      />
    ),
    section5: (
      <WorkOpportunitiesModal closeModal={closeModal} onUpdate={onUpdate} />
    ),
    section6: (
      <FaqModal
        formdata={formdata}
        closeModal={closeModal}
        filledData={formdata}
        onUpdate={onUpdate}
      />
    ),
  };

  function onEditFaq(params) {
    console.log("Edit FAQ");
    setFormdata(params);
    openModal("FAQs", "edit", 6);
  }

  function onEditScholarship(params) {
    console.log("Edit onEditScholarship");
    setFormdata(params);
    openModal("Scholarships", "edit", 3);
  }

  function onEditImmigration(params) {
    console.log("Edit onEditImmigration");
    setFormdata(params);
    openModal("Immigration Details", "edit", 4);
  }

  async function onUpdate(data) {
    try {
      dispatch(editDestinationRequest(destinationDetails._id, data));
      fetchDestnationDetails();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchDestnationDetails() {
    try {
      const data = await getDestinationDetailsById(state?._id);

      if (data.status === 200) {
        dispatch(setSelectedDestination(data.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      fetchDestnationDetails();
      const statesList = await getStatesByCountryId(
        destinationDetails?.countryId?._id
      );
      const docs = await getAdmissionDocuments();
      const visa = await getVisaTypesList();

      if (statesList.status === 200) {
        setStates(statesList.data.result.states);
      }

      if (docs.status === 200) {
        setDocumentsList(docs.data.result);
      }

      if (docs.status === 200) {
        setDocumentsList(docs.data.result);
      }

      if (visa.status === 200) {
        setVisaTypes(visa.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <main className="min-h-screen font-rethink flex flex-col gap-6 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
        <div className="accordion space-y-4">
          <DestinationImage />
          {sections.map((sectionItem, index) => (
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
      </main>
      {/* Modal Rendering */}
      {selectedSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          {/*  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-3/4 max-w-max max-h-[550px] overflow-auto  relative"> */}
          <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-3/4 max-w-max max-h-[550px] relative overflow-y-auto">
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
    </div>
  );
}

export default DestinationDetails;
