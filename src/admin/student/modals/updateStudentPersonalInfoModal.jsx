/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { TextareaInputField } from "../../../commons/components/inputFields/textareaInputField";

const UpdateStudentPersonalInfo = ({
  isOpen,
  onClose,
  onUpdate,
  filledData,
  userId,
}) => {
  const [formData, setFormData] = useState(filledData);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate Form
  const validateForm = () => {
    if (!formData.firstName.trim()) {
      toast.error("First Name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      toast.error("Last Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Enter a valid email address");
      return false;
    }
    if (!formData.mobile.trim()) {
      toast.error("Mobile Number is required");
      return false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Enter a valid 10-digit mobile number");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleUpdateLeadProfileInfo = (e) => {
    try {
      e.preventDefault();
      if (validateForm()) {
        const { email, mobile, ...updatedFormData } = formData; // Remove email and mobile

        onUpdate(updatedFormData, userId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white w-2/5 font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Update Personal Information
            </h2>

            <form onSubmit={handleUpdateLeadProfileInfo} className="space-y-6">
              <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2 my-5">
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

                {/* Email */}
                <TextInputField
                  label="Email*"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  disabled={true}
                />

                {/* Mobile Number */}
                <TextInputField
                  label="Mobile Number*"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                  maxLength={10}
                />
              </div>

              {/* Address */}
              <TextareaInputField
                label="Address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
              />

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-10">
                <ModalCloseButton label="Cancel" onClick={onClose} />
                <ModalSubmitButton label="Submit" type="submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateStudentPersonalInfo;
