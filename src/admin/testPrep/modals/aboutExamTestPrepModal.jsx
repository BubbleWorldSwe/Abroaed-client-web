/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";

const AboutExamTestPrepModal = ({ closeModal, onUpdate }) => {
  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );

  const [formData, setFormData] = useState({
    about: testPrepDetails?.about || "",
    productName: testPrepDetails?.productName || "",
    aboutExam: {
      examDate: testPrepDetails?.aboutExam?.examDate || "",
      examCenter: testPrepDetails?.aboutExam?.examCenter || "",
      registration: testPrepDetails?.aboutExam?.registration || "",
      fees: testPrepDetails?.aboutExam?.fees || "",
      syllabus: testPrepDetails?.aboutExam?.syllabus || "",
      scoring_and_results:
        testPrepDetails?.aboutExam?.scoring_and_results || "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.about.trim() || !formData.productName.trim()) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    const { aboutExam } = formData;
    if (
      !aboutExam.examDate.trim() ||
      !aboutExam.examCenter.trim() ||
      !aboutExam.registration.trim() ||
      !aboutExam.fees.trim() ||
      !aboutExam.syllabus.trim() ||
      !aboutExam.scoring_and_results.trim()
    ) {
      toast.error("Please fill in all About Exam fields before submitting.");
      return;
    }

    onUpdate(formData);
  };

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleAboutExamChange = (e, fieldName) => {
    setFormData({
      ...formData,
      aboutExam: { ...formData.aboutExam, [fieldName]: e.target.value },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInputField
          label="Name"
          name="productName"
          type="text"
          value={formData.productName}
          onChange={(e) => handleInputChange(e, "productName")}
          required
          placeholder="Enter Exam Types"
        />
        <div className="my-5">
          <TextareaInputField
            label="About"
            name="about"
            value={formData.about}
            onChange={(e) => handleInputChange(e, "about")}
            required
            placeholder="Enter About"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInputField
            label="Exam Date"
            name="examDate"
            type="date"
            value={formData.aboutExam.examDate}
            onChange={(e) => handleAboutExamChange(e, "examDate")}
            required
          />
          <TextInputField
            label="Exam Center"
            name="examCenter"
            type="text"
            value={formData.aboutExam.examCenter}
            onChange={(e) => handleAboutExamChange(e, "examCenter")}
            required
            placeholder="Enter Exam Center"
          />
          <TextInputField
            label="Registration Link"
            name="registration"
            type="url"
            value={formData.aboutExam.registration}
            onChange={(e) => handleAboutExamChange(e, "registration")}
            required
            placeholder="Enter Registration URL"
          />
          <TextInputField
            label="Fees"
            name="fees"
            type="text"
            value={formData.aboutExam.fees}
            onChange={(e) => handleAboutExamChange(e, "fees")}
            required
            placeholder="Enter Fees"
          />
          <TextInputField
            label="Syllabus"
            name="syllabus"
            type="text"
            value={formData.aboutExam.syllabus}
            onChange={(e) => handleAboutExamChange(e, "syllabus")}
            required
            placeholder="Enter Syllabus"
          />
          <TextInputField
            label="Scoring & Results"
            name="scoring_and_results"
            type="text"
            value={formData.aboutExam.scoring_and_results}
            onChange={(e) => handleAboutExamChange(e, "scoring_and_results")}
            required
            placeholder="Enter Scoring & Results Info"
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

export default AboutExamTestPrepModal;
