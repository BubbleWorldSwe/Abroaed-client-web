/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const SimplifyThingsModal = ({ closeModal, onUpdate }) => {
  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );
  const [formData, setFormData] = useState({
    simplifyThings: testPrepDetails?.simplifyThings || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.simplifyThings.trim()) {
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
        <div className="mb-5">
          <TextareaInputField
            label="About"
            name="simplifyThings"
            type="text"
            value={formData.simplifyThings}
            onChange={(e) => handleInputChange(e, "simplifyThings")}
            required
            placeholder="Enter"
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

export default SimplifyThingsModal;
