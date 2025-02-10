import { useEffect } from "react";
import { useSelector } from "react-redux";

const AboutLanguagePrep = () => {
  const languagePrepDetails = useSelector(
    (state) => state.languagePreps.selectedLanguagePrep
  );

  useEffect(() => {
    console.log(
      "languagePrepDetails updated in AboutLanguagePrep : " +
        languagePrepDetails
    );
  }, [languagePrepDetails]);

  return (
    <div className="flex flex-col gap-1">
      {languagePrepDetails?.about &&
      languagePrepDetails?.exampTypes &&
      languagePrepDetails?.exampComponents ? (
        <>
          <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
            {languagePrepDetails?.about}
          </p>
          <div>
            <p className="font-semibold text-gray-600 mb-1">Exam Types</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
              {languagePrepDetails?.exampTypes}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-600 mb-1">Exam Components</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
              {languagePrepDetails?.exampComponents}
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

export default AboutLanguagePrep;
