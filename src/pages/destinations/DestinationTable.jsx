import { EllipsisVertical, Eye } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCollegeDrawer from "../../Components/Modals/AddCollegeDrawer";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../../slices/destinationSlice";
import AddDestination from "../../Components/Modals/AddDestination";
import filter_list from "../../assets/filter_list.png";

function DestinationTable() {
  // const dispatch = useDispatch();
  // const { destinations, loading, error } = useSelector(
  //   (state) => state.destinations
  // );

  // useEffect(() => {
  //   dispatch(fetchDestinations());
  // }, [dispatch]);

  // if (loading) return <p>Loading destinations...</p>;
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
  const destinations = [
    {
      pageName: "Paris Travel Guide",
      author: "John Doe",
      status: "Published",
      createdAt: "2024-01-15",
    },
    {
      pageName: "Tokyo Adventure",
      author: "Jane Smith",
      status: "Draft",
      createdAt: "2024-02-10",
    },
    {
      pageName: "Exploring Rome",
      author: "Emily Johnson",
      status: "Published",
      createdAt: "2024-03-05",
    },
    {
      pageName: "New York City Highlights",
      author: "Michael Brown",
      status: "Pending Review",
      createdAt: "2024-04-20",
    },
    {
      pageName: "Discovering Sydney",
      author: "Sarah Wilson",
      status: "Published",
      createdAt: "2024-05-12",
    },
  ];

  return (
    <>
      <AddDestination isOpen={isAddModalOpen} onClose={handleCloseAddModal} />{" "}
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col ">
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
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      navigate(
                        `/admin/destinations/${encodeURIComponent(
                          'newDestination'
                        )}`
                      )
                    }
                    type="button"
                    className="w-full whitespace-nowrap md:w-auto flex items-center justify-center py-2 px-4 text-sm font-semibold  text-gray-700 focus:outline-none bg-[#EDBD05] rounded-lg border border-gray-200 hover:bg-yellow-300   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <svg class="w-7 h-7 p-1 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                    </svg>

                    New Destination
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
                      Page Name
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                      Author
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                      Created At
                    </th>

                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {destinations.map((destination, index) => (
                    <tr
                      key={index}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3 w-4">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-destination-${index}`}
                            type="checkbox"
                            onClick={(e) => e.stopPropagation()}
                            className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={`checkbox-destination-${index}`}
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
                        {destination.pageName}
                      </th>

                      <td className="px-4 py-3">{destination.author}</td>
                      <td className="px-4 py-3">{destination.status}</td>
                      <td className="px-4 py-3">{destination.createdAt}</td>

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
                                      `/admin/destinations/${encodeURIComponent(
                                        destination.pageName
                                      )}`
                                    )
                                  }
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Eye className="w-4 h-4" />
                                  <span>
                                    View Details
                                  </span>
                                </button>
                              </li>
                              {/* <li>
                                <button
                                  type="button"
                                  onClick={handleOpenAddModal}
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <span>
                                    Edit
                                  </span>
                                </button>
                              </li> */}
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

export default DestinationTable;
