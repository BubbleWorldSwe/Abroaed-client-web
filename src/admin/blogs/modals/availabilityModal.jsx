/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import toast from "react-hot-toast";

const AvailabilityModal = ({ closeModal, onUpdate }) => {
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );

  const [formData, setFormData] = useState({
    availablity: accommodationDetails?.availablity,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { availablity } = formData;

    if (!availablity) {
      toast.error("Please fill out all fields.");
      return;
    }
    onUpdate({
      availablity: availablity,
    });
  };

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-1">
          <TextInputField
            label="Availability"
            name="availablity"
            type="text"
            value={formData?.availablity || ""}
            onChange={(e) => handleInputChange(e, "availablity")}
            required
            placeholder="Enter"
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

export default AvailabilityModal;
