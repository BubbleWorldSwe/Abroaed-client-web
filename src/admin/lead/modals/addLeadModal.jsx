/* eslint-disable react/prop-types */
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const AddLeadModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        education: "",
        studyDestination: "",
        targetYear: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleNext = () => {
        onClose();
        // setNext(true);
    }
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-max relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Add Lead</h2>

                        <div>
                            <form onSubmit={handleNext} className="space-y-6">
                                <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2">
                                    {/* First Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter First Name"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter Last Name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">Email*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter Email"
                                        />
                                    </div>

                                    {/* Contact Number */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">Contact Number*</label>
                                        <input
                                            type="tel"
                                            name="contactNumber"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter Contact Number"
                                        />
                                    </div>

                                    {/* Highest Education Qualification (Dropdown) */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">Highest Education Qualification</label>
                                        <select
                                            name="education"
                                            value={formData.education}
                                            onChange={handleChange}
                                            className="w-full text-gray-500 px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Qualification</option>
                                            <option value="High School">High School</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                                            <option value="Master's Degree">Master&apos;s Degree</option>
                                            <option value="PhD">PhD</option>
                                        </select>
                                    </div>

                                    {/* Preferred Study Destination (Dropdown) */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">Preferred Study Destination</label>
                                        <select
                                            name="studyDestination"
                                            value={formData.studyDestination}
                                            onChange={handleChange}
                                            className="w-full px-3 text-gray-500 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Destination</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Germany">Germany</option>
                                        </select>
                                    </div>

                                    {/* Target Year (Dropdown) */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">Target Year</label>
                                        <select
                                            name="targetYear"
                                            value={formData.targetYear}
                                            onChange={handleChange}
                                            className="w-full px-3 text-gray-500 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Year</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 justify-end mt-4">
                                    <button
                                        type="button"
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <Toaster position="top-center" reverseOrder={false} />

        </>
    )
}

export default AddLeadModal