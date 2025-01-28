import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { editTeamRequest } from "../../redux/actions/teamActions";

const UpdateTeamMember = ({
  isOpen,
  onClose,
  editMode = false,
  memberToEdit = null,
  data,
}) => {
  const { roles } = useSelector((state) => state.roles);

  const [permission, setPermission] = useState(data?.isWriteAccess ? "2" : "1");
  const [role, setRole] = useState(data?.roleId?._id);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      editTeamRequest(data._id, {
        roleId: data?.roleId?._id,
      })
    );
    onClose();
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
                    <input
                      type="text"
                      className="mt-1 border-none block w-full rounded-md bg-[#F4F4F5] focus:ring-indigo-500 sm:text-sm"
                      required
                      value={`${data.firstName} ${data.lastName}`}
                      disabled={true}
                    />
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
                      {roles.map((data, i) => (
                        <option key={i} value={`${data._id}`}>
                          {data.roleName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                        Permission
                      </label>
                      <select
                        className="mt-1  focus:bg-[#F4F4F5]  border-none block w-full px-3 py-2 bg-[#F4F4F5] rounded-md focus:outline-none focus:ring-[#F4F4F5] sm:text-sm"
                        value={permission}
                        onChange={(e) => setPermission(e.target.value)}
                      >
                        <option value="">Select</option>

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
