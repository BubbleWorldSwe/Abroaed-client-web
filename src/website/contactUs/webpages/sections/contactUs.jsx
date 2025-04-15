
const ContactUs = () => {
    return (
        <section className="px-10  mt-10 mx-auto">
            <div className=" px-4 py-6  pb-10 flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
                {/* Content */}
                <div className="relative z-10">
                    <h2 className={`mb-2 text-[45px]  font-extrabold text-gray-primary dark:text-white`}>
                        Contact Us
                    </h2>
                    <div className=" border-t border-gray-300"></div>
                    <div className="grid grid-cols-1 md:justify-center md:grid-cols-2   gap-3  pb-16 pt-10">
                        <div className="flex flex-col gap-5">
                            <h5 className={`text-[18px] text-gray-primary font-medium`}>
                                Before contacting us, please check the Frequently Asked Questions.
                            </h5>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    Corporate Office
                                </h5>
                                <p className="text-[#71717A] text-base font-normal ">
                                    Delhi Office
                                    B11, Block B, Qutab Institutional Area, New Delhi, Delhi 110016
                                    <br />
                                    📞 +91 73033 68820,
                                    <br />
                                    📞 +91 73033 68819
                                </p>
                            </div>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    Here are contact emails for different parts of ABROAED:
                                </h5>

                            </div>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    General Inquiries
                                </h5>
                                <p className="text-[#71717A] text-base font-normal ">
                                    info@abroaed.com
                                </p>
                            </div>

                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    Work With Us
                                </h5>
                                <p className="text-[#71717A] text-base font-normal ">
                                    career@abroaed.com
                                </p>
                            </div>
                            <div>
                                <h5 className="text-[16px] text-[#52525B] font-semibold">
                                    Collaborate With Us
                                </h5>
                                <p className="text-[#71717A] text-base font-normal ">
                                    partnership@abroaed.com

                                </p>
                            </div>

                        </div>
                        <div className="h-[25rem]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448194.82162352453!2d77.09323125!3d28.6440836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d7bf09e9c4a5839%3A0x9f32d6d97057bad7!2sABROAED!5e0!3m2!1sen!2sin!4v1744352551889!5m2!1sen!2sin"
                                className="w-full h-full border-0 rounded-lg shadow-md"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs