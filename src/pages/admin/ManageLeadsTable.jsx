import React, { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Edit,
  EllipsisVertical,
  Pencil,
  Plus,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { assignTeamMember } from "../../slices/leadSlice";
import AppointmentModal from "../../Components/Modals/AppointmentModal";
import AssignTeamModal from "../../Components/Modals/AssignTeamMemberModal";
import filter_list from "../../assets/filter_list.png";
import UpdateLeadStatus from "../../Components/Modals/UpdateLeadStatus";
function ManageLeadsTable() {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.leads.leads);
  console.log("leads", leads);
  const handleDelete = (id) => {
    dispatch(deleteLead(id));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const dropdownRef = useRef(null); // Reference to the dropdown
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAppointmentModal, setshowAppointmentModal] = useState(false);
  const [showTeamModal, setshowTeamModal] = useState(false);

  const handleScheduleAppointment = (member) => {
    setSelectedMember(member);
    setshowAppointmentModal(true);
    setDropdownVisible(false);
  };

  const handleAssignTeamMember = (member) => {
    setSelectedMember(member);
    setshowTeamModal(true);
    setDropdownVisible(false);
  };
  const handleUpdateTeamMember = (member) => {
    setSelectedMember(member);
    setShowUpdateModal(true);
    setDropdownVisible(false);
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
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {showTeamModal && (
        <AssignTeamModal
          leadId={selectedMember.id}
          leadName={selectedMember.name}
          team={{
            counsellor: selectedMember.counsellor,
            backendManager: selectedMember.backendManager,
            mentor: selectedMember.mentor,
          }}
          onClose={() => setshowTeamModal(false)}
        />
      )}

      {showAppointmentModal && (
        <AppointmentModal
          leadId={selectedMember.id}
          onClose={() => setshowAppointmentModal(false)}
        />
      )}
      {showUpdateModal && (
        <UpdateLeadStatus
          leadId={selectedMember.id}
          onClose={() => setShowUpdateModal(false)}
        />
      )}

      <div className="min-h-screen bg-white dark:bg-gray-900 ">
        {/* Adjust padding and spacing */}

        <section className="font-rethink flex-grow py-5">
          <div className="flex flex-col  py-2 mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative ">
            <div className=" dark:border-gray-700 mx-4">
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
            </div>
          </div>

          <div className="flex-grow mt-5 overflow-auto bg-white dark:bg-gray-800 px-5">
            <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4"></th>
                  <th scope="col" className="px-4 py-3 min-w-[14rem]">
                    Student Name
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[10rem]">
                    Contact number
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Lead Type
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[6rem]">
                    Counsellor
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Lead Status
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[12rem]">
                    Appointment
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Creation Date
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads.map((member, index) => (
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 w-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
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
                      {member.name}
                    </th>
                    <td className="px-4 py-3"> {member.contact}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {member.leadType}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {member.counsellor}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="bg-[#FDF6B2] text-green-800  font-medium mr-2 p-2 rounded dark:bg-green-900 dark:text-green-300">
                        {member.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-[#FDE8E8] rounded-md p-2">
                        {member.appointment.date
                          ? `${member.appointment.date} at ${member.appointment.timeSlot} (${member.appointment.type})`
                          : "No appointment"}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-[#111928] bg-gray-100 p-2 rounded-md">
                        {member.createdAt}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        ref={dropdownRef}
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
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="apple-imac-27-dropdown-button"
                          >
                            <li>
                              <button
                                onClick={() => handleAssignTeamMember(member)}
                                className="flex text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                <Plus className="w-5 h-5" />
                                <span>Assign Team</span>
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => handleUpdateTeamMember(member)}
                                className="flex text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                <Pencil className="w-4 h-4" />
                                <span>Update Lead Status</span>
                              </button>
                            </li>

                            <li>
                              <button
                                onClick={() =>
                                  handleScheduleAppointment(member)
                                }
                                className="flex whitespace-nowrap text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                <CalendarDays className="w-4 h-4" />
                                <span>Schedule Appointment</span>
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
        </section>
      </div>
    </>
  );
}

export default ManageLeadsTable;
