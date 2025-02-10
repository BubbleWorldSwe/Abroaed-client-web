/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { SelectField } from "../../../commons/components/inputFields/selectField";

const BatchesLanguagePrepModal = ({ closeModal, filledData, onUpdate }) => {
  const languagePrepDetails = useSelector(
    (state) => state.languagePreps.selectedLanguagePrep
  );

  const [formData, setFormData] = useState(
    filledData || {
      batchName: "",
      batchBrief: "",
      seats: "",
      language: "",
      duration: "",
      fees: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.batchName.trim() ||
      !formData.batchBrief.trim() ||
      !formData.seats.trim() ||
      !formData.language.trim() ||
      !String(formData.duration).trim() ||
      !String(formData.fees).trim()
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    let updatedBatches = [];

    if (filledData) {
      updatedBatches = languagePrepDetails.batches.map((batches) =>
        batches._id === filledData._id ? formData : batches
      );
    } else {
      const newBatches = { ...formData };
      updatedBatches = [...languagePrepDetails.batches, newBatches];
    }

    const batchesWithoutId = updatedBatches.map(({ _id, ...rest }) => rest);
    console.log(batchesWithoutId);

    onUpdate({ batches: batchesWithoutId });
  };

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInputField
          label="Batch Name"
          name="batchName"
          type="text"
          value={formData.batchName}
          onChange={(e) => handleInputChange(e, "batchName")}
          required
          placeholder="Enter Batch Name"
        />
        <div className="my-5">
          <TextareaInputField
            label="Course Brief"
            name="batchBrief"
            type="text"
            value={formData.batchBrief}
            onChange={(e) => handleInputChange(e, "batchBrief")}
            required
            placeholder="Enter Course Brief"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SelectField
            label="Language"
            name="language"
            value={formData.language}
            onChange={(e) => handleInputChange(e, "language")}
            options={["French", "English", "Dutch"].map((data) => ({
              label: data,
              value: data,
            }))}
            required
          />

          <TextInputField
            label="Seats"
            name="seats"
            type="text"
            value={formData.seats}
            onChange={(e) => handleInputChange(e, "seats")}
            required
            placeholder="Enter Seats"
          />

          <div></div>
          <TextInputField
            label="Duration (Months)"
            name="duration"
            type="text"
            value={formData.duration}
            onChange={(e) => handleInputChange(e, "duration")}
            required
            placeholder="Enter Duration"
          />

          <TextInputField
            label="Fees"
            name="fees"
            type="text"
            value={formData.fees}
            onChange={(e) => handleInputChange(e, "fees")}
            required
            placeholder="Enter Fees"
            currency={"INR"}
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

export default BatchesLanguagePrepModal;
