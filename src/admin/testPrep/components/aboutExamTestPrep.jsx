import { useEffect } from "react";
import { useSelector } from "react-redux";

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
          </div>
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
