import { Bookmark } from "lucide-react";

const StudentPreferenceCourseCard = ({
  course,
  removeFromSavedPreferences,
}) => {
  return (
    <div className="w-[300px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow p-5 dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      <div className="flex flex-col flex-grow">
        <div>
          <div className="flex justify-between">
            <h5
              className={`mb-2 text-[22px] font-semibold  text-gray-primary dark:text-white`}
            >
              {course.name}
            </h5>

            <div
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer"
              onClick={() => removeFromSavedPreferences(course._id)}
            >
              <Bookmark className="w-5 h-5 text-gray-700" fill />
            </div>
          </div>
          {/* <p className="mb-2 text-sm font-normal text-[#52525B] dark:text-gray-400">
                      <span className="text-base font-semibold">College:</span>{" "}
                      {course.collegeName}
                    </p> */}
          <p className="mb-1 text-sm font-normal text-[#52525B] dark:text-gray-400">
            <span className="text-base font-semibold">Domain:</span>{" "}
            {course.domain}
          </p>
          <p className="mb-1 text-sm font-normal text-[#52525B] dark:text-gray-400">
            <span className="text-base font-semibold">Program:</span>{" "}
            {course.courseLevel}
          </p>
          <p className="mb-1 text-sm font-normal text-[#52525B] dark:text-gray-400">
            <span className="text-base font-semibold">Duration:</span>{" "}
            {course.duration}
          </p>
          <p className="mb-1 text-sm font-normal text-[#52525B] dark:text-gray-400">
            <span className="text-base font-semibold">Fees:</span> {course.fees}
          </p>
          <p className="mb-1 text-sm font-normal text-[#52525B] dark:text-gray-400">
            <span className="text-base font-semibold">Intake:</span>{" "}
            {course.intake}
          </p>

          <p className="mb-1 font-normal text-[#71717A] text-base dark:text-gray-400 flex-grow">
            {course.brief}
          </p>
        </div>
      </div>

      {/* Button Always at Bottom */}
      {/* <div className="mt-auto">
                <EnquireButton onClick={handleOpenAddModal} />
            </div> */}
    </div>
  );
};

export default StudentPreferenceCourseCard;
