import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddOverviewContentModal from "../../Components/Modals/AddOverviewContentModal";

function OverviewCard() {
  const overview = useSelector((state) =>
    state.collegeSections.sections.find(
      (section) => section.title === "Overview"
    )
  );

  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State to manage Add modal open/close
  const [isEditMode, setIsEditMode] = useState(false); // Flag to determine Add/Edit
  const [editData, setEditData] = useState(null); // Data for Edit mode
  const handleOpenDeleteModal = (index) => {
    setSelectedSectionIndex(index);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCloseModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedSectionIndex(null);
  };

  const handleOpenAddModal = () => {
    setIsEditMode(false); // Add mode
    setEditData(null); // Clear data
    setIsAddModalOpen(true);
  };

  const handleOpenEditModal = () => {
    setIsEditMode(true); // Edit mode
    setEditData(overview.content); // Pass existing content to modal
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setEditData(null);
  };

  if (!overview || !overview.content || overview.content.length === 0) {
    return (
      <>
        <AddOverviewContentModal
          isOpen={isAddModalOpen}
          onClose={handleCloseAddModal}
          isEditMode={isEditMode}
          editData={editData}
        />
        <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Overview
          </h2>
          <p className="text-gray-500 dark:text-gray-400">No content added</p>
          <button
            type="button"
            onClick={handleOpenAddModal}
            className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add
          </button>
        </div>
      </>
    );
  }

  const {
    about,
    estYear,
    qsWorldRanking,
    intake,
    totalStudents,
    maleToFemaleRatio,
    studentToTeacherRatio,
  } = overview.content;

  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <AddOverviewContentModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        isEditMode={isEditMode}
        editData={editData}
      />
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Overview
      </h2>
      <div className="border border-1 mb-2 border-gray-200 w-full "></div>
      {/* About Section */}
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {about || "No details available"}
      </p>
      {/* Grid Section */}
      <div className="justify-start w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { key: "Established Year", value: estYear },
          { key: "QS World Ranking", value: qsWorldRanking },
          { key: "Intake", value: intake },
          { key: "Total Students", value: totalStudents },
          { key: "Male to Female Ratio", value: maleToFemaleRatio },
          { key: "Student to Teacher Ratio", value: studentToTeacherRatio },
        ].map((item, index) => (
          <div key={index} className="text-left">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {item.key}
            </p>
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              {item.value || "N/A"}
            </p>
          </div>
        ))}
      </div>
      {/* Actions */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={handleOpenEditModal}
          type="button"
          data-modal-target="editReviewModal"
          data-modal-toggle="editReviewModal"
          className="inline-flex text-sm items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
        >
          <svg
            className="mr-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
            />
          </svg>
          Edit
        </button>
        <button
          type="button"
          data-modal-target="deleteReviewModal"
          data-modal-toggle="deleteReviewModal"
          className="inline-flex text-sm items-center font-medium text-red-600 hover:underline dark:text-red-500"
        >
          <svg
            className="mr-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}

export default OverviewCard;
