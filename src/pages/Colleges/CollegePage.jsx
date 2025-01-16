
import DeleteModal from "../../Components/Modals/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import AddOverviewContentModal from "../../Components/Modals/AddOverviewContentModal";
import OverviewCard from "./OverviewCard";
import MediaGalleryCard from "./MediaGalleryCard";
import CoursesCard from "./CoursesCard";
import FinancialAidCard from "./FinancialAidCard";
import FAQsCard from "./FAQsCard";
import dark from '../../assets/dark.png'
import { useState } from "react";
import deleteIcon from '../../assets/deleteIcon.png'
import CollegeImageSection from "./CollegeImageSection";
function CollegePage() {
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
    
    { name: "Overview", component: <OverviewCard /> },
    { name: "Media Gallery", component: < MediaGalleryCard /> },
    { name: "Courses", component: <CoursesCard /> },
    { name: "Financial Aid & Scholarships", component: <FinancialAidCard /> },
    { name: "Section 6 - FAQs", component: <FAQsCard /> },
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
          <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">About</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 bg-gray-100 rounded mt-1 border-none"
            placeholder="Add College Brief"
          ></textarea>
          <p>Max 200 word.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="establishmentYear" className="block text-gray-700 mt-4 font-semibold">
                Establishment Year
              </label>
              <input
                type="text"
                id="establishmentYear"
                onChange={(e) => handleInputChange("establishmentYear", e.target.value)}
                className="w-full p-1  bg-gray-100 rounded mt-1 border-none"
                placeholder="Enter Establishment Year"
              />
            </div>
            <div>
              <label htmlFor="ranking" className="block text-gray-700 mt-4 font-semibold">
                Ranking
              </label>
              <input
                type="text"
                id="ranking"
                onChange={(e) => handleInputChange("ranking", e.target.value)}
                className="w-full p-1 bg-gray-100 rounded mt-1 border-none"
                placeholder="Enter National Language"
              />
            </div>
            <div>
              <label htmlFor="intake" className="block text-gray-700 mt-4 font-semibold">
                Intake
              </label>
              <input
                type="text"
                id="totalPopulation"
                onChange={(e) => handleInputChange("totalPopulation", e.target.value)}
                className="w-full p-1  bg-gray-100 rounded mt-1 border-none"
                placeholder="Select Month(Multi-select)"
              />
            </div>
            <div>
              <label htmlFor="studentTeacherRatio" className="block text-gray-700 mt-4 font-semibold">
                Student to Teacher Ratio
              </label>
              <input
                type="text"
                id="studentTeacherRatio"
                onChange={(e) => handleInputChange("studentTeacherRatio", e.target.value)}
                className="w-full p-1 bg-gray-100 rounded border-none mt-1"
                placeholder="Enter Ratio"
              />
            </div>
            <div>
              <label htmlFor="internationalStudent" className="block text-gray-700 mt-4 font-semibold">
                International Students (in percentage)
              </label>
              <input
                type="text"
                id="internationalStudent"
                onChange={(e) => handleInputChange("internationalStudent", e.target.value)}
                className="w-full p-1  bg-gray-100 rounded mt-1 border-none"
                placeholder="Enter Percentage"
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
    section1: (
      <div className="p-6">

        <div className="overflow-x-auto ">
          <div className="flex space-x-5" style={{ maxWidth: "60rem" }}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-96 relative flex-shrink-0"
                  style={{ flex: "0 0 auto" }} // Prevent images from shrinking
                >
                  {/* Image */}
                  <img
                    className="w-full h-60 object-cover rounded-lg"
                    src={dark}
                    alt={`Profile cover ${index + 1}`}
                  />
                  {/* Overlay */}
                  <div className="absolute top-2 r-10">

                  </div>
                  {/* Button */}
                  <div className="absolute top-2 right-2">
                    <button
                      type="button"
                      className=" items-center justify-center w-10 h-10 font-medium   hover:opacity-60 group focus:outline-none dark:focus:ring-blue-800"
                    >
                      <svg class="text-white opacity-80 dark:text-gray-500 w-8 h-8 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>

                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="text-end mt-5">(4/5)</div>
        <p className="mb-2">
          Add up-to 10 images or videos. Supported files JPG, PNG, MP4.
        </p>

        <div class="flex items-center justify-center w-full">
          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 ">
              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <div>

            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
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
        {/* </form> */}

      </div>
    ),
    section2: (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="courseName" className="block text-gray-500 mt-4 font-semibold">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              onChange={(e) => handleInputChange("courseName", e.target.value)}
              className=" py-1 px-4  bg-gray-100 rounded mt-1 border-none"
              placeholder="Course Name"
            />
          </div>
          <label htmlFor="courseBrief" className="block font-semibold text-gray-500 mt-4">Course Brief</label>
          <textarea
            id="courseBrief"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'courseBrief')}
            className="w-full py-2 px-4 bg-gray-100 rounded mt-1 border-none"
            placeholder="Add Course Brief"
          ></textarea>
          <p >Max 100 words.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label
                htmlFor="courseLevel"
                className="block text-gray-500 mt-4 font-semibold"
              >
                Course Level
              </label>
              <select
                id="courseLevel"
                onChange={(e) => handleInputChange("courseLevel", e.target.value)}
                className="w-full p-1 bg-gray-100 text-gray-500 rounded mt-1 border-none"
                placeholder="Select Course Level"
              >
                <option value="" disabled selected>
                  Select Course Level
                </option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Diploma">Diploma</option>
                <option value="Certificate">Certificate</option>
              </select>
            </div>

            <div>
              <label htmlFor="duration" className="block text-gray-500 mt-4 font-semibold">
                Duration (months)
              </label>
              <input
                type="text"
                id="duration"
                onChange={(e) => handleInputChange("duration", e.target.value)}
                className="w-full p-1 bg-gray-100 rounded mt-1 border-none"
                placeholder="Enter month"
              />
            </div>
            <div>
              <label
                htmlFor="intake"
                className="block text-gray-500  mt-4 font-semibold"
              >
                Intake
              </label>
              <select
                id="intake"
                onChange={(e) => {
                  const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                  handleInputChange("intake", selectedOptions);
                }}
                className="w-full p-1 bg-gray-100 text-gray-500 rounded mt-1 border-none"
              >
                <option value="" disabled selected>Months</option>
                <option value="January" >January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="title" className="block  font-semibold text-gray-500">
                Fees
              </label>
              <div class="flex ">
                <div class="relative w-full">
                  <input type="search" id="search-dropdown" class="block p-1 w-full  bg-gray-100 text-gray-500 rounded mt-1 border-none" placeholder="Enter Amount" required />
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
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-1 px-4 bg-gray-100 text-gray-500  mt-1 border-none" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
              </div>
            </div>
            <div>
              <label
                htmlFor="domain"
                className="block text-gray-500 mt-4 font-semibold"
              >
                Domain
              </label>
              <select
                id="domain"
                onChange={(e) => handleInputChange("domain", e.target.value)}
                className="w-full p-1 bg-gray-100 rounded text-gray-500 mt-1 border-none"
              >
                <option value="" disabled selected>
                  Select Department
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Electronics and Communication">Electronics and Communication</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Management Studies">Management Studies</option>
              </select>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="capital" className="block text-gray-500 mt-4 font-semibold">
                Scholarship Name
              </label>
              <input
                type="text"
                id="scholarshipName"
                onChange={(e) => handleInputChange("scholarshipName", e.target.value)}
                className="w-full p-1 border-none bg-gray-100  rounded mt-1"
                placeholder="Scholarship - Engineering"
              />
            </div>
            <div>
              <label htmlFor="lang" className="block text-gray-500 mt-4 font-semibold">
                Link
              </label>
              <input
                type="url"
                id="lang"
                onChange={(e) => handleInputChange("lang", e.target.value)}
                className="w-full p-1 border-none bg-gray-100 rounded mt-1"
                placeholder="www.scholorship.com"
              />
            </div>
          </div>
          <label htmlFor="description" className="block font-semibold text-gray-500 mt-4">Brief Description</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 bg-gray-100 border-none rounded mt-1"
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
    section4: (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="question" className="block text-gray-500 mt-4 font-semibold">
                Question
              </label>
              <input
                type="text"
                id="question"
                onChange={(e) => handleInputChange("question", e.target.value)}
                className="w-full p-1 border-none bg-gray-100 rounded mt-1"
                placeholder="Enter Question"
              />
            </div>

          </div>
          <label htmlFor="description" className="block font-semibold text-gray-500 mt-4">Answer </label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'description')}
            className="w-full p-2 border-none bg-gray-100 rounded mt-1"
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
     <CollegeImageSection/>

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

    </div>
  );
}

export default CollegePage;
