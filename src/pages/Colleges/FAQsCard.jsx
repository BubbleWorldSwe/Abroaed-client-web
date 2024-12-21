import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToSection,
  updateItemInSection,
  deleteItemFromSection,
} from "../../slices/collegeSectionSlice";
import FAQsCollegeModal from "../../Components/Modals/FAQsCollegeModal";

function FAQsCard() {
  const dispatch = useDispatch();

  const faqs = useSelector((state) =>
    state.collegeSections.sections.find((section) => section.title === "FAQs")
  );

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ question: "", answer: "" });

  // Open modal for adding new FAQ
  const handleAddFAQ = () => {
    setFormData({ question: "", answer: "" });
    setEditIndex(null);
    setShowModal(true);
  };

  // Open modal for editing existing FAQ
  const handleEditFAQ = (index) => {
    setFormData(faqs.content[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  // Handle deleting FAQ
  const handleDeleteFAQ = (index) => {
    dispatch(deleteItemFromSection({ sectionTitle: "FAQs", itemIndex: index }));
  };

  // Handle form submission
  const handleSaveFAQ = (data) => {
    if (editIndex !== null) {
      dispatch(
        updateItemInSection({
          sectionTitle: "FAQs",
          itemIndex: editIndex,
          updatedItem: data,
        })
      );
    } else {
      dispatch(
        addItemToSection({
          sectionTitle: "FAQs",
          newItem: data,
        })
      );
    }
    setShowModal(false);
  };

  const validFAQs = faqs?.content?.filter((faq) => faq.question || faq.answer);

  if (!faqs || !validFAQs || validFAQs.length === 0) {
    return (
      <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold">FAQs</h2>
        <p className="text-gray-500">No FAQs added</p>
        <button
          type="button"
          onClick={handleAddFAQ}
          className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Add FAQ
        </button>

        {showModal && (
          <FAQsCollegeModal
            formData={formData}
            setFormData={setFormData}
            onClose={() => setShowModal(false)}
            onSave={handleSaveFAQ}
          />
        )}
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">FAQs</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Question
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Answer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {validFAQs.map((faq, index) => (
            <tr key={index}>
              <td className="px-6 py-4">
                {faq.question || "No question provided"}
              </td>
              <td className="px-6 py-4">
                {faq.answer || "No answer provided"}
              </td>
              <td className="px-6 py-4 flex space-x-2">
                <button
                  onClick={() => handleEditFAQ(index)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteFAQ(index)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        onClick={handleAddFAQ}
        className="mt-6 py-2 px-3 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Add FAQ
      </button>

      {showModal && (
        <FAQsCollegeModal
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowModal(false)}
          onSave={handleSaveFAQ}
        />
      )}
    </div>
  );
}

export default FAQsCard;
