import React from "react";

function ExpensesDest({ details }) {
  return (
    <div className=" bg-white   dark:border-gray-700 dark:bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {details?.expenses.map((item, index) => (
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
    </div>
  );
}

export default ExpensesDest;
