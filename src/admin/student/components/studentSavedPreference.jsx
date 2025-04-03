import { useState } from "react";
import StudentPreferenceCard from "./studentPreferenceCard";
import { useSelector } from "react-redux";

function StudentSavedPreference() {
  const [activeTab, setActiveTab] = useState(0); // State to keep track of the active tab
  const tabs = ["Colleges", "Course", "Accommodations"];
  const { isWriteAccess } = useSelector((state) => state.auth);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

  console.log(studentProfile?.savedPreferences);

  return (
    <div className="max-w-5.5xl  my-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Header with title and pencil icon button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Saved Preferences</h2>
        {/* <img src={pencil} alt="pencil-pic" /> */}
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
                      ? "text-black  border-b-2 border-blue-500"
                      : "text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }`}
                  onClick={() => handleTabClick(index)} // Update active tab
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

        {/* Card Container with Horizontal Scroll */}
        <div className="flex  gap-5 overflow-x-auto pb-6">
          {Array(6)
            .fill()
            .map((tab, index) => (
              <StudentPreferenceCard key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default StudentSavedPreference;
