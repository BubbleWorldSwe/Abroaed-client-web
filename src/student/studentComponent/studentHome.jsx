import { SquareUserRound } from "lucide-react";
import { useEffect, useState } from "react";
import PreferenceCardDetails from "../components/preferenceCardDetails";
import { myApplicationtabs, tabColors } from "../data";
import ApplicationCardDetails from "../components/applicationCardDetails";
import RecentlyViewCollegeCard from "../components/recentlyViewCollegeCard";
import RecentlyViewCourseCard from "../components/recentlyViewCourseCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StudentHome = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Colleges", "Course", "Accommodations"];
  const { studentToken, studentId, student } = useSelector(
    (state) => state.auth
  );

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!studentToken && !studentId) {
      navigate("/home");
    }
  }, [studentToken, studentId, navigate]);

  return (
    <div className="w-full bg-[#fff] min-h-[90vh] px-5 py-10 ">
      <h1 className="text-3xl font-bold">My Dashbssoard</h1>
      <div className="bg-white mb-10 p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-10">
          <div className="flex justify-center">
            <img
              className="w-12 object-cover h-12 rounded-full border-2 border-gray-300"
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
              alt="Rounded avatar"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">
                {`${student?.firstName} ${student?.lastName}`} ✅
              </h2>
              <p className="text-gray-600">+91 {`${student?.mobile}`}</p>
            </div>
          </div>
          <div className="flex flex-col  gap-3">
            <div className="p-4 flex gap-3 text-center border border-gray-200 rounded-lg w-[20vw]">
              <SquareUserRound className="w-10 h-10" />
              <div className="flex flex-col gap-1 text-start">
                <p className="text-sm font-semibold">Counsellor: Hari Kumar</p>
                <p className="text-xs text-gray-600">
                  Next Counselling on 17/02
                </p>
              </div>
            </div>
            <div className="p-4 flex gap-3 text-center border border-gray-200 rounded-lg">
              <SquareUserRound className="w-10 h-10" />
              <div className="flex flex-col gap-1 text-start">
                <p className="text-sm font-semibold">Total Applications</p>
                <p className="text-xs text-gray-600">12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* save Preferences */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold">Saved Preferences</h2>
          <a href="#" className="text-blue-500 text-sm">
            View all &gt;
          </a>
        </div>
        <div className="mt-2  bg-white p-6 rounded-xl shadow-md">
          <div className="border-b flex gap-6 mb-4">
            <ul
              className="flex w-full -mb-px text-sm font-medium text-center"
              role="tablist"
            >
              {tabs.map((tab, index) => (
                <li key={index} className="w-full" role="presentation">
                  <button
                    className={`inline-block p-4 w-full text-lg font-semibold rounded-t-lg ${
                      activeTab === index
                        ? "text-black  border-b-4 border-blue-500"
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
          <div className="flex gap-5 lg:max-w-[79vw] overflow-x-auto  scroll-smooth p-2">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <PreferenceCardDetails key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* my applications */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold">My Applications</h2>
          <a href="#" className="text-blue-500 text-sm">
            View all &gt;
          </a>
        </div>
        <div className="p-6 rounded-xl shadow-md">
          <div className="flex  gap-4 overflow-auto max-h-screen lg:max-w-[79vw] ">
            {myApplicationtabs.map((tab, index) => {
              return (
                <div className="flex flex-col gap-4" key={index}>
                  <div className="" role="">
                    <button
                      className={`inline-block py-4 w-full text-sm text-start font-semibold border-b-2 border-[#D4D4D8] rounded-t-lg ${
                        activeTab === index
                          ? "text-black  border-b-4 border-blue-500"
                          : "text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                      onClick={() => handleTabClick(index)}
                      role="tab"
                      aria-controls={`styled-${tab?.tabName
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      aria-selected={activeTab === index}
                    >
                      <span
                        className={`px-2 py-1 rounded-full ${
                          tabColors[tab.tabName] || "bg-gray-300"
                        } text-${
                          tab.tabName === "Rejected" ? "white" : "gray-primary"
                        }`}
                      >
                        {tab.tabName}
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-5 ">
                    {tab.cardDetails.map((card, idx) => (
                      <ApplicationCardDetails key={idx} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* recent view college */}
      <div className="bg-white p-4 rounded-lg border mb-6">
        <h2 className="text-2xl py-2 font-semibold border-b-2 border-gray-200  mb-3">
          Recently Viewed Colleges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <RecentlyViewCollegeCard key={index} />
          ))}
        </div>
      </div>
      {/* Recently Viewed Courses */}
      <div className=" p-4 rounded-lg border mb-6">
        <h2 className="text-2xl py-2 font-semibold border-b-2 border-gray-200  mb-3">
          Recently Viewed Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <RecentlyViewCourseCard key={index} />
          ))}
        </div>
      </div>
      {/* Language/Test Preps */}
      <div className=" font-rethink bg-white dark:bg-gray-900 flex flex-col ">
        <div className="flex py-2 flex-col  mx-auto w-full bg-white dark:bg-gray-800 relative  sm:rounded-lg">
          <h2 className="text-2xl py-2 font-semibold  mb-3">
            Language/ Test Preps
          </h2>
          <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded">
            <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4"></th>
                  <th scope="col" className="px-4 py-3 min-w-[14rem]">
                    Type
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[10rem]">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Batch Name{" "}
                  </th>

                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Mode
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Batch Duration
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Enrollment Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((member, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3 w-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          //   onClick="event.stopPropagation()"
                          className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                      Language Prep
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      French
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Starter Batch
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Online
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      3 months
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      DD/MM/YYYY
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-gray-500 text-sm py-2 text-center mt-2">
              Showing 20 results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
