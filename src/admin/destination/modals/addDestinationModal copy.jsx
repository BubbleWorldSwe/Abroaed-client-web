import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesRequest } from "../../../redux/actions/countryActions";
import { toast } from "react-toastify";
import SearchDropdownField from "../../../commons/components/inputFields/searchDropdownFields";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";

function AddDestinationModal({ isOpen, onClose, onAddDestination }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [statesList, setStatesList] = useState([]); // Stores states of selected country
  const [filteredStates, setFilteredStates] = useState([]); // For search functionality
  const [selectedState, setSelectedState] = useState(null);
  const [capital, setCapital] = useState(null);

  const fetchCountries = (q) => {
    dispatch(fetchCountriesRequest(q));
  };

  const handleCountrySelect = (data) => {
    setSelectedCountry(data);

    setStatesList(data.states || []); // Extract states from selected country
    setFilteredStates(data.states || []); // Reset search results
    setSelectedState(null); // Reset state selection
  };

  const handleStateSearch = (query) => {
    if (!statesList.length) return;
    setFilteredStates(
      statesList.filter((state) =>
        state.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleAddDestination = () => {
    if (!selectedCountry) {
      toast.error("Please select a country.");
      return;
    }
    if (!capital) {
      toast.error("Please Select Capital.");
      return;
    }
    onAddDestination(selectedCountry?._id, capital);
    setSelectedCountry(null);
    setSelectedState(null);
    setStatesList([]);
    setFilteredStates([]);
  };

  useEffect(() => {}, [selectedState, selectedCountry]);

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

        {/* Country Selection */}
        <SearchDropdownField
          label="Select Country*"
          options={countries.map((data) => ({
            label: `${data.emoji} ${data.name}`,
            value: data._id,
            ...data,
          }))}
          value={selectedCountry}
          onSelect={handleCountrySelect}
          onSearch={fetchCountries}
        />

        {/* Currency Input */}
        <div className="my-5">
          <TextInputField
            label="Currency*"
            name="currency"
            type="text"
            value={selectedCountry?.currency}
            disabled={true}
            placeholder={"Enter"}
            required
          />
        </div>

        <TextInputField
          label="Capital*"
          name="capital"
          type="text"
          value={capital}
          onChange={(t) => setCapital(t)}
          placeholder={"Enter"}
          required
        />

        {/* State Selection */}
        <SearchDropdownField
          label="Select Capital*"
          options={filteredStates.map((data) => ({
            label: data.name,
            value: data._id,
          }))}
          value={selectedState}
          onSelect={(data) => setSelectedState(data.value)}
          onSearch={handleStateSearch}
          required
        />
        {/* Currency */}

        <div className="flex justify-end space-x-4 mt-10">
          <ModalCloseButton label="Cancel" onClick={onClose} />
          <ModalSubmitButton label="Add" onClick={handleAddDestination} />
        </div>
      </div>
    </div>
  );
}

export default AddDestinationModal;
