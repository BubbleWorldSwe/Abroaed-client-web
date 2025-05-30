/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Search, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as XLSX from "xlsx"; // Import xlsx library

const LeadExcelUploadModal = ({ isOpen, onClose, onUploadBulkLead }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    validateFile(selectedFile);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateFile(selectedFile);
  };

  const validateFile = (file) => {
    const allowedTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "text/csv",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only Excel (.xlsx, .xls) or CSV files are allowed.");
      return;
    }

    if (file.size > maxSize) {
      toast.error("File size must be less than 5MB");
      return;
    }

    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please select an Excel or CSV file to upload");
      return;
    }

    try {
      const data = await parseExcelOrCsv(file);
      console.log("Parsed Data:", data);

      if (!data || data.length === 0) {
        toast.error("No data found in the file.");
        return;
      }

      // Send data to your API
      onUploadBulkLead(file);

      toast.success("File data uploaded successfully!");

      setFile(null);
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while uploading the data.");
    }
  };

  const parseExcelOrCsv = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(sheet, { defval: "" }); // Convert to JSON
        resolve(json);
      };
      reader.onerror = (err) => reject(err);
      reader.readAsArrayBuffer(file);
    });
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
            <h2 className="text-xl font-semibold mb-4">Upload Excel or CSV</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-base font-semibold">
                Upload Excel/CSV data for leads{" "}
                <span className="text-gray-500 text-sm">
                  (supported: .xlsx, .xls, .csv | Max: 5MB)
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
                        Max. File Size: 5MB
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
                      type="file"
                      className="hidden"
                      accept=".xlsx,.xls,.csv"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                  </label>
                </div>
                {file && (
                  <p className="mt-2 text-sm text-black-600 font-bold">
                    Selected File: {file.name}
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

export default LeadExcelUploadModal;
