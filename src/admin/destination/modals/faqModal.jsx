import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const FaqModal = ({ closeModal, filledData, onUpdate }) => {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  const [formData, setFormData] = useState(
    filledData || { question: "", answer: "" }
  );

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.question.trim() || !formData.answer.trim()) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    let updatedFaqs = [];

    if (filledData) {
      updatedFaqs = details.faqs.map((faq) =>
        faq._id === filledData._id ? formData : faq
      );
    } else {
      const newFaq = { ...formData };
      updatedFaqs = [...details.faqs, newFaq];
    }

    const faqWithoutId = updatedFaqs.map(({ _id, ...rest }) => rest);

    onUpdate({ faqs: faqWithoutId });

    // closeModal();
  };

  return (
    <div className="w-[700px] max-w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <TextInputField
          label="Question"
          name="question"
          type="text"
          value={formData.question}
          onChange={(e) => handleInputChange(e, "question")}
          required
          placeholder="Enter Question"
        />
        <div className="mt-5" />

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

export default FaqModal;
