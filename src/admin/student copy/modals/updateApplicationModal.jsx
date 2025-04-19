import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";

const UpdateApplicationModal = ({
  isOpen,
  onClose,
  collegesList,
  getCollegesList,
  leadId,

  filledData,
  updateApplication,
  setSelectedApplication,
}) => {
  const { allDestinations } = useSelector((state) => state.destinations);

  const [destinationId, setDestinationId] = useState(null);
  const [formData, setFormData] = useState({
    college: "",
    courseName: "",
    intake: "",
    lead: leadId,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.college.trim() ||
      !formData.courseName.trim() ||
      !formData.intake.trim()
    ) {
      toast.error("Please fill in all required fields before submitting.");
      return;
    }

    console.log("Form Data:", formData);
    updateApplication(formData);
  };

  // **Use `useEffect` to update formData when filledData changes**
  useEffect(() => {
    if (filledData) {
      setFormData(filledData);
    }
  }, [filledData, leadId]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white w-2/5 font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold">
              {filledData ? "Update Application" : "Start a New Application"}
            </h2>

            {/* Dropdowns for College, Program, Course, and Intake */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <SelectField
                label="Destination"
                name="destinationId"
                value={destinationId}
                onChange={(e) => {
                  setDestinationId(e.target.value);
                  getCollegesList(e.target.value);
                }}
                options={allDestinations.map((data) => ({
                  label: `${data?.countryId?.emoji} ${data?.countryId?.name}`,
                  value: data?._id,
                }))}
                required
              />
              <SelectField
                label="Select College"
                name="college"
                value={formData.college}
                onChange={handleChange}
                options={collegesList.map((data) => ({
                  label: data?.name,
                  value: data?._id,
                }))}
                required
              />
              <TextInputField
                label="Course"
                name="courseName"
                type="text"
                value={formData.courseName}
                onChange={handleChange}
                placeholder="Enter Course"
              />
              <TextInputField
                label="Intake"
                name="intake"
                type="text"
                value={formData.intake}
                onChange={handleChange}
                placeholder="Enter Intake"
              />
            </div>

            <div className="flex justify-end space-x-2 mt-10">
              <ModalCloseButton label="Close" onClick={onClose} />
              <ModalSubmitButton label="Submit" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateApplicationModal;
