import { useSelector } from "react-redux";
import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import { useEffect, useState } from "react";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";

function FinancialAidTable({ onEdit, onUpdate }) {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const handleEditClick = (data) => {
    onEdit(data);
  };
  const { isWriteAccess } = useSelector((state) => state.auth);
  function handleDeleteClick(id) {
    console.log("Delete scholarships : " + id);

    const updatedScholarships = collegeDetails.scholarships.filter(
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
    console.log(collegeDetails.scholarships);
  }, [collegeDetails]);

  return (
    <div className=" bg-white  dark:border-gray-700 dark:bg-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Scholarship Name</th>
              <th className="px-4 py-3 whitespace-nowrap">Link</th>
              {isWriteAccess && <th className="px-4 py-3"></th>}
            </tr>
          </thead>
          <tbody>
            {collegeDetails?.scholarships?.map((data, i) => (
              <tr
                key={i}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className=" px-4 py-3">{data?.name}</td>
                <td className=" px-4 py-3">{data?.link}</td>

                {isWriteAccess && (
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
                        //    onClick={() => handleDeleteClick(data?._id)}
                        onClick={() => {
                          setDeleteId(data?._id);
                          setIsModalOpen(!isModalOpen);
                        }}
                      />
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
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
  );
}

export default FinancialAidTable;
