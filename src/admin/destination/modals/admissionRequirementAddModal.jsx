/* eslint-disable react/prop-types */
import { useState } from "react";
import { requireDocumentsData } from "../data";
import { useDispatch } from "react-redux";
import { editDestinationRequest } from "../../../redux/actions/destinationActions";

const AdmissionRequirementAddModal = ({
  closeModal,
  documentsList,
  destinationId,
  details,
  onSuccess,
}) => {
  const dispatch = useDispatch();

  const [selectedDocuments, setSelectedDocuments] = useState(
    details.admissionRequirements.map((item) => item._id)
  );

  const handleCheckboxChange = (e, docId) => {
    if (e.target.checked) {
      setSelectedDocuments((prev) => [...prev, docId]);
    } else {
      setSelectedDocuments((prev) => prev.filter((id) => id !== docId));
    }
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log("Selected Document IDs:", selectedDocuments);

      dispatch(
        editDestinationRequest(destinationId, {
          admissionRequirements: selectedDocuments,
        })
      );
      onSuccess();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(selectedDocuments);

  return (
    <div>
      <p className="mb-5">Please select all that apply:</p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {documentsList.map((docName, index) => (
          <>
            <div className="flex gap-2" key={index}>
              <input
                type="checkbox"
                id={docName._id}
                checked={selectedDocuments.includes(docName._id)}
                onChange={(e) => handleCheckboxChange(e, docName._id)}
                className="p-1 border border-gray-400 rounded mt-1"
              />
              <label htmlFor="title" className="block text-gray-700">
                {docName.name}
              </label>
            </div>
          </>
        ))}
        <div className="col-span-full text-end">
          <button
            type="button"
            className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded transition"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionRequirementAddModal;
