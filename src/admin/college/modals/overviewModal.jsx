/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";

const OverviewModal = ({ closeModal, onUpdate }) => {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);

  const [formData, setFormData] = useState({
    description: collegeDetails?.description || "",
    name: collegeDetails?.name || "",
    establishmentYear: collegeDetails?.establishmentYear || "",
    ranking: collegeDetails?.ranking || "",
    intake: collegeDetails?.intake || "",
    internationalStudent: collegeDetails?.internationalStudent || "",
    studentTeacherRatio: collegeDetails?.studentTeacherRatio || "",
    totalStudents: collegeDetails?.totalStudents || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // List of required fields
    const requiredFields = [
      "description",
      "establishmentYear",
      "name",
      "ranking",
      "intake",
      "internationalStudent",
      "studentTeacherRatio",
      "totalStudents",
    ];

    // Check if any required field is missing or empty
    const missingFields = requiredFields.filter((field) => {
      const value = formData[field];

      // Check for empty string, undefined, null, or zero-length array
      return (
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "")
      );
    });

    if (missingFields.length > 0) {
      toast.error(
        `Please fill all required fields: ${missingFields.join(", ")}`
      );
      return;
    }

    console.log("Form submitted with data:", formData);
    onUpdate(formData);
  };

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  console.log(formData);

  return (
    <div className="w-[100vh] max-w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <TextInputField
            label="College Name"
            name="College Name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange(e, "name")}
            placeholder="Enter"
            required
          />
        </div>

        <TextareaInputField
          label={`Description `}
          name="description"
          type="text"
          value={formData?.description}
          onChange={(e) => handleInputChange(e, "description")}
          placeholder="Enter description"
          required
        />
        <p className="block text-black-500 text-sm mt-2 mb-7 font-semibold">
          Max 100 words.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TextInputField
            label="Establishment Year"
            name="establishmentYear"
            type="text"
            value={formData.establishmentYear}
            onChange={(e) => handleInputChange(e, "establishmentYear")}
            placeholder="Enter"
            required
          />
          <TextInputField
            label="Ranking"
            name="ranking"
            type="text"
            value={formData.ranking}
            onChange={(e) => handleInputChange(e, "ranking")}
            placeholder="Enter"
            required
          />
          <TextInputField
            label="Intake"
            name="intake"
            type="text"
            value={formData.intake}
            onChange={(e) => handleInputChange(e, "intake")}
            placeholder="Enter"
            required
          />
          <TextInputField
            label="Total Students"
            name="totalStudents"
            value={formData.totalStudents}
            onChange={(e) => handleInputChange(e, "totalStudents")}
            placeholder="Enter"
            required
          />
          <TextInputField
            label="Student to Teacher Ratio"
            name="studentTeacherRatio"
            type="text"
            value={formData.studentTeacherRatio}
            onChange={(e) => handleInputChange(e, "studentTeacherRatio")}
            placeholder="Enter"
            required
          />
          <TextInputField
            label="International Students (in %)"
            name="internationalStudent"
            type="text"
            value={formData.internationalStudent}
            onChange={(e) => handleInputChange(e, "internationalStudent")}
            placeholder="Enter"
            required
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

export default OverviewModal;
