import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/helper";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";

const StudentLangPrep = () => {
  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col p-5 mb-3 ">
      <div className="flex py-2 flex-col  mx-auto w-full bg-white dark:bg-gray-800 relative  sm:rounded-lg">
        <h2 className="text-2xl py-2 font-semibold  mb-3">
          Language/ Test Preps
        </h2>
        <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded">
          <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="px-4 py-3">
                  Type
                </th>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Batch Name{" "}
                </th>
                <th scope="col" className="px-4 py-3">
                  Mode
                </th>
                <th scope="col" className="px-4 py-3">
                  Batch Duration
                </th>
                <th scope="col" className="px-4 py-3">
                  Enrollment Date
                </th>
              </tr>
            </thead>
            <tbody>
              {studentProfile?.prepsBatches?.length > 0 ? (
                studentProfile?.prepsBatches?.map((batch, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3 w-4">
                      <CheckboxField
                        onClick={(e) => e.stopPropagation()}
                        id={`checkbox-table-${index}`}
                        htmlFor={`checkbox-table-${index}`}
                      />
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                      {batch?.type == "test_prep"
                        ? "Test Prep"
                        : "Language Prep"}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {batch?.name}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {batch?.batchName}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {batch?.mode}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {batch?.duration} Months
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {formatDate(batch?.createdAt)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-4 py-3 text-center text-gray-500"
                  >
                    No data exists
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentLangPrep;
