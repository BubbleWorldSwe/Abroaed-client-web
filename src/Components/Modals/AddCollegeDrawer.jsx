import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCollege, fetchColleges } from "../../slices/collegeSlice";

function AddCollegeDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    country: "",
    entityType: "",
    website: "",
    email: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("payload", formData);
    e.preventDefault();
    dispatch(addCollege(formData)) // Dispatch the addCollege action
      .unwrap()
      .then(() => {
        alert("College added successfully!");
        onClose();
        dispatch(fetchColleges()); // Fetch the updated list
      })
      .catch((error) => {
        alert("Error adding college: " + error.message);
      });
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30">
          <div
            id="addCollegeDrawer"
            className="fixed right-0 top-0 z-40 h-screen w-full max-w-md overflow-y-auto bg-white p-4 transition-transform duration-300 ease-in-out antialiased dark:bg-gray-800"
            tabIndex="-1"
            aria-labelledby="addCollegeDrawer-label"
          >
            <h5
              id="addCollegeDrawer-label"
              className="mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400"
            >
              Add New College
            </h5>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-2.5 top-2.5 p-1.5 text-sm text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: "College Name", name: "name" },
                { label: "City", name: "city" },
                { label: "Country", name: "country" },
                { label: "Website", name: "website" },
                { label: "Email", name: "email" },
                { label: "Contact Number", name: "contactNo" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    id={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    required
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="entityType"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Entity Type
                </label>
                <select
                  name="entityType"
                  id="entityType"
                  value={formData.entityType}
                  onChange={handleChange}
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  required
                >
                  <option value="" disabled>
                    Select Entity Type
                  </option>
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                  <option value="Community">Community</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700"
                >
                  Add College
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full ml-4 rounded-lg border px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCollegeDrawer;
