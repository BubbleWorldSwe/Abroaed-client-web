import { EllipsisVertical, Eye, Plus, Upload } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCollegeDrawer from "../../Components/Modals/AddCollegeDrawer";
import { useDispatch, useSelector } from "react-redux";
import { fetchColleges } from "../../slices/collegeSlice";
import filter_list from "../../assets/filter_list.png"
function CollegeTable() {
  // const dispatch = useDispatch();
  // const { colleges, loading, error } = useSelector((state) => state.colleges);

  // useEffect(() => {
  //   dispatch(fetchColleges());
  // }, [dispatch]);

  // if (loading) return <p>Loading colleges...</p>;
  // if (error) return <p>Error: {error}</p>;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const dropdownRef = useRef(null);

  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
    setDropdownVisible(false);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleClickOutside = (e) => {
    // Close dropdown if the click is outside of the dropdown area
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation(); // Prevent the click from propagating
    setDropdownVisible(dropdownVisible === index ? null : index);
    // Optionally, you can adjust dropdown direction based on your layout
    setDropdownDirection("down");
  };

  const colleges = [
    {
      name: "Harvard University",
      city: "Cambridge",
      country: "USA",
      website: "https://www.harvard.edu",
      email: "info@harvard.edu",
      contact: "+1 617-495-1000",
    },
    {
      name: "Stanford University",
      city: "Stanford",
      country: "USA",
      website: "https://www.stanford.edu",
      email: "info@stanford.edu",
      contact: "+1 650-723-2300",
    },
    {
      name: "University of Oxford",
      city: "Oxford",
      country: "UK",
      website: "https://www.ox.ac.uk",
      email: "info@ox.ac.uk",
      contact: "+44 1865 270000",
    },
    {
      name: "University of Cambridge",
      city: "Cambridge",
      country: "UK",
      website: "https://www.cam.ac.uk",
      email: "info@cam.ac.uk",
      contact: "+44 1223 337733",
    },
    {
      name: "Massachusetts Institute of Technology",
      city: "Cambridge",
      country: "USA",
      website: "https://www.mit.edu",
      email: "info@mit.edu",
      contact: "+1 617-253-1000",
    },
  ];



  return (
    <>
      <AddCollegeDrawer isOpen={isAddModalOpen} onClose={handleCloseAddModal} />{" "}
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
        <section className=" py-3 sm:py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative  sm:rounded-lg">
            <div className=" dark:border-gray-700 mx-4">
              <div className="flex justify-between  py-3">
                <div className="w-full  flex  space-y-3 md:space-y-0  ">
                  <form className="w-full md:max-w-sm flex-1 md:mr-4">
                    <label
                      htmlFor="default-search"
                      className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search Teams"
                        required=""
                      />

                    </div>
                  </form>
                  <div className="flex items-center space-x-4">
                    <img src={filter_list} alt="filterIcon" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsAddModalOpen(true)}
                    type="button"
                    className="w-full whitespace-nowrap md:w-auto flex items-center gap-2  py-1 px-4 text-sm font-semibold  text-gray-700 focus:outline-none bg-[#EDBD05] rounded-lg border border-gray-200 hover:bg-yellow-300   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >

                    <Plus className="w-4 h-4" />
                    New College
                  </button>
                  <button
                    onClick={() => { }}
                    type="button"
                    className="w-full whitespace-nowrap md:w-auto flex items-center gap-2  py-1 px-4 text-sm font-semibold  text-gray-700 focus:outline-none bg-[#EDBD05] rounded-lg border border-gray-200 hover:bg-yellow-300   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >

                    <Upload className="w-4 h-4" />
                    Upload CSV
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4"></th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                      College Name
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                      City
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                      Country
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                      Website
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                      Contact
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {colleges.map((college, index) => (
                    <tr
                      key={index}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3 w-4">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-college-${index}`}
                            type="checkbox"
                            onClick={(e) => e.stopPropagation()}
                            className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={`checkbox-college-${index}`}
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>

                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {college.name}
                      </th>

                      <td className="px-4 py-3">{college.city}</td>
                      <td className="px-4 py-3">{college.country}</td>
                      <td className="px-4 py-3">
                        <a
                          href={college.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {college.website}
                        </a>
                      </td>
                      <td className="px-4 py-3">{college.email}</td>
                      <td className="px-4 py-3">{college.contact}</td>

                      <td className="px-4 py-3">
                        <button
                          className="focus:outline-none"
                          onClick={(e) => handleDropdownToggle(e, index)}
                        >
                          <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </button>
                        {dropdownVisible === index && (
                          <div
                            ref={dropdownRef}
                            className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${dropdownDirection === "up"
                              ? "bottom-full mb-2"
                              : "mt-2"
                              }`}
                          >
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                              <li>
                                <button
                                  type="button"
                                  onClick={() =>
                                    navigate(
                                      `/admin/colleges/${encodeURIComponent(
                                        college.name
                                      )}`
                                    )
                                  }
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Eye className="w-5 h-5" />
                                  <span>
                                    View Details
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={handleOpenAddModal}
                                  className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Edit
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default CollegeTable;
