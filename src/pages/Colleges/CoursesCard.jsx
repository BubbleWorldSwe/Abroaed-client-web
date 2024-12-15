import React, { useState } from "react";
import { useSelector } from "react-redux";

function CoursesCard() {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [dropdownDirection, setDropdownDirection] = useState("down");

  const courses = useSelector((state) =>
    state.collegeSections.sections.find(
      (section) => section.title === "Courses"
    )
  );

  const validCourses = Array.isArray(courses?.content)
    ? courses.content.filter(
        (course) =>
          course.courseName ||
          course.courseDesc ||
          course.courseLevel ||
          course.duration ||
          course.school ||
          course.dept ||
          course.intake ||
          course.feesPerYear ||
          course.seats
      )
    : [];

  const handleDropdownToggle = (event, index) => {
    const buttonElement = event.currentTarget;
    const rect = buttonElement.getBoundingClientRect();

    const spaceAbove = rect.top; // Distance from button to top of the viewport
    const spaceBelow = window.innerHeight - rect.bottom; // Distance from button to bottom of the viewport

    // Adjust dropdown direction based on available space
    if (spaceBelow < 150 && spaceAbove > 150) {
      setDropdownDirection("up"); // Show dropdown upwards
    } else {
      setDropdownDirection("down"); // Show dropdown downwards
    }

    setDropdownVisible(index === dropdownVisible ? null : index);
  };

  const handleOpenAddModal = (section) => {
    console.log(`Open Add Modal for: ${section}`);
  };

  const handleEditCourse = (course) => {
    console.log("Edit course:", course);
  };

  const handleDeleteCourse = (course) => {
    console.log("Delete course:", course);
  };

  if (validCourses.length === 0) {
    return (
      <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Courses
        </h2>
        <p className="text-gray-500 dark:text-gray-400">No courses added</p>
        <button
          type="button"
          onClick={() => handleOpenAddModal("Courses")}
          className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add
        </button>
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Courses
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-gray-700 dark:text-gray-300">
                Course Name
              </th>
              <th className="px-4 py-2 text-gray-700 dark:text-gray-300">
                Description
              </th>
              <th className="px-4 py-2 text-gray-700 dark:text-gray-300">
                Level
              </th>
              <th className="px-4 py-2 text-gray-700 dark:text-gray-300">
                Duration
              </th>
              <th className="px-4 py-2 text-gray-700 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {validCourses.map((course, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-2">{course.courseName || "N/A"}</td>
                <td className="px-4 py-2">{course.courseDesc || "N/A"}</td>
                <td className="px-4 py-2">{course.courseLevel || "N/A"}</td>
                <td className="px-4 py-2">{course.duration || "N/A"}</td>
                <td className="px-4 py-2 relative">
                  <button
                    className="text-gray-700 dark:text-gray-300 hover:underline"
                    onClick={(e) => handleDropdownToggle(e, index)}
                  >
                    Options
                  </button>
                  {dropdownVisible === index && (
                    <div
                      className={`absolute ${
                        dropdownDirection === "down"
                          ? "top-full"
                          : "bottom-full"
                      } mt-1 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700`}
                    >
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                        onClick={() => handleEditCourse(course)}
                      >
                        Edit
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-600"
                        onClick={() => handleDeleteCourse(course)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          onClick={() => handleOpenAddModal("Courses")}
          className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CoursesCard;
