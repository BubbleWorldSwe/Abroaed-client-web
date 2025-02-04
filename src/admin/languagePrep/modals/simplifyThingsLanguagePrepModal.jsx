/* eslint-disable react/prop-types */
import { useState } from "react";


const SimplifyThingsModal = ({ closeModal }) => {
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
                <div className="mb-4">
                    <label htmlFor="courseName" className="block text-gray-700  ">
                        Title
                    </label>
                    <input
                        type="text"
                        id="courseName"
                        onChange={(e) => handleInputChange("courseName", e.target.value)}
                        className=" py-1   bg-gray-100 rounded mt-1 border-none"
                        placeholder="Title"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block  text-gray-700 mt-4">Description</label>
                    <textarea
                        id="description"
                        value={formData.description || ""}
                        onChange={(e) => handleInputChange(e, 'examCodescriptionmponent')}
                        className="w-full p-2 bg-gray-100 rounded mt-1 border-none"
                        placeholder="Add Description"
                    ></textarea>
                </div>
                <div className="col-span-full text-end">
                    <button
                        type="button"
                        className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded transition"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" >
                        Save
                    </button>
                </div>
            </form>

        </div>
    )
}

export default SimplifyThingsModal