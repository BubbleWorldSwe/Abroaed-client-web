import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";

function ScholarshipsDest({ onEdit, onUpdate }) {
  const handleEditClick = (data) => {
    onEdit(data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );

  function handleDeleteClick(id) {
    console.log("Delete scholarships : " + id);

    const updatedScholarships = details.scholarships.filter(
      (scholarship) => scholarship._id !== id
    );
    const scholarshipsWithoutId = updatedScholarships.map(
      ({ _id, ...rest }) => rest
    );
    //console.log(scholarshipsWithoutId);

    onUpdate({ scholarships: scholarshipsWithoutId });
  }

  useEffect(() => {
    console.log("details updated in ScholarshipsDest ");
    console.log(details.scholarships);
  }, [details]);

  return (
    <div className=" bg-white  dark:border-gray-700 dark:bg-gray-800">
      <div className="overflow-x-auto">
        <div className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Scholarship Name</th>
                  <th className="px-4 py-3">Link</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {details?.scholarships?.length > 0 ? (
                  details.scholarships.map((data, i) => (
                    <tr
                      key={i}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-3">{data?.name}</td>
                      <td className="px-4 py-3">
                        <a
                          href={data.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {data.link}
                        </a>
                      </td>

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
                            // onClick={() => handleDeleteClick(data?._id)}
                            onClick={() => {
                              setDeleteId(data?._id);
                              setIsModalOpen(!isModalOpen);
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
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
              handleDeleteClick(deleteId);
              setIsModalOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScholarshipsDest;
