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
  statesList,
}) => {
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );

  const [formData, setFormData] = useState({
    destinationId: accommodationDetails?.destinationId?._id,
    stateId: accommodationDetails?.stateId?._id,
    city: accommodationDetails?.city,
    streetName: accommodationDetails?.streetName,
  });

 

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { destinationId, stateId, city, streetName } = formData;

    if (!destinationId || !stateId || !city || !streetName) {
      toast.error("Please fill out all fields.");
      return;
    }
    onUpdate(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5">
          <SelectField
            label="Country"
            name="destinationId"
            value={formData.destinationId}
            onChange={(e) => {
              // handleChange(e);
              handleInputChange("destinationId", e.target.value);

              const selectedCountry = destinationsList.find(
                (data) => data?._id === e.target.value
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
