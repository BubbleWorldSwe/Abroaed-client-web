import { useEffect } from "react";
import pencil from "../../../assets/pencil.png";
function ScholarshipsDest({ details, onEdit }) {
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

  const handleEditClick = (data) => {
    // Trigger the onEdit function when the pencil icon is clicked
    onEdit(data);
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
      <div className="overflow-x-auto">
        <div className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 border dark:text-gray-400">
              <thead className="text-sm text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3 border">Scholarship Name</th>
                  <th className="px-4 py-3 border whitespace-nowrap">
                    Last Edited
                  </th>
                  <th className="px-4 py-3 border"></th>
                </tr>
              </thead>
              <tbody>
                {details?.scholarships?.length > 0 ? (
                  details.scholarships.map((data, i) => (
                    <tr
                      key={i}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3 border">
                        <div className="flex items-center">{data?.name}</div>
                      </td>
                      <td className="px-4 py-3 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                            alt="User Avatar"
                            className="w-auto h-8 mr-3 rounded-full"
                          />
                          <span>Jan 12,2030</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 border">
                        <img
                          src={pencil}
                          alt="Edit Icon"
                          className="w-5 h-5 mr-3 cursor-pointer"
                          onClick={() => handleEditClick(data)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center py-4 border text-gray-500"
                    >
                      No Records
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipsDest;
