import vectorLeftFlat from "../../../../assets/vectoreLeftFlat.png"
import vectorRightFlat from "../../../../assets/vectorRightFlat.png"
const ContactUs = () => {
    return (
        <section className="">
            <div className="  py-6  pb-10 flex flex-col gap-6 mt-10 md:mt-5">
                {/* Content */}
                <div className="relative  z-10">
                    <h2 className={`mb-2 text-[45px]  font-extrabold text-gray-primary dark:text-white`}>
                        Contact Us
                    </h2>
                    <div className=" border-t border-gray-300"></div>
                    <div className="grid grid-cols-1  md:justify-center md:grid-cols-2 gap-6  md:gap-10 pb-8 md:pb-16 pt-6 md:pt-10">
                        <div className="flex relative flex-col gap-4 text-white bg-gray-primary py-8 hover:scale-[1.01] rounded-xl shadow-lg px-4 md:px-10">
                            <div >
                                <h5 className="text-[16px]  font-medium">
                                    Corporate Office
                                </h5>
                                <p className=" text-base font-normal ">
                                    Delhi Office
                                    B11, Block B, Qutab Institutional Area, New Delhi, Delhi 110016
                                </p>

                            </div>
                            <div>
                                <h5 className="text-[16px]  font-medium">
                                    Contact Number
                                </h5>
                                <p className=" text-base font-normal ">
                                    📞 +91 73033 68821
                                    <br />
                                    📞 +91 73033 68820
                                    <br />
                                    📞 +91 73033 68819
                                </p>

                            </div>

                            <div>
                                <h5 className="text-[16px]  font-medium">
                                    Here are  emails for different parts of ABROAED:
                                </h5>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <h5 className="text-[16px]  font-medium">
                                            General Inquiries
                                        </h5>
                                        <p className=" text-base font-normal ">
                                            info@abroaed.com
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-[16px]  font-medium">
                                            Work With Us
                                        </h5>
                                        <p className=" text-base font-normal ">
                                            career@abroaed.com
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-[16px]  font-medium">
                                            Collaborate With Us
                                        </h5>
                                        <p className=" text-base font-normal ">
                                            partnership@abroaed.com
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="absolute right-0  top-0 bottom-0 overflow-hidden z-0">
                                <img
                                    className="rounded-lg w-full h-full object-contain"
                                    src={vectorRightFlat}
                                    alt="Counselling session"
                                />
                            </div>
                        </div>

                        <div className="hover:scale-[1.01]">
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
                <div className="absolute bottom-4 left-0 -z-10">
                    <img
                        className="rounded-lg w-full h-full object-cover"
                        src={vectorLeftFlat}
                        alt="Counselling session"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactUs