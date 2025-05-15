/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useSelector } from "react-redux";
import AddOverviewContentModal from "../../common/modals/addOverviewsContentModal";

function OverviewCard() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setEditData(null);
  };

  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);

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
          {collegeDetails?.description}
        </p>
        <div className="justify-start w-full grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            {
              key: "Website",
              value: collegeDetails?.website,
            },
            {
              key: "Established Year",
              value: collegeDetails?.establishmentYear,
            },
            { key: "QS World Ranking", value: collegeDetails?.ranking },
            { key: "Intake", value: collegeDetails?.intake },
            {
              key: "Total Students",
              value: collegeDetails?.totalStudents,
            },
            {
              key: "Student to Teacher Ratio",
              value: collegeDetails?.studentTeacherRatio,
            },
            {
              key: "International Students",
              value: collegeDetails?.internationalStudent,
            },
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
