import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "./ConfirmModal";
import { addTeamRequest } from "../../redux/actions/teamActions";

function AddTeamMember({
  isOpen,
  onClose,
  editMode = false,
  memberToEdit = null,
}) {
  const { roles } = useSelector((state) => state.roles);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [permission, setPermission] = useState("");

  // Populate fields in edit mode
  useEffect(() => {
    if (editMode && memberToEdit) {
      const { firstName, lastName, email, phoneNumber, role, permission } =
        memberToEdit;

      setFirstName(firstName || "");
      setLastName(lastName || "");
      setEmail(email || "");
      setPhoneNumber(phoneNumber || "");
      setRole(role || "");
      setPermission(permission || "");
    } else {
      // Reset fields for add mode
      setFirstName("");
      setLastName("");

      setEmail("");
      setPhoneNumber("");
      setRole("");
      setPermission("");
    }
  }, [editMode, memberToEdit]);

  const handleSubmit = (e) => {
    console.log(firstName, lastName, email, phoneNumber, role, permission);
    e.preventDefault();
    if (
      (!firstName || !lastName, !email || !phoneNumber || !role || !permission)
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    const newMember = {
      email,
      firstName,
      lastName,
      mobile: phoneNumber,
      roleId: role,
      isWriteAccess: permission === "2" ? true : false,
    };

    console.log(newMember);

    if (editMode) {
      /* dispatch(
         updateTeamMember({ id: memberToEdit.id, updatedData: newMember })
       ); */
      toast.success("Team member updated successfully!");
    } else {
      console.log("add");
      dispatch(addTeamRequest(newMember));
      // toast.success("Team member added successfully!");
    }

    //setConfirmModalOpen(true);
    onClose();
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
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="mt-1 border-none block w-full rounded-md bg-[#F4F4F5] focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your first name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
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
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    {/* Role */}
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

                        {roles.map((data, i) => (
                          <option key={i} value={`${data._id}`}>
                            {data.roleName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Second Child Container */}
                  <div className="space-y-4">
                    {/* Last Name Input */}
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="mt-1 border-none block w-full rounded-md bg-[#F4F4F5] focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your last name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {/* Permission Select */}

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                        Permission
                      </label>
                      <select
                        className="mt-1  focus:bg-[#F4F4F5]  border-none block w-full px-3 py-2 bg-[#F4F4F5] rounded-md focus:outline-none focus:ring-[#F4F4F5] sm:text-sm"
                        value={permission}
                        onChange={(e) => setPermission(e.target.value)}
                      >
                        <option value="">Select Permission</option>

                        <option value="1">Read Only</option>
                        <option value="2">Read & Write</option>
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
                    {editMode ? "Update" : "Add"}
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
        text={editMode ? "Member Updated!" : "Member Added!"}
      />
    </>
  );
}

export default AddTeamMember;
