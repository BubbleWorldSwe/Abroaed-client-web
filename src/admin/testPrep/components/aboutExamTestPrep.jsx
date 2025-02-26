import { useEffect } from "react";
import { useSelector } from "react-redux";
import pencil from '../../../assets/pencil.png'
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
      {testPrepDetails?.about &&
        testPrepDetails?.exampTypes &&
        testPrepDetails?.exampComponents ? (
        <>
          <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
            {testPrepDetails?.about}
          </p>
          <div>
            <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-1 min-w-[14rem]">
                    Particular
                  </th>
                  <th scope="col" className="px-4 py-1 min-w-[10rem]">
                    Details
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {testPreps.map(
                  (item) =>
                    item?.index === currentPage &&
                    item?.data.map((test, index) => ( */}
                <tr
                  // key={index}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >Exam Date
                  </th>
                  <td className="px-4 py-3">V-1</td>
                  <td className=" py-3">
                    <button>
                      <img src={pencil} alt="pic" className="w-4 h-4 mr-2" />
                    </button>
                  </td>
                </tr>
                <tr
                  // key={index}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >Exam Date
                  </th>
                  <td className="px-4 py-3">V-1</td>
                  <td className=" py-3">
                    <button>
                      <img src={pencil} alt="pic" className="w-4 h-4 mr-2" />
                    </button>
                  </td>
                </tr>
                {/* )) */}
                {/* )} */}
              </tbody>

            </table>
          </div>



          {/* <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
            {testPrepDetails?.about}
          </p>
          <div>
            <p className="font-semibold text-gray-600 mb-1">Exam Types</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
              {testPrepDetails?.exampTypes}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-600 mb-1">Exam Components</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
              {testPrepDetails?.exampComponents}
            </p>
          </div> */}
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-center py-4 text-gray-500">No details available</p>
        </div>
      )
      }
    </div >
  );
};

export default AboutExamTestPrep;
