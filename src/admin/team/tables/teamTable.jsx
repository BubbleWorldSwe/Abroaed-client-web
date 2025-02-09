import { Edit, EllipsisVertical, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { TableFooter } from "../../../commons/components/table/tableFooter";

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
            <CheckboxField
              onClick={(e) => e.stopPropagation()}
              id={`checkbox-college-all`}
              htmlFor={`checkbox-college-all`}
            />
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
                  <CheckboxField
                    onClick={(e) => e.stopPropagation()}
                    id={`checkbox-teams-${index}`}
                    htmlFor={`checkbox-teams-${index}`}
                  />
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
      <TableFooter
        totalPages={totalPages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        tableData={teams}
      />
    </table>
  );
};

export default TeamTable;
