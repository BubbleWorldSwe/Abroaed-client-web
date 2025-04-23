/* eslint-disable react/prop-types */
import { useState } from "react";
import dark from "../../../assets/dark.png";

const MediaGallery = ({ closeModal, onUploadImage }) => {
  const [files, setFiles] = useState([]);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles].slice(0, 10));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles].slice(0, 10));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSave = () => {
    onUploadImage(files, "gallery");
    closeModal();
  };

  return (
    <div className="w-[100vh] max-w-full mx-auto">
      {/* Image Previews */}
      <div className="overflow-x-auto">
        <div className="flex space-x-5">
          {files.length > 0 ? (
            files.map((file, index) => (
              <div
                key={index}
                className="w-72 relative flex-shrink-0 border-2 border-gray-100 rounded-md"
                style={{ flex: "0 0 auto" }}
              >
                <img
                  className="w-full h-60 object-contain rounded-lg"
                  src={URL.createObjectURL(file)}
                  alt={`Selected ${index + 1}`}
                />
                <button
                  type="button"
                  className="absolute top-3 right-3 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-75"
                  onClick={() =>
                    setFiles((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <div className="text-gray-400">No files selected</div>
          )}
        </div>
      </div>

      <div className="text-end mt-5">({files.length}/10)</div>
      <p className="mb-2">Add up to 10 images</p>

      {/* Upload Box */}
      <div
        className="flex items-center justify-center w-full"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              JPG, PNG or JPEG (Max. File Size: 1MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
      </div>

      {/* Buttons */}
      <div className="col-span-full text-end">
        <button
          type="button"
          className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded transition"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default MediaGallery;
