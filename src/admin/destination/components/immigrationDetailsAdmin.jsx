import pencil from "../../../assets/pencil.png";

const ImmigrationDetailsAdmin = ({ details, onEdit }) => {
  const handleEditClick = (data) => {
    onEdit(data);
  };

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
