import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToSection,
  updateItemInSection,
} from "../../slices/collegeSectionSlice";
import FinancialAidModal from "../../Components/Modals/FinancialAidCollegeModal";

function FinancialAidTable() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const financialAid = useSelector((state) =>
    state.collegeSections.sections.find(
      (section) => section.title === "Financial Aid and Scholarships"
    )
  );
  console.log("first", financialAid);
  const handleAddClick = () => {
    setCurrentData(null);
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (index) => {
    setCurrentData(financialAid.content[index]);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleSave = (data) => {
    if (editingIndex !== null) {
      dispatch(
        updateItemInSection({
          sectionTitle: "Financial Aid and Scholarships",
          itemIndex: editingIndex,
          updatedItem: data,
        })
      );
    } else {
      dispatch(
        addItemToSection({
          sectionTitle: "Financial Aid and Scholarships",
          newItem: data,
        })
      );
    }
    setIsModalOpen(false);
  };

  // Filter valid scholarships with at least one meaningful field
  const validScholarships = financialAid?.content?.filter(
    (scholarship) =>
      scholarship.scholarshipName || scholarship.link || scholarship.description
  );

  return (
    <div className="mb-4 rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Financial Aid and Scholarships
      </h2>

      {validScholarships && validScholarships.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Scholarship Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Link
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {validScholarships.map((scholarship, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{scholarship.scholarshipName}</td>
                  <td className="px-6 py-4">{scholarship.description}</td>
                  <td className="px-6 py-4">
                    {scholarship.link ? (
                      <a
                        href={scholarship.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {scholarship.link}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEditClick(index)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No scholarships added yet.</p>
      )}

      <button
        onClick={handleAddClick}
        className="mt-4 py-2 px-4 bg-primary-700 text-white rounded hover:bg-primary-800"
      >
        Add Scholarship
      </button>

      {/* Modal */}
      <FinancialAidModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={currentData}
      />
    </div>
  );
}

export default FinancialAidTable;
