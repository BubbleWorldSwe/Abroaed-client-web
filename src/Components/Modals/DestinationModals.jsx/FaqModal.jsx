import { useState } from "react";


const FaqModal = ({ closeModal }) => {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="question" className="block text-gray-700 mt-4 font-semibold">
                            Question
                        </label>
                        <input
                            type="text"
                            id="question"
                            onChange={(e) => handleInputChange("question", e.target.value)}
                            className="w-full p-1 border border-gray-400 rounded mt-1"
                            placeholder="Enter Question"
                        />
                    </div>

                </div>
                <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">Answer </label>
                <textarea
                    id="description"
                    value={formData.description || ""}
                    onChange={(e) => handleInputChange(e, 'description')}
                    className="w-full p-2 border border-gray-400 rounded mt-1"
                    placeholder="Provide Answer"
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

export default FaqModal