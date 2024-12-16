import React, { useState } from "react";
import { useSelector } from "react-redux";

function DestinationFAQ() {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const faqs = useSelector((state) =>
    state.destinationSections.sections.find(
      (section) => section.title === "FAQs"
    )
  );

  const validFAQs = Array.isArray(faqs?.content)
    ? faqs.content.filter((faq) => faq.question || faq.answer)
    : [];

  const handleOpenAddModal = (section) => {
    console.log(`Open Add Modal for: ${section}`);
  };

  const handleEditFAQ = (faq) => {
    console.log("Edit FAQ:", faq);
  };

  const handleDeleteFAQ = (faq) => {
    console.log("Delete FAQ:", faq);
  };

  if (validFAQs.length === 0) {
    return (
      <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          FAQs
        </h2>
        <p className="text-gray-500 dark:text-gray-400">No FAQs added</p>
        <button
          type="button"
          onClick={() => handleOpenAddModal("FAQs")}
          className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add
        </button>
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        FAQs
      </h2>
      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 text-gray-700 dark:text-gray-300">
              Question
            </th>
            <th className="px-4 py-2 text-gray-700 dark:text-gray-300">
              Answer
            </th>
            <th className="px-4 py-2 text-gray-700 dark:text-gray-300">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {validFAQs.map((faq, index) => (
            <tr
              key={index}
              className="border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td className="px-4 py-2">{faq.question || "N/A"}</td>
              <td className="px-4 py-2">{faq.answer || "N/A"}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleEditFAQ(faq)}
                  className="text-blue-600 hover:underline dark:text-blue-400 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteFAQ(faq)}
                  className="text-red-600 hover:underline dark:text-red-400"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={() => handleOpenAddModal("FAQs")}
        className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Add
      </button>
    </div>
  );
}

export default DestinationFAQ;
