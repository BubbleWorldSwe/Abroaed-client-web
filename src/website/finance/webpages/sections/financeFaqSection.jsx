import { useState } from "react";
import { motion } from "framer-motion";

const FinanceFaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="h-auto py-16 w-full dark:bg-black relative flex  flex-col gap-2 items-center justify-center">
            <h2 className="mb-1 text-[45px]  font-extrabold text-[#27272A] dark:text-white">
                Frequently Asked Questions
            </h2>
            <section className=" bg-white dark:bg-gray-900 max-w-[80rem] max-h-[40rem]  lg:w-[80rem] md:w-[40rem] p-6 overflow-auto rounded-md shadow-md flex flex-col">
                <div className="flex-1 overflow-auto">
                    {[
                        {
                            question:
                                "What should I do if I face a financial emergency while abroad?",
                            answer:
                                "We provide ongoing support and guidance on handling unexpected financial situations. Our team can help you find emergency financial solutions, such as loans or alternative funding options.",
                        },
                        {
                            question:
                                "How do I manage my living expenses while abroad?",
                            answer:
                                "We offer budgeting tips and recommend strategies to help you manage your finances effectively. We also suggest ways to save on daily expenses and ensure you stay within your budget.",
                        },
                        {
                            question: "Can I work part-time while studying abroad?",
                            answer:
                                "Many countries allow students to work part-time. We provide guidance on finding legal part-time work opportunities and how to balance work with your studies effectively.",
                        },
                        {
                            question:
                                "How do I pay my money internationally?",
                            answer:
                                "We help you pick the most reliable payment methods with minimal possible service charges, be it international bank transfers, digital wallets, or money transfer services.",
                        },
                    ].map((faq, index) => (
                        <div key={index}>
                            <h2 id={`accordion-flush-heading-${index}`}>
                                <button
                                    type="button"
                                    className={`flex justify-between items-center py-5 w-full font-medium text-left bg-white dark:bg-gray-900 dark:text-white 
                                        ${activeIndex === index ? '' : 'border-b-2  border-gray-200 dark:border-gray-700'}`}
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    <span className="whitespace-normal text-[24px] font-bold text-[#27272A] ">{faq.question}</span>
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
                                <div className="">
                                    <p className="text-[#27272A] mb-3 font-normal text-start text-base whitespace-pre-wrap">
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

export default FinanceFaqSection