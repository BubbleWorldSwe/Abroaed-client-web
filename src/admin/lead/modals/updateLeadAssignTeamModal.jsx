/* eslint-disable react/prop-types */
import { useState } from "react";
import { teamMembers } from "../../student/data";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const UpdateLeadAssignTeamModal = ({ isOpen, onClose }) => {
  const [selectedTeam, setSelectedTeam] = useState({
    counsellor: "",
    backendManager: "",
    mentor: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedTeam((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {};
  const getMembersByRole = (role) =>
    teamMembers.filter((member) => member.role === role);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-max relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Update Assign Team</h2>
            <div>
              <form className="space-y-6">
                <div className="grid mt-3 grid-cols-1 gap-4 lg:grid-cols-2">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Counsellor
                    </label>
                    <select
                      name="counsellor"
                      value={selectedTeam.counsellor}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-[#3F3F46] border-none  bg-[#F4F4F5] rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    >
                      <option value="">Select Counsellor</option>
                      {getMembersByRole("Counsellor").map((member) => (
                        <option key={member.id} value={member.id}>
                          {member.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Backend Manager
                    </label>
                    <select
                      name="backendManager"
                      value={selectedTeam.backendManager}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-none text-[#3F3F46] bg-[#F4F4F5] rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    >
                      <option value="">Select Backend Manager</option>
                      {getMembersByRole("Backend Manager").map((member) => (
                        <option key={member.id} value={member.id}>
                          {member.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-10">
                  <ModalCloseButton label="Cancel" onClick={onClose} />
                  <ModalSubmitButton label="Submit" onClick={handleSubmit} />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateLeadAssignTeamModal;
