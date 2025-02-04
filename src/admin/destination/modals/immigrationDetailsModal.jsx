import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import SearchDropdownField from "../../../commons/components/inputFields/searchDropdownFields";
import { SelectField } from "../../../commons/components/inputFields/selectField";

const types = ["Scholarship", "Internship", "Job", "Course"];

const ImmigrationDetailsModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData, image);
    // You can handle the form submission here (e.g., API call, state update, etc.)
    closeModal();
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleInputChangeDropDown = (value) => {
    setSelectedType(value);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  console.log(formData);
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
            name="type"
            value={formData.type}
            onChange={(e) => handleInputChange("type", data.value)}
            options={[].map((data) => ({
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
          value={formData?.description}
          onChange={(e) => handleInputChange(e, "description")}
          placeholder="Enter description"
          required
        />

        <div className="text-end">
          <button
            type="button"
            className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImmigrationDetailsModal;
