import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToSection } from "../../slices/collegeSectionSlice";

function FinancialAidTable() {
  const dispatch = useDispatch();
  const financialAid = useSelector((state) =>
    state.collegeSections.sections.find(
      (section) => section.title === "Financial Aid and Scholarships"
    )
  );
  console.log("first", financialAid);
  const handleAddScholarship = () => {
    const newScholarship = {
      scholarshipName: "New Scholarship",
      link: "#",
      description: "Brief description here",
    };
    dispatch(
      addItemToSection({
        sectionTitle: "Financial Aid and Scholarships",
        newItem: newScholarship,
      })
    );
  };

  // Filter valid scholarships with at least one meaningful field
  const validScholarships = financialAid?.content?.filter(
    (scholarship) =>
      scholarship.scholarshipName || scholarship.link || scholarship.description
  );

  if (!financialAid || !validScholarships || validScholarships.length === 0) {
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
          onClick={handleAddScholarship}
          className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add Scholarship
        </button>
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Financial Aid and Scholarships
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Scholarship Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Link
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {validScholarships.map((scholarship, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {scholarship.scholarshipName || "Unnamed Scholarship"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">
                  {scholarship.description || "No description available"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {scholarship.link ? (
                    <a
                      href={scholarship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-700 hover:underline dark:text-primary-500"
                    >
                      {scholarship.link}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={handleAddScholarship}
        className="mt-6 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Add Scholarship
      </button>
    </div>
  );
}

export default FinancialAidTable;
