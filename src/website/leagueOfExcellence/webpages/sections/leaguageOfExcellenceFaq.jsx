import { useState } from "react";
import { motion } from "framer-motion";
import SectionMainHeader from "../../../typographies/sectionMainHeader";
import FaqsQuestionText from "../../../typographies/faqsQuestionText";
import FaqsAnswerText from "../../../typographies/faqsAnswerText";

const LeaguageOfExcellenceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "How is League of Excellence (LOE) different from Ivy League?",
      answer: (
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Parameters</th>
              <th className="border border-gray-300 px-4 py-2">
                League of Excellence
              </th>
              <th className="border border-gray-300 px-4 py-2">Ivy League</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Origin</td>
              <td className="border border-gray-300 px-4 py-2">
                A global collection of top-tier universities known for research,
                innovation, and global influence. Created by ABROAED to help
                students choose top universities worldwide.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                A group of 8 private universities in the USA, originally formed
                as an athletic conference in 1954, now known for elite
                academics.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Number of Schools
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Multiple prestigious universities worldwide
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Only 8 schools
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Location</td>
              <td className="border border-gray-300 px-4 py-2">
                Global (USA, UK, Europe, Asia, Australia, etc.)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                USA-centric (Northeast region)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Schools</td>
              <td className="border border-gray-300 px-4 py-2">
                Stanford, MIT, Oxford, Cambridge, ETH Zurich, NUS, University of
                Melbourne, and more.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Harvard, Yale, Princeton, Columbia, UPenn, Dartmouth, Brown,
                Cornell.
              </td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      question: "Which universities are part of the League of Excellence?",
      answer: (
        <div className="space-y-4">
          <p>
            Our League of Excellence service covers the following universities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>United States</strong>
              <ul className="list-disc list-inside pl-5">
                <li>Harvard University</li>
                <li>Yale University</li>
                <li>Princeton University</li>
                <li>Columbia University</li>
                <li>University of Pennsylvania (UPenn)</li>
                <li>Dartmouth College</li>
                <li>Brown University</li>
                <li>Cornell University</li>
                <li>Stanford University</li>
                <li>Massachusetts Institute of Technology (MIT)</li>
                <li>University of Chicago</li>
                <li>California Institute of Technology (Caltech)</li>
                <li>University of California, Berkeley</li>
                <li>Johns Hopkins University, etc.</li>
              </ul>
            </li>
            <li>
              <strong>United Kingdom</strong>
              <ul className="list-disc list-inside pl-5">
                <li>University of Oxford</li>
                <li>University of Cambridge</li>
                <li>Imperial College London</li>
                <li>London School of Economics and Political Science (LSE)</li>
                <li>University College London (UCL), etc.</li>
              </ul>
            </li>
            <li>
              <strong>Europe (Other Top Institutions)</strong>
              <ul className="list-disc list-inside pl-5">
                <li>ETH Zurich (Switzerland)</li>
                <li>Technical University of Munich (TUM)</li>
                <li>University of Amsterdam (Netherlands)</li>
                <li>Sorbonne University (France)</li>
                <li>Karolinska Institute (Sweden), etc.</li>
              </ul>
            </li>
            <li>
              <strong>Canada</strong>
              <ul className="list-disc list-inside pl-5">
                <li>University of Toronto</li>
                <li>McGill University</li>
                <li>University of British Columbia (UBC), etc.</li>
              </ul>
            </li>
            <li>
              <strong>Asia-Pacific</strong>
              <ul className="list-disc list-inside pl-5">
                <li>National University of Singapore (NUS)</li>
                <li>University of Tokyo (Japan)</li>
                <li>Tsinghua University (China)</li>
                <li>Peking University (China)</li>
                <li>University of Hong Kong (HKU)</li>
                <li>Seoul National University (South Korea), etc.</li>
              </ul>
            </li>
            <li>
              <strong>Australia & New Zealand</strong>
              <ul className="list-disc list-inside pl-5">
                <li>University of Melbourne</li>
                <li>Australian National University (ANU)</li>
                <li>University of Sydney</li>
                <li>University of Queensland</li>
                <li>University of Auckland (New Zealand), etc.</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can students from any country apply to LOE universities?",
      answer:
        "Yes! LOE universities welcome students from all over the world and provide scholarships for overseas students.",
    },
    {
      question: "Do LOE universities offer scholarships?",
      answer:
        "Some LOE universities offer need-based financial aid but do not typically provide merit-based scholarships.",
    },
  ];

  return (
    <div className=" py-14 w-full dark:bg-black relative flex  flex-col gap-2 items-center px-7 mx-auto justify-center">
      <SectionMainHeader className={`mb-1`}
      >
        Frequently Asked Questions
      </SectionMainHeader>
      <section className=" bg-white w-80  dark:bg-gray-900 md:max-w-[80rem] min-h-max  lg:w-[80rem] md:w-[40rem] p-6  rounded-md shadow-md flex flex-col">
        <div className="flex-1">
          {faqs?.map((faq, index) => (
            <div key={index} className="">
              <h2 id={`accordion-flush-heading-${index}`}>
                <button
                  type="button"
                  className={`flex justify-between items-center py-5 w-full font-medium text-left bg-white dark:bg-gray-900 dark:text-white 
                                        ${activeIndex === index
                      ? ""
                      : "border-b-2  border-gray-200 dark:border-gray-700"
                    }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <FaqsQuestionText FaqsQuestionText>
                    {faq.question}
                  </FaqsQuestionText>
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
                <FaqsAnswerText className="mb-2 overflow-x-auto ">
                  {faq.answer}
                </FaqsAnswerText>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeaguageOfExcellenceFaq;
