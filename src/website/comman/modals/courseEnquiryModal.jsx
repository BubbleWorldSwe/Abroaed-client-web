/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";

const CourseEnquiryModal = ({ isOpen, onClose }) => {
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

    return (
        <>
            {isOpen && (
                <div className="fixed h-screen inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white max-h-[63vh] overflow-y-auto font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-lg z-50 relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>
                        {/* Course Details */}
                        <h3 className="text-base font-semibold">Course Name</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-2">
                            <p>
                                <strong >Domain</strong> Engineering
                            </p>
                            <p>
                                <strong>Program</strong> Undergraduate
                            </p>
                            <p>
                                <strong>Duration</strong> 24 months
                            </p>
                            <p>
                                <strong>Fees</strong> $23,999 per year
                            </p>
                            <p>
                                <strong>Intake</strong> January
                            </p>
                        </div>

                        {/* Course Description */}
                        <p className="text-gray-600 text-sm mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet.
                            Integer cursus libero placerat ex volutpat posuere.
                        </p>

                        <form className="space-y-15 pt-5">
                            <div className="grid font-rethink grid-cols-1 gap-2 ">
                                {/*  Name */}
                                <TextInputField
                                    label="Name*"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter name"
                                    required
                                />

                                {/* Email */}
                                <TextInputField
                                    label="Email*"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                    required
                                />

                                {/* Contact Number */}
                                <TextInputField
                                    label="Phone*"
                                    name="mobile"
                                    type="tel"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Enter phone"
                                    required
                                />
                            </div>
                            <div className="mt-4 flex items-center justify-center gap-2">
                                <CheckboxField
                                    onClick={(e) => e.stopPropagation()}
                                    id={`enquiryModal`}
                                    htmlFor={`enquiryModal`}
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    I agree to Abroaed{" "}
                                    <span className="text-black cursor-pointer">Terms of Service</span> and{" "}
                                    <span className="text-black cursor-pointer">Privacy Policy</span>.
                                </label>
                            </div>
                            {/* Action Buttons */}
                            <div className="flex justify-center text-center">
                                <button className="mt-4 w-72 bg-[#FDDA24] text-gray-700 py-2 rounded-md font-semibold text-base hover:bg-yellow-300">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>)
}

export default CourseEnquiryModal