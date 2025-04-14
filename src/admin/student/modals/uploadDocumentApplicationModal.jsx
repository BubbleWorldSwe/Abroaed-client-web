import { useEffect, useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { Plus } from "lucide-react";
import trash from "../../../assets/delete.png";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { docCategory, intake } from "../../../constants/values";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { useSelector } from "react-redux";

const UpdateDocApplicationModal = ({
  isOpen,
  onClose,
  leadId,
  filledData,
  updateApplication,
  selectedApplication,
  setSelectedApplication,
}) => {
  const defaultDocument = {
    category: "",
    title: "",
    deadline: "",
  };

  const formatDateTime = (date) => {
    return date ? moment(date).format("YYYY-MM-DDTHH:mm") : "";
  };

  const [formData, setFormData] = useState({
    additionalDocuments: [defaultDocument],
  });

  const { applications } = useSelector(
    (state) => state?.students?.selectedStudent
  );

  const { error } = useSelector((state) => state?.students);

  console.log(selectedApplication);

  const [appId, setAppId] = useState(null);

  useEffect(() => {
    if (!filledData || !filledData.additionalDocuments?.length) {
      setFormData({ additionalDocuments: [defaultDocument] });
    } else {
      setFormData({
        additionalDocuments: filledData.additionalDocuments.map((doc) => ({
          ...doc,
          deadline: formatDateTime(doc.deadline),
        })),
      });
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

  const removeDocument = (index) => {
    console.log(index);
    setFormData((prev) => ({
      ...prev,
      additionalDocuments: prev.additionalDocuments.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleDocumentChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      additionalDocuments: prev.additionalDocuments.map((doc, i) =>
        i === index
          ? {
              ...doc,
              [field]: field === "deadline" ? formatDateTime(value) : value,
            }
          : doc
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

    // Remove `_id` from each document
    const formattedData = {
      ...formData,
      additionalDocuments: formData.additionalDocuments.map(
        ({ _id, ...rest }) => rest
      ),
    };

    console.log("formattedData Form Data:", formattedData);

    updateApplication(formattedData);

    // ✅ If no error occurred, reset the fields
    if (!error) {
      setFormData({ additionalDocuments: [defaultDocument] });
      setAppId(null);
      setSelectedApplication(null);
      //  toast.success("Application updated successfully!");
    }
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
              <SelectField
                label="Select College"
                name="college"
                value={appId}
                onChange={(e) => {
                  setAppId(e.target.value);
                  const selectedApp = applications.find(
                    (app) => app?.college?._id === e.target.value
                  );
                  setSelectedApplication(selectedApp);
                }}
                options={applications.map((data) => ({
                  label: data?.college?.name,
                  value: data?.college?._id,
                }))}
                required
              />

              {formData.additionalDocuments.map((doc, index) => (
                <div key={index} className="flex gap-3 my-5 items-center">
                  <div className="flex-1">
                    <SelectField
                      label="Document Category"
                      name={`category-${index}`}
                      value={doc.category}
                      onChange={(e) =>
                        handleDocumentChange(index, "category", e.target.value)
                      }
                      options={docCategory.map((data) => ({
                        label: data,
                        value: data,
                      }))}
                      required
                    />
                  </div>

                  <div className="flex-1">
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
                  </div>

                  <div className="flex-1">
                    <TextInputField
                      label="Deadline"
                      name={`deadline-${index}`}
                      type="datetime-local"
                      value={doc.deadline || ""}
                      onChange={(e) =>
                        handleDocumentChange(index, "deadline", e.target.value)
                      }
                      placeholder="Enter"
                    />
                  </div>

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
