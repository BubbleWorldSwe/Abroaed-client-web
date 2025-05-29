/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";

const AssignTeamMemberStudentModal = ({
  leadId,
  onClose,
  filledData,
  rolesList,
  onUpdate,
  membersList,
  setMembersList,
}) => {
  const { assignTeamMembers } = filledData;

  const [selectedMember, setSelectedMember] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedMember(value);
  };

  const handleRemoveMember = (idToRemove) => {
    const updatedAssignTeamMembers = assignTeamMembers.filter(
      (member) => member._id !== idToRemove
    );

    const newArray = updatedAssignTeamMembers.map((m) => m._id);

    onUpdate({ assignTeamMembers: newArray }, leadId);
  };

  const handleSave = () => {
    try {
      if (selectedMember) {
        const existingMemberIds = assignTeamMembers.map((member) => member._id);

        const newAssignTeamMembers = [...existingMemberIds, selectedMember];

        onUpdate({ assignTeamMembers: newAssignTeamMembers }, leadId);
      } else {
        toast.error("Please Select Member");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                    onClick={() => handleRemoveMember(data._id)}
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

          <form onSubmit={handleSave}>
            <div className="grid mt-3 grid-cols-1 gap-4 lg:grid-cols-2">
              <SelectField
                label="Member Type"
                name="type"
                onChange={({ target }) => {
                  setSelectedMember(null);
                  setMembersList([]);
                  const selectedRole = rolesList?.find(
                    (data) => data.roleId === target.value
                  );
                  setMembersList(selectedRole?.users);
                }}
                options={rolesList
                  ?.filter(
                    (data) =>
                      !["Admin", "Content Manager"].includes(data.roleName)
                  )
                  .filter((data) => {
                    const assignedRoleIds = assignTeamMembers.map(
                      (member) => member.roleId?._id
                    );
                    return !assignedRoleIds.includes(data.roleId);
                  })
                  .map((data) => ({
                    label: data?.roleName,
                    value: data?.roleId,
                  }))}
                required
              />
              <SelectField
                label="Members"
                name="members"
                value={selectedMember}
                onChange={handleChange}
                options={membersList?.map((data) => ({
                  label: `${data?.firstName} ${data?.lastName}`,
                  value: data?._id,
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
              <ModalSubmitButton type="submit" label="Assign" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssignTeamMemberStudentModal;
