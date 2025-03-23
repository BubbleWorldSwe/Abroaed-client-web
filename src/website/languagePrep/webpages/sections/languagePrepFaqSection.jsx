/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../../../../constants/colors";

const LanguagePrepFaqSection = ({ languagePrepsDetails }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="h-auto py-12 w-full dark:bg-black relative flex  flex-col gap-2 items-center justify-center">
      <h2 className={`mb-10 text-[45px]  font-extrabold text-[${COLORS.GRAY_PRIMARY}] dark:text-white`}>
        Frequently Asked Questions
      </h2>
      <section className=" bg-white dark:bg-gray-900 max-w-[80rem] max-h-[40rem]  lg:w-[80rem] md:w-[40rem] p-6 overflow-auto rounded-md shadow-md flex flex-col">
        <div className="flex-1 overflow-auto">
          {languagePrepsDetails?.faqs?.map((faq, index) => (
            <div key={index}>
              <h2 id={`accordion-flush-heading-${index}`}>
                <button
                  type="button"
                  className={`flex justify-between items-center py-5 w-full font-medium text-left bg-white dark:bg-gray-900 dark:text-white 
                    ${activeIndex === index ? '' : 'border-b-2  border-gray-200 dark:border-gray-700'}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className={`whitespace-normal text-[24px] font-bold text-[${COLORS.GRAY_PRIMARY}] `}>{faq.question}</span>
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
                  <p className={`text-[${COLORS.GRAY_PRIMARY}] mb-2 font-normal text-start text-base whitespace-pre-wrap`}>
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
};

export default LanguagePrepFaqSection;
