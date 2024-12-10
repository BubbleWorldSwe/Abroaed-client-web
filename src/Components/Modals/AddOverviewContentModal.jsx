import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSection } from "../../slices/collegeSectionSlice";

function AddOverviewContentModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    about: "",
    establishmentYear: "",
    qsRanking: "",
    totalStudents: "",
    studentToTeacherRatio: "",
    maleToFemaleRatio: "",
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

    // Construct content for the Overview section
    const content = `
      About: ${formData.about}\n
      Established: ${formData.establishmentYear}\n
      QS Ranking: ${formData.qsRanking}\n
      Total Students: ${formData.totalStudents}\n
      Student to Teacher Ratio: ${formData.studentToTeacherRatio}\n
      Male to Female Ratio: ${formData.maleToFemaleRatio}
    `;

    dispatch(
      updateSection({
        index: 0,
        updatedSection: { title: "Overview", content },
      })
    );
    onClose(); // Close the modal after submitting
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Content to Overview</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">About</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Establishment Year</label>
            <input
              type="number"
              name="establishmentYear"
              value={formData.establishmentYear}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">QS Ranking</label>
            <input
              type="number"
              name="qsRanking"
              value={formData.qsRanking}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Total Students</label>
            <input
              type="number"
              name="totalStudents"
              value={formData.totalStudents}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">
              Student to Teacher Ratio
            </label>
            <input
              type="text"
              name="studentToTeacherRatio"
              value={formData.studentToTeacherRatio}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Male to Female Ratio</label>
            <input
              type="text"
              name="maleToFemaleRatio"
              value={formData.maleToFemaleRatio}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
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

export default AddOverviewContentModal;
