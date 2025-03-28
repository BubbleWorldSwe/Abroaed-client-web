import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import { useSelector } from "react-redux";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { useState } from "react";

const ImmigrationDetailsAdmin = ({ onEdit, onUpdate }) => {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleEditClick = (data) => {
    onEdit(data);
  };
  const { isWriteAccess } = useSelector((state) => state.auth);
  function handleDeleteClick(id) {
    console.log("Delete immigrations : " + id);

    const updatedImmigrations = details.immigrations.filter(
      (scholarship) => scholarship._id !== id
    );
    const immigrationWithoutId = updatedImmigrations.map(
      ({ _id, ...rest }) => ({
        ...rest,
        visaType:
          typeof rest.visaType === "object" ? rest.visaType._id : rest.visaType,
      })
    );
    // console.log(immigrationWithoutId);

    onUpdate({ immigrations: immigrationWithoutId });
  }
  return (
    <div className="bg-white py-0 dark:border-gray-700 dark:bg-gray-800">
      {details?.immigrations?.length > 0 ? (
        details.immigrations.map((data, i) => (
          <div key={i} className="mb-6">
            <div className="flex items-center gap-3">
              <h2 className="mb-2 font-semibold">
                {data?.visaName} | {data?.visaType?.name}
              </h2>
              {isWriteAccess && (
                <>
                  <button
                    type="button"
                    onClick={() => handleEditClick(data)}
                    className="p-0 bg-transparent border-0"
                  >
                    <img src={pencil} alt="edit Icon" className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    // onClick={() => handleDeleteClick(data?._id)}
                    onClick={() => {
                      setDeleteId(data?._id);
                      setIsModalOpen(!isModalOpen);
                    }}
                    className="p-0 bg-transparent border-0"
                  >
                    <img src={trash} alt="delete Icon" className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {data.description || "No details available"}
            </p>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-center py-4 text-gray-500">No Records</p>
        </div>
      )}

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Delete!"
        onDelete={() => {
          handleDeleteClick(deleteId);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default ImmigrationDetailsAdmin;
