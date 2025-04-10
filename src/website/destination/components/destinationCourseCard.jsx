/* eslint-disable react/prop-types */

import { useState } from "react";
import { useSelector } from "react-redux";
import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import CourseEnquiryModal from "../../comman/modals/courseEnquiryModal";
import { Bookmark } from "lucide-react";

const CourseCard = ({
  course,
  source,
  onAddLead,
  addToSavedPreferences,
  removeFromSavedPreferences,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { savedPreferences } = useSelector((state) => state.savedPreferences);
  const { isLoggedInStudent } = useSelector((state) => state.auth);

  // Find saved course by typeId
  const savedItem = [...savedPreferences].find(
    (saved) => (saved.typeId?._id || saved.typeId) === course?._id
  );

  const isSaved = Boolean(savedItem);

  const handleCloseAddModal = () => {
    setOpenModal(false);
  };

  const handleOpenAddModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <CourseEnquiryModal
        isOpen={openModal}
        onClose={handleCloseAddModal}
        entity={`${course.name}`}
        source={source}
        onAddLead={onAddLead}
        courseDetails={course}
      />
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
        <div className="flex flex-col flex-grow">
          <div>
            <div className="flex justify-between">
              <h5 className="mb-2 text-[22px] font-semibold text-gray-primary dark:text-white">
                {course.name}
              </h5>

              {/* Bookmark Button */}
              {isLoggedInStudent && (
                <button
                  onClick={
                    () =>
                      isSaved
                        ? removeFromSavedPreferences(savedItem._id) // Remove using saved _id
                        : addToSavedPreferences("courses", course?._id) // Add using course._id
                  }
                >
                  <Bookmark
                    className={`w-6 h-6 text-black ${
                      isSaved ? "fill-black" : "text-gray-500"
                    }`}
                  />
                </button>
              )}
            </div>

            <p className="mb-2 text-sm font-normal text-[#52525B] dark:text-gray-400">
              <span className="text-base font-semibold">College:</span>{" "}
              {course.collegeName}
            </p>
            <p className="mb-2 text-sm font-normal text-[#52525B] dark:text-gray-400">
              <span className="text-base font-semibold">Domain:</span>{" "}
              {course.domain}
            </p>
            <p className="mb-2 text-sm font-normal text-[#52525B] dark:text-gray-400">
              <span className="text-base font-semibold">Program:</span>{" "}
              {course.courseLevel}
            </p>
            <p className="mb-2 text-sm font-normal text-[#52525B] dark:text-gray-400">
              <span className="text-base font-semibold">Duration:</span>{" "}
              {course.duration}
            </p>
            <p className="mb-2 text-sm font-normal text-[#52525B] dark:text-gray-400">
              <span className="text-base font-semibold">Fees:</span>{" "}
              {course.fees}
            </p>
            <p className="mb-2 text-sm font-normal text-[#52525B] dark:text-gray-400">
              <span className="text-base font-semibold">Intake:</span>{" "}
              {course.intake}
            </p>

            <p className="mb-3 font-normal text-[#71717A] text-base dark:text-gray-400 flex-grow">
              {course.brief}
            </p>
          </div>
        </div>

        {/* Button Always at Bottom */}
        <div className="mt-auto">
          <EnquireButton onClick={handleOpenAddModal} />
        </div>
      </div>
    </>
  );
};

export default CourseCard;
