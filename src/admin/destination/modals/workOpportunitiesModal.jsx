import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";

const WorkOpportunitiesModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e, fieldName) => {
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
        <div>
          <TextareaInputField
            label="Part-time options for Students"
            name="description"
            type="text"
            value={formData?.description}
            onChange={(e) => handleInputChange(e, "description")}
            required
          />
        </div>
        <div className="mt-5 mb-5">
          <TextareaInputField
            label=" Part-degree popular work opportunities"
            name="opportunities"
            type="text"
            value={formData?.opportunities}
            onChange={(e) => handleInputChange(e, "opportunities")}
            required
          />
        </div>
        <p className="font-semibold mb-5">Professions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TextInputField
            label=" Profession Name"
            name="profession"
            type="text"
            value={formData.profession}
            onChange={(e) => handleInputChange(e, "profession")}
            required
          />
          <TextInputField
            label=" Avarage Salary"
            name="avgSalary"
            type="text"
            value={formData.avgSalary}
            onChange={(e) => handleInputChange(e, "avgSalary")}
            required
          />
        </div>

        <div className="col-span-full text-end mb-5">
          <button
            type="button"
            className="mt-4 text-blue-500 px-4 py-1 mr-2 rounded transition flex items-center gap-2"
            onClick={closeModal}
          >
            + Add Profession
          </button>
        </div>

        <TextareaInputField
          label="Additional Information"
          name="additionalInfo"
          type="text"
          value={formData?.additionalInfo}
          onChange={(e) => handleInputChange(e, "additionalInfo")}
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

export default WorkOpportunitiesModal;
