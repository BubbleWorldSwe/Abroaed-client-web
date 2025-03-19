import { useEffect, useState } from "react";
import SearchDropdownField from "../../../commons/components/inputFields/searchDropdownFields";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { toast } from "react-toastify";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const LocationModal = ({
  closeModal,
  fetchCountries,
  onUpdate,
  destinationsList,
  getStatesList,
  // statesList,
}) => {
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );

  console.log(accommodationDetails.destinationId);

  const [formData, setFormData] = useState({
    countryId: accommodationDetails?.countryId?._id,
    stateId: accommodationDetails?.stateId?._id,
    city: accommodationDetails?.city,
    streetName: accommodationDetails?.streetName,
  });
  const { countries } = useSelector((state) => state.countries);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [statesList, setStatesList] = useState([]);

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleCountrySelect = (data) => {
    setSelectedCountry(data);
    setFormData((prev) => ({
      ...prev,
      countryId: data.value,
      stateId:
        data.value === accommodationDetails.countryId
          ? accommodationDetails.stateId
          : null,
    }));
    setStatesList(data.states || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { countryId, stateId, city, streetName } = formData;

    if (!countryId || !stateId || !city || !streetName) {
      toast.error("Please fill out all fields.");
      return;
    }
    onUpdate(formData);
  };

  useEffect(() => {
    if (accommodationDetails?.countryId) {
      const country = countries.find(
        (c) => c._id === accommodationDetails.countryId._id
      );

      if (country) {
        setSelectedCountry({
          label: `${country.emoji} ${country.name}`,
          value: country._id,
          ...country,
        });
        setStatesList(country.states || []);
      }
    }
  }, [accommodationDetails]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5">
          <SearchDropdownField
            label="Select Country"
            options={countries.map((data) => ({
              label: `${data.emoji} ${data.name}`,
              value: data._id,
              ...data,
            }))}
            value={selectedCountry} // Prefilled value
            onSelect={handleCountrySelect}
            onSearch={fetchCountries}
          />

          <SelectField
            label="Country"
            name="destinationId"
            value={formData.destinationId}
            onChange={(e) => {
              handleChange(e);

              const selectedCountry = destinationsList.find(
                (data) => data?._id === e.target.value
              );

              console.log(
                "Selected Country Object:",
                selectedCountry._id,
                selectedCountry?.countryId?._id
              );

              getStatesList(selectedCountry?.countryId?._id);
            }}
            options={destinationsList.map((data) => ({
              label: `${data?.countryId?.emoji} ${data?.countryId?.name}`,
              value: data?._id,
              ...data,
            }))}
            required
          />

          <SelectField
            label="State"
            name="stateId"
            value={formData?.stateId}
            onChange={(e) => handleInputChange("stateId", e.target.value)}
            options={statesList.map((data) => ({
              label: data?.name,
              value: data?._id,
            }))}
            required
          />

          <TextInputField
            label="City"
            name="city"
            value={formData?.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            placeholder={"Enter City"}
          />

          <TextInputField
            label="Street Name"
            name="streetName"
            value={formData?.streetName}
            onChange={(e) => handleInputChange("streetName", e.target.value)}
            placeholder={"Enter Street Name"}
          />
        </div>

        <div className="text-end mt-10">
          <ModalCloseButton label={"Cancel"} onClick={closeModal} />
          <ModalSubmitButton label={"Save"} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default LocationModal;
