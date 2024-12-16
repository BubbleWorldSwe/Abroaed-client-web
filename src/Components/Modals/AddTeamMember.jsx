import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTeamMember, updateTeamMember } from "../../slices/teamSlice";
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
  const [permissions, setPermissions] = useState({
    readWrite: false,
    readOnly: false,
  });

  // Populate fields in edit mode
  useEffect(() => {
    if (editMode && memberToEdit) {
      const { name, email, phoneNumber, role, permissions } = memberToEdit;
      setName(name || "");
      setEmail(email || "");
      setPhoneNumber(phoneNumber || "");
      setRole(role || "");
      setPermissions(permissions || { readWrite: false, readOnly: false });
    } else {
      // Reset fields for add mode
      setName("");
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
    if (!name || !email || !phoneNumber || !role) {
      toast.error("Please fill out all fields");
      return;
    }

    const newMember = {
      name,
      email,
      phoneNumber,
      role,
      permissions,
    };

    if (editMode) {
      // Dispatch update action
      dispatch(
        updateTeamMember({
          index: memberToEdit.index,
          updatedMember: newMember,
        })
      );
      toast.success("Team member updated successfully");
    } else {
      // Dispatch add action
      dispatch(addTeamMember(newMember));
      toast.success("Team member added successfully");
    }

    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              {editMode ? "Edit Team Member" : "Add Team Member"}
            </h2>
            <div>
              {/* Input Fields */}
              <div className=" mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              {/* Role Dropdown */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Role Type
                </label>
                <select
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="content-manager">Content Manager</option>
                  <option value="counsel-manager">Counsel Manager</option>
                  <option value="counsellor">Counsellor</option>
                  <option value="backend-manager">Backend Manager</option>
                  <option value="backend-associate">Backend Associate</option>
                </select>
              </div>

              {/* Permissions */}
              {role && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Permissions
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className={`py-2.5 px-5 text-sm font-medium rounded-full ${
                        permissions.readWrite
                          ? "bg-green-700 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => handlePermissionToggle("readWrite")}
                    >
                      Read & Write
                    </button>
                    <button
                      type="button"
                      className={`py-2.5 px-5 text-sm font-medium rounded-full ${
                        permissions.readOnly
                          ? "bg-green-700 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => handlePermissionToggle("readOnly")}
                    >
                      Read Only
                    </button>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={handleSubmit}
                >
                  {editMode ? "Update Member" : "Add Member"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default AddTeamMember;
