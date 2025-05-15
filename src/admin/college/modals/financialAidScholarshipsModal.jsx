import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const FinancialAidScholarshipsModal = ({
  closeModal,
  filledData,
  onUpdate,
}) => {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);

  const [formData, setFormData] = useState(
    filledData || { name: "", link: "", description: "" }
  );

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.link.trim() ||
      !formData.description.trim()
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    let updatedScholarships = [];

    if (filledData) {
      // Edit Mode
      updatedScholarships = collegeDetails.scholarships.map((scholarship) =>
        scholarship._id === filledData._id ? formData : scholarship
      );
    } else {
      // Add Mode
      const newScholarship = { ...formData };
      updatedScholarships = [newScholarship, ...collegeDetails.scholarships];
    }

    const scholarshipsWithoutId = updatedScholarships.map(
      ({ _id, ...rest }) => rest
    );

    // console.log(scholarshipsWithoutId);

    onUpdate({ scholarships: scholarshipsWithoutId });

    //  closeModal();
  };

  return (
    <div className="w-[100vh] max-w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-5">
          <TextInputField
            label="Scholarship Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange(e, "name")}
            placeholder="Enter Scholarship Name"
            required
          />

          <TextInputField
            label="Link"
            name="link"
            type="text"
            value={formData.link}
            onChange={(e) => handleInputChange(e, "link")}
            placeholder="www.scholarship.com"
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
          <ModalCloseButton label="Cancel" onClick={closeModal} />
          <ModalSubmitButton label="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default FinancialAidScholarshipsModal;
