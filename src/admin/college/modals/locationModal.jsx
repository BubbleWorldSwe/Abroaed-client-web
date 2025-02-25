import { useEffect, useState } from "react";
import SearchDropdownField from "../../../commons/components/inputFields/searchDropdownFields";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { toast } from "react-toastify";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";

const LocationModal = ({
  closeModal,
  onUpdate,
  destinationsList,
  getStatesList,
  statesList,
}) => {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);

  const [formData, setFormData] = useState({
    destinationId: collegeDetails?.destinationId?._id,
    stateId: collegeDetails?.stateId?._id,
    city: collegeDetails?.city,
    address: collegeDetails?.address,
  });

  console.log(formData);

  console.log(collegeDetails.destinationId);

  console.log(destinationsList);

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { destinationId, stateId, city, address } = formData;

    if (!destinationId || !stateId || !city || !address) {
      toast.error("Please fill out all fields.");
      return;
    }
    onUpdate(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 w-[400px]">
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

          <TextareaInputField
            label="Address"
            name="address"
            value={formData?.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            placeholder={"Enter Address"}
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
