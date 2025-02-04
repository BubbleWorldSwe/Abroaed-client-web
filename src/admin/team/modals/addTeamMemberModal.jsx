/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addTeamRequest,
  fetchTeamsRequest,
} from "../../../redux/actions/teamActions";

import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";

function AddTeamMember({ isOpen, onClose, setIsDone, onAddSuccess }) {
  const { roles } = useSelector((state) => state.roles);
  const dispatch = useDispatch();

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

    dispatch(
      addTeamRequest({
        email,
        firstName,
        lastName,
        mobile: phoneNumber,
        roleId: role,
        isWriteAccess: permission === "2",
      })
    );

    onAddSuccess();
    setIsDone(true);
    onClose();
  };

  return isOpen ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-lg relative">
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
                options={roles.map((data) => ({
                  label: data.roleName,
                  value: data._id,
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
              <button
                type="button"
                className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  ) : null;
}

export default AddTeamMember;
