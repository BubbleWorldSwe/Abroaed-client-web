import { useSelector } from "react-redux";

const AboutLanguagePrep = () => {
  const languagePrepDetails = useSelector(
    (state) => state.languagePreps.selectedLanguagePrep
  );

  return (
    <div className="flex flex-col gap-1">
      {languagePrepDetails?.about ? (
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
          {languagePrepDetails?.about}
        </p>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-center py-4 text-gray-500">No details available</p>
        </div>
      )}
    </div>
  );
};

export default AboutLanguagePrep;
