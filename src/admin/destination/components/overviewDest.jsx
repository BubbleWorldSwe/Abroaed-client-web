import React from "react";
import { useSelector } from "react-redux";

function OverviewDest({}) {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  return (
    <div className="   bg-white  py-0  dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-2 font-semibold">
        Why Study in {details?.countryId?.name}?
      </h2>
      {/* About Section */}
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {details?.description}
        {/* {description || "No details available"} */}
      </p>
      {/* Grid Section */}
      <div className="justify-start w-full grid grid-cols-1 sm:grid-cols-5 gap-4">
        {[
          { key: "Capital", value: details?.capitalId?.name },
          { key: "Language", value: details?.language },
          //  { key: "Total Population", value: details?.totalPopulation },

          { key: "Currency", value: details?.countryId?.currency },
          { key: "Dial Code", value: details?.dialcode },
          { key: "International Students", value: details?.intrStudents },
        ].map((item, index) => (
          <div key={index} className="text-left">
            <p className="text-base font-semibold text-gray-900 dark:text-gray-400">
              {item.key}
            </p>
            <p className="text-sm font-medium text-gray-600 dark:text-white">
              {item.value || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewDest;
