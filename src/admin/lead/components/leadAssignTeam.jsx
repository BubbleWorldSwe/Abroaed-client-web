/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import UpdateLeadAssignTeamModal from "../modals/updateLeadAssignTeamModal";
import { useSelector } from "react-redux";

const LeadAssignTeam = ({ onOpenModal }) => {
  const leadProfile = useSelector((state) => state?.leads?.selectedLead);
  const [selected, setSelected] = useState({
    counsellor: null,
    associate: null,
    manager: null,
  });
  const [openModal, setOpenModal] = useState(false);
  const handleCloseAddModal = () => {
    setOpenModal(false);
  };
  const [deleteId, setDeleteId] = useState(null);
  const handleOpenAddModal = () => {
    setOpenModal(true);
  };
  // State for toggling dropdowns
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    counsellor: false,
    associate: false,
    manager: false,
  });

  // Refs for detecting clicks outside the dropdowns
  const refs = {
    counsellor: useRef(null),
    associate: useRef(null),
    manager: useRef(null),
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (e) => {
    for (const key in refs) {
      if (refs[key] && !refs[key]?.current?.contains(e.target)) {
        setIsDropdownOpen((prev) => ({ ...prev, [key]: false }));
      }
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility and close others
  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
    for (const key in isDropdownOpen) {
      if (key !== dropdown) {
        setIsDropdownOpen((prev) => ({ ...prev, [key]: false }));
      }
    }
  };
  const handleSelect = (dropdown, item) => {
    setSelected((prev) => ({ ...prev, [dropdown]: item }));
    setIsDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
  };

  return (
    <>
      <div className="w-full mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
        {/* Header with title and pencil icon button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Assigned Team</h2>
          <button
            onClick={handleOpenAddModal}
            className="group relative p-3 rounded-full transition-all duration-300 bg-white hover:bg-gray-200"
          >
            <img
              onClick={onOpenModal}
              src={pencil}
              alt="pencil-img"
              className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
            />
          </button>
        </div>
        {/* Grid container for team details */}
        <table className="w-full px-5 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-500  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Mobile No.</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {leadProfile?.assignTeamMembers?.length > 0 ? (
              leadProfile?.assignTeamMembers.map((data, i) => (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className=" px-4 py-3 font-semibold">
                    {`${data?.firstName} ${data?.lastName}`}
                  </td>

                  <td className=" px-4 py-3">{data?.email}</td>
                  <td className=" px-4 py-3">{data?.mobile}</td>
                  <td className=" px-4 py-3">{data?.roleId?.roleName}</td>

                  <td className="text-center w-[100px]">
                    <div className="flex items-center justify-center space-x-5">
                      <img
                        src={trash}
                        alt="Delete"
                        className="w-5 h-5 cursor-pointer"
                        //  onClick={() => handleDeleteClick(data?._id)}
                        onClick={() => {
                          setDeleteId(data?._id);
                          // setIsModalOpen(!isModalOpen);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-4 border text-gray-500"
                >
                  No Records
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeadAssignTeam;
