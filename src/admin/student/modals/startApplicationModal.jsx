/* eslint-disable react/prop-types */
import { useState } from "react";
import { Toaster } from "react-hot-toast"

const StartApplicationModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        college: "",
        program: "",
        course: "",
        intake: ""
    });

    const handleSelectChange = (key, event) => {
        setFormData(prev => ({ ...prev, [key]: event.target.value }));
    };



    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50  ">
                    <div className="bg-white  font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6  min-w-max  overflow-auto relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Start a New Application</h2>
                        <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Select College */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Select College
                                </label>
                                <select
                                    className="mt-1 block w-full rounded-md bg-[#F4F4F5] border-none focus:ring-indigo-500 sm:text-sm"
                                    value={formData.college}
                                    onChange={(e) => handleSelectChange("college", e)}
                                >
                                    <option value="">Select a College</option>
                                    <option value="College A">College A</option>
                                    <option value="College B">College B</option>
                                    <option value="College C">College C</option>
                                </select>
                            </div>
                            {/* Select Program */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Select Program
                                </label>
                                <select
                                    className="mt-1 block w-full rounded-md bg-[#F4F4F5] border-none focus:ring-indigo-500 sm:text-sm"
                                    value={formData.program}
                                    onChange={(e) => handleSelectChange("program", e)}
                                >
                                    <option value="">Select a Program</option>
                                    <option value="Program X">Program X</option>
                                    <option value="Program Y">Program Y</option>
                                    <option value="Program Z">Program Z</option>
                                </select>
                            </div>
                            {/* Select Course */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Select Course
                                </label>
                                <select
                                    className="mt-1 block w-full rounded-md bg-[#F4F4F5] border-none focus:ring-indigo-500 sm:text-sm"
                                    value={formData.course}
                                    onChange={(e) => handleSelectChange("course", e)}
                                >
                                    <option value="">Select a Course</option>
                                    <option value="Course A">Course A</option>
                                    <option value="Course B">Course B</option>
                                    <option value="Course C">Course C</option>
                                </select>
                            </div>
                            {/* Select Intake */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Select Intake
                                </label>
                                <select
                                    className="mt-1 block w-full rounded-md bg-[#F4F4F5] border-none focus:ring-indigo-500 sm:text-sm"
                                    value={formData.intake}
                                    onChange={(e) => handleSelectChange("intake", e)}
                                >
                                    <option value="">Select an Intake</option>
                                    <option value="Fall 2024">Fall 2024</option>
                                    <option value="Spring 2025">Spring 2025</option>
                                    <option value="Summer 2025">Summer 2025</option>
                                </select>
                            </div>
                            <div className="lg:col-span-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                                >
                                    Start
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default StartApplicationModal