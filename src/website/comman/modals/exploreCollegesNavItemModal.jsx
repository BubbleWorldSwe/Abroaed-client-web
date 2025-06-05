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
    <div className="absolute right-0 transform top-full w-[60rem] min-w-max  h-[60vh] py-[5px] z-50">
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
        <div className="py-5 px-5  bg-gray-100 dark:bg-gray-700 overflow-y-auto">
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
              <div className="mb-4 overflow-x-auto w-[700px]">
                <div className="flex gap-2 w-max min-w-full pr-2">
                  {states.map((state) => (
                    <button
                      key={state?._id}
                      onClick={() => handleStateClick(state)}
                      className={`px-4 py-2 border rounded-full whitespace-nowrap hover:bg-gray-primary hover:text-white font-semibold ${
                        selectedState?._id === state?._id
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {state?.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colleges List */}
              {/*  <h3 className="mb-4 text-lg font-bold text-gray-700 dark:text-white">
              Colleges
            </h3> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2 overflow-y-auto">
                {isLoading ? (
                  <p>Loading...</p>
                ) : filteredColleges.length > 0 ? (
                  <>
                    {filteredColleges.slice(0, 10).map((college) => (
                      <UniversityCard item={college} key={college?._id} />
                    ))}
                    {filteredColleges.length > 10 && (
                      <div className="col-span-2 text-center mt-2">
                        <a
                          href={`/destinations/${selectedDestination?._id}`}
                          className="inline-block px-6 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded font-semibold"
                        >
                          Show More
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="col-span-2">
                    No colleges available for the selected state.
                  </p>
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
