/* eslint-disable react/prop-types */
import { useState } from "react";

const PriceModal = ({ closeModal }) => {
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
                        <label htmlFor="currency" className="block text-gray-500 mt-4 font-semibold">
                            Currency
                        </label>
                        <select
                            id="currency"
                            onChange={(e) => handleInputChange("currency", e.target.value)}
                            className="py-1 px-4 w-full bg-gray-100 rounded mt-1 border border-gray-300 text-gray-500"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Currency
                            </option>
                            <option value="USD">USD - United States Dollar</option>
                            <option value="GBP">GBP - British Pound Sterling</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="AUD">AUD - Australian Dollar</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="CAD">CAD - Canadian Dollar</option>
                            <option value="JPY">JPY - Japanese Yen</option>
                            <option value="CNY">CNY - Chinese Yuan</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="amount" className="block text-gray-500 mt-4 font-semibold">
                            Amount
                        </label>
                        <input
                            type="text"
                            id="amount"
                            onChange={(e) => handleInputChange("amount", e.target.value)}
                            className="w-full p-1 border-none bg-gray-100  rounded mt-1"
                            placeholder="Enter Amount/monthly"
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

export default PriceModal