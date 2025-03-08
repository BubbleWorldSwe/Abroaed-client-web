import { useState } from "react";
import { motion } from "framer-motion";

const AccommodationFaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="h-auto py-8 w-full dark:bg-black relative flex items-center justify-center">
            {/* Blurred Gradient Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-32 z-10 pointer-events-none"

            ></div>

            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <section className=" bg-white dark:bg-gray-900 max-w-[80rem] max-h-[40rem]  lg:w-[80rem] md:w-[40rem] p-6 overflow-auto rounded-md shadow-md flex flex-col">
                <h2 className="mb-6 font-inter lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Frequently Asked Questions
                </h2>
                <div className="flex-1 overflow-auto">
                    {[
                        {
                            question:
                                "What types of accommodation are available? ",
                            answer:
                                "We offer various accommodation types including shared apartments, private rooms, and university housing. The options depend on your budget and preferences, and we ensure the accommodation is safe and close to your school or work.",
                        },
                        {
                            question:
                                "Is it safe to live in these accommodations? ",
                            answer:
                                "Yes, safety is our top priority. We ensure that all options we provide meet safety standards, and we verify the reviews and conditions before recommending them to you. You can always contact us for further information about the safety of a location.",
                        },
                        {
                            question: "Can I cancel my accommodation booking?",
                            answer:
                                "Cancellation policies vary by property. We work with landlords and agencies to ensure you understand the cancellation terms before booking. In case of changes, we offer support to manage any necessary adjustments.",
                        },
                        {
                            question:
                                "How do I handle utilities like electricity and water?",
                            answer:
                                "We take you through a thorough process on how to set up these utilities, mainly electricity, and water, if they're not included in the rent. We ensure that you will be prepared with how to take care of these utilities and other round expenses.",
                        },

                        // Add more FAQs here
                    ].map((faq, index) => (
                        <div key={index}>
                            <h2 id={`accordion-flush-heading-${index}`}>
                                <button
                                    type="button"
                                    className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    <span className="whitespace-normal">{faq.question}</span>
                                    <svg
                                        className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                            }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </h2>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    height: activeIndex === index ? "auto" : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className={`overflow-hidden border-b border-gray-200 dark:border-gray-700 ${activeIndex === index ? "block" : "hidden"
                                    }`}
                            >
                                <div className="py-5">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AccommodationFaqSection