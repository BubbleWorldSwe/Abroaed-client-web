import { useEffect, useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { Plus } from "lucide-react";
import trash from "../../../assets/delete.png";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";

const AddCommentModal = ({
  isOpen,
  onClose,
  leadId,
  filledData,
  updateApplication,
}) => {
  console.log("Data -----");
  const defaultComment = {
    message: "",
  };

  const [formData, setFormData] = useState({
    comments: [defaultComment],
  });

  useEffect(() => {
    if (!filledData || !filledData.comments?.length) {
      setFormData({ comments: [defaultComment] });
    } else {
      setFormData({
        comments: filledData.comments.map((comment) => ({
          message: comment.message || "",
        })),
      });
    }
  }, [filledData, leadId]);

  const addComment = () => {
    setFormData((prev) => ({
      ...prev,
      comments: [...prev.comments, { ...defaultComment }],
    }));
  };

  const removeComment = (index) => {
    setFormData((prev) => ({
      ...prev,
      comments: prev.comments.filter((_, i) => i !== index),
    }));
  };

  const handleCommentChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      comments: prev.comments.map((comment, i) =>
        i === index
          ? {
              ...comment,
              [field]: value,
            }
          : comment
      ),
    }));
  };

  const handleSubmit = (e) => {
    console.log("Hello");
    e.preventDefault();

    const hasEmptyMessages = formData.comments.some(
      (comment) => !comment.message.trim()
    );

    if (hasEmptyMessages) {
      toast.error("Please fill in all additional comment fields.");
      return;
    }

    const formattedData = {
      ...formData,
      comments: formData.comments.map(({ _id, ...rest }) => rest),
    };

    // console.log(formattedData);

    updateApplication(formattedData);
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
            <h2 className="text-lg font-semibold">Add Comment</h2>

            <div className="mt-5">
              {formData.comments.map((comment, index) => (
                <div key={index} className="flex gap-3 my-5 items-center">
                  <div className="flex-1">
                    <TextareaInputField
                      label="Message"
                      name={`message-${index}`}
                      value={comment.message}
                      onChange={(e) =>
                        handleCommentChange(index, "message", e.target.value)
                      }
                      placeholder="Enter"
                    />
                  </div>

                  <button
                    type="button"
                    className="text-red-500 mt-5"
                    onClick={() => removeComment(index)}
                    disabled={formData.comments.length === 1}
                  >
                    <img src={trash} alt="delete Icon" className="w-5 h-5" />
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="mt-5 font-bold text-blue-500 py-1 rounded transition flex items-center gap-2"
                onClick={addComment}
              >
                <Plus className="w-4 h-4" /> Add New Comment
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

export default AddCommentModal;
