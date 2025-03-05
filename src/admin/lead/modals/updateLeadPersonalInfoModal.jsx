/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";

const UpdateLeadPersonalInfo = ({ isOpen, onClose, onUpdateLeadProfileInfo }) => {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        mobile: "",
        location: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            return { ...prevData, [name]: value };
        });
    };

    const handleUpdateLeadProfileInfo = () => {

        onUpdateLeadProfileInfo()
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
                        <h2 className="text-xl font-semibold mb-4">Update Personal Information</h2>
                        <div>
                            <form className="space-y-6">
                                <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2">
                                    {/* First Name */}
                                    <TextInputField
                                        label="First Name"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter first name"
                                        required
                                    />

                                    {/* Last Name */}

                                    <TextInputField
                                        label="Last Name"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter Last name"
                                        required
                                    />

                                    {/* Email */}
                                    <TextInputField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                        required
                                    />

                                    {/* Contact Number */}
                                    <TextInputField
                                        label="Mobile Number"
                                        name="mobile"
                                        type="tel"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="Enter mobile number"
                                        required
                                    />
                                    <TextInputField
                                        label="Location"
                                        name="location"
                                        type="text"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Enter Location"
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

export default UpdateLeadPersonalInfo