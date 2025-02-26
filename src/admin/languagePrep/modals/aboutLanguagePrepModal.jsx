/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const AboutLanguagePrepModal = ({ closeModal, onUpdate }) => {
  const languagePrepDetails = useSelector(
    (state) => state.languagePreps.selectedLanguagePrep
  );
  const [formData, setFormData] = useState({
    about: languagePrepDetails?.about || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.about.trim()) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    onUpdate(formData);
  };
  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextareaInputField
          label="About"
          name="about"
          type="text"
          value={formData.about}
          onChange={(e) => handleInputChange(e, "about")}
          required
          placeholder="Enter About"
        />

        <div className="text-end mt-10">
          <ModalCloseButton label="Cancel" onClick={closeModal} />
          <ModalSubmitButton label="Save" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AboutLanguagePrepModal;
