/* eslint-disable react/prop-types */
import { useState } from "react";
import { Toaster } from "react-hot-toast"
import { Plus, Trash2 } from "lucide-react";

const StartApplicationModal = ({ isOpen, onClose }) => {
    const [documents, setDocuments] = useState([{ id: 1 }]);

    const addDocument = () => {
        setDocuments([...documents, { id: documents.length + 1 }]);
    };

    const removeDocument = (id) => {
        setDocuments(documents.filter((doc) => doc.id !== id));
    };



    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50  ">
                    <div className="max-w-3xl mx-auto max-h-[70vh] overflow-y-auto bg-white p-6 shadow-md rounded-lg border border-gray-300 relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-semibold">Start a New Application</h2>

                        {/* Dropdowns for College, Program, Course, and Intake */}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                    Select College
                                </label>
                                <select
                                    className="w-full px-3 py-1 border-none bg-[#F4F4F5] text-[#3F3F46] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>Select College</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                    Select Program
                                </label>
                                <select
                                    className="w-full px-3 py-1 border-none bg-[#F4F4F5] text-[#3F3F46] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>Select Program</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                    Select Course
                                </label>
                                <select
                                    className="w-full px-3 py-1 border-none bg-[#F4F4F5] text-[#3F3F46] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>Select Course</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                    Select Intake
                                </label>
                                <select
                                    className="w-full px-3 py-1 border-none bg-[#F4F4F5] text-[#3F3F46] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>Select Intake</option>
                                </select>
                            </div>
                        </div>

                        {/* Additional Documents Section */}
                        <div className="mt-5">
                            <div className="flex mb-3 justify-between text-center">
                                <h3 className="text-md font-semibold">Request Additional Documents</h3>
                                <button
                                    onClick={addDocument}
                                    className=" flex items-center  font-medium"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>

                            {documents.map((doc, index) => (
                                <div key={index} className="flex justify-between mb-2 items-center gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                            Document Category
                                        </label>
                                        <select
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] text-[#3F3F46] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option>Gov/Acad/Fin/Appl</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Add Name"
                                        />
                                    </div>
                                    <div className="relative w-1/3">
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                            Deadline
                                        </label>
                                        <input
                                            type="datetime-local"
                                            placeholder="DD/MM/YYYY"
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mt-3 cursor-pointer">
                                        <Trash2
                                            className="w-5 h-5"
                                            onClick={() => removeDocument(doc.id)}
                                        />
                                    </div>
                                </div>))}
                        </div>
                        <div className="flex flex-row-reverse">
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Submit
                            </button>
                        </div>
                    </div>
                    );
                </div>
            )}
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default StartApplicationModal