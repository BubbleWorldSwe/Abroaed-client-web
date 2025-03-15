/* eslint-disable react/prop-types */
import { useState } from "react";
import dark from "../../../assets/dark.png"
import locationIcon from "../../../assets/locationIcon.png"
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField"
import { TextInputField } from "../../../commons/components/inputFields/textInputField"

const EnquiryLOEModal = ({
    isOpen,
    onClose,
}) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
    });

    const [termsAgreed, setTermsAgreed] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {

    };


    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white max-h-[85vh]  font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-lg z-50 relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>
                        <div className="relative overflow-hidden">
                            {/* Image with Float */}
                            <div>
                                <img
                                    src={dark}
                                    alt="Accommodation"
                                    className="  rounded-lg w-full object-fill shadow-md  h-48"
                                />
                            </div>
                            {/* Details */}
                            <div className="py-3">
                                <h5 className="text-[22px] mb-1 font-semibold tracking-tight text-[#27272A] dark:text-white">
                                    College Name
                                </h5>
                                <div className="flex justify-between w-4/5 items-center">
                                    <div className="flex items-center gap-2">
                                        <img
                                            className="w-[14px] h-[14px]  object-contain mx-1"
                                            src={locationIcon}
                                            alt={'locotionIcon'}
                                        />
                                        <p className="font-semibold text-[16px] text-gray-500 dark:text-gray-400">
                                            New York, USA
                                        </p>
                                    </div>
                                    <p className="font-semibold text-[16px] text-gray-500 dark:text-gray-400">
                                        Privacy
                                    </p>
                                </div>
                            </div>

                            <form className="space-y-15 " onSubmit={handleSubmit}>
                                <div className="grid font-rethink grid-cols-1 md:grid-cols-2 gap-2 ">
                                    {/* F Name */}
                                    <TextInputField
                                        label={"First Name*"}
                                        placeholder="Enter"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />

                                    {/* L Name */}
                                    <TextInputField
                                        label={"Last Name*"}
                                        placeholder="Enter"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
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
                                        checked={termsAgreed}
                                        onChange={(e) => setTermsAgreed(e.target.checked)}
                                    />
                                    <label htmlFor="terms" className="text-sm text-gray-600">
                                        I agree to Abroaed{" "}
                                        <span className="text-black cursor-pointer">
                                            Terms of Service
                                        </span>{" "}
                                        and{" "}
                                        <span className="text-black cursor-pointer">
                                            Privacy Policy
                                        </span>
                                        .
                                    </label>
                                </div>
                                {/* Action Buttons */}
                                <div className="flex justify-center text-center">
                                    <button
                                        type="submit" // ✅ Ensure button is of type submit
                                        className="mt-4 w-72 bg-[#FDDA24] text-gray-700 py-2 rounded-md font-semibold text-base hover:bg-yellow-300"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default EnquiryLOEModal