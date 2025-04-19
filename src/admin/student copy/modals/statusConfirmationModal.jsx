/* eslint-disable react/prop-types */
import { Toaster } from "react-hot-toast";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalDeleteButton } from "../../../commons/components/buttons/modalDeleteButton";

const StatusConfirmationModal = ({
  isOpen,
  onClose,
  heading,
  onSubmit,
  title,
  options,
}) => {
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

            {options && options.length > 1 ? (
              <div className="flex justify-end mt-6 space-x-2">
                {/*  <ModalCloseButton label="Close" onClick={onClose} /> */}
                {options.map((option) => {
                  const isRejected = option === "rejected";
                  return isRejected ? (
                    <ModalDeleteButton
                      label="Reject"
                      type="submit"
                      onClick={() => onSubmit(option)}
                    />
                  ) : (
                    <ModalSubmitButton
                      label="Offer Letter Received"
                      type="submit"
                      onClick={() => onSubmit(option)}
                      className="bg-green-500 text-white px-6 py-2 rounded"
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex justify-end mt-6 space-x-2">
                <ModalCloseButton label="Close" onClick={onClose} />
                <ModalSubmitButton
                  label="Submit"
                  type="submit"
                  onClick={() => onSubmit(options ? options[0] : null)}
                />
              </div>
            )}
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default StatusConfirmationModal;
