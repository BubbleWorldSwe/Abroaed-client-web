import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoursesModal from "../../Components/Modals/CollegeCoursesModal";
import {
  addItemToSection,
  updateItemInSection,
  deleteItemFromSection,
} from "../../slices/collegeSectionSlice";

function CoursesCard() {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [dropdownDirection, setDropdownDirection] = useState("down");
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const dispatch = useDispatch();
  const courses = useSelector((state) =>
    state.collegeSections.sections.find(
      (section) => section.title === "Courses"
    )
  );

  // Validate and filter valid courses
  const validCourses = Array.isArray(courses?.content)
    ? courses.content.filter((course) => course.courseName)
    : [];

  // Handle dropdown visibility
  const handleDropdownToggle = (event, index) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    setDropdownDirection(spaceBelow < 150 && spaceAbove > 150 ? "up" : "down");
    setDropdownVisible(index === dropdownVisible ? null : index);
  };

  // Open modal for add or edit
  const handleOpenModal = (course = null, index = null) => {
    setModalVisible(true);
    setIsEditMode(!!course); // True if editing
    setCurrentCourse(course);
    setCurrentIndex(index);
  };

  // Add new course
  const handleAddCourse = (newCourse) => {
    dispatch(addItemToSection({ sectionTitle: "Courses", newItem: newCourse }));
  };

  // Update existing course
  const handleEditCourse = (updatedCourse) => {
    dispatch(
      updateItemInSection({
        sectionTitle: "Courses",
        itemIndex: currentIndex,
        updatedItem: updatedCourse,
      })
    );
  };

  // Delete a course
  const handleDeleteCourse = (index) => {
    dispatch(
      deleteItemFromSection({
        sectionTitle: "Courses",
        itemIndex: index,
      })
    );
  };

  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Courses
      </h2>

      {/* Conditionally render table or add button */}
      <div className="overflow-x-auto">
        {validCourses.length > 0 ? (
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
                      onClick={(e) => handleDropdownToggle(e, index)}
                      className="text-gray-700 dark:text-gray-300 hover:underline"
                    >
                      Options
                    </button>
                    {dropdownVisible === index && (
                      <div
                        className={`absolute ${
                          dropdownDirection === "down"
                            ? "top-full"
                            : "bottom-full"
                        } z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700`}
                      >
                        <button
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                          onClick={() => handleOpenModal(course, index)}
                        >
                          Edit
                        </button>
                        <button
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:hover:bg-red-600"
                          onClick={() => handleDeleteCourse(index)}
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
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No courses added yet. Click "Add" to create a new course.
          </p>
        )}

        {/* Add Button */}
        <button
          type="button"
          onClick={() => handleOpenModal()}
          className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800"
        >
          Add
        </button>

        {/* Modal */}
        {modalVisible && (
          <CoursesModal
            isEditMode={isEditMode}
            initialData={currentCourse}
            onClose={() => setModalVisible(false)}
            onSave={(data) => {
              if (isEditMode) handleEditCourse(data);
              else handleAddCourse(data);
              setModalVisible(false);
              setCurrentCourse(null);
              setCurrentIndex(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default CoursesCard;
