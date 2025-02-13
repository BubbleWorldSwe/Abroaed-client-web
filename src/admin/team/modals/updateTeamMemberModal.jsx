/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const UpdateTeamMember = ({ isOpen, onClose, data, onUpdateTeam }) => {
  const { roles } = useSelector((state) => state.roles);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    permission: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const memberData = {
      roleId: formData.role,
      isWriteAccess: formData.permission === "2",
      firstName: formData.firstName,
      lastName: formData.lastName,
    };
    onUpdateTeam(data._id, memberData);

    onClose();
  };

  useEffect(() => {
    if (data) {
      setFormData({
        firstName: data?.firstName || "",
        lastName: data?.lastName || "",
        email: data?.email || "",
        phoneNumber: data?.mobile || "",
        role: data?.roleId?._id || "",
        permission: data?.isWriteAccess ? "2" : "1",
      });
    }
  }, [data]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg px-8 py-10 w-1/2 max-w-max relative">
            <button
              className="absolute w-10 h-10 top-1 right-1 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Update Team Member
            </h2>
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {/* First Name */}
                  <TextInputField
                    label="First Name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                  />

                  {/* Last Name */}
                  <TextInputField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                  />

                  {/* Mobile Number */}
                  <TextInputField
                    label="Mobile Number"
                    name="phoneNumber"
                    type="text"
                    value={formData.phoneNumber}
                    disabled
                    placeholder="Enter Mobile Number"
                  />

                  {/* Email ID */}
                  <TextInputField
                    label="Email ID"
                    name="email"
                    type="text"
                    value={formData.email}
                    disabled
                    placeholder="Enter Email ID"
                  />

                  {/* Select Role */}
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

                  {/* Permission */}
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
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default UpdateTeamMember;
