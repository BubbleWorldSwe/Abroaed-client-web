import { useSelector } from "react-redux";

import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { useState } from "react";

const LanguageFaqs = ({ onEdit, onUpdate }) => {
  const languagePrepDetails = useSelector(
    (state) => state.languagePreps.selectedLanguagePrep
  );
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const handleEditClick = (faq) => {
    onEdit(faq);
  };

  function handleDeleteClick(id) {
    console.log("Delete onDeleteFaq : " + id);

    const updatedFaqs = languagePrepDetails.faqs.filter(
      (faq) => faq._id !== id
    );
    const faqWithoutId = updatedFaqs.map(({ _id, ...rest }) => rest);
    console.log(faqWithoutId);

    onUpdate({ faqs: faqWithoutId });
  }

  return (
    <div className="px-1">
      {languagePrepDetails?.faqs?.length > 0 ? (
        languagePrepDetails?.faqs.map((data, i) => (
          <table
            key={i}
            className="table-auto w-full bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg mb-5"
          >
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th
                  colSpan={"2"}
                  className="px-6 py-3 text-left text-gray-700 dark:text-gray-300"
                >
                  {data.question}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="px-4 py-4 text-gray-600 dark:text-gray-300">
                  {data.answer}
                </td>
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
                        //  onClick={() => handleDeleteClick(data?._id)}
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
};

export default LanguageFaqs;
