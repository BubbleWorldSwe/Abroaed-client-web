import { EllipsisVertical, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const DestinationTable = ({ destinations }) => {
    const [dropdownDirection, setDropdownDirection] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(null);
    const navigate = useNavigate();

    const dropdownRef = useRef(null);


    const handleClickOutside = (e) => {
        // Close dropdown if the click is outside of the dropdown area
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
        e.stopPropagation(); // Prevent the click from propagating
        setDropdownVisible(dropdownVisible === index ? null : index);
        // Optionally, you can adjust dropdown direction based on your layout
        setDropdownDirection("down");
    };


    return (
        <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4"></th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                        Page Name
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                        Author
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                        Status
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                        Created At
                    </th>

                    <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                    </th>
                </tr>
            </thead>

            <tbody>
                {destinations?.map((destination, index) => (
                    <tr
                        key={index}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <td className="px-4 py-3 w-4">
                            <div className="flex items-center">
                                <input
                                    id={`checkbox-destination-${index}`}
                                    type="checkbox"
                                    onClick={(e) => e.stopPropagation()}
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor={`checkbox-destination-${index}`}
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
                            {destination.pageName}
                        </th>

                        <td className="px-4 py-3">{destination.author}</td>
                        <td className="px-4 py-3">{destination.status}</td>
                        <td className="px-4 py-3">{destination.createdAt}</td>

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
                                                        `/admin/destinations/${encodeURIComponent(
                                                            destination.pageName
                                                        )}`
                                                    )
                                                }
                                                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <Eye className="w-4 h-4" />
                                                <span>
                                                    View Details
                                                </span>
                                            </button>
                                        </li>
                                        {/* <li>
                        <button
                          type="button"
                          onClick={handleOpenAddModal}
                          className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <span>
                            Edit
                          </span>
                        </button>
                      </li> */}
                                    </ul>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>)
}

export default DestinationTable