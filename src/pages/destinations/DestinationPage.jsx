import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OverviewDest from "./OverviewDest";

import AdmissionReqDest from "./admissionReqDest";
import ExpensesDest from "./ExpensesDest";
import ScholarshipsDest from "./ScholarshipsDest";
import DestinationFAQ from "./DestinationFAQ";
import DestinationImage from "../../Components/DestinationImage";
import { motion } from "framer-motion";
import ImmigrationDetailsAdmin from "./ImmigrationDetailsAdmin"
import WorkOpportunitiesAdmin from "./WorkOpportunitiesAdmin";

function DestinationPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State to manage Add modal open/close
  const [titlecaller, setTitleCaller] = useState(false); // State to manage Add modal open/close
  const [selectedSection, setSelectedSection] = useState(null); // State to manage Add modal open/close
  const sections = useSelector((state) => state.collegeSections.sections); // Access sections from Redux store
  const dispatch = useDispatch();
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);

  const handleOpenDeleteModal = (index) => {
    setSelectedSectionIndex(index);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCloseModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedSectionIndex(null);
  };

  const handleDeleteSection = () => {
    handleDeleteCloseModal();
  };
  const handleOpenAddModal = () => setIsAddModalOpen(true);

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const section = [
        { name: "Overview", component: <OverviewDest /> },
    { name: "Admission Requirements", component: <AdmissionReqDest /> },
    { name: "Expenses", component: <ExpensesDest /> },
    { name: "Scholarships", component: <ScholarshipsDest /> },
    { name: "Immigration Details", component: <ImmigrationDetailsAdmin /> },
    { name: "Work Opportunities", component: <WorkOpportunitiesAdmin /> },
    { name: "FAQs", component: <DestinationFAQ /> },
  ];

  const requireDocuments = [
    "Document Name",
    "Copy of valid password",
    "Academic Transcripts",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
  ]

  // const toggleAccordion = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  // };
  const [buttonState, setButtonState] = useState(Array(7).fill("Add")); // Tracks the button state for each section
  // const toggleAccordion = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  //   const updatedButtonState = [...buttonState];
  //   updatedButtonState[index] = activeIndex === index ? "Add" : "Edit"; // Toggle button state
  //   setButtonState(updatedButtonState);
  // };
  // const [activeIndex, setActiveIndex] = useState(null); // To manage accordion state
  const [modalType, setModalType] = useState(null); // To manage which modal is open
  const [formData, setFormData] = useState({}); // To manage form inputs
  const [image, setImage] = useState(null); // To manage image upload

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const closeModal = () => {
    setModalType(null);
    setImage(null);
    setSelectedSection(null);
    setFormData({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData, image);
    // You can handle the form submission here (e.g., API call, state update, etc.)
    closeModal();
  };
  // Modals content for different sections
  const [selectedType, setSelectedType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const types = ["Scholarship", "Internship", "Job", "Course"];

  const handleInputChangeDropDown = (value) => {
    setSelectedType(value);
    setIsDropdownOpen(false); // Close dropdown after selection
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const modals = {
    section0: (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="description" className="block text-gray-700 mt-4">Why Study in USA?</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 border border-gray-400 rounded mt-1"
            placeholder="Add Description Brief"
          ></textarea>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="capital" className="block text-gray-700 mt-4 font-semibold">
                Capital
              </label>
              <input
                type="text"
                id="capital"
                onChange={(e) => handleInputChange("capital", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Capital"
              />
            </div>
            <div>
              <label htmlFor="lang" className="block text-gray-700 mt-4 font-semibold">
                Language
              </label>
              <input
                type="text"
                id="lang"
                onChange={(e) => handleInputChange("lang", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter National Language"
              />
            </div>
            <div>
              <label htmlFor="totalPopulation" className="block text-gray-700 mt-4 font-semibold">
                Total Population
              </label>
              <input
                type="text"
                id="totalPopulation"
                onChange={(e) => handleInputChange("totalPopulation", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Number"
              />
            </div>
            <div>
              <label htmlFor="currency" className="block text-gray-700 mt-4 font-semibold">
                Currency
              </label>
              <input
                type="text"
                id="currency"
                onChange={(e) => handleInputChange("currency", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Currency"
              />
            </div>
            <div>
              <label htmlFor="currency" className="block text-gray-700 mt-1 font-semibold">
                Dailing Code
              </label>
              <input
                type="text"
                id="currency"
                onChange={(e) => handleInputChange("currency", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Dailing Code"
              />
            </div>
          </div> */}
          <div className="text-end">
            <button
              type="button"
              className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>
      </div>
    ),
    section1: (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="description" className="block text-gray-700 mt-4">Why Study in USA?</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 border border-gray-400 rounded mt-1"
            placeholder="Add Description Brief"
          ></textarea>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="capital" className="block text-gray-700 mt-4 font-semibold">
                Capital
              </label>
              <input
                type="text"
                id="capital"
                onChange={(e) => handleInputChange("capital", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Capital"
              />
            </div>
            <div>
              <label htmlFor="lang" className="block text-gray-700 mt-4 font-semibold">
                Language
              </label>
              <input
                type="text"
                id="lang"
                onChange={(e) => handleInputChange("lang", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter National Language"
              />
            </div>
            <div>
              <label htmlFor="totalPopulation" className="block text-gray-700 mt-4 font-semibold">
                Total Population
              </label>
              <input
                type="text"
                id="totalPopulation"
                onChange={(e) => handleInputChange("totalPopulation", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Number"
              />
            </div>
            <div>
              <label htmlFor="currency" className="block text-gray-700 mt-4 font-semibold">
                Currency
              </label>
              <input
                type="text"
                id="currency"
                onChange={(e) => handleInputChange("currency", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Currency"
              />
            </div>
            <div>
              <label htmlFor="currency" className="block text-gray-700 mt-1 font-semibold">
                Dailing Code
              </label>
              <input
                type="text"
                id="currency"
                onChange={(e) => handleInputChange("currency", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Dailing Code"
              />
            </div>
          </div>
          <div className="text-end">
            <button
              type="button"
              className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>
      </div>
    ),
    section2: (
      <div>
        <p className="mb-5">Please select all that apply:</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {requireDocuments.map((docName, index) => (
            <>
              <div className="flex gap-2" key={index}>
                <input
                  type="checkbox"
                  id="title"
                  checked={formData.title || false}
                  onChange={(e) => handleInputChange(e, 'title')}
                  className="p-1 border border-gray-400 rounded mt-1"
                />
                <label htmlFor="title" className="block text-gray-700">
                  {docName}
                </label>
              </div>
            </>
          ))}

          {/* Add more checkbox items as needed */}

          <div className=" col-span-full text-end">
            <button
              type="button"
              className="mt-4  text-blue-500 px-4 py-1 mr-2 rounded transition flex items-center gap-2"
              onClick={closeModal}
            >
              <svg
                className="w-[28px] h-[28px] text-blue-500"
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
                  strokeWidth="2.3"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
              Add Document
            </button>



          </div>
          <div className="col-span-full text-end">
            <button
              type="button"
              className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </form>

      </div>
    ),
    section3: (
      <div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div  >
            <form>
              <label htmlFor="title" className="block mb-1 text-gray-700">
                Avarage Tuition Fess(per year)
              </label>
              <div class="flex mb-3">
                <div class="relative w-full">
                  <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Amount" required />
                  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100  border-gray-300 dark:border-gray-700 dark:text-white  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
              </div>
              <label htmlFor="title" className="block mb-1 text-gray-700">
                Avarage Rent(per month)
              </label>
              <div class="flex mb-3">
                <div class="relative w-full">
                  <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Amount" required />
                  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100  border-gray-300 dark:border-gray-700 dark:text-white  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
              </div>
              <label htmlFor="title" className="block mb-1 text-gray-700">
                Avarage Food Expanses (per month)
              </label>
              <div class="flex mb-3">
                <div class="relative w-full">
                  <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Amount" required />
                  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100  border-gray-300 dark:border-gray-700 dark:text-white  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
              </div>
              <label htmlFor="title" className="block mb-1 text-gray-700">
                Avarage Transport Expenses (per month)
              </label>
              <div class="flex mb-3">
                <div class="relative w-full">
                  <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Amount" required />
                  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100  border-gray-300 dark:border-gray-700 dark:text-white  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
              </div>
              <label htmlFor="title" className="block mb-1 text-gray-700">
                Misc. Expanse(per month)
              </label>
              <div class="flex">
                <div class="relative w-full">
                  <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Amount" required />
                  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100  border-gray-300 dark:border-gray-700 dark:text-white  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
              </div>
            </form>
          </div>
         
          <div className="col-span-full text-end">
            <button
              type="button"
              className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </form>

      </div>
    ),
    section4: (
      <div>
               <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="capital" className="block text-gray-700 mt-4 font-semibold">
                Scholarship Name
              </label>
              <input
                type="text"
                id="scholarshipName"
                onChange={(e) => handleInputChange("scholarshipName", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label htmlFor="lang" className="block text-gray-700 mt-4 font-semibold">
                Link
              </label>
              <input
                type="url"
                id="lang"
                onChange={(e) => handleInputChange("lang", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="www.scholorship.com"
              />
            </div>
           </div>
          <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">Why Study in USA?</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 border border-gray-400 rounded mt-1"
            placeholder="Add Description Brief"
          ></textarea>
          
          <div className="text-end">
            <button
              type="button"
              className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>

      </div>
    ),
    section5: (
      <div>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="capital" className="block text-gray-700 mt-4 font-semibold">
                Visa Name
              </label>
              <input
                type="text"
                id="scholarshipName"
                onChange={(e) => handleInputChange("scholarshipName", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Capital"
              />
            </div>
            <div className="relative">
      <label htmlFor="lang" className="block text-gray-700 mt-4 font-semibold">
        Type
      </label>
      {/* Input field with down arrow */}
      <div className="relative">
        <input
          type="text"
          id="lang"
          value={selectedType}
          onFocus={() => setIsDropdownOpen(true)} // Open dropdown on focus
          onChange={(e) => setSelectedType(e.target.value)} // Allow typing
          className="w-full p-2 pr-10 border border-gray-400 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Select type"
        />
        {/* Down arrow */}
        <button
          type="button"
          onClick={toggleDropdown}
          className="absolute inset-y-0 right-2 flex items-center text-gray-400 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 shadow-lg">
          {types
            .filter((type) =>
              type.toLowerCase().includes(selectedType.toLowerCase())
            ) // Filter options based on user input
            .map((type, index) => (
              <div
                key={index}
                onClick={() => handleInputChangeDropDown(type)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {type}
              </div>
            ))}
          {types.filter((type) =>
            type.toLowerCase().includes(selectedType.toLowerCase())
          ).length === 0 && (
            <div className="px-4 py-2 text-gray-500">No options found</div>
          )}
        </div>
      )}
    </div>
           </div>
          <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">Brief Description</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 border border-gray-400 rounded mt-1"
            placeholder="Add Description Brief"
          ></textarea>
          
          <div className="text-end">
            <button
              type="button"
              className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>

      </div>
    ),
    section6: (
      <div>
            <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">Part-time options for Students</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 border bg-gray-100 border-gray-400 rounded "
            placeholder=""
          ></textarea>
            </div>
            <div>
            <label htmlFor="description" className="block font-semibold text-gray-700 mt-3">Part-degree popular work opportunities</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 border bg-gray-100  border-gray-400 rounded "
            placeholder=""
          ></textarea>
            </div>
            <p className="font-semibold ">Professions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
              <label htmlFor="profession" className="block text-gray-700 mt-4 font-semibold">
                Profession Name
              </label>
              <input
                type="text"
                id="profession"
                onChange={(e) => handleInputChange("profession", e.target.value)}
                className="w-full p-1 border bg-gray-100 border-gray-400 rounded mt-1"
                placeholder="Enter Name"
              />
            </div>
        <div>
              <label htmlFor="avgSalary" className="block text-gray-700 mt-4 font-semibold">
                Avarage Salary
              </label>
              <input
                type="text"
                id="avgSalary"
                onChange={(e) => handleInputChange("avgSalary", e.target.value)}
                className="w-full p-1 border bg-gray-100 border-gray-400 rounded mt-1"
                placeholder="Avg Salary"
              />
            </div>
           </div>
           
           <div className=" col-span-full text-end">
            <button
              type="button"
              className="mt-4  text-blue-500 px-4 py-1 mr-2 rounded transition flex items-center gap-2"
              onClick={closeModal}
            >
              <svg
                className="w-[28px] h-[28px] text-blue-500"
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
                  strokeWidth="2.3"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
              Add Profession
            </button>
</div>
          <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">Additional Information</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 border bg-gray-100 border-gray-400 rounded mt-1"
            placeholder="Additional Information"
          ></textarea>
          
          <div className="text-end">
            <button
              type="button"
              className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>

      </div>
    ),
    section7: (
      <div>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="question" className="block text-gray-700 mt-4 font-semibold">
                Question
              </label>
              <input
                type="text"
                id="question"
                onChange={(e) => handleInputChange("question", e.target.value)}
                className="w-full p-1 border border-gray-400 rounded mt-1"
                placeholder="Enter Question"
              />
            </div>
           
                      </div>
          <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">Answer </label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 border border-gray-400 rounded mt-1"
            placeholder="Provide Answer"
          ></textarea>
          
          <div className="text-end">
            <button
              type="button"
              className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>

      </div>
    ),
  };

  const openModal = (section, type) => {
    setSelectedSection(section);
    setModalType(type);

  };




  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };




  return (
    <div>
      <main className="min-h-screen flex flex-col gap-6 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
        <div className="accordion space-y-4">
        <DestinationImage /> 
          {section.map((sectionItem, index) => (
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
                      onClick={() => openModal(sectionItem.name, "add")}
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
                      onClick={() => openModal(sectionItem.name, "edit")}
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

        {/* Modal Rendering */}
        {modalType && selectedSection && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 min-w-max relative">
              <button
                className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>

              <h2 className="text-2xl font-semibold mb-4">{selectedSection} Modal</h2>
              <div className="mt-4">
                {/* Render the dynamic content based on modalType */}
                {modals[`section${activeIndex}`]}
              </div>
            </div>
          </div>
        )}
        {/* {modalType == "edit" && selectedSection && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 min-w-max relative">
              <button
                className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4">{modalType} Modal</h2>
              <div className="mt-4">
                hiii
              </div>
            </div>
          </div>
        )} */}
      </main>
    </div>
  );

}

export default DestinationPage;
