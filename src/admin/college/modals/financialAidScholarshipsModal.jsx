import { useState } from "react";


const FinancialAidScholarshipsModal = ({ closeModal }) => {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="capital" className="block text-gray-500 mt-4 font-semibold">
                            Scholarship Name
                        </label>
                        <input
                            type="text"
                            id="scholarshipName"
                            onChange={(e) => handleInputChange("scholarshipName", e.target.value)}
                            className="w-full p-1 border-none bg-gray-100  rounded mt-1"
                            placeholder="Scholarship - Engineering"
                        />
                    </div>
                    <div>
                        <label htmlFor="lang" className="block text-gray-500 mt-4 font-semibold">
                            Link
                        </label>
                        <input
                            type="url"
                            id="lang"
                            onChange={(e) => handleInputChange("lang", e.target.value)}
                            className="w-full p-1 border-none bg-gray-100 rounded mt-1"
                            placeholder="www.scholorship.com"
                        />
                    </div>
                </div>
                <label htmlFor="description" className="block font-semibold text-gray-500 mt-4">Brief Description</label>
                <textarea
                    id="description"
                    value={formData.description || ""}
                    onChange={(e) => handleInputChange(e, 'description')}
                    className="w-full p-2 bg-gray-100 border-none rounded mt-1"
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

export default FinancialAidScholarshipsModal