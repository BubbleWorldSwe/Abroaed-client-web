/* eslint-disable react/prop-types */

import { useState } from "react";
import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import CourseEnquiryModal from "../../comman/modals/courseEnquiryModal";

const CourseCard = ({ course, source, onAddLead }) => {
  const [openModal, setOpenModal] = useState(false);

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
              <h5 className="mb-2 text-[22px] font-semibold  text-[#27272A] dark:text-white">
                {course.name}
              </h5>
              <div>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                  />
                </svg>
              </div>
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
