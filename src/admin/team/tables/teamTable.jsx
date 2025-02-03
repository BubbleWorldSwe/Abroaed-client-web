import {
  ChevronLeft,
  ChevronRight,
  Edit,
  EllipsisVertical,
  Trash2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TeamTable = ({
  teams,
  handleDelete,
  handleOpenEditModal,
  dropdownVisible,
  setDropdownVisible,
  handleNextPage,
  handlePrevPage,
  currentPage,
  page,
  totalPages,
}) => {
  console.log(currentPage, totalPages);
  const getDataLength = () => {
    const pageData = teams?.find((item) => item.index === currentPage);
    return pageData?.data?.length || 0;
  };

  const [selectedRows, setSelectedRows] = useState({});

  const dropdownRef = useRef(null);
  const [dropdownDirection, setDropdownDirection] = useState(null);

  const handleCheckboxClick = (index) => {
    setSelectedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
    setDropdownDirection("down");
  };
  const handleClickOutside = (e) => {
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

  useEffect(() => {
    console.log("Teams updated:", teams);
  }, [teams, currentPage, totalPages]);

  return (
    <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                readOnly
                id="checkbox-all"
                type="checkbox"
                className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th className="px-4 py-3">Member Name</th>
          <th className="px-4 py-3">Phone Number</th>
          <th className="px-4 py-3">Email ID</th>
          <th className="px-4 py-3">Role Type</th>
          <th className="px-4 py-3">Permissions</th>
          <th className="px-4 py-3 w-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(
          (item) =>
            item.index === currentPage &&
            item.data.map((member, index) => (
              <tr
                key={index}
                className={`border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedRows[index] ? "bg-yellow-100" : ""
                }`}
              >
                <td className="px-4 py-3 w-4">
                  <div className="flex items-center">
                    <input
                      readOnly
                      id={`checkbox-college-${index}`}
                      type="checkbox"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCheckboxClick(index);
                      }}
                      checked={selectedRows[index] || false}
                      className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <td className="px-4 py-3">{`${member?.firstName} ${member?.lastName}`}</td>
                <td className="px-4 py-3">+91 {member?.mobile}</td>
                <td className="px-4 py-3">{member?.email}</td>
                <td className="px-4 py-3">{member?.roleId?.roleName}</td>
                <td className="px-4 py-3">
                  {member.isWriteAccess ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Read & Write
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Read Only
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 relative flex justify-center items-center group">
                  <button
                    aria-haspopup="true"
                    aria-expanded={dropdownVisible === index ? "true" : "false"}
                    className="focus:outline-none"
                    onClick={(e) => handleDropdownToggle(e, index)}
                  >
                    <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  </button>

                  {dropdownVisible === index && (
                    <div
                      ref={dropdownRef}
                      className={`absolute right-0 min-w-max bg-white dark:bg-gray-800 shadow-lg rounded-1xl z-50 transition-all duration-300 ease-in-out ${
                        dropdownDirection === "up"
                          ? "bottom-full mb-2"
                          : "top-full mt-2"
                      }`}
                    >
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <button
                            onClick={() =>
                              handleOpenEditModal("member", member)
                            }
                            className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                          >
                            <Edit className="w-4 h-4" />
                            <span>Update Member</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleDelete(member._id)}
                            className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))
        )}
      </tbody>
      <tfoot>
        <tr className="bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <td className="px-4 py-3" colSpan="7">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">
                Showing {getDataLength()} results
              </span>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>

                <span className="text-gray-600 dark:text-gray-300">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TeamTable;
