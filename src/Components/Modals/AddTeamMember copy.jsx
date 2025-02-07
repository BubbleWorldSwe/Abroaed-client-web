import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTeamMember, updateTeamMember } from "../../slices/teamSlice";
import { X } from "lucide-react";
import ConfirmModal from "../../commons/modal/confirmModal";

function AddTeamMember({
  isOpen,
  onClose,
  editMode = false,
  memberToEdit = null,
}) {
  const dispatch = useDispatch();

  // State for input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [permissions, setPermissions] = useState({
    readWrite: false,
    readOnly: false,
  });

  // Populate fields in edit mode
  useEffect(() => {
    if (editMode && memberToEdit) {
      const { name, email, assignedTo, phoneNumber, role, permissions } =
        memberToEdit;
      setAssignedTo(assignedTo || "");
      setName(name || "");
      setEmail(email || "");
      setPhoneNumber(phoneNumber || "");
      setRole(role || "");
      setPermissions(permissions || { readWrite: false, readOnly: false });
    } else {
      // Reset fields for add mode
      setName("");
      setAssignedTo("");
      setEmail("");
      setPhoneNumber("");
      setRole("");
      setPermissions({ readWrite: false, readOnly: false });
    }
  }, [editMode, memberToEdit]);

  const handlePermissionToggle = (permission) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  const handleSubmit = () => {
    // if (!name || !email || !phoneNumber || !role) {
    //   toast.error("Please fill out all fields");
    //   return;
    // }

    const newMember = {
      name,
      email,
      assignedTo,
      phoneNumber,
      role,
      permissions,
    };

    setConfirmModalOpen(true);
    // if (editMode) {
    //   // Dispatch update action
    //   // dispatch(
    //   //   updateTeamMember({
    //   //     index: memberToEdit.index,
    //   //     updatedMember: newMember,
    //   //   })
    //   // );
    //   toast.success("Team member updated successfully");

    // } else {
    //   setConfirmModalOpen(true)
    //   // Dispatch add action
    //   // dispatch(addTeamMember(newMember));
    //   toast.success("Team member added successfully");
    // }

    // onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-max relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-2xl  font-semibold mb-4 dark:text-white">
              {editMode ? "Edit Team Member" : "Add Team Member"}
            </h2>
            <div>
              {/* Input Fields */}
              <form onSubmit={handleSubmit} className="bg-white rounded-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* First Child Container */}
                  <div className="space-y-4">
                    {/* Full Name Input */}
                    <div>
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        name="fullName"
                        className="mt-1 border-none block w-full rounded-md bg-[#F4F4F5] focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Mobile Number Input */}
                    <div>
                      <label
                        htmlFor="mobile-number"
                        className="block text-sm border-none font-medium text-gray-700"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobile-number"
                        name="mobileNumber"
                        className="mt-1 block w-full rounded-md border-none bg-[#F4F4F5]  sm:text-sm"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>

                    {/* Permissions */}
                    <div className="w-full">
                      {role && (
                        <div className="mb-4">
                          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Permissions
                          </h3>
                          <div className="flex space-x-2">
                            <button
                              type="button"
                              className={`py-2 px-3 text-sm font-medium flex items-center justify-center space-x-2 rounded-xl ${
                                permissions.readWrite
                                  ? "bg-green-700 text-white"
                                  : "bg-gray-200 text-gray-700"
                              }`}
                              onClick={() =>
                                handlePermissionToggle("readWrite")
                              }
                            >
                              <span>Read & Write</span>
                              <svg
                                className="w-4 h-4 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                            </button>

                            <button
                              type="button"
                              className={`py-2 px-3 text-sm font-medium flex items-center justify-center space-x-2 rounded-xl ${
                                permissions.readOnly
                                  ? "bg-green-700 text-white"
                                  : "bg-gray-200 text-gray-700"
                              }`}
                              onClick={() => handlePermissionToggle("readOnly")}
                            >
                              <span>Read Only</span>
                              <svg
                                className="w-4 h-4 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Second Child Container */}
                  <div className="space-y-4">
                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 border-none block w-full rounded-md bg-[#F4F4F5] focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Role Select */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                        Role Type
                      </label>
                      <select
                        className="mt-1  focus:bg-[#F4F4F5]  border-none block w-full px-3 py-2 bg-[#F4F4F5] rounded-md focus:outline-none focus:ring-[#F4F4F5] sm:text-sm"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="">Select Role</option>
                        <option value="content-manager">
                          <div className="flex justify-between text-center">
                            Content Manager
                          </div>
                        </option>
                        <option value="counsel-manager">Counsel Manager</option>
                        <option value="counsellor">Counsellor</option>
                        <option value="backend-manager">Backend Manager</option>
                        <option value="backend-associate">
                          Backend Associate
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                    onClick={onClose}
                  >
                    Reset
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
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <ConfirmModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        text="Member Added!"
      />
    </>
  );
}

export default AddTeamMember;
