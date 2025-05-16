/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";

const UpdateProfileModal = ({ isOpen, onClose, data, onUpdate }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const memberData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
    };
    onUpdate(memberData);

    onClose();
  };

  useEffect(() => {
    if (data) {
      setFormData({
        firstName: data?.firstName || "",
        lastName: data?.lastName || "",
        address: data?.address || "",
      });
    }
  }, [data]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white w-2/5 font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute w-10 h-10 top-1 right-1 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-7 dark:text-white">
              Update Profile
            </h2>
            <div className="mt-5">
              <form onSubmit={handleSubmit} className="bg-white rounded-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
                  {/* First Name */}
                  <TextInputField
                    label="First Name*"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                  />
                  {/* Last Name */}
                  <TextInputField
                    label="Last Name*"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                  />
                </div>

                <TextareaInputField
                  label="Address*"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                  required
                />

                {/* Submit Button */}
                <div className="flex justify-end mt-10">
                  <ModalCloseButton label="Cancel" onClick={onClose} />
                  <ModalSubmitButton type="submit" label="Update" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProfileModal;
