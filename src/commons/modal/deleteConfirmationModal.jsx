/* eslint-disable react/prop-types */
import { Toaster } from "react-hot-toast";
import { ModalCloseButton } from "../components/buttons/modalCloseButton";
import { ModalDeleteButton } from "../components/buttons/modalDeleteButton";

const DeleteConfirmationModal = ({ isOpen, onClose, heading, onDelete }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white py-8 px-10 font-rethink dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-max relative">
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

            <p className="text-sm text-gray-600 dark:text-white mb-10">
              Are you sure you want to delete this record?
            </p>

            <div className="flex justify-end mt-10">
              <ModalCloseButton label="Close" onClick={onClose} />
              <ModalDeleteButton
                label="Delete"
                type="submit"
                onClick={onDelete}
              />
            </div>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default DeleteConfirmationModal;
