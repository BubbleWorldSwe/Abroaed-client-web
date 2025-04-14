/* eslint-disable react/prop-types */
import Flag from "react-world-flags";
import AccommodationCard from "../../../comman/components/accommodationCard";
import Loader from "../../../comman/components/loader";

function AccommodationResultForCountry({
  onSelectCountry,
  accList,
  isLoading,
  selectedCountry,
  destinationsList,
  source,
  onAddLead,
  addToSavedPreferences,
  removeFromSavedPreferences,
}) {
  return (
    <div className="">
      <div className="flex gap-4 ">
        {/* Sidebar Filter */}
        <div className="w-1/5 ">
          <form className="mx-auto">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl mb-2">Filter By Country</p>
              {/* Destination Tabs */}
              {destinationsList.map((country) => (
                <button
                  key={country._id}
                  className={`px-4 py-2 text-gray-500 rounded-md text-left ${selectedCountry?._id === country._id
                    ? "bg-gray-200 font-bold"
                    : "hover:bg-gray-100"
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCountry(country._id);
                  }}
                >
                  {country?.countryId?.name === "All" ? (
                    <p style={{ display: "inline-block", width: 20 }}>
                      {country?.countryId?.emoji}
                    </p>
                  ) : (
                    <Flag
                      width={20}
                      code={country?.countryId?.code}
                      style={{ display: "inline-block" }}
                    />
                  )}{" "}
                  {country?.countryId?.name !== "All"
                    ? country?.countryId?.name
                    : `All ( ${destinationsList?.length - 1} )`}
                </button>
              ))}
            </div>
          </form>
        </div>

        {/* Cards Grid Section */}
        <div className="w-4/5 ml-2">
          <h5 className="text-3xl font-bold tracking-tight text-gray-900">
            Showing Results for {selectedCountry?.countryId?.name}
          </h5>
          <hr className="h-px my-4 bg-gray-200 border-0" />

          {/* Loader */}
          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
              {accList.length > 0 ? (
                accList.map((item, index) => (
                  <AccommodationCard
                    key={index}
                    item={item}
                    source={source}
                    onAddLead={onAddLead}
                    addToSavedPreferences={addToSavedPreferences}
                    removeFromSavedPreferences={removeFromSavedPreferences}
                  />
                ))
              ) : (
                <p className="text-gray-500">No accommodations available.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccommodationResultForCountry;
