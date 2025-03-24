/* eslint-disable react/prop-types */
import { useState } from "react";
import { BorderTextInputField } from "../../../../commons/components/inputFields/borderTextInputField";
import { TextareaInputField } from "../../../../commons/components/inputFields/textareaInputField";

const FaqContactUs = ({ isLoading }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [checkboxes, setCheckboxes] = useState({
        termsAgreed: false,
        contactPermission: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckboxes((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };



    return (
        <section className="relative isolate overflow-hidden  px-12 mx-auto">
            <div className="py-8  mx-auto max-w-screen-2xl  dark:bg-gray-800 antialiased relative ">
                <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-12">
                    {/* Left Section - 60% Width */}
                    <div className="md:w-3/5   py-4 flex flex-col justify-center">
                        <h1 className={`text-[45px] mb-5 font-extrabold  leading-tight  text-gray-primary  max-w-3xl  `}>
                            Couldn’t Find....
                            Write To Us.
                        </h1>
                        <p className=" text-[18px] max-w-3xl tracking-tight text-[#52525B]  font-normal">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet.
                        </p>
                    </div>

                    {/* Right Section - 40% Width */}
                    <div className="lg:w-2/5  py-4 md:pt-5 max-w-md">
                        <form className=" mx-auto" >
                            <div className="grid grid-cols-2 gap-5">
                                <BorderTextInputField
                                    label={"Name*"}
                                    placeholder="Enter"
                                    name="Name"
                                    type={'text'}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <BorderTextInputField
                                    label={"Email ID*"}
                                    placeholder="Enter"
                                    name="email"
                                    type={'email'}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <TextareaInputField
                                label={"Message"}
                                placeholder="Your message"
                                name=""
                                type={'text'}
                                value={formData.message}
                                onChange={handleChange}

                            />


                            {/* Checkbox 1 */}
                            <div className="flex items-start mt-6 mb-4">
                                <input
                                    type="checkbox"
                                    name="termsAgreed"
                                    checked={checkboxes.termsAgreed}
                                    onChange={handleCheckboxChange}
                                    className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                />
                                <label className="ml-2 text-[12px] text-[#71717A]">
                                    I agree to ABROAED{" "}
                                    <span className="font-bold">Terms of Service</span> and{" "}
                                    <span className="font-bold">Privacy Policy</span>.
                                </label>
                            </div>


                            <button
                                type="submit"
                                className={`w-full font-medium rounded-lg text-sm px-5 text-[#432205] py-2.5 text-center bg-yellow-primary hover:bg-yellow-300`}
                                style={{ color: "#000" }}
                            >
                                {isLoading ? (
                                    <div className="flex justify-center items-center">
                                        <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                                    </div>
                                ) : (
                                    "Get Help"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqContactUs