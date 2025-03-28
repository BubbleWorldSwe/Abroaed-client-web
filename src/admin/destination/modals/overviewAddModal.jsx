import { useEffect, useState } from "react";

import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import SearchDropdownField from "../../../commons/components/inputFields/searchDropdownFields";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesRequest } from "../../../redux/actions/countryActions";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";

const OverviewAddModal = ({ closeModal, onUpdate, states }) => {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  const [formData, setFormData] = useState({
    description: details?.description || "",
    capitalId: details?.capitalId?._id || "",

    language: details?.language || "",
    intrStudents: details?.intrStudents || "",
    currency: details?.countryId?.currency || "",
    dialcode: details?.dialcode || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // List of required fields
    const requiredFields = [
      "description",
      "capitalId",
      "language",
      "intrStudents",
      "dialcode",
    ];

    // Check if any required field is missing or empty
    const missingFields = requiredFields.filter((field) => {
      const value = formData[field];

      // Check for empty string, undefined, null, or zero-length array
      return (
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "")
      );
    });

    if (missingFields.length > 0) {
      toast.error(
        `Please fill all required fields: ${missingFields.join(", ")}`
      );
      return;
    }

    console.log("Form submitted with data:", formData);
    onUpdate(formData);
  };

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextareaInputField
        label={`Why Study in ${details?.countryId?.name}? `}
        name="description"
        type="text"
        value={formData?.description}
        onChange={(e) => handleInputChange(e?.target?.value, "description")}
        placeholder="Enter description"
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        <SelectField
          label="Capital"
          name="capitalId"
          value={formData.capitalId}
          onChange={(e) => {
            console.log("e");
            console.log(e);
            handleInputChange(e?.target?.value, "capitalId");
          }}
          options={states.map((data) => ({
            label: data.name,
            value: data._id,
          }))}
          required
        />
        <TextInputField
          label="Language"
          name="language"
          type="text"
          value={formData.language}
          onChange={(e) => handleInputChange(e?.target?.value, "language")}
          placeholder="Enter National Language"
          required
        />

        <TextInputField
          label="Currency"
          name="currency"
          type="text"
          value={details?.countryId?.currency}
          //onChange={(e) => handleInputChange(e?.target?.value, "currency")}
          //    placeholder="Enter Capital"
          disabled
        />

        {/*  <TextInputField
          label="Total Population"
          name="totalPopulation"
          type="number"
          value={formData.totalPopulation}
          onChange={(e) =>
            handleInputChange(e?.target?.value, "totalPopulation")
          }
          placeholder="Enter Total Population"
          required
        /> */}
        <TextInputField
          label="International Students"
          name="intrStudents"
          type="number"
          value={formData.intrStudents}
          onChange={(e) => handleInputChange(e?.target?.value, "intrStudents")}
          placeholder="Enter International Students"
          required
        />

        <TextInputField
          label="Dailing Code"
          name="dialcode"
          type="text"
          value={formData.dialcode}
          onChange={(e) => handleInputChange(e?.target?.value, "dialcode")}
          placeholder="Enter Dailing Code"
          required
        />
      </div>
      <div className="text-end mt-10">
        <ModalCloseButton label={"Cancel"} onClick={closeModal} />
        <ModalSubmitButton label={"Save"} onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default OverviewAddModal;
