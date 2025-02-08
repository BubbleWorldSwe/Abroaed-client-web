/* eslint-disable react/prop-types */
import { useState } from "react";


const BatchesTestPrepModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState("USD");

    const currencies = [
        { code: "USD", name: "United States Dollar", icon: "🇺🇸" },
        { code: "EUR", name: "Euro", icon: "🇪🇺" },
        { code: "GBP", name: "British Pound", icon: "🇬🇧" },
        { code: "INR", name: "Indian Rupee", icon: "🇮🇳" },
        { code: "JPY", name: "Japanese Yen", icon: "🇯🇵" },
        { code: "AUD", name: "Australian Dollar", icon: "🇦🇺" },
    ];

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    <div>
                        <label htmlFor="mode" className="block text-gray-500 mt-4 font-semibold">
                            Mode
                        </label>
                        <select
                            id="mode"
                            onChange={(e) => handleInputChange("mode", e.target.value)}
                            className="w-full p-1 bg-gray-100 text-gray-500 rounded mt-1 border-none"
                        >
                            <option value="" disabled selected>
                                Select Mode
                            </option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div className="flex items-end py-2 justify-center text-center gap-3">
                        <input
                            type="checkbox"
                            id="soldOut"
                            onChange={(e) => handleInputChange("soldOut", e.target.checked)}
                            className=""
                        />
                        <label htmlFor="soldOut" className="text-gray-500  font-semibold">
                            Mark as Sold Out
                        </label>
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
                        <label htmlFor="fees" className="block font-semibold text-gray-500">
                            Fees
                        </label>
                        <div className="flex">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="fees"
                                    onChange={(e) => handleInputChange("fees", e.target.value)}
                                    className="block p-1 w-full bg-gray-100 text-gray-500 rounded mt-1 border-none"
                                    placeholder="Enter Amount"
                                    required
                                />
                            </div>
                            <div className="relative inline-block">
                                {/* Button */}
                                <button
                                    id="currency-dropdown"
                                    className="flex-shrink-0 z-10 inline-flex items-center py-1 px-4 bg-gray-100 text-gray-500 mt-1 border-none rounded-md"
                                    type="button"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setTimeout(() => setIsDropdownOpen(false), 300)}
                                >
                                    {selectedCurrency}{" "}
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div
                                        className="absolute left-0 mt-1  bg-white border rounded-lg shadow-lg z-20"
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <ul className="py-2 text-gray-700">
                                            {currencies.map((currency) => (
                                                <li
                                                    key={currency.code}
                                                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                    onClick={() => {
                                                        setSelectedCurrency(currency.code);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                >
                                                    <span className="mr-2">{currency.icon}</span>
                                                    {currency.code}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
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

export default BatchesTestPrepModal