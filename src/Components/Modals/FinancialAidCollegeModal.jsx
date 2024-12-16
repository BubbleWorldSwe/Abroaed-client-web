import React, { useState, useEffect } from "react";

function FinancialAidModal({ isOpen, onClose, onSave, initialData }) {
  const [formData, setFormData] = useState({
    scholarshipName: "",
    description: "",
    link: "",
  });

  // Populate form if editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        scholarshipName: "",
        description: "",
        link: "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-1/3 shadow-md">
        <h2 className="text-lg font-bold mb-4">
          {initialData ? "Edit Scholarship" : "Add New Scholarship"}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="scholarshipName"
            placeholder="Scholarship Name"
            value={formData.scholarshipName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="link"
            placeholder="Link"
            value={formData.link}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-primary-700 text-white py-2 px-4 rounded hover:bg-primary-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinancialAidModal;
