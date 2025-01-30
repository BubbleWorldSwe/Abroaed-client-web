import React from "react";
import { useSelector } from "react-redux";
import pencil from "../../assets/pencil.png"

function ScholarshipsDest() {
  const scholarships = {
    content: [
      {
        scholarshipName: "Merit-Based Scholarship",
        link: "https://example.com/merit-scholarship",
        description: "Awarded to students with exceptional academic records.",
      },
      {
        scholarshipName: "Need-Based Scholarship",
        link: "https://example.com/need-scholarship",
        description: "For students who demonstrate financial need.",
      },
      {
        scholarshipName: "Sports Scholarship",
        link: "https://example.com/sports-scholarship",
        description: "For students with outstanding sports achievements.",
      },
    ],
  };
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
    <div className=" bg-white  dark:border-gray-700 dark:bg-gray-800">
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th class="px-4 py-3">Scholarship Name</th>
              <th class="px-4 py-3 whitespace-nowrap">Last Edited</th>
              <th class="px-4 py-3">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class=" px-4 py-3">
                <div class="flex items-center">
                  Scholarship - Engineering
                </div>
              </td>
              <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div class="flex items-center">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full" />
                  <span>Jan 12,2030</span>
                </div>
              </th>

              <td className="px-4 py-3">
                <img src={pencil} alt="iMac Front Image" class="w-5 h-5 mr-3 " />


              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScholarshipsDest;
