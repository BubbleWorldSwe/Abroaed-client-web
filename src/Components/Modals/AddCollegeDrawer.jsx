import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCollege, fetchColleges } from "../../slices/collegeSlice";

function AddCollegeDrawer({ isOpen, onClose }) {
  // const dispatch = useDispatch();
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
    // dispatch(addCollege(formData)) // Dispatch the addCollege action
    // .unwrap()
    // .then(() => {
    //   alert("College added successfully!");
    //   onClose();
    //   dispatch(fetchColleges()); // Fetch the updated list
    // })
    // .catch((error) => {
    //   alert("Error adding college: " + error.message);
    // });
  };
  return (
    <>
      {isOpen && (
        <div className="fixed font-rethink inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            id="addCollegeDrawer"
            className="bg-white py-4 dark:bg-gray-800 p-6 rounded-lg  min-w-max w-1/3 max-h-[600px] overflow-auto  relative"
            tabIndex="-1"
            aria-labelledby="addCollegeDrawer-label"
          >
            <h5
              id="addCollegeDrawer-label"
              className="text-xl font-semibold mb-4"
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
            <form className="flex flex-col gap-4 bg-white  w-full ">
              {/* College Name */}
              <div className="flex flex-col">
                <label className="text-[#27272A] font-semibold font-sm">College Name</label>
                <input
                  type="text"
                  placeholder="Enter college name"
                  className="py-2 px-3 bg-[#F4F4F5] border-none rounded-md focus:outline-none"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label
                  className="text-[#27272A] font-semibold font-sm"
                >Country</label>
                <select
                  className="py-2 px-3 text-[#27272A] bg-[#F4F4F5] border-none rounded-md focus:outline-none"
                >
                  <option>Select country</option>
                  <option>USA</option>
                  <option>India</option>
                  <option>Canada</option>
                </select>
              </div>

              {/* State */}
              <div className="flex flex-col">
                <label className="text-[#27272A] font-semibold font-sm">State</label>
                <select
                  className="py-2 px-3 text-[#27272A] bg-[#F4F4F5] border-none rounded-md focus:outline-none"
                >
                  <option>Select state</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label className="text-[#27272A] font-semibold font-sm">Address</label>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="py-2 px-3 bg-[#F4F4F5] border-none rounded-md focus:outline-none"
                />
              </div>

              {/* Entity Type */}
              <div className="flex flex-col">
                <label className="text-[#27272A] font-semibold font-sm">Entity Type</label>
                <input
                  type="text"
                  placeholder="Enter entity type"
                  className="py-2 px-3 bg-[#F4F4F5] border-none rounded-md focus:outline-none"
                />
              </div>

              {/* Website */}
              <div className="flex flex-col">
                <label className="text-[#27272A] font-semibold font-sm">Website</label>
                <input
                  type="url"
                  placeholder="Enter website URL"
                  className="py-2 px-3 bg-[#F4F4F5] border-none rounded-md focus:outline-none"
                />
              </div>
              {/* Action Buttons */}
              <div className="flex gap-3 justify-end mt-4">
                <button
                  type="button"
                  className="bg-gray-300  text-gray-700 px-3 py-2 rounded-md"
                // onClick={handleReset}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-2 rounded-md"
                >
                  Save & Next
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
