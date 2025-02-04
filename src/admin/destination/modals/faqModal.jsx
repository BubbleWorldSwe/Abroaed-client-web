import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";

const FaqModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted with data:", formData, image);
    // You can handle the form submission here (e.g., API call, state update, etc.)
    closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          <TextInputField
            label="Question"
            name="question"
            type="text"
            value={formData.question}
            onChange={(e) => handleInputChange("question", e)}
            required
          />
        </div>

        <TextareaInputField
          label="Answer"
          name="answer"
          type="text"
          value={formData?.answer}
          onChange={(e) => handleInputChange(e, "answer")}
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

export default FaqModal;
