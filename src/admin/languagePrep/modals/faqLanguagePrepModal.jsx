/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";

const FaqLanguagePrepModal = ({ closeModal, filledData, onUpdate }) => {
  const languagePrepDetails = useSelector(
    (state) => state.languagePreps.selectedLanguagePrep
  );
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
        updatedFaqs = languagePrepDetails.faqs.map((faq) =>
          faq._id === filledData._id ? formData : faq
        );
      } else {
        const newFaq = { ...formData };
        updatedFaqs = [...languagePrepDetails.faqs, newFaq];
      }

      const faqWithoutId = updatedFaqs.map(({ _id, ...rest }) => rest);

      console.log(faqWithoutId);

      onUpdate({ faqs: faqWithoutId });

      // closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
          <ModalSubmitButton label="Save" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default FaqLanguagePrepModal;
