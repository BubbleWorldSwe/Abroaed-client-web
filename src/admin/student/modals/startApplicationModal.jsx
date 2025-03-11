/* eslint-disable react/prop-types */
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import trash from "../../../assets/delete.png";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";

const StartApplicationModal = ({
  isOpen,
  onClose,
  collegesList,
  getCollegesList,
  leadId,
  addApplication,
}) => {
  const { allDestinations } = useSelector((state) => state.destinations);

  const [destinationId, setDestinationId] = useState(null);
  const [formData, setFormData] = useState({
    college: "",
    course: "",
    intake: "",
    additionalDocuments: [{ category: "", title: "", deadline: "" }],
    lead: leadId,
  });

  const addDocument = () => {
    const newDocument = {
      category: "",
      title: "",
      deadline: "",
    };
    setFormData((prev) => ({
      ...prev,
      additionalDocuments: [...prev.additionalDocuments, newDocument],
    }));
  };

  const removeDocument = (id) => {
    setFormData((prev) => ({
      ...prev,
      additionalDocuments: prev.additionalDocuments.filter((_, i) => i !== id),
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDocumentChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      additionalDocuments: prev.additionalDocuments.map((doc, i) =>
        i === id ? { ...doc, [field]: value } : doc
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.college.trim() ||
      !formData.course.trim() ||
      !formData.intake.trim()
    ) {
      toast.error("Please fill in all required fields before submitting.");
      return;
    }

    // Validate additional documents
    const hasEmptyDocuments = formData.additionalDocuments.some(
      (doc) => !doc.category.trim() || !doc.title.trim() || !doc.deadline.trim()
    );

    if (hasEmptyDocuments) {
      toast.error("Please fill in all additional document fields.");
      return;
    }

    console.log("Form Data:", formData);
    addApplication(formData);
    // Submit form data to API or process it
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="max-w-3xl mx-auto max-h-[70vh] overflow-y-auto bg-white p-6 shadow-md rounded-lg border border-gray-300 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold">Start a New Application</h2>

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
                name="course"
                type="text"
                value={formData.course}
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

            {/* Additional Documents Section */}
            <div className="mt-10">
              <div className="flex mb-3 justify-between text-center">
                <h3 className="text-md font-semibold">
                  Request Additional Documents
                </h3>
                <button
                  onClick={addDocument}
                  className="flex items-center font-medium"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {formData.additionalDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex justify-between mb-2 items-center gap-3 my-5"
                >
                  {/*   <SelectField
                    label="Document Category"
                    name={`category-${index}`}
                    value={doc.category}
                    onChange={(e) =>
                      handleDocumentChange(index, "category", e.target.value)
                    }
                    options={[].map((data) => ({
                      label: data?.name,
                      value: data?._id,
                    }))}
                    required
                  />
 */}
                  <TextInputField
                    label="Document Category"
                    name={`category-${index}`}
                    type="text"
                    value={doc.category}
                    onChange={(e) =>
                      handleDocumentChange(index, "category", e.target.value)
                    }
                    placeholder="Enter"
                  />
                  <TextInputField
                    label="Title"
                    name={`title-${index}`}
                    type="text"
                    value={doc.title}
                    onChange={(e) =>
                      handleDocumentChange(index, "title", e.target.value)
                    }
                    placeholder="Enter"
                  />
                  <TextInputField
                    label="Deadline"
                    name={`deadline-${index}`}
                    type="datetime-local"
                    value={doc.deadline}
                    onChange={(e) =>
                      handleDocumentChange(index, "deadline", e.target.value)
                    }
                    placeholder="Enter"
                  />
                  <button
                    type="button"
                    className="text-red-500 mt-5"
                    onClick={() => removeDocument(index)}
                    disabled={index === 0}
                  >
                    <img src={trash} alt="delete Icon" className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-2 mt-10">
              <ModalCloseButton label="Close" onClick={onClose} />

              <ModalSubmitButton label="Submit" onClick={handleSubmit} />
            </div>

            {/* Submit Button */}
          </div>
        </div>
      )}
    </>
  );
};

export default StartApplicationModal;
