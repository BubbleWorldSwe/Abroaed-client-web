import React from "react";
import { useSelector } from "react-redux";

function ExpensesDest({}) {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  return (
    <div className=" bg-white   dark:border-gray-700 dark:bg-gray-800">
      {details?.expenses?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {details?.expenses?.map((item, index) => (
            <div key={index} className="text-left">
              <p className="text-base font-semibold  text-gray-700 dark:text-gray-400">
                {item.label}
              </p>
              <p className="text-sm font-medium text-gray-600 dark:text-white">
                {item.value || "N/A"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-center py-4 text-gray-500">No Records</p>
        </div>
      )}
    </div>
  );
}

export default ExpensesDest;
