import { useSelector } from "react-redux";
import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { useState } from "react";

const SimplifyThings = ({ onEdit, onUpdate }) => {
  const languagePrepDetails = useSelector(
    (state) => state.languagePreps.selectedLanguagePrep
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const handleEditClick = (data) => {
    onEdit(data);
  };

  function handleDeleteClick(id) {
    const updatedSimplifyThings = languagePrepDetails.simplifyThings.filter(
      (data) => data._id !== id
    );

    const simplifyThingsWithoutId = updatedSimplifyThings.map(
      ({ _id, ...rest }) => rest
    );

    onUpdate({ simplifyThings: simplifyThingsWithoutId });
  }

  return (
    <table className="w-full px-5 text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-sm text-gray-500  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3 min-w-[14rem]">
            Title
          </th>
          <th scope="col" className="px-4 py-3 min-w-[10rem]">
            Description
          </th>
          <th scope="col" className="px-4 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {languagePrepDetails?.simplifyThings?.length > 0 ? (
          languagePrepDetails?.simplifyThings?.map((item, index) => (
            <tr
              key={index}
              className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="px-4 py-3 font-semibold">{item.title}</td>
              <td className="px-4 py-3">{item.description}</td>
              <td className="text-center w-[100px]">
                <div className="flex items-center justify-center space-x-5">
                  <img
                    src={pencil}
                    alt="Edit"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => handleEditClick(item)}
                  />
                  <img
                    src={trash}
                    alt="Delete"
                    className="w-5 h-5 cursor-pointer"
                    //    onClick={() => handleDeleteClick(item?._id)}
                    onClick={() => {
                      setDeleteId(item?._id);
                      setIsModalOpen(!isModalOpen);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center py-4 border text-gray-500">
              No Records
            </td>
          </tr>
        )}
      </tbody>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Delete!"
        onDelete={() => {
          handleDeleteClick(deleteId);
          setIsModalOpen(false);
        }}
      />
    </table>
  );
};

export default SimplifyThings;
