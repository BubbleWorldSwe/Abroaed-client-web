import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from '../../Components/Modals/DeleteModal';
import AddOverviewContentModal from '../../Components/Modals/AddOverviewContentModal';
import AccommodationImageSection from './AccommodationImageSection';
import AccommodationDescription from './AccommodationDescription';
import AccommodationLocation from './AccommodationLocation';
import AccommodationPrice from './AccommodationPrice';
import AccommodationAvailability from './AccommodationAvailability';
import dark from '../../assets/dark.png';
import { motion } from "framer-motion";

const AccommodationPage = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State to manage Add modal open/close
    const [titlecaller, setTitleCaller] = useState(false); // State to manage Add modal open/close
    const [selectedSection, setSelectedSection] = useState(null); // State to manage Add modal open/close
    const sections = useSelector((state) => state.collegeSections.sections); // Access sections from Redux store
    const dispatch = useDispatch();
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [modalType, setModalType] = useState(null); // To manage which modal is open
    const [formData, setFormData] = useState({}); // To manage form inputs
    const [selectedType, setSelectedType] = useState("");
  
    const handleOpenDeleteModal = (index) => {
      setSelectedSectionIndex(index);
      setIsDeleteModalOpen(true);
    };
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
    const handleOpenAddModal = () => setIsAddModalOpen(true);
  
    const handleCloseAddModal = () => {
      setIsAddModalOpen(false);
    };
    const openModal = (section, type) => {
      setSelectedSection(section);
      setModalType(type);
  
    };
    const sectionConfig = [
      
      { name: "Description", component: <AccommodationDescription /> },
      { name: "Location", component: < AccommodationLocation /> },
      { name: "Price", component: <AccommodationPrice /> },
      { name: "Availability", component: <AccommodationAvailability /> },
      // { name: "Section 6 - FAQs", component: <FAQsCard /> },
      // { name: "Work Opportunities", component: <WorkOpportunitiesAdmin /> },
      // { name: "FAQs", component: <DestinationFAQ /> },
    ];
    const handleInputChange = (e, fieldName) => {
      setFormData({ ...formData, [fieldName]: e.target.value });
    };
  
    const closeModal = () => {
      setModalType(null);
      // setImage(null);
      setSelectedSection(null);
      setFormData({});
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted with data:", formData, image);
      // You can handle the form submission here (e.g., API call, state update, etc.)
      closeModal();
    };
    // section: (
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="description" className="block text-gray-700 mt-4">Why Study in USA?</label>
    //       <textarea
    //         id="description"
    //         value={formData.description || ""}
    //         onChange={(e) => handleInputChange(e, 'description')}
    //         className="w-full p-2 border border-gray-400 rounded mt-1"
    //         placeholder="Add Description Brief"
    //       ></textarea>
    //       {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //         <div>
    //           <label htmlFor="capital" className="block text-gray-700 mt-4 font-semibold">
    //             Capital
    //           </label>
    //           <input
    //             type="text"
    //             id="capital"
    //             onChange={(e) => handleInputChange("capital", e.target.value)}
    //             className="w-full p-1 border border-gray-400 rounded mt-1"
    //             placeholder="Enter Capital"
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="lang" className="block text-gray-700 mt-4 font-semibold">
    //             Language
    //           </label>
    //           <input
    //             type="text"
    //             id="lang"
    //             onChange={(e) => handleInputChange("lang", e.target.value)}
    //             className="w-full p-1 border border-gray-400 rounded mt-1"
    //             placeholder="Enter National Language"
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="totalPopulation" className="block text-gray-700 mt-4 font-semibold">
    //             Total Population
    //           </label>
    //           <input
    //             type="text"
    //             id="totalPopulation"
    //             onChange={(e) => handleInputChange("totalPopulation", e.target.value)}
    //             className="w-full p-1 border border-gray-400 rounded mt-1"
    //             placeholder="Enter Number"
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="currency" className="block text-gray-700 mt-4 font-semibold">
    //             Currency
    //           </label>
    //           <input
    //             type="text"
    //             id="currency"
    //             onChange={(e) => handleInputChange("currency", e.target.value)}
    //             className="w-full p-1 border border-gray-400 rounded mt-1"
    //             placeholder="Enter Currency"
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="currency" className="block text-gray-700 mt-1 font-semibold">
    //             Dailing Code
    //           </label>
    //           <input
    //             type="text"
    //             id="currency"
    //             onChange={(e) => handleInputChange("currency", e.target.value)}
    //             className="w-full p-1 border border-gray-400 rounded mt-1"
    //             placeholder="Enter Dailing Code"
    //           />
    //         </div>
    //       </div> */}
    //       <div className="text-end">
    //         <button
    //           type="button"
    //           className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
    //           onClick={closeModal}
    //         >
    //           Cancel
    //         </button>
    //         <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    //       </div>
    //     </form>
    //   </div>
    // ),
    const modals = {
      section0: (
        <div>
          <form onSubmit={handleSubmit}>
                       <textarea
              id="description"
              value={formData.description || ""}
              onChange={(e) => handleInputChange(e, 'description')}
              className="w-full p-2 bg-gray-100 rounded mt-1 border-none"
              placeholder="Add a short description about the accommodation


"
            ></textarea>
            <p>Max 200 word.</p>
            
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
          <div>
  <label htmlFor="country" className="block text-gray-500 mt-4 font-semibold">
    Country
  </label>
  <select
    id="country"
    onChange={(e) => handleInputChange("country", e.target.value)}
    className="w-full py-1 px-4 bg-gray-100 rounded mt-1 border border-gray-300 text-gray-500"
    defaultValue=""
  >
    <option value="" disabled>
      Select Country
    </option>
    <option value="USA">USA</option>
    <option value="UK">UK</option>
    <option value="Canada">Canada</option>
    <option value="Australia">Australia</option>
    <option value="India">India</option>
  </select>
</div>
<div>
  <label htmlFor="city" className="block text-gray-500 mt-4 font-semibold">
    City
  </label>
  <select
    id="city"
    onChange={(e) => handleInputChange("city", e.target.value)}
    className="py-1 px-4 w-full bg-gray-100 rounded mt-1 border border-gray-300 text-gray-500"
    defaultValue=""
  >
    <option value="" disabled>
      Select City
    </option>
    <option value="New York">New York</option>
    <option value="London">London</option>
    <option value="Toronto">Toronto</option>
    <option value="Sydney">Sydney</option>
    <option value="Mumbai">Mumbai</option>
  </select>
</div>


<div>
                <label htmlFor="streetName" className="block text-gray-500 mt-4 font-semibold">
                Street Name
                </label>
                <input
                  type="text"
                  id="streetName"
                  onChange={(e) => handleInputChange("streetName", e.target.value)}
                  className="w-full p-1 border-none bg-gray-100  rounded mt-1"
                  placeholder="Enter Street Name"
                />
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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1  gap-1">
            <div>
  <label htmlFor="currency" className="block text-gray-500 mt-4 font-semibold">
    Currency
  </label>
  <select
    id="currency"
    onChange={(e) => handleInputChange("currency", e.target.value)}
    className="py-1 px-4 w-full bg-gray-100 rounded mt-1 border border-gray-300 text-gray-500"
    defaultValue=""
  >
    <option value="" disabled>
      Select Currency
    </option>
    <option value="USD">USD - United States Dollar</option>
    <option value="GBP">GBP - British Pound Sterling</option>
    <option value="EUR">EUR - Euro</option>
    <option value="AUD">AUD - Australian Dollar</option>
    <option value="INR">INR - Indian Rupee</option>
    <option value="CAD">CAD - Canadian Dollar</option>
    <option value="JPY">JPY - Japanese Yen</option>
    <option value="CNY">CNY - Chinese Yuan</option>
  </select>
</div>

            <div>
                <label htmlFor="amount" className="block text-gray-500 mt-4 font-semibold">
                Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  onChange={(e) => handleInputChange("amount", e.target.value)}
                  className="w-full p-1 border-none bg-gray-100  rounded mt-1"
                  placeholder="Enter Amount/monthly"
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
      section3: (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1  gap-1">
            <div>
                <label htmlFor="availability" className="block text-gray-500 mt-4 font-semibold">
                Availability
                </label>
                <input
                  type="text"
                  id="availability"
                  onChange={(e) => handleInputChange("availability", e.target.value)}
                  className="w-full p-1 border-none bg-gray-100  rounded mt-1"
                  placeholder="Enter Availability"
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
    };
  
    return (
      <div className="p-6">
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
        <div className="accordion space-y-4">
       <AccommodationImageSection/>
  
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
        {modalType && selectedSection && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/3 min-w-max relative">
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
  
      </div>
    );
}

export default AccommodationPage;