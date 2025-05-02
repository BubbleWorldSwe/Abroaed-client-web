/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

function AddTeamMember({ isOpen, onClose, onAddTeam, roles }) {
  const { error } = useSelector((state) => state.teams);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    permission: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phoneNumber, role, permission } =
      formData;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !role ||
      !permission
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    const data = {
      email,
      firstName,
      lastName,
      mobile: phoneNumber,
      roleId: role,
      isWriteAccess: permission === "2",
    };

    onAddTeam(data);
    onClose();
  };

  useEffect(() => {
    if (!error) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        role: "",
        permission: "",
      });
      onClose();
    }
  }, [error]);

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white w-2/5 font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          Add Team Member
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column */}
            <TextInputField
              label="First Name"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
            <TextInputField
              label="Last Name"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
            <TextInputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
            <TextInputField
              label="Mobile Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter mobile number"
              required
            />

            <SelectField
              label="Role Type"
              name="role"
              value={formData.role}
              onChange={handleChange}
              /*   options={roles.map((data) => ({
                label: data.roleName,
                value: data._id,
              }))} */
              options={roles
                ?.filter(
                  (data) => !["Admin", "Student"].includes(data.roleName)
                )
                .map((data) => ({
                  label: data?.roleName,
                  value: data?._id,
                }))}
              required
            />

            <SelectField
              label="Permission"
              name="permission"
              value={formData.permission}
              onChange={handleChange}
              options={[
                { value: "1", label: "Read Only" },
                { value: "2", label: "Read & Write" },
              ]}
              required
            />
          </div>
          <div style={{ marginTop: 30 }} />
          {/* Buttons */}
          <div className="flex justify-end mt-5">
            <ModalCloseButton label={"Cancel"} onClick={onClose} />
            <ModalSubmitButton type="submit" label={"Add"} />
          </div>
        </form>
      </div>
    </div>
  ) : null;
}

export default AddTeamMember;
