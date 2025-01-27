import React, { useEffect, useRef, useState } from "react";
import AddTeamMember from "../../Components/Modals/AddTeamMember";
import { Edit, EllipsisVertical, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import filter_list from '../../assets/filter_list.png'
import UpdateTeamMember from "../../Components/Modals/UpdateTeamMember";
import ConfirmModal from "../../Components/Modals/ConfirmModal";
function Teams() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const teamMembers = useSelector((state) => state.team.teamMembers);
  const [selectedRows, setSelectedRows] = useState({});
  const [modalType, setModalType] = useState('');
  console.log("team", teamMembers);


  const handleOpenAddModal = () => {
    setEditMode(false);
    setModalType('add');
    setSelectedMember(null);
    setIsModalOpen(true);
  };
  const dropdownRef = useRef(null);  // Reference to the dropdown

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

  // const handleOpenEditModal = (member) => {
  //   // Handle opening the edit modal
  //   console.log('Edit member:', member);
  // };

  const handleOpenEditModal = (member) => {
    setEditMode(true);
    setModalType('edit');
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  // const handleDropdownToggle = (event, index) => {
  //   console.log("index", index);
  //   const buttonElement = event.currentTarget;
  //   const rect = buttonElement.getBoundingClientRect();

  //   const spaceAbove = rect.top; // Distance from button to top of the viewport
  //   const spaceBelow = window.innerHeight - rect.bottom; // Distance from button to bottom of the viewport

  //   // Adjust dropdownDirection based on available space
  //   if (spaceBelow < 150 && spaceAbove > 150) {
  //     setDropdownDirection("up"); // Show dropdown upwards
  //   } else {
  //     setDropdownDirection("down"); // Show dropdown downwards
  //   }

  //   setDropdownVisible(index === dropdownVisible ? null : index);
  // };
  const handleCheckboxClick = (index) => {
    setSelectedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <>
      <AddTeamMember
        isOpen={isModalOpen && modalType === 'add'}
        onClose={handleCloseModal}
        editMode={editMode}
        memberToEdit={selectedMember}
      />
      <UpdateTeamMember
        isOpen={isModalOpen && modalType === 'edit'}
        onClose={handleCloseModal}
        editMode={editMode}
        memberToEdit={selectedMember}
      />


      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col ">
        {/* Adjust padding and spacing */}

        <section className="py-5  flex-grow ">
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
                    onClick={handleOpenAddModal}
                    type="button"
                    className="w-full whitespace-nowrap md:w-auto flex items-center justify-center py-2 px-4 text-sm font-semibold  text-gray-700 focus:outline-none bg-[#EDBD05] rounded-lg border border-gray-200 hover:bg-yellow-300   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <svg class="w-6 h-6 p-1 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                    </svg>

                    Add Team Member
                  </button>
                </div>
              </div>
            </div>


            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                      Member Name
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                      Role Type
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

                    {/* <th scope="col" className="px-4 py-3 min-w-[6rem]">
                      Assigned To
                      <svg
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
                      </svg>
                    </th> */}

                    <th scope="col" className="px-4 py-3 min-w-[7rem]">
                      Permissions
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <tr
                      key={index}
                      className={`border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 ${selectedRows[index] ? "bg-[#FFFCC2]" : ""
                        }`}
                    >
                      <td className="px-4 py-3 w-4">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-college-${index}`}
                            type="checkbox"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCheckboxClick(index);
                            }}
                            checked={selectedRows[index] || false}
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
                      <td className="px-4 py-3">{member.name}</td>
                      <td className="px-4 py-3">{member.role}</td>
                      {/* <td className="px-4 py-3">{member.assignedTo}</td> */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        {/* Read & Write Permission */}
                        <span
                          className={`${member.permissions?.readWrite
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            } text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
                        >
                          Read & Write
                        </span>

                        {/* Read Only Permission */}
                        <span
                          className={`${member.permissions?.readOnly
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            } text-xs font-medium px-2.5 py-0.5 rounded`}
                        >
                          Read Only
                        </span>
                      </td>

                      <td className="px-4 py-3 relative">
                        <button
                          className="focus:outline-none"
                          onClick={(e) => handleDropdownToggle(e, 0)}  // Use your index logic
                        >
                          <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </button>
                        {dropdownVisible === index && (
                          <div
                            ref={dropdownRef}
                            className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${dropdownDirection === "up" ? "bottom-full mb-2" : "mt-2"}`}
                          >
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                              <li>
                                <button
                                  onClick={() => handleOpenEditModal('member')}
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Edit className="w-4 h-4" />
                                  <span>Update Member</span>
                                </button>
                              </li>
                            </ul>
                            <div className="py-1">
                              <a
                                href="#"
                                className="flex items-center gap-2 py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                              </a>
                            </div>
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
    </>
  );
}

export default Teams;
