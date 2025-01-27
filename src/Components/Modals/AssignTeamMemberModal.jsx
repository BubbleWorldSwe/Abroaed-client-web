import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignStudentToTeamMember } from "../../slices/teamSlice";
import { assignTeamMember } from "../../slices/leadSlice";

const AssignTeamModal = ({ leadId, leadName, team = {}, onClose }) => {
  const dispatch = useDispatch();
  const teamMembers = useSelector((state) => state.team.teamMembers);

  // Initialize selectedTeam with empty values
  const [selectedTeam, setSelectedTeam] = useState({
    counsellor: "",
    backendManager: "",
    mentor: "",
  });

  // Map team member names to their IDs when the modal opens
  useEffect(() => {
    const getTeamMemberIdByName = (name) =>
      teamMembers.find((member) => member.name === name)?.id || "";

    setSelectedTeam({
      counsellor: getTeamMemberIdByName(team.counsellor),
      backendManager: getTeamMemberIdByName(team.backendManager),
      mentor: getTeamMemberIdByName(team.mentor),
    });
  }, [team, teamMembers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedTeam((prev) => ({ ...prev, [name]: value }));
  };

  const getTeamMemberById = (id) =>
    teamMembers.find((member) => member.id === +id);

  const handleSave = () => {
    const assignedTeam = {
      counsellor: getTeamMemberById(selectedTeam.counsellor) || {},
      backendManager: getTeamMemberById(selectedTeam.backendManager) || {},
      mentor: getTeamMemberById(selectedTeam.mentor) || {},
    };

    // Dispatch action to update the lead slice
    dispatch(
      assignTeamMember({
        id: leadId,
        teamMembers: {
          counsellor: assignedTeam.counsellor.name || "",
          backendManager: assignedTeam.backendManager.name || "",
          mentor: assignedTeam.mentor.name || "",
        },
      })
    );

    // Dispatch actions to update each team member with assigned student name
    if (assignedTeam.counsellor.id) {
      dispatch(
        assignStudentToTeamMember({
          teamMemberId: assignedTeam.counsellor.id,
          studentName: leadName,
        })
      );
    }
    if (assignedTeam.backendManager.id) {
      dispatch(
        assignStudentToTeamMember({
          teamMemberId: assignedTeam.backendManager.id,
          studentName: leadName,
        })
      );
    }
    if (assignedTeam.mentor.id) {
      dispatch(
        assignStudentToTeamMember({
          teamMemberId: assignedTeam.mentor.id,
          studentName: leadName,
        })
      );
    }

    onClose();
  };

  const getMembersByRole = (role) =>
    teamMembers.filter((member) => member.role === role);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-max relative">
        <button
          className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Assign Team Member</h2>
        <h5 className="text-lg font-medium">
          Assigned Members
        </h5>
        <p className="text-sm">
          No members assigned. Assign below
        </p>
        <div className="grid mt-3 grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Counsellor</label>
            <select
              name="counsellor"
              value={selectedTeam.counsellor}
              onChange={handleChange}
              className="w-full px-3 py-2 border-none bg-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
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
            <label className="block text-gray-700 font-medium mb-1">Backend Manager</label>
            <select
              name="backendManager"
              value={selectedTeam.backendManager}
              onChange={handleChange}
              className="w-full px-3 py-2 border-none bg-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
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


        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTeamModal;
