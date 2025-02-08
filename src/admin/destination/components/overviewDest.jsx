import React, { useEffect } from "react";
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
          { key: "Total Population", value: details?.totalPopulation },
          { key: "Currency", value: details?.countryId?.currency },
          { key: "Dial Code", value: details?.dialcode },
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
      {/* Actions */}
      {/* <div className="flex items-center gap-4 mt-6">
        <button
          type="button"
          data-modal-target="editReviewModal"
          data-modal-toggle="editReviewModal"
          className="inline-flex text-sm items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
        >
          <svg
            className="mr-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
            />
          </svg>
          Edit
        </button>
        <button
          type="button"
          data-modal-target="deleteReviewModal"
          data-modal-toggle="deleteReviewModal"
          className="inline-flex text-sm items-center font-medium text-red-600 hover:underline dark:text-red-500"
        >
          <svg
            className="mr-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />
          </svg>
          Delete
        </button>
      </div> */}
    </div>
  );
}

export default OverviewDest;
