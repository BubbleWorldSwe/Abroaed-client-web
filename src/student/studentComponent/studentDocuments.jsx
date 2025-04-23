/* eslint-disable no-constant-condition */
import { Edit, EllipsisVertical, Eye, Trash2, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CheckboxField } from "../../commons/components/inputFields/checkboxField";
import { TableFooter } from "../../commons/components/table/tableFooter";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/helper";
import {
  setUpdateStudentDocuments,
  setUploadStudentDocuments,
} from "../../api/studentsApi";
import { fetchStudentDocumentsRequest } from "../../redux/actions/studentProfileActions";
import { toast } from "react-toastify";
import { IMAGE_BASE_URL } from "../../constants/baseUrl";
import { Tooltip } from "flowbite-react";

const StudentDocuments = () => {
  const { documents } = useSelector((state) => state?.studentProfile);
  const dispatch = useDispatch();
  const tabs = ["All", "Government", "Academic", "Finance", "Applications"];
  const [activeTab, setActiveTab] = useState("All");
  const dropdownRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const { leadId } = useSelector((state) => state.studentProfile);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOutside = (e) => {
    // Close dropdown if the click is outside of the dropdown area
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  const getStatusBgColor = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return "#66ff99"; // Light green
      case "rejected":
        return "#ffb3b3"; // Light red
      default:
        return "#FFFCC2"; // Light yellow
    }
  };

  const [selectedDoc, setSelectedDoc] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  console.log(selectedDoc);

  async function uploadDocument() {
    try {
      const data = await setUpdateStudentDocuments(selectedDoc._id, {
        files: selectedFile,
        status: "pending",
      });

      console.log(data);

      if (data.status === 200) {
        dispatch(fetchStudentDocumentsRequest(leadId));
      } else {
        toast.error(data?.message);
      }
      setIsModalOpen(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const groupDocumentsByStatus = (documents) => {
    return documents?.reduce((acc, doc) => {
      const status = doc.status?.toLowerCase() || "unknown";
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(doc);
      return acc;
    }, {});
  };

  const approvedDocuments = documents?.filter(
    (doc) =>
      doc.status?.toLowerCase() === "approved" &&
      (activeTab === "All" || doc.type === activeTab)
  );

  const groupedApprovedDocuments = groupDocumentsByStatus(approvedDocuments);

  console.log(documents);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedDoc]);

  return (
    <div className="w-full font-rethink bg-[#fff] min-h-[90vh] px-5 py-3">
      <div className="mb-5  bg-white dark:bg-gray-900 flex flex-col ">
        <div className="flex p-5 flex-col shadow-lg  w-full bg-white dark:bg-gray-800 relative  sm:rounded-lg">
          <h2 className="text-2xl py-2 font-semibold  mb-3">
            Requested Documents
          </h2>
          <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded">
            <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3 min-w-[14rem]">
                    Document Name
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[10rem]">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    College{" "}
                  </th>

                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Status{" "}
                  </th>

                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Deadline
                  </th>
                  <th scope="col" className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {documents &&
                documents.filter((doc) =>
                  ["pending", "rejected", "requested"].includes(doc.status)
                ).length > 0 ? (
                  documents
                    .filter((doc) =>
                      ["pending", "rejected", "requested"].includes(doc.status)
                    )
                    .map((data, i) => (
                      <tr
                        key={i}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data?.title}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data?.type}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data?.applicationId?.college?.name || "---"}
                        </td>

                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data?.status === "rejected" ? (
                            <Tooltip
                              content={<div>{data.remarks}</div>}
                              placement="bottom"
                              className="!bg-white !text-gray-900 !shadow-lg !border !border-gray-300"
                            >
                              <span
                                className="p-2 px-5 rounded-full text-gray-900 font-semibold capitalize"
                                style={{
                                  backgroundColor: getStatusBgColor(
                                    data?.status
                                  ),
                                }}
                              >
                                {data?.status}
                              </span>
                            </Tooltip>
                          ) : (
                            <span
                              className="p-2 px-5 rounded-full text-gray-900 font-semibold capitalize"
                              style={{
                                backgroundColor: getStatusBgColor(data?.status),
                              }}
                            >
                              {data?.status}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {formatDate(data?.deadline)}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data.status === "requested" ||
                          data.status === "rejected" ? (
                            <button
                              onClick={() => {
                                setIsModalOpen(true);
                                setSelectedDoc(data);
                              }}
                              className="text-blue-900 hover:underline font-bold hover:decoration-blue-800"
                            >
                              {data.status === "requested"
                                ? "Upload Now"
                                : "Re-Upload"}
                            </button>
                          ) : (
                            <a
                              href={`${IMAGE_BASE_URL}/${data?.file}`}
                              target="_blank"
                              className="text-blue-900 hover:underline font-bold hover:decoration-blue-800"
                            >
                              View File
                            </a>
                          )}
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-4 py-3 text-center text-gray-500"
                    >
                      No data exists
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <p className="text-gray-500 bg-[#E4E4E7] text-sm p-5 text-center"></p>
          </div>
        </div>
      </div>
      <div className="flex p-5 flex-col shadow-lg  w-full bg-white dark:bg-gray-800 relative  sm:rounded-lg">
        <div className="flex justify-between">
          <h2 className="text-2xl py-2 font-semibold  mb-3">
            Document Library
          </h2>
        </div>

        <div className="border-b flex gap-6 mb-4">
          <ul
            className="flex w-full -mb-px text-sm font-medium text-center"
            role="tablist"
          >
            {tabs.map((tab) => (
              <li key={tab} className="w-full" role="presentation">
                <button
                  className={`inline-block p-4 w-full text-base font-semibold rounded-t-lg ${
                    activeTab === tab
                      ? "text-black border-b-2 border-blue-500"
                      : "text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  aria-selected={activeTab === tab}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className=" lg:max-w-[79vw]  mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded">
          <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3 min-w-[14rem]">
                  Document Name
                </th>
                <th scope="col" className="px-4 py-3 min-w-[10rem]">
                  Category
                </th>
                <th scope="col" className="px-4 py-3 min-w-[7rem]">
                  Status{" "}
                </th>

                <th scope="col" className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {approvedDocuments && approvedDocuments.length > 0 ? (
                approvedDocuments.map((data, i) => (
                  <tr
                    key={i}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data?.title}
                    </td>

                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data?.type}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data?.applicationId?.college?.name || "---"}
                    </td>
                    <td className="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center justify-center space-x-4">
                        <a
                          href={`${IMAGE_BASE_URL}/${data?.file}`}
                          target="_blank"
                          className="text-blue-900 hover:underline font-bold hover:decoration-blue-800"
                        >
                          View File
                        </a>
                        {/*  <a
                          href={`${IMAGE_BASE_URL}/${data?.file}`}
                          target="_blank"
                          className="text-blue-900 hover:underline font-bold hover:decoration-blue-800"
                        >
                          Delete
                        </a> */}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-3 text-center text-gray-500"
                  >
                    No documents found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              // onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Upload Document</h2>

            <p className="text-gray-600 text-sm mb-4">
              Supported Format: .pdf, .jpg, .jpeg, .png
            </p>

            <div
              className="flex items-center justify-center w-full"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 20 16"
                    xmlns="http://www.w3.org/2000/svg"
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
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Max. File Size: 2MB
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {selectedFile && (
              <p className="mt-3 text-sm text-black font-semibold">
                Selected File: {selectedFile.name}
              </p>
            )}

            <div className="text-end mt-4">
              <button
                type="button"
                className="border-2 border-gray-500 text-white bg-red-500 hover:bg-red-600 px-4 py-2 mr-2 rounded transition"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={uploadDocument}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDocuments;
