/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import { useState } from "react";
import { Toaster } from "react-hot-toast"

const AssignTeamMemberStudentModal = ({ isOpen, onClose, setDone }) => {
    const [formData, setFormData] = useState({
        counsellor: "",
        backendManager: "",
        mentor: "",
    });
    const assignMember = ["Manmeet Singh - Counsellor", "Manmeet Singh - Counsellor", "Manmeet Singh - Counsellor"]
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setFormData({
            counsellor: "",
            backendManager: "",
            mentor: "",
        });
    }

    const handleAssign = () => {
        onClose();
        setDone(true);

    }


    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6  min-w-max relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Assign Team Member</h2>

                        <div>
                            <h5 className="block text-sm font-semibold text-[#27272A] mb-2">Assigned Members</h5>
                            <div className="mb-2 grid grid-cols-2 gap-3">
                                {assignMember.map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-1 px-2 bg-[#F3F4F6] text-sm text-[#4B5563] rounded"
                                    >
                                        <p>{member}</p>
                                        <span className="flex ml-4 items-center">
                                            <X className="w-4 h-4" />
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <form onSubmit={handleAssign} className="space-y-6">
                                <div className="grid font-rethink grid-cols-2 gap-4">
                                    {/* Counsellor Dropdown */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                            Member Type
                                        </label>
                                        <select
                                            name="counsellor"
                                            value={formData.counsellor}
                                            onChange={handleChange}
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] text-[#3F3F46] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Member Type</option>
                                            <option value="John Doe">John Doe</option>
                                            <option value="Jane Smith">Jane Smith</option>
                                            <option value="Alice Johnson">Alice Johnson</option>
                                        </select>
                                    </div>

                                    {/* Backend Manager Dropdown */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                            Member Name
                                        </label>
                                        <select
                                            name="backendManager"
                                            value={formData.backendManager}
                                            onChange={handleChange}
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] text-[#3F3F46] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Member Name</option>
                                            <option value="Mike Brown">Mike Brown</option>
                                            <option value="Sara Wilson">Sara Wilson</option>
                                            <option value="Tom Lee">Tom Lee</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 justify-end mt-4">
                                    <button
                                        type="button"
                                        className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md"
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-3 py-1 rounded-md"
                                    >
                                        Assign
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

export default AssignTeamMemberStudentModal