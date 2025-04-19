/* eslint-disable react/prop-types */
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalDeleteButton } from "../../../commons/components/buttons/modalDeleteButton";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";
import { toast } from "react-toastify";

const DocStatusConfirmationModal = ({
  isOpen,
  onClose,
  heading,
  onSubmit,
  title,
}) => {
  const [action, setAction] = useState(null); // 'approve' or 'reject'
  const [comment, setComment] = useState("");

  const handleApprove = () => {
    setAction("approve");
    onSubmit({ status: "approved" });
    onClose();
  };

  const handleReject = () => {
    if (comment.trim() === "") return toast.error("Please Enter Comment");
    setAction("reject");
    onSubmit({ status: "rejected", remarks: comment });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white py-8 px-8 font-rethink dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-lg relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                {heading}
              </h2>
              <button
                className="text-gray-600 hover:text-gray-900 text-3xl"
                onClick={onClose}
              >
                &times;
              </button>
            </div>

            <p className="text-sm text-gray-600 dark:text-white mb-6">
              {title}
            </p>

            {action === "reject" && (
              <div className="mb-4">
                <TextareaInputField
                  label=" Reason for Rejection"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3 py-2 text-sm border rounded dark:bg-gray-800 dark:text-white"
                  rows={3}
                  placeholder="Enter"
                />
              </div>
            )}

            <div className="flex justify-end mt-6 space-x-2">
              <ModalDeleteButton
                label="Reject"
                type="button"
                onClick={() =>
                  action === "reject" ? handleReject() : setAction("reject")
                }
              />

              <ModalSubmitButton
                label="Approve"
                type="button"
                onClick={handleApprove}
                className="bg-green-500 text-white px-6 py-2 rounded"
              />
            </div>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default DocStatusConfirmationModal;
