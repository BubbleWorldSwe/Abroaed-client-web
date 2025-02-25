/* eslint-disable react/prop-types */
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const ServiceTypePlanStudent = ({ isOpen, onClose, setDone, setIsAddModalOpen, setIsOpen }) => {
    const [formData, setFormData] = useState({
        serviceName: "",
        serviceType: "",
        planType: "",
        serviceCharge: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleAdd = () => {
        onClose();
        setDone(true);
    }
    const handleBack = () => {
        setIsOpen(false);
        setIsAddModalOpen(true);
    }
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-max relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Select Service Type & Plan</h2>

                        <div>
                            <form onSubmit={handleAdd} className="space-y-6">
                                <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2">


                                    {/* Service Type Dropdown */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                            Service Type
                                        </label>
                                        <select
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            className="w-full px-3 py-1 border-none text-[#3F3F46] bg-[#F4F4F5] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Service Type</option>
                                            <option value="Basic">Basic</option>
                                            <option value="Premium">Premium</option>
                                            <option value="Enterprise">Enterprise</option>
                                        </select>
                                    </div>

                                    {/* Plan Type Dropdown */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                            Plan Type
                                        </label>
                                        <select
                                            name="planType"
                                            value={formData.planType}
                                            onChange={handleChange}
                                            className="w-full px-3 py-1 text-[#3F3F46] border-none bg-[#F4F4F5] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Plan Type</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Yearly">Yearly</option>
                                            <option value="Lifetime">Lifetime</option>
                                        </select>
                                    </div>

                                    {/* Service Charge Input (Full Width) */}
                                    <div className="lg:col-span-2">
                                        <label className="block text-sm font-semibold text-[#27272A] mb-1">
                                            Service Charge
                                        </label>
                                        <input
                                            type="text"
                                            name="serviceCharge"
                                            value={formData.serviceCharge}
                                            onChange={handleChange}
                                            className="w-full px-3 py-1 border-none bg-[#F4F4F5] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter Service Charge"
                                        />
                                    </div>
                                </div>


                                {/* Action Buttons */}
                                <div className="flex gap-3 justify-end mt-4">
                                    <button
                                        type="button"
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                                        onClick={handleBack}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default ServiceTypePlanStudent;