import { useState } from "react";
import { Toaster } from "react-hot-toast";

const UpdateTeamMember = ({
  isOpen,
  onClose,
  editMode = false,
  memberToEdit = null,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [permission, setPermission] = useState("");

  const [role, setRole] = useState("");
  const [permissions, setPermissions] = useState({
    readWrite: false,
    readOnly: false,
  });

  const handleSubmit = () => {};

  const handlePermissionToggle = (permission) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  return (
    <>
      {" "}
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
              Update Team Member
            </h2>
            <div>
              {/* Input Fields */}
              <form onSubmit={handleSubmit} className="bg-white rounded-md">
                <div className="grid grid-cols-1  gap-1">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                      Select Member
                    </label>
                    <select
                      className="mt-1  focus:bg-[#F4F4F5]  border-none block w-full px-3 py-2 bg-[#F4F4F5] rounded-md focus:outline-none focus:ring-[#F4F4F5] sm:text-sm"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Member</option>
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
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                      Select Role
                    </label>
                    <select
                      className="mt-1  focus:bg-[#F4F4F5]  border-none block w-full px-3 py-2 bg-[#F4F4F5] rounded-md focus:outline-none focus:ring-[#F4F4F5] sm:text-sm"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Role Type</option>
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
                  <div className="w-full">
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
                          onClick={() => handlePermissionToggle("readWrite")}
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
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-4">
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
                    Update
                  </button>
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
