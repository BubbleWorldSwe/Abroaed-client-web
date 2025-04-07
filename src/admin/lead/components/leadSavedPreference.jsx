import { useState } from "react";
import { useSelector } from "react-redux";
import LeadPreferenceAccommodationCard from "./leadPreferenceAccommodationCard";
import LeadPreferenceCollegeCard from "./leadPreferenceCollegeCard";
import LeadPreferenceCourseCard from "./leadPreferenceCourseCard";

function LeadSavedPreference() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Colleges", "Course", "Accommodations"];

  const handleTabClick = (index) => setActiveTab(index);

  const leadProfile = useSelector((state) => state?.leads?.selectedLead);

  const savedPreferences = leadProfile?.savedPreferences || [];

  console.log(savedPreferences);

  const colleges = savedPreferences.filter((pref) => pref.type === "colleges");
  const courses = savedPreferences.filter((pref) => pref.type === "courses");
  const accommodations = savedPreferences.filter(
    (pref) => pref.type === "accommodation"
  );

  // Decide which array to show based on the active tab
  const activeData =
    activeTab === 0 ? colleges : activeTab === 1 ? courses : accommodations;

  return (
    <div className="max-w-5.5xl my-5 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Saved Preferences</h2>
      </div>

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
                  aria-controls={`styled-${tab
                    .toLowerCase()
                    .replace(" ", "-")}`}
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
                  <LeadPreferenceCollegeCard key={index} college={college} />
                ))}
              {activeTab === 1 &&
                courses.map((course, index) => (
                  <LeadPreferenceCourseCard key={index} course={course} />
                ))}
              {activeTab === 2 &&
                accommodations.map((acc, index) => (
                  <LeadPreferenceAccommodationCard
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
    </div>
  );
}

export default LeadSavedPreference;
