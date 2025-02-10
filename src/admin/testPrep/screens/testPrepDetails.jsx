/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-constant-condition */
import AboutExamTestPrepModal from "../modals/aboutExamTestPrepModal";
import Batches from "../components/batchesTestPrep";
import LanguageFaqs from "../components/faqTestPrep";
import SimplifyThings from "../components/simplifyThingsTestPrep";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestPrepImageUpdate from "../components/imageUploadTestPrep";
import SimplifyThingsModal from "../modals/simplifyThingsTestPrepModal";
import BatchesTestPrepModal from "../modals/batchesTestPrepModal";
import FaqTestPrepModal from "../modals/faqTestPrepModal";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import AboutExamTestPrep from "../components/aboutExamTestPrep";
import {
    editTestPrepRequest,
    setSelectedTestPrep,
} from "../../../redux/actions/testPrepsActions";
import { getTestPrepDetailsById } from "../../../api/testPrepsApi";

const TestPrepDetails = () => {
    const dispatch = useDispatch();
    const [selectedSection, setSelectedSection] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeModalIndex, setActiveModalIndex] = useState(null);

    const { state } = useLocation();

    const [formdata, setFormdata] = useState(null);

    // const testPrepDetails = useSelector(
    //     (state) => state.testPreps.selectedTestPrep
    // );

    async function onUpdate(data) {
        try {
            dispatch(editTestPrepRequest(state?._id, data));
            //  fetchTestPrepsDetails();
            closeModal();
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchTestPrepsDetails() {
        try {
            const data = await getTestPrepDetailsById(state?._id);

            if (data.status === 200) {
                console.log("data.data");
                console.log(data.data);
                dispatch(setSelectedTestPrep(data.data));
            }
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

    const sectionConfig = [
        { name: "About Exam", component: <AboutExamTestPrep /> },
        { name: "How we simplify things", component: <SimplifyThings /> },
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
            <AboutExamTestPrepModal onUpdate={onUpdate} closeModal={closeModal} />
        ),
        section1: (
            <SimplifyThingsModal onUpdate={onUpdate} closeModal={closeModal} />
        ),
        section2: (
            <BatchesTestPrepModal
                onUpdate={onUpdate}
                filledData={formdata}
                closeModal={closeModal}
            />
        ),
        section3: (
            <FaqTestPrepModal
                onUpdate={onUpdate}
                filledData={formdata}
                closeModal={closeModal}
            />
        ),
    };

    function onEditFaq(params) {
        console.log("Edit FAQ");
        setFormdata(params);
        openModal("FAQs", "edit", 3);
    }

    function onEditBatches(params) {
        console.log("Edit Batches");
        setFormdata(params);
        openModal("Batches", "edit", 2);
    }

    useEffect(() => {
        fetchTestPrepsDetails();
    }, [dispatch]);

    return (
        <main className="min-h-screen font-rethink flex flex-col gap-6 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
            <div className="accordion space-y-4">
                <TestPrepImageUpdate />
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
                                {true ? (
                                    // Add icon for adding new items
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
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 max-w-9xl relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-semibold mb-4">
                            {selectedSection} Modal
                        </h2>
                        <div className="mt-4">{modals[`section${activeModalIndex}`]}</div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default TestPrepDetails;
