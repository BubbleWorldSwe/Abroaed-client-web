import { useState } from "react";


const OverviewModal = ({ closeModal }) => {
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
                <label htmlFor="description" className="block font-semibold text-gray-700 mt-4">About</label>
                <textarea
                    id="description"
                    value={formData.description || ""}
                    onChange={(e) => handleInputChange(e, 'description')}
                    className="w-full p-2 bg-gray-100 rounded mt-1 border-none"
                    placeholder="Add College Brief"
                ></textarea>
                <p>Max 200 word.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="establishmentYear" className="block text-gray-700 mt-4 font-semibold">
                            Establishment Year
                        </label>
                        <input
                            type="text"
                            id="establishmentYear"
                            onChange={(e) => handleInputChange("establishmentYear", e.target.value)}
                            className="w-full p-1  bg-gray-100 rounded mt-1 border-none"
                            placeholder="Enter Establishment Year"
                        />
                    </div>
                    <div>
                        <label htmlFor="ranking" className="block text-gray-700 mt-4 font-semibold">
                            Ranking
                        </label>
                        <input
                            type="text"
                            id="ranking"
                            onChange={(e) => handleInputChange("ranking", e.target.value)}
                            className="w-full p-1 bg-gray-100 rounded mt-1 border-none"
                            placeholder="Enter National Language"
                        />
                    </div>
                    <div>
                        <label htmlFor="intake" className="block text-gray-700 mt-4 font-semibold">
                            Intake
                        </label>
                        <input
                            type="text"
                            id="totalPopulation"
                            onChange={(e) => handleInputChange("totalPopulation", e.target.value)}
                            className="w-full p-1  bg-gray-100 rounded mt-1 border-none"
                            placeholder="Select Month(Multi-select)"
                        />
                    </div>
                    <div>
                        <label htmlFor="studentTeacherRatio" className="block text-gray-700 mt-4 font-semibold">
                            Student to Teacher Ratio
                        </label>
                        <input
                            type="text"
                            id="studentTeacherRatio"
                            onChange={(e) => handleInputChange("studentTeacherRatio", e.target.value)}
                            className="w-full p-1 bg-gray-100 rounded border-none mt-1"
                            placeholder="Enter Ratio"
                        />
                    </div>
                    <div>
                        <label htmlFor="internationalStudent" className="block text-gray-700 mt-4 font-semibold">
                            International Students (in percentage)
                        </label>
                        <input
                            type="text"
                            id="internationalStudent"
                            onChange={(e) => handleInputChange("internationalStudent", e.target.value)}
                            className="w-full p-1  bg-gray-100 rounded mt-1 border-none"
                            placeholder="Enter Percentage"
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
        </div>)
}

export default OverviewModal