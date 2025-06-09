/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Search, Upload } from "lucide-react";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { docCategory } from "../../../constants/values";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { toast } from "react-toastify";

const StudentUploadDocument = ({ isOpen, onClose, leadId, uploadDocument }) => {
  const [formData, setFormData] = useState({
    applicationId: "",
    lead: leadId,
    type: "",
    title: "",
    files: null,
    status: "approved",
  });

  const { applications } = useSelector(
    (state) => state?.students?.selectedStudent
  );

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];
    const maxSize = 4 * 1024 * 1024; // 4MB

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF, JPG, and PNG files are allowed");
      return;
    }

    if (file.size > maxSize) {
      toast.error("File size must be less than 4MB");
      return;
    }

    setFormData({ ...formData, files: file });
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];
    const maxSize = 4 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF, JPG, and PNG files are allowed");
      return;
    }

    if (file.size > maxSize) {
      toast.error("File size must be less than 4MB");
      return;
    }

    setFormData({ ...formData, files: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { files } = formData;

    if (!files) {
      toast.error("Please select a file to upload");
      return;
    }

    try {
      const filteredData = Object.fromEntries(
        Object.entries(formData).filter(
          ([_, value]) => value !== null && value !== undefined && value !== ""
        )
      );

      await uploadDocument(filteredData);

      setFormData({
        applicationId: "",
        lead: leadId,
        type: "",
        title: "",
        files: null,
        status: "approved",
      });

      onClose();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while uploading the document");
    }
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
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  options={docCategory
                    .filter(
                      (category) =>
                        category !== "Applications" ||
                        (category === "Applications" &&
                          Array.isArray(applications) &&
                          applications.length > 0)
                    )
                    .map((data) => ({
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

              {formData?.type === "Applications" && (
                <SelectField
                  label="Select College"
                  name="applicationId"
                  value={formData.applicationId}
                  onChange={handleChange}
                  options={applications.map((data) => ({
                    label: data?.college?.name,
                    value: data?._id,
                  }))}
                  required
                />
              )}
              <div className="text-base font-semibold">
                Upload Documents for the student{" "}
                <span className="text-gray-500 text-sm">
                  (supported format: .pdf, .jpg, .jpeg, .png)
                </span>
              </div>

              <div>
                <div
                  onDrop={handleFileDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="flex items-center justify-center w-full"
                >
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="text-gray-500" size={30} />
                      <p className="mb-2 text-md text-gray-500 font-semibold dark:text-gray-400 mt-5">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Max. File Size: 4MB
                      </p>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2 mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                      >
                        <Search className="w-4 h-4" />
                        Browse File
                      </button>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                  </label>
                </div>
                {formData.files && (
                  <p className="mt-2 text-sm text-black-600 font-bold">
                    Selected File: {formData.files.name}
                  </p>
                )}
              </div>

              <div className="flex gap-3 justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentUploadDocument;
