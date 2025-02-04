import { useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const ScholarshipModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e, fieldName) => {
    console.log(e, fieldName);
    setFormData({ ...formData, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData, image);
    // You can handle the form submission here (e.g., API call, state update, etc.)
    closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-5">
          <TextInputField
            label="Scholarship Name"
            name="scholarshipName"
            type="text"
            value={formData.scholarshipName}
            onChange={(e) => handleInputChange("scholarshipName", e)}
            placeholder="Enter Scholarship Name"
            required
          />

          <TextInputField
            label="Link"
            name="link"
            type="text"
            value={formData.link}
            onChange={(e) => handleInputChange("link", e)}
            placeholder="Enter Link"
            required
          />
        </div>

        <TextareaInputField
          label="Brief Description"
          name="description"
          type="text"
          value={formData?.description}
          onChange={(e) => handleInputChange("description", e)}
          placeholder="Enter description"
          required
        />

        <div className="text-end mt-10">
          <ModalCloseButton label={"Cancel"} onClick={closeModal} />

          <ModalSubmitButton
            label={"Save"}
            //  onClick={onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default ScholarshipModal;
