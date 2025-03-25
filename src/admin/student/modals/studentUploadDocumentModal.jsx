/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Search, Upload } from "lucide-react";
import { Toaster } from "react-hot-toast";

const StudentUploadDocument = ({ isOpen, onClose }) => {

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50  ">
                    <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6  max-w-4xl max-h-[600px] overflow-auto relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
                        <div>
                            <form onSubmit={''} className="space-y-6">
                                <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-3">
                                    {/* Highest Education Qualification (Dropdown) */}
                                    <div>
                                        <label className={`block text-sm font-semibold text-gray-primary mb-1`}>
                                            Document Category</label>
                                        <select
                                            name="education"
                                            // value={formData.education}
                                            // onChange={handleChange}
                                            className="w-full px-3 py-1 border-none text-[#3F3F46] bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Gov/Acad/Fin/Clg Name</option>
                                            <option value="High School">High School</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                                            <option value="Master's Degree">Master's Degree</option>
                                            <option value="PhD">PhD</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-semibold text-gray-primary mb-1`}>
                                            College</label>
                                        <select
                                            name="studyDestination"
                                            // value={formData.studyDestination}
                                            // onChange={handleChange}
                                            className="w-full px-3 py-1 border-none text-[#3F3F46] bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Conditional Values</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Germany">Germany</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-semibold text-gray-primary mb-1`}>
                                            Title</label>
                                        <input
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Add Name"
                                        />
                                    </div>
                                </div>
                                <div className="text-base    font-semibold" >Upload Documents for the student <span className="text-gray-500">(supported format: .pdf, .jpg, .jpeg, .png)</span></div>
                                <div>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <Upload className="text-gray-500" />
                                                <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">Click to upload or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Max. File Size: 2MB</p>
                                                <button className="flex items-center gap-2 mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                                    <Search className="w-4 h-4" />
                                                    Browse File
                                                </button>

                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-end mt-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                                    >
                                        Upload
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

export default StudentUploadDocument;