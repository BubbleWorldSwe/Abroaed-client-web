import { Progress } from "flowbite-react";
import { CheckCircle, Download, File, Search, Upload, X } from "lucide-react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const DocumentCard = () => {
    return (
        <>
            <div

                className="p-4 flex flex-col justify-between flex-shrink-0 w-96 h-72 bg-gradient-to-b from-[#00000033] to-[#363A3D] rounded-lg"
            >
                <div className="flex justify-between items-start">
                    <div className="text-sm font-medium p-1 px-2 text-black bg-[White] rounded-full">Government Doc</div>
                </div>
                <div>
                    <div className="text-white text-sm">
                        Aadhar Card
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <div className="text-white">Garvit_Aadhar Card.pdf</div>
                        <button className="text-white">
                            <Download />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
const StudentUploadDocument = ({ isOpen, onClose }) => {
    const [files, setFiles] = useState([
        { name: "Garvit_Alldocs.pdf", size: "1.5 MB", progress: 100 },
        { name: "Garvit_Affidavit_2024.pdf", size: "2 MB", progress: 75 },
    ]);
    const [activeTab, setActiveTab] = useState(0); // State to keep track of the active tab
    const tabs = ['Government Docs', 'Academic Docs', 'Finance Docs', 'Others'];
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

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
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">Select Document Type</label>
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
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">Select Document Name</label>
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
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">Title</label>
                                        <input
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Add Name"
                                        />
                                    </div>
                                </div>

                                <div className="text-base    font-semibold" >Upload Documents for the student <span className="text-gray-500">(supported format: .pdf, .jpg, .jpeg, .png)</span></div>
                                <div>
                                    <div class="flex items-center justify-center w-full">
                                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                <Upload className="text-gray-500" />
                                                <p class="mb-2 text-lg text-gray-500 dark:text-gray-400">Click to upload or drag and drop</p>
                                                <p class="text-xs text-gray-500 dark:text-gray-400">Max. File Size: 2MB</p>
                                                <button className="flex items-center gap-2 mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                                    <Search className="w-4 h-4" />
                                                    Browse File
                                                </button>

                                            </div>
                                            <input id="dropzone-file" type="file" class="hidden" />
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className=" w-full ">
                                        {files.map((file, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center p-2 border-b last:border-b-0"
                                            >
                                                <File className="text-gray-500 w-6 h-6" />
                                                <div className="flex-1 ml-2">
                                                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                                                    <p className="text-xs text-gray-500">{file.size}</p>
                                                    {file.progress < 100 && (
                                                        <div className="relative w-full bg-gray-200 h-1 mt-1">
                                                            <div
                                                                className="bg-blue-500 h-1"
                                                                style={{ width: `${file.progress}%` }}
                                                            ></div>
                                                            <span className="absolute right-0 text-xs text-gray-600">
                                                                {file.progress}%
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                {file.progress === 100 ? (
                                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                                ) : (
                                                    <button className="text-gray-500 hover:text-red-500">
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-base    font-semibold" >Choose from Document Library</div>
                                <div>
                                    <div className="mb-4 dark:border-gray-700">
                                        <ul className="flex w-full -mb-px text-sm font-medium text-center" role="tablist">
                                            {tabs.map((tab, index) => (
                                                <li key={index} className="w-full" role="presentation">
                                                    <button
                                                        className={`inline-block p-4 w-full text-lg font-semibold rounded-t-lg ${activeTab === index ? 'text-black  border-b-4 border-blue-500' : 'text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                                            }`}
                                                        onClick={() => handleTabClick(index)} // Update active tab
                                                        role="tab"
                                                        aria-controls={`styled-${tab.toLowerCase().replace(' ', '-')}`}
                                                        aria-selected={activeTab === index}
                                                    >
                                                        {tab}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Card Container with Horizontal Scroll */}
                                    <div className="flex gap-5 overflow-x-auto pb-6">
                                        {Array(6).fill().map((tab, index) => (
                                            <DocumentCard key={index} />
                                        ))}
                                    </div>
                                </div>
                                {/* Action Buttons */}
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