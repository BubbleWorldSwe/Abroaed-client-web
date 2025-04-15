/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { toast } from "react-toastify";

const AboutLanguagePrepModal = ({ closeModal, onUpdate }) => {
  const languagePrepDetails = useSelector(
    (state) => state.languagePreps.selectedLanguagePrep
  );
  const [formData, setFormData] = useState({
    about: languagePrepDetails?.about || "",
    productName: languagePrepDetails?.productName || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.about.trim() || !formData.productName.trim()) {
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
        <div className="flex flex-col gap-5">
          <TextInputField
            label="Name"
            name="about"
            type="text"
            value={formData.productName}
            onChange={(e) => handleInputChange(e, "productName")}
            required
            placeholder="Enter Name"
          />

          <TextareaInputField
            label="About"
            name="about"
            type="text"
            value={formData.about}
            onChange={(e) => handleInputChange(e, "about")}
            required
            placeholder="Enter About"
          />
        </div>
        <div className="text-end mt-10">
          <ModalCloseButton label="Cancel" onClick={closeModal} />
          <ModalSubmitButton label="Save" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AboutLanguagePrepModal;
