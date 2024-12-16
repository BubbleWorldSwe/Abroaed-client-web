import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "../../slices/destinationSlice";

function AddDestination({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user); // Access logged-in user's data

  const [formData, setFormData] = useState({
    pageName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Append additional fields programmatically
    const newDestination = {
      ...formData,
      author: currentUser?.name || "Anonymous", // Fallback to "Anonymous"
      status: "draft",
      createdAt: new Date().toISOString(),
    };

    dispatch(addDestination(newDestination)); // Dispatch the action
    onClose(); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Destination</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Page Name</label>
            <input
              type="text"
              name="pageName"
              value={formData.pageName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Author</label>
            <input
              type="text"
              value={currentUser?.name || "Anonymous"} // Display the logged-in user's name
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDestination;
