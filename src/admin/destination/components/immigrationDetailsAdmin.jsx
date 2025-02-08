import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import { useSelector } from "react-redux";

const ImmigrationDetailsAdmin = ({ onEdit, onUpdate }) => {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  const handleEditClick = (data) => {
    onEdit(data);
  };

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
              <button
                type="button"
                onClick={() => handleEditClick(data)}
                className="p-0 bg-transparent border-0"
              >
                <img src={pencil} alt="edit Icon" className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleDeleteClick(data?._id)}
                className="p-0 bg-transparent border-0"
              >
                <img src={trash} alt="edit Icon" className="w-4 h-4" />
              </button>
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
    </div>
  );
};

export default ImmigrationDetailsAdmin;
