import { useEffect, useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { Plus } from "lucide-react";
import trash from "../../../assets/delete.png";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { formatDate } from "../../../utils/helper";

const AddCommentModal = ({
  isOpen,
  onClose,
  leadId,
  filledData,
  updateApplication,
}) => {
  const defaultComment = { message: "" };

  const [formData, setFormData] = useState({ comments: [defaultComment] });
  const [existingComments, setExistingComments] = useState([]);

  useEffect(() => {
    setFormData({ comments: [defaultComment] });
    setExistingComments(filledData?.comments || []);
  }, [leadId, isOpen, filledData]);

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

  const removeExistingComment = (index) => {
    setExistingComments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCommentChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      comments: prev.comments.map((comment, i) =>
        i === index ? { ...comment, [field]: value } : comment
      ),
    }));
  };

  const handleExistingCommentChange = (index, value) => {
    setExistingComments((prev) =>
      prev.map((comment, i) =>
        i === index ? { ...comment, message: value } : comment
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine updated existing comments and new comments, filter out empty messages
    const combinedComments = [...existingComments, ...formData.comments].filter(
      (comment) => comment.message.trim() !== ""
    );

    if (combinedComments.length === 0) {
      toast.error("Please add at least one non-empty comment.");
      return;
    }

    updateApplication({
      comments: combinedComments.map(({ message }) => ({ message })),
    });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="w-[50vw] max-h-[80vh] overflow-y-auto bg-white p-6 shadow-md rounded-lg border border-gray-300 relative">
            <button
              className="absolute w-10 h-10 top-3 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold">Comment</h2>

            {/* Display Existing Comments */}
            {existingComments.length > 0 && (
              <div className="mt-5">
                <h3 className="text-md font-medium mb-2">Existing Comments</h3>
                <table className="w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">Date Added</th>
                      <th className="border p-2 text-left">Message</th>
                      <th className="border p-2 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {existingComments.map((comment, index) => (
                      <tr key={index}>
                        <td className="border p-2">
                          {formatDate(comment.createdAt)}
                        </td>
                        <td className="border p-2 w-2/3">
                          <input
                            type="text"
                            value={comment.message}
                            onChange={(e) =>
                              handleExistingCommentChange(index, e.target.value)
                            }
                            placeholder="Edit message"
                            className="w-full border border-white rounded px-2 py-1"
                          />
                        </td>
                        <td className="border p-2">
                          <button
                            type="button"
                            className="text-red-500"
                            onClick={() => removeExistingComment(index)}
                          >
                            <img
                              src={trash}
                              alt="delete Icon"
                              className="w-5 h-5"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Add New Comments */}
            <div className="mt-10">
              <h3 className="text-md font-medium">Add New Comments</h3>
              {formData.comments.map((comment, index) => (
                <div key={index} className="flex gap-3 my-5 items-center">
                  <div className="flex-1">
                    <TextareaInputField
                      label={`Message ${index + 1}`}
                      name={`message-${index}`}
                      value={comment.message}
                      onChange={(e) =>
                        handleCommentChange(index, "message", e.target.value)
                      }
                      placeholder="Enter your comment"
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
