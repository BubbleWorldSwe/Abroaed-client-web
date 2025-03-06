import { ChevronRight } from "lucide-react";
import UniversityCard from "../components/universityCard";
import PageLoader from "../../../commons/components/loader/pageLoader";
import Loader from "../components/loader";

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
    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[70%] min-w-max h-[60vh] bg-white border border-gray-100 flex z-50 overflow-hidden">
      {/* Left Sidebar: Destination List */}
      <div className="p-3 w-1/4 overflow-y-auto text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-bold">Destinations</h3>
        <ul>
          {allDestinations.map((destination) => (
            <li key={destination._id}>
              <button
                onClick={() => handleDestinationClick(destination)}
                className={`flex justify-between p-3 w-full text-left rounded-lg ${
                  selectedDestination?._id === destination._id
                    ? "bg-gray-200 dark:bg-gray-600"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <span className="font-semibold text-base">
                  {`${destination.countryId.emoji} ${destination.countryId.name}`}
                </span>
                <ChevronRight />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: States and Colleges */}
      <div className="py-5 w-3/4 px-5 bg-gray-50 dark:bg-gray-700 overflow-y-auto">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* States List */}
            <h3 className="mb-5 text-lg font-bold text-yellow-700 dark:text-white">
              {`${selectedDestination?.countryId?.name} ( ${filteredColleges?.length} )`}
            </h3>

            <h3 className="mb-4 text-lg font-bold text-gray-700 dark:text-white">
              States
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {states.map((state) => (
                <button
                  key={state._id}
                  onClick={() => handleStateClick(state)}
                  className={`px-3 py-1 border rounded-full font-semibold ${
                    selectedState?._id === state._id
                      ? "bg-red-700 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {state.name}
                </button>
              ))}
            </div>

            {/* Colleges List */}
            {/*  <h3 className="mb-4 text-lg font-bold text-gray-700 dark:text-white">
              Colleges
            </h3> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-h-[40vh] overflow-y-auto">
              {isLoading ? (
                <p>Loading...</p>
              ) : filteredColleges.length > 0 ? (
                filteredColleges.map((college) => (
                  <UniversityCard item={college} key={college._id} />
                ))
              ) : (
                <p>No colleges available for the selected state.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreCollegesNavItemModal;
