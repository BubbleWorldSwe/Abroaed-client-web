/* eslint-disable react/prop-types */
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { countriesData } from "../data";

function AddDestination({ isOpen, onClose }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [query, setQuery] = useState("");

  const filteredCountries =
    query === ""
      ? countriesData
      : countriesData.filter((country) =>
          country?.toLowerCase().includes(query.toLowerCase())
        );

  if (!isOpen) return null;

  return (
    <div className="fixed  font-rethink inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center">
      <div className="bg-white relative p-8 rounded-lg shadow-lg w-full max-w-md">
        <button
          className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Add New Destination</h2>

        <div className=" mx-auto">
          <div className="block  font-medium mb-1">Country</div>
          <Combobox value={selectedCountry} onChange={setSelectedCountry}>
            <div className="relative">
              <Combobox.Input
                className="w-full border-none bg-[#F4F4F5] rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Select a country"
              />
              <Combobox.Options className="absolute z-10 mt-1 w-full bg-white shadow-md rounded-lg max-h-60 overflow-auto border border-gray-200">
                {filteredCountries.length === 0 ? (
                  <div className="p-2 text-gray-500">No results found</div>
                ) : (
                  filteredCountries.map((country, index) => (
                    <Combobox.Option
                      key={index}
                      value={country}
                      className={({ active }) =>
                        `cursor-pointer p-2 ${
                          active ? "bg-blue-500 text-white" : "text-gray-900"
                        }`
                      }
                    >
                      {country}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </div>
          </Combobox>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDestination;
