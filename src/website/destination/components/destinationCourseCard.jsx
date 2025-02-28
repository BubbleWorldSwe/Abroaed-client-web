/* eslint-disable react/prop-types */

import { EnquireButton } from "../../../commons/components/buttons/enquireButton";

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      <div className="flex flex-col flex-grow">
        <div>
          <div className="flex justify-between">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            <strong>College:</strong> {course.collegeName}
          </p>
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            <strong>Domain:</strong> {course.domain}
          </p>
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            <strong>Program:</strong> {course.courseLevel}
          </p>
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            <strong>Fees:</strong> {course.fees}
          </p>
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            <strong>Intake:</strong> {course.intake}
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
            {course.brief}
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <EnquireButton />
      </div>
    </div>
  );
};

export default CourseCard;
