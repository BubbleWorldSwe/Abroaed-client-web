import { useState, useEffect } from "react";
import { Combobox } from "@headlessui/react";
import { fetchCountriesRequest } from "../../../redux/actions/countryActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SearchDropdownField from "../../../commons/components/inputFields/searchDropdownFields";

function AddDestinationModal({ isOpen, onClose, onAddDestination }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const fetchCountries = (q) => {
    dispatch(fetchCountriesRequest(q));
  };

  const handleAddDestination = () => {
    if (!selectedCountry) {
      toast.error("Please select a country.");
      return;
    }
    onAddDestination(selectedCountry);
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

        <SearchDropdownField
          label="Select Country"
          options={countries.map((data) => ({
            label: `${data.emoji} ${data.name}`,
            //  label: data.name,
            value: data._id,
          }))}
          // options={countries}
          value={selectedCountry}
          onSelect={(data) => {
            console.log(data);
            setSelectedCountry(data.value);
          }}
          onSearch={fetchCountries}
        />

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
