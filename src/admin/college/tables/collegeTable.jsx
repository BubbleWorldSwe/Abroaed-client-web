/* eslint-disable react/prop-types */
import { EllipsisVertical, Eye, Pencil } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const CollegeTable = ({ colleges, setIsAddModalOpen }) => {
    const [dropdownDirection, setDropdownDirection] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(null);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
        setDropdownVisible(false);
    };

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
        <div>
            <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4"></th>
                        <th scope="col" className="px-4 py-3 min-w-[14rem]">
                            College Name
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[10rem]">
                            City
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[10rem]">
                            Country
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[14rem]">
                            Website
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[14rem]">
                            Email
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[10rem]">
                            Contact
                        </th>
                        <th scope="col" className="px-4 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {colleges?.map((college, index) => (
                        <tr
                            key={index}
                            className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <td className="px-4 py-3 w-4">
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-college-${index}`}
                                        type="checkbox"
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor={`checkbox-college-${index}`}
                                        className="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>

                            <th
                                scope="row"
                                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {college.name}
                            </th>

                            <td className="px-4 py-3">{college.city}</td>
                            <td className="px-4 py-3">{college.country}</td>
                            <td className="px-4 py-3">
                                <a
                                    href={college.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {college.website}
                                </a>
                            </td>
                            <td className="px-4 py-3">{college.email}</td>
                            <td className="px-4 py-3">{college.contact}</td>

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
                                                    onClick={() =>
                                                        navigate(
                                                            `/admin/colleges/${encodeURIComponent(
                                                                college.name
                                                            )}`
                                                        )
                                                    }
                                                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                    <span>
                                                        View Details
                                                    </span>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    type="button"
                                                    onClick={handleOpenAddModal}
                                                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                    <span>
                                                        Edit
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
        </div>
    )
}

export default CollegeTable