import React from "react";
import { useSelector } from "react-redux";

function ScholarshipsDest() {
  const scholarships = useSelector((state) =>
    state.destinationSections.sections.find(
      (section) => section.title === "Financial Aid and Scholarships"
    )
  );

  const validScholarships = Array.isArray(scholarships?.content)
    ? scholarships.content.filter(
        (item) => item.scholarshipName || item.link || item.description
      )
    : [];

  const handleOpenAddModal = (section) => {
    console.log(`Open Add Modal for: ${section}`);
  };

  const handleEditScholarship = (scholarship) => {
    console.log("Edit scholarship:", scholarship);
  };

  const handleDeleteScholarship = (scholarship) => {
    console.log("Delete scholarship:", scholarship);
  };

  if (validScholarships.length === 0) {
    return (
      <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Financial Aid and Scholarships
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          No scholarships added
        </p>
        <button
          type="button"
          onClick={() => handleOpenAddModal("Financial Aid and Scholarships")}
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
        Financial Aid and Scholarships
      </h2>
      <ul>
        {validScholarships.map((scholarship, index) => (
          <li
            key={index}
            className="mb-4 border-b pb-2 last:border-none dark:border-gray-600"
          >
            <h3 className="text-md font-medium text-gray-800 dark:text-gray-200">
              {scholarship.scholarshipName || "Unnamed Scholarship"}
            </h3>
            {scholarship.link && (
              <a
                href={scholarship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                View Details
              </a>
            )}
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {scholarship.description || "No description available."}
            </p>
            <div className="mt-2">
              <button
                onClick={() => handleEditScholarship(scholarship)}
                className="mr-2 text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteScholarship(scholarship)}
                className="text-sm text-red-600 hover:underline dark:text-red-400"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => handleOpenAddModal("Financial Aid and Scholarships")}
        className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Add
      </button>
    </div>
  );
}

export default ScholarshipsDest;
