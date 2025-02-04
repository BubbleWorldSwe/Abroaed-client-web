/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";
import OverviewDest from "../../../pages/destinations/OverviewDest";
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
import { useLocation } from "react-router-dom";
import { getAdmissionDocuments, getCurrencyList } from "../../../api/api";
import { getDestinationDetailsById } from "../../../api/destinationApi";
import { fetchCountriesRequest } from "../../../redux/actions/countryActions";
import { useSelector } from "react-redux";

function DestinationDetails() {
  const { state } = useLocation();
  const [documentsList, setDocumentsList] = useState([]);
  const [destinationDetails, setDestinationDetails] = useState(state);
  const [currencyList, setCurrencyList] = useState([]);
  console.log(destinationDetails);
  const [selectedSection, setSelectedSection] = useState(null); // State to manage Add modal open/close
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const sections = [
    {
      name: "Overview",
      component: <OverviewDest details={destinationDetails} />,
    },
    { name: "Admission Requirements", component: <AdmissionReqDest /> },
    { name: "Expenses", component: <ExpensesDest /> },
    {
      name: "Scholarships",
      component: <ScholarshipsDest details={destinationDetails} />,
    },
    {
      name: "Immigration Details",
      component: <ImmigrationDetailsAdmin details={destinationDetails} />,
    },
    { name: "Work Opportunities", component: <WorkOpportunitiesAdmin /> },
    {
      name: "FAQs",
      component: <DestinationFAQ details={destinationDetails} />,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const closeModal = () => {
    setSelectedSection(null);
  };

  const modals = {
    section0: (
      <OverviewAddModal
        details={destinationDetails}
        currencyList={currencyList}
        closeModal={closeModal}
      />
    ),
    section1: (
      <AdmissionRequirementAddModal
        documentsList={documentsList}
        details={destinationDetails}
        closeModal={closeModal}
        destinationId={destinationDetails._id}
        onSuccess={fetchDestnationDetails}
      />
    ),
    section2: (
      <ExpensesAddModal details={destinationDetails} closeModal={closeModal} />
    ),
    section3: (
      <ScholarshipModal details={destinationDetails} closeModal={closeModal} />
    ),
    section4: (
      <ImmigrationDetailsModal
        details={destinationDetails}
        closeModal={closeModal}
      />
    ),
    section5: (
      <WorkOpportunitiesModal
        details={destinationDetails}
        closeModal={closeModal}
      />
    ),
    section6: <FaqModal details={destinationDetails} closeModal={closeModal} />,
  };

  const openModal = (section, type, index) => {
    setSelectedSection(section);
    setActiveModalIndex(index);
  };

  async function fetchDestnationDetails() {
    try {
      const data = await getDestinationDetailsById(destinationDetails?._id);
      console.log(data);

      if (data.status === 200) {
        console.log("updated");
        setDestinationDetails(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      fetchDestnationDetails();
      const docs = await getAdmissionDocuments();
      const currency = await getCurrencyList();

      if (docs.status === 200) {
        setDocumentsList(docs.data.result);
      }

      if (currency.status === 200) {
        setCurrencyList(currency.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <main className="min-h-screen font-rethink flex flex-col gap-6 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
        <div className="accordion space-y-4">
          <DestinationImage details={destinationDetails} />
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
          <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-3/4 max-w-max max-h-[550px] relative">
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
