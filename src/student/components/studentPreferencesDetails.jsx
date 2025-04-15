import { useState } from "react";
import { useSelector } from "react-redux";

import StudentPreferenceCollegeCard from "./studentPreferenceCollegeCard";
import StudentPreferenceCourseCard from "./studentPreferenceCourseCard";
import StudentPreferenceAccommodationCard from "./studentPreferenceAccommodationCard";

function StudentPreferenceDetails() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Colleges", "Course", "Accommodations"];

  const handleTabClick = (index) => setActiveTab(index);

  const {
    savedPreferences,
    applications,
    studentProfile,
    transactions,
    prepsBatches,
  } = useSelector((state) => state.studentProfile);

  const colleges = savedPreferences.filter((pref) => pref.type === "colleges");
  const courses = savedPreferences.filter((pref) => pref.type === "courses");
  const accommodations = savedPreferences.filter(
    (pref) => pref.type === "accommodation"
  );

  // Decide which array to show based on the active tab
  const activeData =
    activeTab === 0 ? colleges : activeTab === 1 ? courses : accommodations;

  return (
    <div>
      <div className="mb-4 dark:border-gray-700">
        <ul
          className="flex w-full -mb-px text-sm font-medium text-center"
          role="tablist"
        >
          {tabs.map((tab, index) => (
            <li key={index} className="w-full" role="presentation">
              <button
                className={`inline-block p-4 w-full text-lg font-semibold rounded-t-lg ${
                  activeTab === index
                    ? "text-black border-b-2 border-blue-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                onClick={() => handleTabClick(index)}
                role="tab"
                aria-controls={`styled-${tab.toLowerCase().replace(" ", "-")}`}
                aria-selected={activeTab === index}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Container or No Records */}
      <div className="flex gap-5 overflow-x-auto pb-6">
        {activeData.length > 0 ? (
          <>
            {activeTab === 0 &&
              colleges.map((college, index) => (
                <StudentPreferenceCollegeCard key={index} college={college} />
              ))}
            {activeTab === 1 &&
              courses.map((course, index) => (
                <StudentPreferenceCourseCard key={index} course={course} />
              ))}
            {activeTab === 2 &&
              accommodations.map((acc, index) => (
                <StudentPreferenceAccommodationCard
                  key={index}
                  accommodation={acc}
                />
              ))}
          </>
        ) : (
          <div className="w-full flex justify-center font-bold text-[14px] items-center text-gray-500 text-lg py-10 rounded-md min-h-[50px]">
            No records found in this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentPreferenceDetails;
