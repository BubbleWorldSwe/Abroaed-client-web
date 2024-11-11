import React, { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="h-auto py-8 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-yellow-500/[0.2] relative flex items-center justify-center">
      {/* Blurred Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-32 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top center, rgba(255, 223, 0, 0.5), transparent 70%)",
          filter: "blur(40px)",
        }}
      ></div>

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className="z-[999] bg-white dark:bg-gray-900 max-w-[80rem] max-h-[40rem]  lg:w-[80rem] md:w-[40rem] p-6 overflow-auto rounded-md shadow-md flex flex-col">
        <h2 className="mb-6 font-inter lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="flex-1 overflow-auto">
          {[
            {
              question:
                "Do UK universities and courses have quality assurance?",
              answer:
                "Yes, the universities in the UK are expected to meet the standards set by the quality assurance system in the UK. Their universities are globally recognised for the strong academic and research departments that offer a diverse range of courses and for the friendly, multicultural communities in the campuses that offer a space where everyone can belong.",
            },
            {
              question:
                "Do UK universities and courses have quality assurance?",
              answer:
                "Yes, the universities in the UK are expected to meet the standards set by the quality assurance system in the UK. Their universities are globally recognised for the strong academic and research departments that offer a diverse range of courses and for the friendly, multicultural communities in the campuses that offer a space where everyone can belong.",
            },
            {
              question: "Does Abroed take fees?",
              answer:
                "Leverage Edu offers all its counselling, admissions and visa services completely free of cost. Its premium Leverage One services are tiered plans that include several value-added services to students including scholarship assistance, test preparation, priority visa assistance, accommodation assistance and more.",
            },
            {
              question:
                "Where can I find scholarships and financial support for studying in the UK?",
              answer:
                "A wide range of scholarships and financial support options are available for international students who dream of studying in the UK. The SI-UK scholarship search leads you to hundreds of scholarships provided by universities and government organisations.",
            },
            {
              question: "How can Abroaed help my study abroad journey?",
              answer:
                "Abroed is a global education agency that assists students in pursuing their studies in the UK. We advise on the best universities and courses based on your academic background and future goals, and assist you with the application process, including documentation support, visa guidance, and scholarship searches.",
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
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
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
                className={`overflow-hidden border-b border-gray-200 dark:border-gray-700 ${
                  activeIndex === index ? "block" : "hidden"
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

export default FAQ;
