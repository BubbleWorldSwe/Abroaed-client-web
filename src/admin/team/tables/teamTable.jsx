/* eslint-disable react/prop-types */
import { Edit, EllipsisVertical, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";


const TeamTable = ({ teams, handleDelete, handleOpenEditModal, dropdownVisible, setDropdownVisible }) => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
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
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[7rem]">
                            Permissions
                        </th>
                        <th scope="col" className="px-4 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {teams?.map((member, index) => (
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
                            <td className="px-4 py-3">{`${member?.firstName} ${member?.lastName}`}</td>
                            <td className="px-4 py-3">{member?.roleId?.roleName}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                <span
                                    className={`${member.permissions?.readWrite
                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                        } text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
                                >
                                    Read & Write
                                </span>
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
                                    onClick={(e) => handleDropdownToggle(e, index)}
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
                                                    onClick={() =>
                                                        handleOpenEditModal("member", member)
                                                    }
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
                                                onClick={() => handleDelete(member._id)}
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
    )
}

export default TeamTable