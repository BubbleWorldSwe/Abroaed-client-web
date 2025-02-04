/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { EllipsisVertical, Eye, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentTable = ({ Students, handleOpenAddModal, setDropdownVisible, dropdownVisible }) => {
    const [dropdownDirection, setDropdownDirection] = useState(null);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const handleClickOutside = (e) => {
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

    const handleDropdownToggle = (e, index) => {
        e.stopPropagation();
        setDropdownVisible(dropdownVisible === index ? null : index);
        setDropdownDirection("down");
    };

    return (
        <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4"></th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                        Student Name
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                        Level
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[7rem]">
                        Plan Type
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[6rem]">
                        Counselleor

                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[7rem]">
                        Application Counts
                    </th>
                    <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {Students?.map((member, index) => (
                    <tr
                        key={index}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <td className="px-4 py-3 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    onClick="event.stopPropagation()"
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
                        <td className="px-4 py-3"> {member.level}</td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {member.planType}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {member.counsellor}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span className="bg-gray-100 text-green-800 text-xs font-medium mr-2 px-4 py-1 rounded dark:bg-green-900 dark:text-green-300">
                                {member.appCount}
                            </span>
                        </td>
                        <td className="px-4 py-3">
                            <button
                                className="focus:outline-none"
                                onClick={(e) => handleDropdownToggle(e, index)}
                            >
                                <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                            </button>
                            {dropdownVisible === index && (
                                <div
                                    ref={dropdownRef}
                                    className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${dropdownDirection === "up"
                                        ? "bottom-full mb-2"
                                        : "mt-2"
                                        }`}
                                >
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => handleOpenAddModal('assign')}
                                                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <Plus className="w-4 h-4" />
                                                <span>
                                                    Assign Member
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    navigate(
                                                        `/admin/students/${encodeURIComponent(
                                                            member.name
                                                        )}`
                                                    )
                                                }
                                                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <Eye className="w-4 h-4" />
                                                <span>
                                                    View Profile
                                                </span>
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
    )
}

export default StudentTable;