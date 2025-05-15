/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { useSelector } from "react-redux";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";

const DescriptionModal = ({ closeModal, onUpdate }) => {
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );

  const [formData, setFormData] = useState({
    description: accommodationDetails?.description,
    accomodationName: accommodationDetails?.accomodationName,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, accomodationName } = formData;

    if (!description || !accomodationName) {
      toast.error("Please fill out all fields.");
      return;
    }
    onUpdate({
      description: description,
      accomodationName: accomodationName,
    });
  };
  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5">
          <TextInputField
            label="Accomodation Name*"
            name="accomodationName"
            type="text"
            value={formData?.accomodationName || ""}
            onChange={(e) => handleInputChange(e, "accomodationName")}
            required
            placeholder="Enter"
          />
          <TextareaInputField
            label="Description*"
            name="description"
            type="text"
            value={formData?.description || ""}
            onChange={(e) => handleInputChange(e, "description")}
            required
            placeholder="Enter"
          />
        </div>

        <p className="block text-black-500 text-sm mt-2 mb-7 font-semibold">
          Max 200 words.
        </p>

        <div className="text-end mt-10">
          <ModalCloseButton label={"Cancel"} onClick={closeModal} />
          <ModalSubmitButton label={"Save"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default DescriptionModal;
