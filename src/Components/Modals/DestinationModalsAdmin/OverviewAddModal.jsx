import { useState } from "react";


const OverviewAddModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({});
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
                <label htmlFor="description" className="block text-gray-700 mt-4">Why Study in USA?</label>
                <textarea
                    id="description"
                    value={formData.description || ""}
                    onChange={(e) => handleInputChange(e, 'description')}
                    className="w-full p-2 border-none bg-[#F4F4F5] px-3 rounded mt-1"
                    placeholder="Add Description Brief"
                ></textarea>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <label htmlFor="capital" className="block text-gray-700 mt-4 font-semibold">
                            Capital
                        </label>
                        <input
                            type="text"
                            id="capital"
                            onChange={(e) => handleInputChange("capital", e.target.value)}
                            className="w-full p-1 border-none bg-[#F4F4F5] px-3 rounded mt-1"
                            placeholder="Enter Capital"
                        />
                    </div>
                    <div>
                        <label htmlFor="lang" className="block text-gray-700 mt-4 font-semibold">
                            Language
                        </label>
                        <input
                            type="text"
                            id="lang"
                            onChange={(e) => handleInputChange("lang", e.target.value)}
                            className="w-full p-1 border-none bg-[#F4F4F5] px-3 rounded mt-1"
                            placeholder="Enter National Language"
                        />
                    </div>
                    <div>
                        <label htmlFor="totalPopulation" className="block text-gray-700 mt-4 font-semibold">
                            Total Population
                        </label>
                        <input
                            type="text"
                            id="totalPopulation"
                            onChange={(e) => handleInputChange("totalPopulation", e.target.value)}
                            className="w-full p-1 border-none bg-[#F4F4F5] px-3 rounded mt-1"
                            placeholder="Enter Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="currency" className="block text-gray-700 mt-4 font-semibold">
                            Currency
                        </label>
                        <input
                            type="text"
                            id="currency"
                            onChange={(e) => handleInputChange("currency", e.target.value)}
                            className="w-full p-1 border-none bg-[#F4F4F5] px-3 rounded mt-1"
                            placeholder="Enter Currency"
                        />
                    </div>
                    <div>
                        <label htmlFor="currency" className="block text-gray-700 mt-1 font-semibold">
                            Dailing Code
                        </label>
                        <input
                            type="text"
                            id="currency"
                            onChange={(e) => handleInputChange("currency", e.target.value)}
                            className="w-full p-1 border-none bg-[#F4F4F5] px-3 rounded mt-1"
                            placeholder="Enter Dailing Code"
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

export default OverviewAddModal