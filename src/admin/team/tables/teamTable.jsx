/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Edit, EllipsisVertical, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { useSelector } from "react-redux";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { formatDate } from "../../../utils/helper";

const TeamTable = ({
  handleDelete,
  handleOpenEditModal,
  dropdownVisible,
  setDropdownVisible,
  handleNextPage,
  handlePrevPage,
  currentPage,
  onSetEditData,
}) => {
  const { teams, totalPages } = useSelector((state) => state.teams);
  const { isWriteAccess } = useSelector((state) => state.auth);

  const [deleteId, setDeleteId] = useState(null);
  const dropdownRef = useRef(null);
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    // console.log("Teams updated:", teams);
  }, []);

  return (
    <>
      <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-4 py-3">Member Name</th>
            <th className="px-4 py-3">Contact</th>
            <th className="px-4 py-3">Email ID</th>
            <th className="px-4 py-3">Role Type</th>
            <th className="px-4 py-3">Permissions</th>
            <th className="px-4 py-3">Created At</th>
            <th className="px-4 py-3 w-4">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {teams.length > 0 ? (
            teams.map(
              (item) =>
                item.index === currentPage &&
                item.data.map((member, index) => (
                  <tr
                    key={index}
                    className={`border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700`}
                  >
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
                    <td className="px-4 py-3">
                      {formatDate(member.createdAt)}
                    </td>
                    {isWriteAccess ? (
                      <td className="px-4 py-3 relative flex justify-center items-center group">
                        <button
                          aria-haspopup="true"
                          aria-expanded={
                            dropdownVisible === index ? "true" : "false"
                          }
                          className="focus:outline-none"
                          onClick={(e) => {
                            handleDropdownToggle(e, index);
                            onSetEditData(member);
                          }}
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
                                  onClick={() => {
                                    handleOpenEditModal(member);
                                    setDropdownVisible(null);
                                  }}
                                  className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                                >
                                  <Edit className="w-4 h-4" />
                                  <span>Update Member</span>
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    setDeleteId(member);
                                    setIsModalOpen(!isModalOpen);
                                    setDropdownVisible(null);
                                  }}
                                  // onClick={() => handleDelete(member._id)}
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
                    ) : (
                      <td></td>
                    )}
                  </tr>
                ))
            )
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4 border text-gray-500">
                No Records
              </td>
            </tr>
          )}
        </tbody>
        <TableFooter
          totalPages={totalPages}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          tableData={teams}
          colSpan={7}
        />
      </table>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading={`Delete:  ${deleteId?.firstName} ${deleteId?.lastName}`}
        onDelete={() => {
          handleDelete(deleteId?._id);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default TeamTable;
