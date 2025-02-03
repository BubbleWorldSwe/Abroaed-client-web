import { useState } from "react";


const CoursesModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({}); // To manage form inputs
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData, image);
        // You can handle the form submission here (e.g., API call, state update, etc.)
        closeModal();
    };
    const handleInputChange = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="courseName" className="block text-gray-500 mt-4 font-semibold">
                        Course Name
                    </label>
                    <input
                        type="text"
                        id="courseName"
                        onChange={(e) => handleInputChange("courseName", e.target.value)}
                        className=" py-2 px-3  bg-gray-100 rounded mt-1 border-none"
                        placeholder="Course Name"
                    />
                </div>
                <label htmlFor="courseBrief" className="block font-semibold text-gray-500 mt-4">Course Brief</label>
                <textarea
                    id="courseBrief"
                    value={formData.description || ""}
                    onChange={(e) => handleInputChange(e, 'courseBrief')}
                    className="w-full py-2 px-3 bg-gray-100 rounded mt-1 border-none"
                    placeholder="Add Course Brief"
                ></textarea>
                <p >Max 100 words.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <label
                            htmlFor="courseLevel"
                            className="block text-gray-500 mt-4 font-semibold"
                        >
                            Course Level
                        </label>
                        <select
                            id="courseLevel"
                            onChange={(e) => handleInputChange("courseLevel", e.target.value)}
                            className="w-full py-2 px-3 bg-gray-100 text-gray-500 rounded mt-1 border-none"
                            placeholder="Select Course Level"
                        >
                            <option value="" disabled selected>
                                Select Course Level
                            </option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Postgraduate">Postgraduate</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Certificate">Certificate</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="duration" className="block text-gray-500 mt-4 font-semibold">
                            Duration (months)
                        </label>
                        <input
                            type="text"
                            id="duration"
                            onChange={(e) => handleInputChange("duration", e.target.value)}
                            className="w-full py-2 px-3 bg-gray-100 rounded mt-1 border-none"
                            placeholder="Enter month"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="intake"
                            className="block text-gray-500  mt-4 font-semibold"
                        >
                            Intake
                        </label>
                        <select
                            id="intake"
                            onChange={(e) => {
                                const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                                handleInputChange("intake", selectedOptions);
                            }}
                            className="w-full py-2 px-3 bg-gray-100 text-gray-500 rounded mt-1 border-none"
                        >
                            <option value="" disabled selected>Months</option>
                            <option value="January" >January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="title" className="block  font-semibold text-gray-500">
                            Fees
                        </label>
                        <div class="flex ">
                            <div class="relative w-full">
                                <input type="search" id="search-dropdown" class="block py-2 px-3 w-full  bg-gray-100 text-gray-500 rounded mt-1 border-none" placeholder="Enter Amount" required />
                                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-1 px-4 bg-gray-100 text-gray-500  mt-1 border-none" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="domain"
                            className="block text-gray-500 mt-4 font-semibold"
                        >
                            Domain
                        </label>
                        <select
                            id="domain"
                            onChange={(e) => handleInputChange("domain", e.target.value)}
                            className="w-full py-2 px-3 bg-gray-100 rounded text-gray-500 mt-1 border-none"
                        >
                            <option value="" disabled selected>
                                Select Department
                            </option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Electronics and Communication">Electronics and Communication</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Management Studies">Management Studies</option>
                        </select>
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
        </div>
    )
}

export default CoursesModal;