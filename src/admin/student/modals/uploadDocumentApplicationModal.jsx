import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import trash from "../../../assets/delete.png";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";

const UpdateDocApplicationModal = ({
  isOpen,
  onClose,
  leadId,
  addApplication,
  filledData,
}) => {
  const defaultDocument = {
    category: "",
    title: "",
    deadline: "",
  };

  const [formData, setFormData] = useState({
    additionalDocuments: filledData?.additionalDocuments?.length
      ? filledData.additionalDocuments
      : [defaultDocument],
  });

  useEffect(() => {
    if (!filledData || !filledData.additionalDocuments?.length) {
      setFormData({ additionalDocuments: [defaultDocument] });
    } else {
      setFormData(filledData);
    }
  }, [filledData, leadId]);

  const addDocument = () => {
    setFormData((prev) => ({
      ...prev,
      additionalDocuments: [
        ...prev.additionalDocuments,
        { ...defaultDocument },
      ],
    }));
  };

  const removeDocument = (id) => {
    setFormData((prev) => ({
      ...prev,
      additionalDocuments: prev.additionalDocuments.filter((_, i) => i !== id),
    }));
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

    const hasEmptyDocuments = formData.additionalDocuments.some(
      (doc) => !doc.category.trim() || !doc.title.trim() || !doc.deadline.trim()
    );

    if (hasEmptyDocuments) {
      toast.error("Please fill in all additional document fields.");
      return;
    }

    console.log("Form Data:", formData);
    addApplication(formData);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="w-[50vw] max-h-[70vh] overflow-y-auto bg-white p-6 shadow-md rounded-lg border border-gray-300 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold">
              Request Additional Documents
            </h2>

            {/* Additional Documents Section */}
            <div className="mt-5">
              {formData.additionalDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex justify-between mb-2 items-center gap-3 my-5"
                >
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
                    disabled={formData.additionalDocuments.length === 1}
                  >
                    <img src={trash} alt="delete Icon" className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="mt-5 font-bold text-blue-500 py-1 rounded transition flex items-center gap-2"
                onClick={addDocument}
              >
                + Add Document
              </button>
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

export default UpdateDocApplicationModal;
