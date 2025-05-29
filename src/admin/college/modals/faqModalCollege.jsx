import { useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const FaqModalCollege = ({ closeModal, filledData, onUpdate }) => {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);

  const [formData, setFormData] = useState(
    filledData || { question: "", answer: "" }
  );

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      if (!formData.question.trim() || !formData.answer.trim()) {
        toast.error("Please fill in all fields before submitting.");
        return;
      }

      let updatedFaqs = [];

      if (filledData) {
        updatedFaqs = collegeDetails.faqSchema.map((faq) =>
          faq._id === filledData._id ? formData : faq
        );
      } else {
        const newFaq = { ...formData };
        updatedFaqs = [...collegeDetails.faqSchema, newFaq];
      }

      const faqWithoutId = updatedFaqs.map(({ _id, ...rest }) => rest);

      onUpdate({ faqSchema: faqWithoutId });

      // closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vh] max-w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <TextInputField
            label="Question"
            name="question"
            type="text"
            value={formData.question}
            onChange={(e) => handleInputChange(e, "question")}
            required
            placeholder="Enter Question"
          />
        </div>

        <TextareaInputField
          label="Answer"
          name="answer"
          type="text"
          value={formData.answer}
          onChange={(e) => handleInputChange(e, "answer")}
          required
          placeholder="Enter Answer"
        />

        <div className="text-end mt-10">
          <ModalCloseButton label="Cancel" onClick={closeModal} />
          <ModalSubmitButton label="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default FaqModalCollege;
