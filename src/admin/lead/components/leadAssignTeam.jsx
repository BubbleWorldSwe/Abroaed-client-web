/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import { useSelector } from "react-redux";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";

const LeadAssignTeam = ({ onOpenModal, onUpdate }) => {
  const leadProfile = useSelector((state) => state?.leads?.selectedLead);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isWriteAccess } = useSelector((state) => state.auth);

  const { assignTeamMembers } = leadProfile;

  const [deleteId, setDeleteId] = useState(null);

  const handleRemoveMember = () => {
    const updatedAssignTeamMembers = assignTeamMembers.filter(
      (member) => member._id !== deleteId
    );

    const newArray = updatedAssignTeamMembers.map((m) => m._id);

    onUpdate({ assignTeamMembers: newArray }, leadProfile._id);
  };

  return (
    <>
      <div className="w-full mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
        {/* Header with title and pencil icon button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Assigned Team</h2>

          {isWriteAccess && (
            <button
              onClick={onOpenModal}
              className="group relative p-3 rounded-full transition-all duration-300 bg-white hover:bg-gray-200"
            >
              <img
                src={pencil}
                alt="pencil-img"
                className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
              />
            </button>
          )}
        </div>
        {/* Grid container for team details */}
        <table className="w-full px-5 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-500  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Mobile No.</th>
              <th className="px-4 py-3">Role</th>
              {isWriteAccess && <th className="px-4 py-3"></th>}
            </tr>
          </thead>
          <tbody>
            {leadProfile?.assignTeamMembers?.length > 0 ? (
              assignTeamMembers.map((data, i) => (
                <tr
                  key={i}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className=" px-4 py-3 font-semibold">
                    {`${data?.firstName} ${data?.lastName}`}
                  </td>

                  <td className=" px-4 py-3">{data?.email}</td>
                  <td className=" px-4 py-3">{data?.mobile}</td>
                  <td className=" px-4 py-3">{data?.roleId?.roleName}</td>
                  {isWriteAccess && (
                    <td className="text-center w-[100px]">
                      <div className="flex items-center justify-center space-x-5">
                        <img
                          src={trash}
                          alt="Delete"
                          className="w-5 h-5 cursor-pointer"
                          //  onClick={() => handleDeleteClick(data?._id)}
                          onClick={() => {
                            setDeleteId(data?._id);
                            setIsModalOpen(!isModalOpen);
                          }}
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-4 border text-gray-500"
                >
                  No Records
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Delete!"
        onDelete={() => {
          handleRemoveMember();
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default LeadAssignTeam;
