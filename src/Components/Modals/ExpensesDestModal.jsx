import React, { useState } from "react";
import {
  addItemToSection,
  updateContent,
} from "../../slices/destinationSectionSlice";
import { useDispatch } from "react-redux";

function ExpensesDestModal({ isOpen, closeModal, editData }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    AvgTutionFee: editData?.AvgTutionFee || "",
    AvgRent: editData?.AvgRent || "",
    AvgFoodExpense: editData?.AvgFoodExpense || "",
    AvgTransportExpense: editData?.AvgTransportExpense || "",
    MiscExpense: editData?.MiscExpense || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (editData) {
      dispatch(
        updateContent({
          sectionTitle: "Expenses",
          updatedContent: [formData],
        })
      );
    } else {
      dispatch(
        addItemToSection({
          sectionTitle: "Expenses",
          newItem: formData,
        })
      );
    }
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-900">
          {editData ? "Edit Expenses" : "Add Expenses"}
        </h2>
        <form className="mt-4 space-y-4">
          {[
            "AvgTutionFee",
            "AvgRent",
            "AvgFoodExpense",
            "AvgTransportExpense",
            "MiscExpense",
          ].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700"
              >
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          ))}
        </form>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800"
          >
            {editData ? "Save Changes" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpensesDestModal;
