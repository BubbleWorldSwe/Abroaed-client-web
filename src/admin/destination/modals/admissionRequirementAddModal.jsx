/* eslint-disable react/prop-types */
import { useState } from "react";
import { requireDocumentsData } from "../data";

const AdmissionRequirementAddModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({});
  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div>
      <p className="mb-5">Please select all that apply:</p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {requireDocumentsData.map((docName, index) => (
          <>
            <div className="flex gap-2" key={index}>
              <input
                type="checkbox"
                id="title"
                checked={formData.title || false}
                onChange={(e) => handleInputChange(e, "title")}
                className="p-1 border border-gray-400 rounded mt-1"
              />
              <label htmlFor="title" className="block text-gray-700">
                {docName}
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
