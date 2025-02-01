import { useState, useEffect } from "react";
import { Combobox } from "@headlessui/react";
import { fetchCountriesRequest } from "../../../redux/actions/countryActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function AddDestinationModal({ isOpen, onClose, onAddDestination }) {
  const dispatch = useDispatch();
  const { countries, loading } = useSelector((state) => state.countries);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      dispatch(fetchCountriesRequest(query));
    }
  }, [query, dispatch]);

  const filteredCountries =
    query === ""
      ? countries
      : countries.filter((country) =>
          country.name.toLowerCase().includes(query.toLowerCase())
        );

  const handleAddDestination = () => {
    if (!selectedCountry) {
      toast.error("Please select a country.");
      return;
    }
    onAddDestination(selectedCountry); // Call parent function to handle destination adding
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Add New Destination</h2>

        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Country
          </label>
          <Combobox value={selectedCountry} onChange={setSelectedCountry}>
            <div className="relative">
              <Combobox.Input
                className="w-full p-2 rounded-lg border"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search countries"
              />
              <Combobox.Options className="absolute z-10 mt-1 w-full bg-white shadow-md rounded-lg max-h-60 overflow-auto">
                {filteredCountries.length === 0 ? (
                  <div className="p-2 text-gray-500">No results found</div>
                ) : (
                  filteredCountries.map((country, index) => (
                    <Combobox.Option
                      key={index}
                      value={country._id}
                      className="cursor-pointer p-2 hover:bg-blue-500 hover:text-white"
                    >
                      {country.name}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </div>
          </Combobox>
        </div>

        <div className="flex justify-end space-x-4 mt-10">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleAddDestination}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add Destination
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDestinationModal;
