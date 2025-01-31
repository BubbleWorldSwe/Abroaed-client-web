import { useState } from "react";

const types = ["Scholarship", "Internship", "Job", "Course"];

const ImmigrationDetailsModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedType, setSelectedType] = useState("");

    const handleInputChange = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData, image);
        // You can handle the form submission here (e.g., API call, state update, etc.)
        closeModal();
    };
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const handleInputChangeDropDown = (value) => {
        setSelectedType(value);
        setIsDropdownOpen(false); // Close dropdown after selection
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="capital" className="block text-gray-700 mt-4 font-semibold">
                            Visa Name
                        </label>
                        <input
                            type="text"
                            id="scholarshipName"
                            onChange={(e) => handleInputChange("scholarshipName", e.target.value)}
                            className="w-full p-1 border-none bg-[#F4F4F5] px-3 rounded mt-1"
                            placeholder="Enter Capital"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="lang" className="block text-gray-700 mt-4 font-semibold">
                            Type
                        </label>
                        {/* Input field with down arrow */}
                        <div className="relative">
                            <input
                                type="text"
                                id="lang"
                                value={selectedType}
                                onFocus={() => setIsDropdownOpen(true)} // Open dropdown on focus
                                onChange={(e) => setSelectedType(e.target.value)} // Allow typing
                                className="w-full p-1 border-none bg-[#F4F4F5] px-3 rounded mt-1"
                                placeholder="Select type"
                            />
                            {/* Down arrow */}
                            <button
                                type="button"
                                onClick={toggleDropdown}
                                className="absolute inset-y-0 right-2 flex items-center text-gray-400 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Dropdown */}
                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 shadow-lg">
                                {types
                                    .filter((type) =>
                                        type.toLowerCase().includes(selectedType.toLowerCase())
                                    ) // Filter options based on user input
                                    .map((type, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleInputChangeDropDown(type)}
                                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                        >
                                            {type}
                                        </div>
                                    ))}
                                {types.filter((type) =>
                                    type.toLowerCase().includes(selectedType.toLowerCase())
                                ).length === 0 && (
                                        <div className="px-4 py-2 text-gray-500">No options found</div>
                                    )}
                            </div>
                        )}
                    </div>
                </div>
                <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">Brief Description</label>
                <textarea
                    id="description"
                    value={formData.description || ""}
                    onChange={(e) => handleInputChange(e, 'description')}
                    className="w-full p-2 border-none bg-[#F4F4F5] px-3 rounded mt-1"
                    placeholder="Add Description Brief"
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

export default ImmigrationDetailsModal