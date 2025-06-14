/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Tooltip } from "flowbite-react";
import { EllipsisVertical, Eye, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { useDispatch, useSelector } from "react-redux";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { setSelectedStudent } from "../../../redux/actions/studentsActions";
import { TableNoData } from "../../../commons/components/table/tableNoData";
import { formatDate, formatDateTime } from "../../../utils/helper";
import { adminTable3dotsClass } from "../../../utils/className";

const StudentTable = ({
  handleOpenAddModal,
  setDropdownVisible,
  dropdownVisible,
  currentPage,
  handleNextPage,
  handlePrevPage,
  handleAssignTeamMember,
}) => {
  const dispatch = useDispatch();
  const { students, totalPages } = useSelector((state) => state.students);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const { isWriteAccess } = useSelector((state) => state.auth);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  function getCounsellor(studentProfile) {
    const counsellor = studentProfile?.find(
      (member) => member?.roleId?.roleName === "Counsellor"
    );
    return counsellor || null;
  }

  const handleViewDetails = (student) => {
    dispatch(setSelectedStudent(student));
    navigate(`/admin/students/${encodeURIComponent(student?._id)}`, {
      state: student,
    });
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-4 py-3">Student Name</th>
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3">Phone Number</th>
          <th className="px-4 py-3">Service</th>
          <th className="px-4 py-3">Counsellor</th>
          <th className="px-4 py-3">Application Counts</th>
          <th className="px-4 py-3">Updated At</th>
          <th className="px-4 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.some(
            (item) => item.index === currentPage && item.data.length > 0
          ) ? (
            students.map(
              (item) =>
                item.index === currentPage &&
                item.data.map((member, index) => {
                  let counsellor = getCounsellor(member?.assignTeamMembers);
                  return (
                    <tr
                      key={index}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td
                        onClick={() => handleViewDetails(member)}
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                      >
                        {`${member?.user?.firstName} ${member?.user?.lastName}`}
                      </td>
                      <td className="px-4 py-3">{member?.user?.email}</td>
                      <td className="px-4 py-3">{member?.user?.mobile}</td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {member?.servicerType || "--"}
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {counsellor?.firstName || counsellor?.lastName
                          ? `${counsellor?.firstName} ${counsellor?.lastName}`
                          : null}
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {member?.applicationCount}
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {formatDateTime(member?.updatedAt)}
                      </td>
                      <td className="px-4 py-3 relative">
                        <div className="relative inline-block">
                          <button
                            className="focus:outline-none"
                            onClick={(e) => handleDropdownToggle(e, index)}
                          >
                            <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                          </button>
                          {dropdownVisible === index && (
                            <div
                              ref={dropdownRef}
                              className={adminTable3dotsClass}
                            >
                              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                                {isWriteAccess && (
                                  <li>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        handleOpenAddModal("assign");
                                        handleAssignTeamMember(member);
                                      }}
                                      className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      <Plus className="w-4 h-4" />
                                      <span>Assign Member</span>
                                    </button>
                                  </li>
                                )}
                                <li>
                                  <button
                                    type="button"
                                    onClick={() => handleViewDetails(member)}
                                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    <Eye className="w-4 h-4" />
                                    <span>View Profile</span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
            )
          ) : (
            <TableNoData colSpan={8} />
          )
        ) : (
          <TableNoData colSpan={8} />
        )}
      </tbody>

      <TableFooter
        totalPages={totalPages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        tableData={students}
        colSpan={8}
      />
    </table>
  );
};

export default StudentTable;
