const LeadPreferenceCourseCard = ({ course }) => {
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
            <div>
              {/* <button>
                                <img
                                    src={bookmark}
                                    alt="bookmarkIcon"
                                />
                            </button> */}
            </div>
          </div>
          {/* <p className="mb-2 text-sm font-normal text-[#52525B] dark:text-gray-400">
                      <span className="text-base font-semibold">College:</span>{" "}
                      {course.collegeName}
                    </p> */}
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
            <span className="text-base font-semibold">Fees:</span> {course.fees}
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
      {/* <div className="mt-auto">
                <EnquireButton onClick={handleOpenAddModal} />
            </div> */}
    </div>
  );
};

export default LeadPreferenceCourseCard;
