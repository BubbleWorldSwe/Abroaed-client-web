/* eslint-disable react/prop-types */
import { useState } from "react";
import locationIcon from "../../../assets/locationIcon.png"
import wallet from "../../../assets/wallet.png"
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField"
import { TextInputField } from "../../../commons/components/inputFields/textInputField"

const EnquiryLOEModal = ({
    item,
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
                // <div className="fixed inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-75 z-50">
                //     <div className="bg-white max-h-[85vh]  font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-lg z-50 relative">
                //         <button
                //             className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                //             onClick={onClose}
                //         >
                //             &times;
                //         </button>
                //         <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>

                //         <div className="relative overflow-hidden">
                //             {/* Image with Float */}
                //             <div>
                //                 <img
                //                     src={item.imgUrl}
                //                     alt="Accommodation"
                //                     className="  rounded-lg w-full object-fill shadow-md  h-48"
                //                 />
                //             </div>
                //             {/* Details */}
                //             <div className="py-3">
                //                 <h3 className="text-lg font-semibold mb-2">
                //                     {item?.name}
                //                 </h3>
                //                 {/* location */}
                //                 <div className="flex gap-2 items-center">
                //                     <div className="flex items-center gap-2">
                //                         <img className="w-4 h-4 object-contain" src={locationIcon} alt="Location Icon" />

                //                         <p className="font-semibold text-[16px] text-gray-500 dark:text-gray-400">
                //                             {item.location}                                        </p>
                //                     </div>
                //                     <p className="text-gray-700 font-semibold">
                //                         {item.entityType}
                //                     </p>
                //                 </div>
                //             </div>

                //             <form className="space-y-15 " onSubmit={handleSubmit}>
                //                 <div className="grid font-rethink grid-cols-1 md:grid-cols-2 gap-2 ">
                //                     {/* F Name */}
                //                     <TextInputField
                //                         label={"First Name*"}
                //                         placeholder="Enter"
                //                         name="firstName"
                //                         value={formData.firstName}
                //                         onChange={handleChange}
                //                         required
                //                     />

                //                     {/* L Name */}
                //                     <TextInputField
                //                         label={"Last Name*"}
                //                         placeholder="Enter"
                //                         name="lastName"
                //                         value={formData.lastName}
                //                         onChange={handleChange}
                //                         required
                //                     />

                //                     {/* Email */}
                //                     <TextInputField
                //                         label="Email*"
                //                         name="email"
                //                         type="email"
                //                         value={formData.email}
                //                         onChange={handleChange}
                //                         placeholder="Enter email"
                //                         required
                //                     />

                //                     {/* Contact Number */}
                //                     <TextInputField
                //                         label="Phone*"
                //                         name="mobile"
                //                         type="tel"
                //                         value={formData.mobile}
                //                         onChange={handleChange}
                //                         placeholder="Enter phone"
                //                         required
                //                     />
                //                 </div>
                //                 <div className="mt-4 flex items-center justify-center gap-2">
                //                     <CheckboxField
                //                         onClick={(e) => e.stopPropagation()}
                //                         id={`enquiryModal`}
                //                         htmlFor={`enquiryModal`}
                //                         checked={termsAgreed}
                //                         onChange={(e) => setTermsAgreed(e.target.checked)}
                //                     />
                //                     <label htmlFor="terms" className="text-sm text-gray-600">
                //                         I agree to ABROAED{" "}
                //                         <span className="text-black cursor-pointer">
                //                             Terms of Service
                //                         </span>{" "}
                //                         and{" "}
                //                         <span className="text-black cursor-pointer">
                //                             Privacy Policy
                //                         </span>
                //                         .
                //                     </label>
                //                 </div>
                //                 {/* Action Buttons */}
                //                 <div className="flex justify-center text-center">
                //                     <button
                //                         type="submit" // ✅ Ensure button is of type submit
                //                         className={`mt-4 w-72 bg-yellow-primary text-gray-700 py-2 rounded-md font-semibold text-base hover:bg-yellow-300`}
                //                     >
                //                         Submit
                //                     </button>
                //                 </div>
                //             </form>
                //         </div>
                //     </div>
                // </div>
                <div className="fixed inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white max-h-[73vh] overflow-y-auto  font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-3xl z-50 relative">
                        <button
                            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>

                        <div className="relative overflow-hidden">
                            {/* Image with Float */}
                            <img
                                src={item.imgUrl}
                                alt="Accommodation"
                                className="w-2/5 h-auto rounded-lg shadow-md float-left mr-6 mb-4"
                            />

                            {/* Details */}
                            <div className="">
                                <h3 className="text-lg font-semibold mb-2">
                                    {item?.name}
                                </h3>

                                {/* Location */}
                                <div className="flex gap-2 items-center">
                                    <img className="w-4 h-4 object-contain" src={locationIcon} alt="Location Icon" />
                                    <p className="text-gray-700 font-semibold">
                                        {item?.location},{" "}

                                    </p>
                                </div>

                                {/* Price */}
                                <div className="flex gap-2 items-center mt-2">
                                    <img className="w-5 h-5 object-contain" src={wallet} alt="Wallet Icon" />
                                    <p className="text-gray-900">Rs. {item?.fees}</p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mt-2">
                                    {item?.description}
                                </p>
                            </div>
                        </div>

                        <form className="space-y-15 pt-5" onSubmit={handleSubmit}>
                            <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2">
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
                                    I agree to ABROAED{" "}
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
                                    className={`mt-4 w-72 bg-yellow-primary text-gray-700 py-2 rounded-md font-semibold text-base hover:bg-yellow-300`}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}


export default EnquiryLOEModal