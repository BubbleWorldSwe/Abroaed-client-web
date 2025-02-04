/* eslint-disable react/prop-types */
import { useState } from "react";


const BatchesLanguagePrepModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        closeModal();
    };
    const handleInputChange = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="batchName" className="block text-gray-500 mt-4 font-semibold">
                        Batch Name
                    </label>
                    <input
                        type="text"
                        id="batchName"
                        onChange={(e) => handleInputChange("batchName", e.target.value)}
                        className=" py-1 px-4  bg-gray-100 rounded mt-1 border-none"
                        placeholder="Batch Name"
                    />
                </div>
                <label htmlFor="batchBrief" className="block font-semibold text-gray-500 mt-4">Course Brief</label>
                <textarea
                    id="batchBrief"
                    value={formData.description || ""}
                    onChange={(e) => handleInputChange(e, 'batchBrief')}
                    className="w-full py-2 px-4 bg-gray-100 rounded mt-1 border-none"
                    placeholder="Add  Brief"
                ></textarea>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label
                            htmlFor="courseLevel"
                            className="block text-gray-500 mt-4 font-semibold"
                        >
                            Exam
                        </label>
                        <select
                            id="courseLevel"
                            onChange={(e) => handleInputChange("courseLevel", e.target.value)}
                            className="w-full p-1 bg-gray-100 text-gray-500 rounded mt-1 border-none"
                            placeholder="Select Course Level"
                        >
                            <option value="" disabled selected>
                                Select Exam Type
                            </option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Postgraduate">Postgraduate</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Certificate">Certificate</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="seats" className="block text-gray-500 mt-4 font-semibold">
                            Seats
                        </label>
                        <input
                            type="text"
                            id="seats"
                            onChange={(e) => handleInputChange("seats", e.target.value)}
                            className="w-full p-1 bg-gray-100 rounded mt-1 border-none"
                            placeholder="Enter seats"
                        />
                    </div>
                    <div></div>
                    <div>
                        <label htmlFor="duration" className="block text-gray-500 mt-4 font-semibold">
                            Duration (Months)
                        </label>
                        <input
                            type="text"
                            id="duration"
                            onChange={(e) => handleInputChange("duration", e.target.value)}
                            className="w-full p-1 bg-gray-100 rounded mt-1 border-none"
                            placeholder="Enter Duration"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="title" className="block  font-semibold text-gray-500">
                            Fees
                        </label>
                        <div className="flex ">
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" className="block p-1 w-full  bg-gray-100 text-gray-500 rounded mt-1 border-none" placeholder="Enter Amount" required />
                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-1 px-4 bg-gray-100 text-gray-500  mt-1 border-none" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        </div>
                    </div>
                </div>
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
        </div>)
}

export default BatchesLanguagePrepModal