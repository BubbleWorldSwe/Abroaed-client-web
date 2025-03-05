/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { teamMembers } from "../../student/data";
import ConfirmModal from "../../../commons/modal/confirmModal";
import { useSelector } from "react-redux";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";

const AssignTeamModal = ({
  leadId,
  leadName,
  team = {},
  onClose,
  filledData,
  rolesList,
  onUpdate,
}) => {
  const { allTeams } = useSelector((state) => state.teams);

  console.log(allTeams);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({
    counsellor: "",
    backendManager: "",
    mentor: "",
  });

  const [formData, setFormData] = useState({});

  const { assignTeamMembers } = filledData;

  console.log(assignTeamMembers);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedTeam((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // onClose();
    setConfirmModalOpen(true);
  };
  const getMembersByRole = (role) =>
    teamMembers.filter((member) => member.role === role);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-1/2 relative">
          <button
            className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-4">Assign Team Member</h2>
          <h5 className="block text-sm font-medium text-gray-700 mb-2">
            Assigned Members
          </h5>
          <div className="flex flex-wrap gap-2 mb-5">
            {assignTeamMembers.length > 0 ? (
              assignTeamMembers.map((data, i) => (
                <div
                  key={i}
                  className="flex items-center bg-gray-100 text-gray-700 border border-gray-200 rounded-sm px-3 py-1 text-sm"
                >
                  <span>{`${data.firstName} ${data.lastName} - ${data?.roleId?.roleName}`}</span>
                  <button
                    // onClick={() => handleRemoveMember(i)}
                    className="ml-2 text-gray-500 hover:text-red-500"
                  >
                    ✖
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-700 font-bold">
                No members assigned. Assign below
              </p>
            )}
          </div>

          <div className="grid mt-3 grid-cols-1 gap-4 lg:grid-cols-2">
            <SelectField
              label="Member Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              options={rolesList?.map((data) => ({
                label: data?.roleName,
                value: data?._id,
              }))}
              required
            />
            <SelectField
              label="Members"
              name="members"
              value={formData.members}
              onChange={handleChange}
              options={[].map((data) => ({
                label: data,
                value: data,
              }))}
              required
            />
          </div>

          <div className="flex justify-end space-x-2 mt-10">
            <ModalCloseButton label="Close" onClick={onClose} />

            {/* <ModalDeleteButton
                          label=" Cancel Appointment"
                          onClick={onClose}
                        /> */}
            <ModalSubmitButton label="Assign" onClick={handleSave} />
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        text="Member Assigned!"
      />
    </>
  );
};

export default AssignTeamModal;
