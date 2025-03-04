/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  CalendarDays,
  EllipsisVertical,
  Eye,
  Pencil,
  Plus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { useSelector } from "react-redux";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { formatDateTime } from "../../../utils/helper";

const LeadTable = ({
  handleAssignTeamMember,
  handleUpdateTeamMember,
  handleScheduleAppointment,
  dropdownVisible,
  setDropdownVisible,

  currentPage,
  handleNextPage,
  handlePrevPage,
  handleDelete,
  onUpdate,
}) => {
  const { leads, totalPages } = useSelector((state) => state.leads);

  const [dropdownDirection, setDropdownDirection] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  return (
    <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <CheckboxField
              onClick={(e) => e.stopPropagation()}
              id={`checkbox-college-all`}
              htmlFor={`checkbox-college-all`}
            />
          </th>{" "}
          <th scope="col" className="px-4 py-3 min-w-[14rem]">
            Student Name
          </th>
          <th scope="col" className="px-4 py-3 min-w-[10rem]">
            Contact number
          </th>
          <th scope="col" className="px-4 py-3 min-w-[7rem]">
            Lead Source
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
          <th scope="col" className="px-4 py-3"></th>
        </tr>
      </thead>
      <tbody>
        {leads.map(
          (item) =>
            item.index === currentPage &&
            item.data.map((lead, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 align-top"
              >
                <td className="px-4 py-3 w-4">
                  <CheckboxField
                    onClick={(e) => e.stopPropagation()}
                    id={`checkbox-college-${index}`}
                    htmlFor={`checkbox-college-${index}`}
                  />
                </td>

                <td className="px-4 py-3">
                  {`${lead?.user?.firstName} ${lead?.user?.lastName}`}
                </td>
                <td className="px-4 py-3">{lead?.user?.mobile}</td>
                <td className="px-4 py-3">{lead?.source}</td>

                <td className="px-4 py-3">{lead?.counsellor}</td>

                <td className="px-4 py-3">
                  <span
                    className={`font-medium p-2 rounded ${
                      lead?.status === "Nurture"
                        ? "bg-[#FDF6B2] text-[#723B13]"
                        : lead?.status === "Converted"
                        ? "bg-[#DEF7EC] text-[#03543F]"
                        : lead?.status === "Lost"
                        ? "bg-[#FDE8E8] text-[#9B1C1C]"
                        : "bg-gray-200"
                    }`}
                  >
                    {lead?.status}
                  </span>
                </td>
                <td className="px-4 py-2 max-w-[12rem]">
                  <span className="bg-[#FDE8E8] rounded-md p-2 block whitespace-normal break-words">
                    {lead?.scheduleDetails
                      ? `${
                          lead?.scheduleDetails?.appointmentType
                        } at ${formatDateTime(
                          lead?.appointment?.preferredSlot
                        )}`
                      : "To be Scheduled"}
                  </span>
                </td>

                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="text-[#111928] bg-gray-100 p-2 rounded-md">
                    {formatDateTime(lead?.createdAt)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    ref={dropdownRef}
                    className="focus:outline-none"
                    onClick={(e) => {
                      handleDropdownToggle(e, index);
                    }}
                  >
                    <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </button>
                  {dropdownVisible === index && (
                    <div
                      className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${
                        dropdownDirection === "up" ? "bottom-full mb-2" : "mt-2"
                      }`}
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-imac-27-dropdown-button"
                      >
                        <li>
                          <button
                            onClick={() => handleAssignTeamMember(lead)}
                            className="flex text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <Plus className="w-5 h-5" />
                            <span>Assign Team</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleUpdateTeamMember(lead)}
                            className="flex text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <Pencil className="w-4 h-4" />
                            <span>Update Lead Status</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleScheduleAppointment(lead)}
                            className="flex whitespace-nowrap text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <CalendarDays className="w-4 h-4" />
                            <span>Schedule Appointment</span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() =>
                              navigate(
                                `/admin/leads/${encodeURIComponent(lead?.name)}`
                              )
                            }
                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Profile</span>
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

      <TableFooter
        totalPages={totalPages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        tableData={leads}
        colSpan={9}
      />
    </table>
  );
};

export default LeadTable;
