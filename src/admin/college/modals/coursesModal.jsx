import { useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";
import { courseDomains, courseLevels, intake } from "../../../constants/values";

const CoursesModal = ({ closeModal, filledData, onUpdate }) => {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);

  const [formData, setFormData] = useState(
    filledData || {
      name: "",
      brief: "",
      courseLevel: "",
      duration: "",
      intake: "",
      fees: "",
      domain: "",
    }
  );

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.brief.trim() ||
      !formData.courseLevel.trim() ||
      !formData.duration.trim() ||
      !formData.intake.trim() ||
      !formData.fees.trim() ||
      !formData.domain.trim()
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    let updatedCourses = [];

    if (filledData) {
      // Edit Mode
      updatedCourses = collegeDetails.courses.map((course) =>
        course._id === filledData._id ? formData : course
      );
    } else {
      // Add Mode
      const newCourses = { ...formData };
      updatedCourses = [newCourses, ...collegeDetails.courses];
    }

    const coursesWithoutId = updatedCourses.map(({ _id, ...rest }) => rest);

    // console.log(coursesWithoutId);

    onUpdate({ courses: coursesWithoutId });

    //  closeModal();
  };

  console.log(formData);

  return (
    <div className="w-[100vh] max-w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <TextInputField
          label="Course Name*"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange(e, "name")}
          placeholder="Enter Course Name"
          required
        />

        <div className="mt-5">
          <TextareaInputField
            label="Course Brief*"
            name="brief"
            type="text"
            value={formData.brief}
            onChange={(e) => handleInputChange(e, "brief")}
            placeholder="Enter Brief"
            required
          />

          <p className="block text-black-500 text-sm mt-2 mb-7 font-semibold">
            Max 100 words.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SelectField
            label="Course Level*"
            name="courseLevel"
            value={formData.courseLevel}
            onChange={(e) => handleInputChange(e, "courseLevel")}
            options={courseLevels.map((data) => ({
              label: data,
              value: data,
            }))}
            required
          />
          <TextInputField
            label="Duration (in months)*"
            name="duration"
            type="number"
            value={formData.duration}
            onChange={(e) => handleInputChange(e, "duration")}
            placeholder="Enter Duration"
            required
          />

          <SelectField
            label="Intake*"
            name="intake"
            value={formData.intake}
            onChange={(e) => handleInputChange(e, "intake")}
            options={intake.map((data) => ({
              label: data,
              value: data,
            }))}
            required
          />

          <TextInputField
            label="Fees (in ₹)*"
            name="fees"
            type="number"
            value={formData.fees}
            onChange={(e) => handleInputChange(e, "fees")}
            placeholder="Enter Fees"
            required
          />

          <SelectField
            label="Domain*"
            name="domain"
            value={formData.domain}
            onChange={(e) => handleInputChange(e, "domain")}
            options={courseDomains.map((data) => ({
              label: data,
              value: data,
            }))}
            required
          />
        </div>
        <div className="text-end mt-10">
          <ModalCloseButton label="Cancel" onClick={closeModal} />
          <ModalSubmitButton label="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CoursesModal;
