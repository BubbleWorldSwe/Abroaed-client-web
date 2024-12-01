import { EllipsisVertical } from "lucide-react";
import React, { useState } from "react";

const Colleges = [
  {
    name: "Harvard University",
    city: "Cambridge",
    country: "USA",
    website: "https://www.harvard.edu",
    email: "admissions@harvard.edu",
    contact: "+1 617-495-1000",
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
    name: "Stanford University",
    city: "Stanford",
    country: "USA",
    website: "https://www.stanford.edu",
    email: "admissions@stanford.edu",
    contact: "+1 650-723-2300",
  },
  {
    name: "University of Toronto",
    city: "Toronto",
    country: "Canada",
    website: "https://www.utoronto.ca",
    email: "admissions@utoronto.ca",
    contact: "+1 416-978-2011",
  },
  {
    name: "Australian National University",
    city: "Canberra",
    country: "Australia",
    website: "https://www.anu.edu.au",
    email: "admissions@anu.edu.au",
    contact: "+61 2 6125 5111",
  },
];

function CollegeTable() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
    setDropdownVisible(false);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleDropdownToggle = (event, index) => {
    console.log("index", index);
    const buttonElement = event.currentTarget;
    const rect = buttonElement.getBoundingClientRect();

    const spaceAbove = rect.top; // Distance from button to top of the viewport
    const spaceBelow = window.innerHeight - rect.bottom; // Distance from button to bottom of the viewport

    // Adjust dropdownDirection based on available space
    if (spaceBelow < 150 && spaceAbove > 150) {
      setDropdownDirection("up"); // Show dropdown upwards
    } else {
      setDropdownDirection("down"); // Show dropdown downwards
    }

    setDropdownVisible(index === dropdownVisible ? null : index);
  };
  return (
    <div className="min-h-screen flex flex-col p-2">
      {/* Header */}
      <header className="p-4 bg-white text-white">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Admin
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  All Colleges
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </header>

      {/* Section - Takes the remaining space */}
      <section className="bg-gray-300 dark:bg-gray-900 py-3 sm:py-5 flex-grow">
        <div className="flex flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg">
          <div className="border-b dark:border-gray-700 mx-4">
            <div className="flex items-center justify-between space-x-4 pt-3">
              <div className="flex-1 flex items-center space-x-3">
                <h5 className="dark:text-white font-semibold"> All Colleges</h5>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
              <div className="w-full  flex justify-between space-y-3 md:space-y-0 md:flex-row md:items-center">
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
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search..."
                      required=""
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-0 bottom-0 top-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
                <div className="flex items-center space-x-4">
                  <div className="flex gap-2">
                    <button
                      id="configurationDropdownButton"
                      data-dropdown-toggle="configurationDropdown"
                      type="button"
                      className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 mr-2 text-gray-400"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Add College
                    </button>
                    <button
                      id="configurationDropdownButton"
                      data-dropdown-toggle="configurationDropdown"
                      type="button"
                      className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 mr-2 text-gray-400"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Upload CSV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-4 pb-3 flex flex-wrap">
            <div className="hidden md:flex items-center text-sm font-medium text-gray-900 dark:text-white mr-4 mt-3">
              Show only:
            </div>
            <div className="flex flex-wrap">
              <div className="flex items-center mt-3 mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  All
                </label>
              </div>
              <div className="flex items-center mr-4 mt-3">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Active products
                </label>
              </div>
              <div className="flex items-center mr-4 mt-3">
                <input
                  id="inline-3-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-3-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Pending products
                </label>
              </div>
              <div className="flex items-center mr-4 mt-3">
                <input
                  id="inline-4-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-4-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Inactive products
                </label>
              </div>
            </div>
          </div>
          <div className="flex-grow overflow-auto bg-white dark:bg-gray-800">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                {Colleges.map((college, index) => (
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
                          className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${
                            dropdownDirection === "up"
                              ? "bottom-full mb-2"
                              : "mt-2"
                          }`}
                        >
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <button
                                type="button"
                                onClick={handleOpenAddModal}
                                className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                View Details
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
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-4 pt-3 pb-4"
            aria-label="Table navigation"
          >
            <div className="text-xs flex items-center space-x-5">
              <div>
                <div className="text-gray-500 dark:text-gray-400 mb-1">
                  Purchase price
                </div>
                <div className="dark:text-white font-medium">$ 3,567,890</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 mb-1">
                  Total selling price
                </div>
                <div className="dark:text-white font-medium">$ 8,489,400</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
              >
                Print barcodes
              </button>
              <button
                type="button"
                className="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
              >
                Duplicate
              </button>
              <button
                type="button"
                className="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CollegeTable;
