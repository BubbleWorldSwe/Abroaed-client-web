/* eslint-disable react/prop-types */
import { useState } from "react";


const AboutExamTestPrepModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };
  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="about" className="block  text-gray-700 mt-4">About</label>
          <textarea
            id="about"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'about')}
            className="w-full p-2 bg-gray-100 rounded mt-1 border-none"
            placeholder="Add Description"
          ></textarea>
        </div>
        <div className="mb-5">
          <label htmlFor="examType" className="block  text-gray-700 mt-4">Exam Types</label>
          <textarea
            id="examType"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'examType')}
            className="w-full p-2 bg-gray-100 rounded mt-1 border-none"
            placeholder="Add Description"
          ></textarea>
        </div>

        <div className="mb-5">
          <label htmlFor="examComponent" className="block  text-gray-700 mt-4">Exam Components</label>
          <textarea
            id="examComponent"
            value={formData.description || ""}
            onChange={(e) => handleInputChange(e, 'examComponent')}
            className="w-full p-2 bg-gray-100 rounded mt-1 border-none"
            placeholder="Add Description"
          ></textarea>
        </div>
        <div className="text-end">
          <button
            type="button"
            className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded   transition"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </form>
    </div>
  )
}

export default AboutExamTestPrepModal;