/* eslint-disable no-unused-vars */

import { useState } from "react";
import AddOverviewContentModal from "../../../Components/Modals/AddOverviewContentModal";
import { overview } from "../data";

function OverviewCard() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setEditData(null);
  };

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
    <>
      <AddOverviewContentModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        isEditMode={isEditMode}
        editData={editData}
      />
      <div className="   bg-white  py-0  dark:border-gray-700 dark:bg-gray-800">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The United States of America is amongst the most popular study destinations globally, housing the world’s top-ranked institutions. It is known to host the highest number of international students from all over the globe. Studying in the USA offers a perfectly blended student experience with an exciting campus environment and cultural diversity.
        </p>
        <div className="justify-start w-full grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            { key: "Established Year", value: estYear },
            { key: "QS World Ranking", value: qsWorldRanking },
            { key: "Intake", value: intake },
            { key: "Total Students", value: totalStudents },
            { key: "Student to Teacher Ratio", value: studentToTeacherRatio },
            { key: "International Students", value: maleToFemaleRatio },
          ].map((item, index) => (
            <div key={index} className="text-left">
              <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                {item.key}
              </p>
              <p className="text-sm font-medium text-gray-600 dark:text-white">
                {item.value || "N/A"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OverviewCard;
