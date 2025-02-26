import { useEffect } from "react";
import AccommodationCard from "../../../comman/components/accommodationCard";
import { useSelector } from "react-redux";

function AccommodationResultForCountry({
  onSelectCountry,
  accList,
  isLoading,
  selectedCountry,
}) {
  const { allDestinations } = useSelector((state) => state.destinations);

  return (
    <div className="relative mx-auto px-10">
      <div className="mx-auto w-full px-2 max-w-screen-2xl relative z-10">
        <div className="flex gap-4 py-8 bg-white pr-10 mx-auto">
          {/* Sidebar Filter */}
          <div className="w-1/5 py-1">
            <form className="mx-auto">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full py-2 px-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                />
              </div>
              {/* Tabs for Filtering by Country */}
              <div className="flex flex-col gap-2 mt-3">
                <p className="font-semibold text-lg">Filter By Country</p>
                {allDestinations.map((country) => (
                  <button
                    key={country._id}
                    className={`px-4 py-2 text-gray-500 rounded-md text-left ${
                      selectedCountry?._id === country._id
                        ? "bg-gray-200 font-bold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCountry(country._id);
                    }}
                  >
                    {country?.countryId?.emoji} {country?.countryId?.name}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Cards Grid Section */}
          <div className="w-4/5 ml-10">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900">
              Showing Results for {selectedCountry?.countryId?.name}
            </h5>
            <hr className="h-px my-4 bg-gray-200 border-0" />

            {/* Loader */}
            {isLoading ? (
              <div className="flex justify-center items-center mt-10 h-[450px]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
                {accList.length > 0 ? (
                  accList.map((item, index) => (
                    <AccommodationCard key={index} item={item} />
                  ))
                ) : (
                  <p className="text-gray-500">No accommodations available.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccommodationResultForCountry;
