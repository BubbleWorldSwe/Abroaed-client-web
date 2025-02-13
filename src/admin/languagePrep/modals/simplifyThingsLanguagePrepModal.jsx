/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { useSelector } from "react-redux";

const SimplifyThingsModal = ({ closeModal, filledData, onUpdate }) => {
  const languagePrepDetails = useSelector(
    (state) => state.languagePreps.selectedLanguagePrep
  );

  const [formData, setFormData] = useState(
    filledData || {
      title: "",
      description: "",
    }
  );

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.description.trim() || !formData.title.trim()) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    let updatedSimplifyThings = [];

    if (filledData) {
      updatedSimplifyThings = languagePrepDetails.simplifyThings.map((data) =>
        data._id === filledData._id ? formData : data
      );
    } else {
      const newSimplifyThings = { ...formData };
      updatedSimplifyThings = [
        newSimplifyThings,
        ...languagePrepDetails.simplifyThings,
      ];
    }

    const simplifyThingsWithoutId = updatedSimplifyThings.map(
      ({ _id, ...rest }) => rest
    );
    console.log(simplifyThingsWithoutId);

    onUpdate({ simplifyThings: simplifyThingsWithoutId });
  };

  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <TextInputField
          label="Title"
          name="title"
          type="text"
          value={formData.title}
          onChange={(e) => handleInputChange(e, "title")}
          required
          placeholder="Enter Title"
        />
      </div>
      <div className="mb-5">
        <TextareaInputField
          label="Description"
          name="description"
          type="text"
          value={formData.description}
          onChange={(e) => handleInputChange(e, "description")}
          required
          placeholder="Enter Description"
        />
      </div>
      <div className="text-end mt-10">
        <ModalCloseButton label="Cancel" onClick={closeModal} />
        <ModalSubmitButton label="Save" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default SimplifyThingsModal;
