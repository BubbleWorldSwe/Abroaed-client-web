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
  const { success } = useSelector((state) => state.destinations);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const [capital, setCapital] = useState(null);

  const fetchCountries = (q) => {
    dispatch(fetchCountriesRequest(q));
  };

  const handleCountrySelect = (data) => {
    setSelectedCountry(data);
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
  };

  useEffect(() => {}, [selectedCountry]);

  useEffect(() => {
    if (success) {
      setSelectedCountry(null);
      setCapital(null);
    }
  }, [success]);

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

        <form onSubmit={handleAddDestination}>
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
            onChange={(e) => setCapital(e.target.value)}
            placeholder={"Enter"}
            required
          />

          <div className="flex justify-end space-x-4 mt-10">
            <ModalCloseButton label="Cancel" onClick={onClose} />
            <ModalSubmitButton label="Add" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDestinationModal;
