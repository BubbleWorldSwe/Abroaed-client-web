import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";

import { SelectField } from "../../../commons/components/inputFields/selectField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const ImmigrationDetailsModal = ({
  closeModal,
  filledData,
  visaTypes,
  onUpdate,
  details,
}) => {
  const [formData, setFormData] = useState(
    {
      visaName: filledData?.visaName,
      visaType: filledData?.visaType._id,
      description: filledData?.description,
    } || {
      visaName: "",
      visaType: "",
      description: "",
    }
  );

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e?.target?.value || e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.visaName.trim() ||
      !formData.visaType.trim() ||
      !formData.description.trim()
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    let updatedImmigrations = [];

    if (filledData) {
      // Edit Mode
      updatedImmigrations = details.immigrations.map((visa) =>
        visa._id === filledData._id ? formData : visa
      );
    } else {
      // Add Mode
      const newVisa = { ...formData };
      updatedImmigrations = [...details.immigrations, newVisa];
    }

    const immigrationWithoutId = updatedImmigrations.map(
      ({ _id, ...rest }) => ({
        ...rest,
        visaType:
          typeof rest.visaType === "object" ? rest.visaType._id : rest.visaType,
      })
    );

    console.log(immigrationWithoutId);

    onUpdate({ immigrations: immigrationWithoutId });

    // closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-5">
          <TextInputField
            label="Visa Name"
            name="visaName"
            type="text"
            value={formData.visaName}
            onChange={(e) => handleInputChange(e, "visaName")}
            placeholder="Enter Visa Name"
            required
          />

          <SelectField
            label="Visa Type"
            name="visaType"
            value={formData.visaType}
            onChange={(e) => handleInputChange(e, "visaType")}
            options={visaTypes.map((data) => ({
              label: data.name,
              value: data._id,
            }))}
            required
          />
        </div>

        <TextareaInputField
          label="Brief Description"
          name="description"
          type="text"
          value={formData.description}
          onChange={(e) => handleInputChange(e, "description")}
          placeholder="Enter description"
          required
        />

        <div className="text-end mt-10">
          <ModalCloseButton label={"Cancel"} onClick={closeModal} />
          <ModalSubmitButton label={"Save"} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default ImmigrationDetailsModal;
