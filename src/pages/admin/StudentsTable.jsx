import { useEffect, useRef, useState } from "react";
import AddStudentModal from "../../Components/Modals/AddStudentModal";
import { EllipsisVertical, Eye, Plus } from "lucide-react";
import filter_list from '../../assets/filter_list.png'
import ServiceTypePlanStudent from "../../Components/Modals/ServiceTypePlanStudent";
import ConfirmModal from "../../Components/Modals/ConfirmModal";
import AssignTeamMemberStudent from "../../Components/Modals/AssignTeamMemberStudent";
import { useNavigate } from "react-router-dom";


const Students = [
  {
    name: "John Doe",
    level: "UG",
    planType: "Direct Standard",
    counsellor: "Garvit",
    appCount: 3,
  },
  {
    name: "John Doe",
    level: "UG",
    planType: "Direct Standard",
    counsellor: "Garvit",
    appCount: 3,
  },
  {
    name: "John Doe",
    level: "UG",
    planType: "Direct Standard",
    counsellor: "Garvit",
    appCount: 3,
  },
];

function StudentsTable() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [next, setNext] = useState(false);
  const [done, setDone] = useState(false);
  const dropdownRef = useRef(null);
  const [modalType, setModalType] = useState('');
  const navigate = useNavigate();

  const handleOpenAddModal = (modalType) => {
    setIsAddModalOpen(true);
    setModalType(modalType);
    setDropdownVisible(false);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation(); // Prevent the click from propagating
    setDropdownVisible(dropdownVisible === index ? null : index);
    // Optionally, you can adjust dropdown direction based on your layout
    setDropdownDirection("down");
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

  return (
    <>
      <AddStudentModal isOpen={isAddModalOpen && modalType === 'add'} onClose={handleCloseAddModal} setNext={setNext} />
      <ServiceTypePlanStudent isOpen={next} setIsOpen={setNext} onClose={() => setNext(false)} setDone={setDone} setIsAddModalOpen={setIsAddModalOpen} />
      <ConfirmModal
        isOpen={done}
        onClose={() => setDone(false)}
        text={modalType === 'add' ? "Student Added!" : "Team Assigned!"}
      />
      <AssignTeamMemberStudent isOpen={isAddModalOpen && modalType === 'assign'} onClose={handleCloseAddModal} setDone={setDone} />

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
                    onClick={() => handleOpenAddModal('add')}
                    type="button"
                    className="w-full whitespace-nowrap md:w-auto flex items-center justify-center py-2 px-4 text-sm font-semibold  text-gray-700 focus:outline-none bg-[#EDBD05] rounded-lg border border-gray-200 hover:bg-yellow-300   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <svg class="w-6 h-6 p-1 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                    </svg>

                    Add Student
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
                      Student Name
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                      Level
                      {/* <svg
                        className="h-4 w-4 ml-1 inline-block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        />
                      </svg> */}
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[7rem]">
                      Plan Type
                      {/* <svg
                        className="h-4 w-4 ml-1 inline-block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        />
                      </svg> */}
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[6rem]">
                      Counselleor
                      {/* <svg
                        className="h-4 w-4 ml-1 inline-block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        />
                      </svg> */}
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[7rem]">
                      Application Counts                      {/* <svg
                        className="h-4 w-4 ml-1 inline-block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        />
                      </svg> */}
                    </th>

                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Students.map((member, index) => (
                    <tr
                      key={index}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3 w-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            onClick="event.stopPropagation()"
                            className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                      >
                        {/* <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          alt="iMac Front Image"
                          className="h-8 w-auto mr-3"
                        /> */}
                        {member.name}
                      </th>
                      <td className="px-4 py-3"> {member.level}</td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {" "}
                        {member.planType}
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {member.counsellor}
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="bg-gray-100 text-green-800 text-xs font-medium mr-2 px-4 py-1 rounded dark:bg-green-900 dark:text-green-300">
                          {member.appCount}
                        </span>
                      </td>
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
                                  onClick={() => handleOpenAddModal('assign')}
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >

                                  <Plus className="w-4 h-4" />
                                  <span>
                                    Assign Member
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={() =>
                                    navigate(
                                      `/admin/students/${encodeURIComponent(
                                        member.name
                                      )}`
                                    )
                                  }
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Eye className="w-4 h-4" />
                                  <span>
                                    View Profile
                                  </span>
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

export default StudentsTable;
