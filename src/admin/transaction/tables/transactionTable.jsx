/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { EllipsisVertical, Eye, Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";


const TransactionTable = ({ studentPayments, dropdownVisible, setDropdownVisible }) => {
    const dropdownRef = useRef(null);
    const [selectedRows, setSelectedRows] = useState({});
    const [dropdownDirection, setDropdownDirection] = useState(null);

    const handleDropdownToggle = (e, index) => {
        e.stopPropagation();
        setDropdownVisible(dropdownVisible === index ? null : index);
        setDropdownDirection("down");

    };
    const handleCheckboxClick = (index) => {
        setSelectedRows((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
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
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4"></th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                        Student Name
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                        Plan Type
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                        Amount Paid
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                        Payment Method
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                        Balance
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                        Payment Date
                    </th>
                    <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                    </th>
                </tr>
            </thead>

            <tbody>
                {studentPayments?.map((transaction, index) => (
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
                            {transaction.studentName}
                        </th>

                        <td className="px-4 py-3">{transaction.planType}</td>
                        <td className="px-4 py-3">{`$ ${transaction.amountPaid}`}</td>
                        <td className="px-4 py-3">
                            {transaction.paymentMethod}
                            {/* <a
                href={transaction.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {transaction.website}
              </a> */}
                        </td>
                        <td className="px-4 py-3">{`$ ${transaction.balance}`}</td>
                        <td className="px-4 py-3">{transaction.paymentDate}</td>

                        <td className="px-4 py-3">
                            <button
                                ref={dropdownRef}
                                className="focus:outline-none"
                                onClick={(e) => handleDropdownToggle(e, index)}
                            >
                                <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                            </button>
                            {dropdownVisible === index && (
                                <div
                                    className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${dropdownDirection === "up"
                                        ? "bottom-full mb-2"
                                        : "mt-2"
                                        }`}
                                >
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <button
                                                type="button"
                                                onClick={''}
                                                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <Eye className="w-4 h-4" />
                                                <span>
                                                    View Details
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                onClick={''}
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
    )
}

export default TransactionTable