import contactMap from "../../../../assets/contactMap.png"
import { COLORS } from "../../../../constants/colors"

const ContactUs = () => {
    return (
        <section className="px-10 pt-12 mt-10 mx-auto">
            <div className=" px-4 py-6 flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
                {/* Content */}
                <div className="relative z-10">
                    <h2 className={`mb-2 text-[45px]  font-extrabold text-[${COLORS.GRAY_PRIMARY}] dark:text-white`}>
                        Contact Us
                    </h2>
                    <div className=" border-t border-gray-300"></div>
                    <div className="grid grid-cols-1 md:justify-center md:grid-cols-2   gap-3  py-16">
                        <div className="flex flex-col gap-5">
                            <h5 className={`text-[18px] text-[${COLORS.GRAY_PRIMARY}] font-medium`}>
                                Before contacting us, please check the Frequently Asked Questions.
                            </h5>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    Corporate Office
                                </h5>
                                <p className="text-[#71717A] text-base font-normal ">
                                    Lorem Ipsum DolorSit Amet
                                </p>
                            </div>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    Here are contact emails for different parts of Wasserstoff:
                                </h5>

                            </div>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    General Inquiries
                                </h5>
                                <p className="text-[#71717A] text-base font-normal ">
                                    info@ABROAED.com
                                </p>
                            </div>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    Press Inquiries
                                </h5>
                                <p className="text-[#71717A] text-base font-normal ">
                                    press@ABROAED.com
                                </p>
                            </div>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    Work With Us
                                </h5>
                                <p className="text-[#71717A] text-base font-normal ">
                                    careers@ABROAED.com
                                </p>
                            </div>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    Press Inquiries
                                </h5>
                                <p className="text-[#71717A] text-base font-normal ">
                                    press@ABROAED.com
                                </p>
                            </div>
                        </div>
                        <div >
                            <img src={contactMap} alt="contact-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs