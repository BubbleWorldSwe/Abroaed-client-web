import { useState } from "react";
import { motion } from "framer-motion";

const FaqRightContent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="">
            <h5 className="text-[#27272A] mb-5 text-[32px] font-bold ">Category 1</h5>
            <div className="flex-1 overflow-auto">
                {Array(6).fill().map((_, index) => (
                    <div key={index}>
                        <h2 id={`accordion-flush-heading-${index}`}>
                            <button
                                type="button"
                                className={`flex justify-between items-center py-4 w-full font-medium text-left bg-white dark:bg-gray-900 dark:text-white 
                    ${activeIndex === index ? '' : 'border-b-2  border-gray-200 dark:border-gray-700'}`}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="whitespace-normal text-[22px] font-bold text-[#27272A] ">
                                    Lorem ipsum dolor sit amet?
                                </span>
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
                                <p className="mb-2 text-[#27272A] font-normal text-base whitespace-pre-wrap">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FaqRightContent