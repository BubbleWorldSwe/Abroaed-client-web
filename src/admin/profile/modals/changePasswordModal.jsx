import { useEffect, useState } from "react";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { useSelector } from "react-redux";

const ChangePasswordModal = ({ isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    setIsSubmitted(true); // mark as submitted
    onUpdate({
      password: formData.currentPassword,
      confirmPassword: formData.newPassword,
    });
  };

  // Reset form only if there's no error and form was submitted
  useEffect(() => {
    if (isSubmitted && !error) {
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setIsSubmitted(false); // reset flag
      onClose();
    }
  }, [error, isSubmitted, onClose]);

  // Clear form when modal is closed manually
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setIsSubmitted(false);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white w-full max-w-md font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute w-10 h-10 top-1 right-1 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">
              Change Password
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <TextInputField
                  label="Current Password*"
                  name="currentPassword"
                  type="password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                  required
                />

                <TextInputField
                  label="New Password*"
                  name="newPassword"
                  type="password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  required
                />

                <TextInputField
                  label="Confirm New Password*"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  required
                />
              </div>

              <div className="flex justify-end mt-8">
                <ModalCloseButton label="Cancel" onClick={onClose} />
                <ModalSubmitButton type="submit" label="Change" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePasswordModal;
