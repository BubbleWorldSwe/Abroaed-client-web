import { BorderSelectField } from "../../../../commons/components/inputFields/borderSelectField";
import { BorderTextInputField } from "../../../../commons/components/inputFields/borderTextInputField";

const BookCounsellingNow = () => {
    return (
        <section className=" dark:bg-gray-900 relative px-10 mx-auto h-full">
            <div className="py-16 px-4 mx-auto max-w-screen-2xl   z-10">
                {/* <div className="grid grid-cols-1  lg:grid-cols-2 gap-28 mx-auto  "> */}
                <h2 className="mb-4 text-4xl text-center tracking-tight font-bold text-gray-900 dark:text-white">
                    Book Counselling Now
                </h2>
                <div className="flex justify-center text-center">
                    <div className="px-10 max-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
                            <div>
                                <BorderTextInputField label={"First Name*"} placeholder="Enter" />
                                <BorderTextInputField label={"Email*"} placeholder="Enter" />
                                <BorderTextInputField
                                    label={"Highest Education Qualification"}
                                    placeholder="Enter"
                                />
                                <BorderTextInputField
                                    label={"  When Do You Plan to Study?"}
                                    placeholder="Enter"
                                />
                            </div>
                            <div>
                                <BorderTextInputField label={"Last Name*"} placeholder="Enter" />
                                <BorderTextInputField label={"Contact Number*"} placeholder="Enter" />
                                <div className="my-2">
                                    <BorderSelectField
                                        label={"Preferred Study Level"}
                                        options={[
                                            { value: "UG", label: "UG" },
                                            { value: "PG", label: "PG" },
                                            { value: "PhD", label: "PhD" },
                                            { value: "Others", label: "Others" },
                                        ]}
                                        required
                                    />
                                </div>

                                <BorderSelectField
                                    label={"Mode of Counselling"}
                                    options={[
                                        { value: "1", label: "Home Counselling" },
                                        { value: "2", label: "Virtual Counselling" },
                                        { value: "3", label: "Visit Us" },
                                        { value: "4", label: "Others" },
                                    ]}
                                    required
                                />

                            </div>

                        </div>
                        <div className="flex items-start mt-4">
                            <input
                                type="checkbox"
                                className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                required
                            />
                            <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
                                I agree to Abroaed <span className="font-bold">Terms of Service</span>{" "}
                                and <span className="font-bold">Privacy Policy</span>.
                            </label>
                        </div>
                        <div className="flex items-start mt-4 text-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                required
                            />
                            <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400 text-start">
                                I agree to Abroaed Terms and privacy policy. Please contact me by phone,
                                email, or SMS to assist with my enquiry.<br />
                                I would like to receive updates
                                and offers from Abroaed.
                            </label>
                        </div>
                        <div className="py-6">
                            <button
                                type="submit"
                                className="py-2  px-7 text-base font-semibold  mt-4 text-center text-[#432205] rounded-lg bg-[#FDDA24] hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default BookCounsellingNow