/* eslint-disable react/prop-types */

import { formatDate } from "../../../../utils/helper";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";

function TextPrepAbout({ testPrepsDetails }) {
  return (
    <div className="relative z-10">
      <div className="mx-auto  max-w-screen-2xl   flex flex-col gap-6">
        <header className=" not-format">
          <SectionMainHeader
            className="mb-4"
          >
            About {testPrepsDetails?.productName}
          </SectionMainHeader>
          <PrimaryBodyText
            className={'mt-2'}
          >
            {testPrepsDetails?.about}
          </PrimaryBodyText>

        </header>
        {testPrepsDetails?.aboutExam?.examDate &&
          testPrepsDetails?.aboutExam?.examCenter && (
            <div className="relative overflow-x-auto ">
              <div className="flex  items-center justify-center  mx-auto ">
                <table className=" bg-white  text-sm text-left text-gray-500 border-2 border-[#E4E4E7] dark:text-gray-400">
                  <thead className="text-base  text-[#71717A] font-bold  bg-[#E4E4E7] dark:bg-gray-700 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Particular
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Detail
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Exam Date
                      </th>
                      <td className="px-6 py-4">
                        {formatDate(testPrepsDetails?.aboutExam?.examDate)}
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Exam Centre
                      </th>
                      <td className="px-6 py-4">
                        {testPrepsDetails?.aboutExam?.examCenter}
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Registration
                      </th>
                      <td className="px-6 py-4">
                        {testPrepsDetails?.aboutExam?.registration}
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Fees
                      </th>
                      <td className="px-6 py-4">
                        {testPrepsDetails?.aboutExam?.fees}
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Syllabus
                      </th>
                      <td className="px-6 py-4">
                        {testPrepsDetails?.aboutExam?.syllabus}
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Scoring & Results
                      </th>
                      <td className="px-6 py-4">
                        {testPrepsDetails?.aboutExam?.scoring_and_results}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="m-0 p-0" colSpan={2}>
                        <nav
                          className="bg-[#E4E4E7]  w-full  md:space-y-0 p-4"
                          aria-label="Table navigation"
                        ></nav>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default TextPrepAbout;
