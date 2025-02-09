import { useSelector } from "react-redux";
import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";

const Batches = ({ onEdit, onUpdate }) => {
  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );
  const handleEditClick = (batches) => {
    console.log(batches);
    onEdit(batches);
  };

  function handleDeleteClick(id) {
    console.log("Delete onDeleteBatches : " + id);

    const updatedBatches = testPrepDetails.batches.filter(
      (batches) => batches._id !== id
    );
    const batchesWithoutId = updatedBatches.map(({ _id, ...rest }) => rest);
    console.log(batchesWithoutId);

    onUpdate({ batches: batchesWithoutId });
  }

  return (
    <div className=" bg-white  dark:border-gray-700 dark:bg-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3">Batch Name</th>
              <th className="px-4 py-3 whitespace-nowrap">Batch Brief</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {testPrepDetails.batches.map((data, i) => (
              <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className=" px-4 py-3">
                  <div className="flex items-center">{data?.batchName}</div>
                </td>
                <th
                  scope="row"
                  className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center">
                    <div>{data?.batchBrief}</div>
                  </div>
                </th>

                <td className="text-center w-[100px]">
                  <div className="flex items-center justify-center space-x-5">
                    <img
                      src={pencil}
                      alt="Edit"
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => handleEditClick(data)}
                    />
                    <img
                      src={trash}
                      alt="Delete"
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => handleDeleteClick(data?._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Batches;
