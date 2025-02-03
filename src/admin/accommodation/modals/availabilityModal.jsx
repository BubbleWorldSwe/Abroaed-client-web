/* eslint-disable react/prop-types */
import { useState } from "react";

const AvailabilityModal = ({ closeModal }) => {
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
                <div className="grid grid-cols-1  gap-1">
                    <div>
                        <label htmlFor="availability" className="block text-gray-500 mt-4 font-semibold">
                            Availability
                        </label>
                        <input
                            type="text"
                            id="availability"
                            onChange={(e) => handleInputChange("availability", e.target.value)}
                            className="w-full p-1 border-none bg-gray-100  rounded mt-1"
                            placeholder="Enter Availability"
                        />
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

export default AvailabilityModal