/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CalendarDays, EllipsisVertical, Eye, Pencil, Plus } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from 'flowbite-react';
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";


const LeadTable = ({ leads, handleAssignTeamMember, handleUpdateTeamMember, handleScheduleAppointment, dropdownVisible, setDropdownVisible }) => {
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
                    </th>                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
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
                    <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {leads.map((member, index) => (
                    <tr key={index} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-4 py-3 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
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
                        <td className="px-4 py-3"> {member.contact}</td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <Tooltip
                                content="Entity Name"
                                placement="bottom"
                                className="!bg-white !text-gray-900 !shadow-lg !border !border-gray-300"
                            >
                                <span className="cursor-pointer">{member.leadType}</span>
                            </Tooltip>

                        </td>

                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {member.counsellor}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span className={`font-medium mr-2 p-2 rounded ${member.status === "Nurture" ? "bg-[#FDF6B2]" : member.status === "Converted" ? "bg-[#DEF7EC]" : member.status === "Lost" ? "bg-[#FDE8E8]" : "bg-gray-200"} text-green-800 dark:bg-green-900 dark:text-green-300`}>
                                {member.status}
                            </span>
                        </td>
                        <td className="px-4 py-3">
                            <span className="bg-[#FDE8E8] rounded-md p-2">
                                {member.appointment.date
                                    ? `${member.appointment.date} at ${member.appointment.timeSlot} (${member.appointment.type})`
                                    : "No appointment"}
                            </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                            <span className="text-[#111928] bg-gray-100 p-2 rounded-md">
                                {member.createdAt}
                            </span>
                        </td>
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
                                    <ul
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="apple-imac-27-dropdown-button"
                                    >
                                        <li>
                                            <button
                                                onClick={() => handleAssignTeamMember(member)}
                                                className="flex text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <Plus className="w-5 h-5" />
                                                <span>Assign Team</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => handleUpdateTeamMember(member)}
                                                className="flex text-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <Pencil className="w-4 h-4" />
                                                <span>Update Lead Status</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    handleScheduleAppointment(member)
                                                }
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
                                                        `/admin/leads/${encodeURIComponent(
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
        </table >
    )
}

export default LeadTable