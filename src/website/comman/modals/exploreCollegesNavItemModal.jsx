/* eslint-disable react/prop-types */
import { ChevronRight } from "lucide-react";
import UniversityCard from "../components/universityCard";
import Loader from "../components/loader";
import Flag from "react-world-flags";

const ExploreCollegesNavItemModal = ({
  allDestinations,
  selectedDestination,
  selectedState,
  states,
  filteredColleges,
  isLoading,
  handleDestinationClick,
  handleStateClick,
}) => {
  return (
    <div className="absolute left-0 transform top-full w-[60rem] min-w-max  h-[60vh] py-[5px] z-50">
      <div className="bg-white border border-gray-100 h-[80vh] shadow-lg rounded-b-lg flex mt-2  overflow-hidden">
        {/* Left Sidebar: Destination List */}
        <div className="p-3 min-w-max w-1/4 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200  text-gray-900 bg-gray-300 dark:text-white dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-bold">Destinations</h3>
          <ul className="flex flex-col gap-[2px]">
            {allDestinations.map((destination) => (
              <li key={destination._id}>
                <button
                  onClick={() => handleDestinationClick(destination)}
                  className={`flex  justify-between whitespace-nowrap p-3 w-full text-left rounded-lg ${
                    selectedDestination?._id === destination._id
                      ? "bg-gray-100 dark:bg-gray-600"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="font-semibold text-base">
                    <Flag
                      width={20}
                      code={destination?.countryId?.code}
                      style={{ display: "inline-block", marginRight: "10px" }}
                    />
                    {` ${destination?.countryId?.name}`}
                  </span>
                  <ChevronRight />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: States and Colleges */}
        <div className="py-5 w-3/4 px-5  bg-gray-100 dark:bg-gray-700 overflow-y-auto">
          {isLoading ? (
            <Loader />
          ) : states.length <= 0 ? (
            <>
              <p className="my-20 text-[16px] font-semibold text-gray-700 text-center">
                No colleges available for the selected destination.
              </p>
            </>
          ) : (
            <>
              {/* States List */}
              <h3 className="mb-5 text-lg font-bold text-gray-900 dark:text-white">
                {`${selectedDestination?.countryId?.name} ( ${filteredColleges?.length} )`}
              </h3>

              <h3 className="mb-4 text-lg font-bold text-gray-700 dark:text-white">
                States
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {states.map((state) => (
                  <button
                    key={state?._id}
                    onClick={() => handleStateClick(state)}
                    className={`px-4 py-2 border rounded-full hover:bg-gray-primary hover:text-white font-semibold ${
                      selectedState?._id === state?._id
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {state?.name}
                  </button>
                ))}
              </div>

              {/* Colleges List */}
              {/*  <h3 className="mb-4 text-lg font-bold text-gray-700 dark:text-white">
              Colleges
            </h3> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2 max-h-[55vh] overflow-y-auto">
                {isLoading ? (
                  <p>Loading...</p>
                ) : filteredColleges.length > 0 ? (
                  filteredColleges.map((college) => (
                    <UniversityCard item={college} key={college?._id} />
                  ))
                ) : (
                  <p>No colleges available for the selected state.</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreCollegesNavItemModal;
