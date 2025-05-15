import { useEffect } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/helper";

const AboutExamTestPrep = () => {
  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );

  useEffect(() => {
    console.log(
      "testPrepDetails updated in AboutExamTestPrep : " + testPrepDetails
    );
  }, [testPrepDetails]);

  return (
    <div className="flex flex-col gap-1">
      {testPrepDetails?.about ? (
        <>
          <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
            {testPrepDetails?.about}
          </p>
          <table className="w-full px-5 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-500  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Particular</th>
                <th className="px-4 py-3 whitespace-nowrap">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className=" px-4 py-3 font-semibold">Exam Date</td>
                <td className=" px-4 py-3">
                  {formatDate(testPrepDetails?.aboutExam?.examDate)}
                </td>
              </tr>
              <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className=" px-4 py-3 font-semibold">Exam Center</td>
                <td className=" px-4 py-3">
                  {testPrepDetails?.aboutExam?.examCenter}
                </td>
              </tr>
              <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className=" px-4 py-3 font-semibold">Registration Link</td>
                <td className=" px-4 py-3">
                  <a
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    href={testPrepDetails?.aboutExam?.registration}
                  >
                    {testPrepDetails?.aboutExam?.registration}
                  </a>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className=" px-4 py-3 font-semibold">Fees (in ₹)</td>
                <td className=" px-4 py-3">
                  {testPrepDetails?.aboutExam?.fees}
                </td>
              </tr>
              <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className=" px-4 py-3 font-semibold">Syllabus</td>
                <td className=" px-4 py-3">
                  {testPrepDetails?.aboutExam?.syllabus}
                </td>
              </tr>
              <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className=" px-4 py-3 font-semibold">Scoring & Results</td>
                <td className=" px-4 py-3">
                  {testPrepDetails?.aboutExam?.scoring_and_results}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-center py-4 text-gray-500">No details available</p>
        </div>
      )}
    </div>
  );
};

export default AboutExamTestPrep;
