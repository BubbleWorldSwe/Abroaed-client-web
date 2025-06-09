/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  CalendarDays,
  Delete,
  EllipsisVertical,
  Eye,
  Pencil,
  Plus,
  Trash,
  Trash2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { useDispatch, useSelector } from "react-redux";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { formatDateTime } from "../../../utils/helper";
import { setSelectedLead } from "../../../redux/actions/leadsActions";
import { TableNoData } from "../../../commons/components/table/tableNoData";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";

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
}) => {
  const dispatch = useDispatch();
  const { leads, totalPages } = useSelector((state) => state.leads);

  console.log(leads);
  const { isWriteAccess, role } = useSelector((state) => state.auth);

  const [deleteId, setDeleteId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [dropdownDirection, setDropdownDirection] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleViewDetails = (lead) => {
    dispatch(setSelectedLead(lead));
    navigate(`/admin/leads/${encodeURIComponent(lead?._id)}`, { state: lead });
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

  function getCounsellor(studentProfile) {
    const counsellor = studentProfile?.find(
      (member) => member?.roleId?.roleName === "Counsellor"
    );
    return counsellor || null;
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Student Name
            </th>
            <th scope="col" className="px-4 py-3">
              Contact number
            </th>
            <th scope="col" className="px-4 py-3">
              Email ID
            </th>
            <th scope="col" className="px-4 py-3">
              Lead Source
            </th>
            <th scope="col" className="px-4 py-3">
              Entity
            </th>
            <th scope="col" className="px-4 py-3">
              Lead Status
            </th>
            <th className="px-4 py-3">POC</th>
            <th scope="col" className="px-4 py-3">
              Appointment
            </th>
            <th scope="col" className="px-4 py-3">
              Creation At
            </th>
            <th scope="col" className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {leads.length > 0 ? (
            leads.some(
              (item) => item.index === currentPage && item.data.length > 0
            ) ? (
              leads.map(
                (item) =>
                  item.index === currentPage &&
                  item.data.map((lead, index) => {
                    // let counsellor = getCounsellor(lead?.assignTeamMembers);
                    let counsellor = lead?.assignTeamMembers.at(-1);
                    return (
                      <tr
                        key={index}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 align-top"
                      >
                        <td
                          className="px-4 py-3"
                          onClick={() => handleViewDetails(lead)}
                        >
                          {`${lead?.user?.firstName} ${lead?.user?.lastName}`}
                        </td>
                        <td className="px-4 py-3">{lead?.user?.mobile}</td>
                        <td className="px-4 py-3">{lead?.user?.email}</td>
                        <td className="px-4 py-3">{lead?.source}</td>
                        <td className="px-4 py-3">{lead?.entity}</td>
                        <td className="px-4 py-3">
                          {lead?.status ? (
                            <Tooltip
                              content={
                                <div>
                                  {lead?.remark || "No remarks available"}
                                </div>
                              }
                              placement="bottom"
                              className="!bg-white !text-gray-900 !shadow-lg !border !border-gray-300"
                            >
                              <span
                                className={`font-medium p-2 rounded ${
                                  lead.status.toLowerCase() === "lost"
                                    ? "bg-[#FDE8E8] text-[#9B1C1C]"
                                    : lead.status.toLowerCase() === "nurture"
                                    ? "bg-[#FDF6B2] text-[#723B13]"
                                    : lead.status.toLowerCase() === "converted"
                                    ? "bg-[#DEF7EC] text-[#03543F]"
                                    : "bg-gray-200"
                                }`}
                              >
                                {lead.status.charAt(0).toUpperCase() +
                                  lead.status.slice(1).toLowerCase()}
                              </span>
                            </Tooltip>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {counsellor?.firstName || counsellor?.lastName
                            ? `${counsellor?.firstName} ${counsellor?.lastName}`
                            : null}
                        </td>

                        <td className="px-4 py-3">
                          <span>
                            {lead?.scheduleDetails
                              ? `${
                                  lead?.scheduleDetails?.appointmentType
                                } at ${formatDateTime(
                                  lead?.scheduleDetails?.preferredSlot
                                )}`
                              : "To be Scheduled"}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span>{formatDateTime(lead?.createdAt)}</span>
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
                                dropdownDirection === "up"
                                  ? "bottom-full mb-2"
                                  : "mt-2"
                              }`}
                            >
                              <ul
                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="apple-imac-27-dropdown-button"
                              >
                                {isWriteAccess && (
                                  <>
                                    {role !== "Counsellor" &&
                                      role !== "Backend Associate" && (
                                        <li>
                                          <button
                                            onClick={() =>
                                              handleAssignTeamMember(lead)
                                            }
                                            className="flex text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                          >
                                            <Plus className="w-5 h-5" />
                                            <span>Assign Team</span>
                                          </button>
                                        </li>
                                      )}

                                    <li>
                                      <button
                                        onClick={() =>
                                          handleUpdateTeamMember(lead)
                                        }
                                        className="flex text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        <Pencil className="w-4 h-4" />
                                        <span>Update Lead Status</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() =>
                                          handleScheduleAppointment(lead)
                                        }
                                        className="flex whitespace-nowrap text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        <CalendarDays className="w-4 h-4" />
                                        <span>Schedule Appointment</span>
                                      </button>
                                    </li>
                                  </>
                                )}
                                <li>
                                  <button
                                    type="button"
                                    onClick={() => handleViewDetails(lead)}
                                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    <Eye className="w-4 h-4" />
                                    <span>View Profile</span>
                                  </button>
                                </li>
                                {isWriteAccess && role === "Admin" && (
                                  <li>
                                    <button
                                      onClick={() => {
                                        setDeleteId(lead);
                                        setIsModalOpen(!isModalOpen);
                                      }}
                                      className="flex whitespace-nowrap text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                      <span>Delete</span>
                                    </button>
                                  </li>
                                )}
                              </ul>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
              )
            ) : (
              <TableNoData colSpan={9} />
            )
          ) : (
            <TableNoData colSpan={9} />
          )}
        </tbody>

        <TableFooter
          totalPages={totalPages}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          tableData={leads}
          colSpan={10}
        />
      </table>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading={`Delete : ${deleteId?.user?.firstName} ${deleteId?.user?.lastName}`}
        onDelete={() => {
          handleDelete(deleteId?._id);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default LeadTable;
