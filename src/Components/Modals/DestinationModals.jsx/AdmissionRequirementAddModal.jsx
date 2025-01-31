import { useState } from "react";

const requireDocuments = [
    "Document Name",
    "Copy of valid password",
    "Academic Transcripts",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
    "Doucments",
]

const AdmissionRequirementAddModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData, image);
        // You can handle the form submission here (e.g., API call, state update, etc.)
        closeModal();
    };

    return (
        <div>
            <p className="mb-5">Please select all that apply:</p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {requireDocuments.map((docName, index) => (
                    <>
                        <div className="flex gap-2" key={index}>
                            <input
                                type="checkbox"
                                id="title"
                                checked={formData.title || false}
                                onChange={(e) => handleInputChange(e, 'title')}
                                className="p-1 border border-gray-400 rounded mt-1"
                            />
                            <label htmlFor="title" className="block text-gray-700">
                                {docName}
                            </label>
                        </div>
                    </>
                ))}

                {/* Add more checkbox items as needed */}

                <div className=" col-span-full text-end">
                    <button
                        type="button"
                        className="mt-4  text-blue-500 px-4 py-1 mr-2 rounded transition flex items-center gap-2"
                        onClick={closeModal}
                    >
                        <svg
                            className="w-[28px] h-[28px] text-blue-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.3"
                                d="M5 12h14m-7 7V5"
                            />
                        </svg>
                        Add Document
                    </button>



                </div>
                <div className="col-span-full text-end">
                    <button
                        type="button"
                        className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded transition"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AdmissionRequirementAddModal