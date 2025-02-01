/* eslint-disable react/prop-types */
import { useState } from "react";

const LocationModal = ({ closeModal }) => {
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
                    <label htmlFor="country"
                        className="block text-gray-500 mt-4 font-semibold"
                    >
                        Country
                    </label>
                    <select
                        id="country"
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        className="w-full py-1 px-4 bg-gray-100 rounded mt-1 border border-gray-300 text-gray-500"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select Country
                        </option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="city" className="block text-gray-500 mt-4 font-semibold">
                        City
                    </label>
                    <select
                        id="city"
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="py-1 px-4 w-full bg-gray-100 rounded mt-1 border border-gray-300 text-gray-500"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select City
                        </option>
                        <option value="New York">New York</option>
                        <option value="London">London</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Sydney">Sydney</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>


                <div>
                    <label htmlFor="streetName" className="block text-gray-500 mt-4 font-semibold">
                        Street Name
                    </label>
                    <input
                        type="text"
                        id="streetName"
                        onChange={(e) => handleInputChange("streetName", e.target.value)}
                        className="w-full p-1 border-none bg-gray-100  rounded mt-1"
                        placeholder="Enter Street Name"
                    />
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

export default LocationModal