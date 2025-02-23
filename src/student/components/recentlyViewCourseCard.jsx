

const RecentlyViewCourseCard = () => {
  return (
    <div className="border p-4 rounded-lg shadow w-full">
      <h3 className="font-semibold text-md">
        Course Name
      </h3>
      <div className="flex gap-5 mb-1">
        <span className="text-gray-400 text-sm">
          School
        </span>
        <p className="text-gray-700 text-sm">
          Bachelors of Engineering
        </p>
      </div>
      <div className="flex gap-5 mb-1">
        <span className="text-gray-400 text-sm">
          Course Level
        </span>
        <p className="text-gray-700 text-sm">
          Course Level                                </p>
      </div>
      <div className="flex gap-5 mb-1">
        <span className="text-gray-400 text-sm">
          Duration
        </span>
        <p className="text-gray-700 text-sm">
          24 months                                </p>
      </div>
      <div className="flex gap-5 mb-1">
        <span className="text-gray-400 text-sm">
          Fees
        </span>
        <p className="text-gray-700 text-sm">
          $ 23,999 per year                                </p>
      </div>
      <div className="flex gap-5 ">
        <span className="text-gray-400 text-sm">
          Intake
        </span>
        <p className="text-gray-700 text-sm">
          Intake Time                                </p>
      </div>
      <p className="text-gray-500 text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>)
}

export default RecentlyViewCourseCard