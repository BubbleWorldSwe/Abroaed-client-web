/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Search, Upload } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { docCategory } from "../../../constants/values";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";

const UpdateDocApplicationModal = ({ isOpen, onClose, leadId }) => {
  const [formData, setFormData] = useState({
    college: "",
    lead: leadId,
    category: "",
    title: "",
  });

  const { applications } = useSelector(
    (state) => state?.students?.selectedStudent
  );

  console.log(applications);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form ready to submit", formData);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="w-1/2 bg-white font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-4xl max-h-[600px] overflow-auto relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid font-rethink grid-cols-1 gap-4 lg:grid-cols-2">
                <SelectField
                  label="Document Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  options={docCategory.map((data) => ({
                    label: data,
                    value: data,
                  }))}
                  required
                />

                <TextInputField
                  label="Title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter Document Title"
                />
              </div>

              {formData?.category === "Applications" && (
                <SelectField
                  label="Select College"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  options={applications.map((data) => ({
                    label: data?.college?.name,
                    value: data?.college?._id,
                  }))}
                  required
                />
              )}

              <div className="flex gap-3 justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateDocApplicationModal;
