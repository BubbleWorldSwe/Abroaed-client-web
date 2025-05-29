import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import { useSelector } from "react-redux";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { useState } from "react";

function DestinationFAQ({ onEdit, onUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  const handleEditClick = (faq) => {
    onEdit(faq);
  };
  const { isWriteAccess } = useSelector((state) => state.auth);

  function handleDeleteClick(id) {
    const updatedFaqs = details.faqs.filter((faq) => faq._id !== id);
    const faqWithoutId = updatedFaqs.map(({ _id, ...rest }) => rest);

    onUpdate({ faqs: faqWithoutId });
  }

  return (
    <div className="bg-white py-0 dark:border-gray-700 dark:bg-gray-800">
      {details?.faqs?.length > 0 ? (
        details?.faqs.map((data, i) => (
          <table key={i} className="table-auto w-full bg-white rounded-lg mb-7">
            <thead className="">
              <tr>
                <th
                  colSpan={"2"}
                  className="text-left text-gray-700 dark:text-gray-300"
                >
                  {data.question}
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <tr className="">
                <td>{data.answer}</td>
                <td className="text-center w-[100px]">
                  {isWriteAccess && (
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
                  )}
                </td>
              </tr>
            </tbody>
          </table>
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
}

export default DestinationFAQ;
