/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { applyingFor, highestEducation } from "../../../constants/values";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const UpdateLeadAdditionInfo = ({ isOpen, onClose }) => {
    const { allDestinations } = useSelector((state) => state.destinations);

    const [formData, setFormData] = useState({
        highestEducation: "",
        preferredDestination: "",
        applyingFor: "",
        targetYear: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            return { ...prevData, [name]: value };
        });
    };

    const handleUpdateLeadProfileInfo = () => {
    };
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
                        <h2 className="text-xl font-semibold mb-4">Update Additional Information </h2>
                        <div>
                            <form className="space-y-6">
                                <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2">
                                    {/* Highest Education Qualification (Dropdown) */}
                                    <SelectField
                                        label="Highest Education Qualification"
                                        name="highestEducation"
                                        value={formData.highestEducation}
                                        onChange={handleChange}
                                        options={highestEducation.map((data) => ({
                                            label: data,
                                            value: data,
                                        }))}
                                        required
                                    />
                                    {/* Preferred Study Destination (Dropdown) */}
                                    <SelectField
                                        label="Preferred Study Destination"
                                        name="preferredDestination"
                                        value={formData.preferredDestination}
                                        onChange={handleChange}
                                        options={allDestinations.map((data) => ({
                                            label: `${data?.countryId?.emoji} ${data?.countryId?.name}`,
                                            value: data?._id,
                                            ...data,
                                        }))}
                                        required
                                    />

                                    {/* Applying For (Dropdown) */}
                                    <SelectField
                                        label="Applying For"
                                        name="applyingFor"
                                        value={formData.applyingFor}
                                        onChange={handleChange}
                                        required
                                        options={applyingFor.map((data) => ({
                                            label: data,
                                            value: data,
                                        }))}
                                    />

                                    {/* Target Year (Dropdown) */}
                                    <SelectField
                                        label="Target Year"
                                        name="targetYear"
                                        value={formData.targetYear}
                                        onChange={handleChange}
                                        options={[
                                            "2025",
                                            "2024",
                                            "2023",
                                            "2022",
                                            "2021",
                                            "2020",
                                        ].map((data) => ({
                                            label: data,
                                            value: data,
                                        }))}
                                        required
                                    />
                                </div>
                                {/* Action Buttons */}
                                <div className="flex justify-end space-x-4 mt-10">
                                    <ModalCloseButton label="Cancel" onClick={onClose} />
                                    <ModalSubmitButton label="Submit" onClick={handleUpdateLeadProfileInfo} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>)

}

export default UpdateLeadAdditionInfo