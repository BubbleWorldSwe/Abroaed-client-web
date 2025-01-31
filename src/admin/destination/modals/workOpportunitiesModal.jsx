import { useState } from "react";


const WorkOpportunitiesModal = ({ closeModal }) => {
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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">Part-time options for Students</label>
                    <textarea
                        id="description"
                        value={formData.description || ""}
                        onChange={(e) => handleInputChange(e, 'description')}
                        className="w-full p-2 border bg-gray-100 border-gray-400 rounded "
                        placeholder=""
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="description" className="block font-semibold text-gray-700 mt-3">Part-degree popular work opportunities</label>
                    <textarea
                        id="description"
                        value={formData.description || ""}
                        onChange={(e) => handleInputChange(e, 'description')}
                        className="w-full p-2 border bg-gray-100  border-gray-400 rounded "
                        placeholder=""
                    ></textarea>
                </div>
                <p className="font-semibold ">Professions</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="profession" className="block text-gray-700 mt-4 font-semibold">
                            Profession Name
                        </label>
                        <input
                            type="text"
                            id="profession"
                            onChange={(e) => handleInputChange("profession", e.target.value)}
                            className="w-full p-1 border bg-gray-100 border-gray-400 rounded mt-1"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="avgSalary" className="block text-gray-700 mt-4 font-semibold">
                            Avarage Salary
                        </label>
                        <input
                            type="text"
                            id="avgSalary"
                            onChange={(e) => handleInputChange("avgSalary", e.target.value)}
                            className="w-full p-1 border bg-gray-100 border-gray-400 rounded mt-1"
                            placeholder="Avg Salary"
                        />
                    </div>
                </div>

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
                        Add Profession
                    </button>
                </div>
                <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">Additional Information</label>
                <textarea
                    id="description"
                    value={formData.description || ""}
                    onChange={(e) => handleInputChange(e, 'description')}
                    className="w-full p-2 border bg-gray-100 border-gray-400 rounded mt-1"
                    placeholder="Additional Information"
                ></textarea>

                <div className="text-end">
                    <button
                        type="button"
                        className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                </div>
            </form>

        </div>
    )
}

export default WorkOpportunitiesModal