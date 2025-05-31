import {
  Download,
  Edit,
  EllipsisVertical,
  Eye,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";

import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { useEffect, useRef, useState } from "react";
import StudentUploadDocument from "../modals/studentUploadDocumentModal";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/helper";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";
import { Tooltip } from "flowbite-react";
import DocumentPreviewModal from "../../../commons/modal/docPreviewModal";

const DocumentLibrary = ({
  requestedDocument,
  handleOpenUploadModal,
  deleteDocument,
  setSelectedDoc,
  openStatusModal,
}) => {
  // Store refs for all dropdowns (both for reqDropdown and approvedDocuments dropdown)
  const dropdownRefs = useRef([]);

  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [reqDropdownVisible, setReqDropdownVisible] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFile, setModalFile] = useState(null);

  const tabs = ["All", "Government", "Academic", "Finance", "Applications"];
  const [activeTab, setActiveTab] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  const { isWriteAccess } = useSelector((state) => state.auth);

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

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

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handleReqDropdownToggle = (e, index) => {
    e.stopPropagation();
    setReqDropdownVisible(reqDropdownVisible === index ? null : index);
  };

  const handleClickOutside = (e) => {
    const clickedInside = dropdownRefs.current.some(
      (ref) => ref && ref.contains(e.target)
    );
    if (!clickedInside) {
      setDropdownVisible(null);
      setReqDropdownVisible(null);
    }
  };

  const handleViewDocument = (file) => {
    console.log(file);
    setModalFile(file);
    setIsModalOpen(true);
    setDropdownVisible(null);
  };

  const approvedDocuments = studentProfile?.documents?.filter(
    (doc) =>
      doc.status?.toLowerCase() === "approved" &&
      (activeTab === "All" || doc.type === activeTab)
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Reset refs before rendering so they don't accumulate stale nodes
  dropdownRefs.current = [];

  console.log(studentProfile?.documents);

  return (
    <>
      <StudentUploadDocument
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
      <div className="flex p-5 flex-col shadow-lg w-full bg-white dark:bg-gray-800 relative  sm:rounded-lg">
        <div>
          <div className="flex justify-between">
            <h2 className="text-2xl py-2 font-semibold  mb-3">
              Requested Documents
            </h2>
            {isWriteAccess && (
              <div className="flex gap-4 items-center">
                <button
                  className="flex text-sm  items-center gap-2 bg-[#FAFAFA] text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition"
                  onClick={requestedDocument}
                >
                  <Plus className="w-4 h-4" />
                  <p>Request Documents</p>
                </button>
              </div>
            )}
          </div>

          <div className=" lg:max-w-[82vw]  mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded">
            <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Document Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">College</th>

                  <th className="px-4 py-3">Status </th>
                  <th className="px-4 py-3">Deadline</th>
                  <th scope="col" className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {studentProfile?.documents ? (
                  (() => {
                    const filteredDocs = studentProfile.documents.filter(
                      (data) =>
                        data?.status === "pending" ||
                        data?.status === "rejected" ||
                        data?.status === "requested"
                    );

                    return filteredDocs.length > 0 ? (
                      filteredDocs.map((data, i) => (
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
                                  backgroundColor: getStatusBgColor(
                                    data?.status
                                  ),
                                }}
                              >
                                {data?.status}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {formatDate(data?.deadline)}
                          </td>
                          <td className="px-4 py-3">
                            <button
                              className="focus:outline-none"
                              onClick={(e) => handleReqDropdownToggle(e, i)}
                            >
                              <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                            </button>
                            {reqDropdownVisible === i && (
                              <div
                                ref={(el) => (dropdownRefs.current[i] = el)}
                                className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999]`}
                              >
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                                  {data.status !== "requested" ? (
                                    <>
                                      <li>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            openStatusModal(data);
                                            setReqDropdownVisible(false);
                                          }}
                                          className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          <Edit className="w-4 h-4" />
                                          <span>Change Status</span>
                                        </button>
                                      </li>
                                      <li>
                                        <a
                                          href={`${IMAGE_BASE_URL}/${data?.file}`}
                                          download
                                          className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          <Download className="w-4 h-4" />
                                          <span>Download File</span>
                                        </a>
                                      </li>
                                      <li>
                                        <button
                                          onClick={() =>
                                            handleViewDocument(
                                              `${IMAGE_BASE_URL}/${data?.file}`
                                            )
                                          }
                                          className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                                        >
                                          <Eye className="w-4 h-4" />
                                          <span>View File</span>
                                        </button>
                                      </li>
                                    </>
                                  ) : null}
                                  <li>
                                    <button
                                      onClick={() => {
                                        deleteDocument(data?._id);
                                        setReqDropdownVisible(false);
                                      }}
                                      className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                      <span>Delete</span>
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      onClick={() => {
                                        setSelectedDoc(data);
                                        setReqDropdownVisible(false);
                                      }}
                                      className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                                    >
                                      <Edit className="w-4 h-4" />
                                      <span>Edit</span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
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
                    );
                  })()
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
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between">
            <h2 className="text-2xl py-2 font-semibold  mb-3">
              Document Library
            </h2>
            {isWriteAccess && (
              <div className="flex gap-4 items-center">
                <button
                  className="flex text-sm  items-center gap-2 bg-[#FAFAFA] text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition"
                  onClick={handleOpenUploadModal}
                >
                  <Upload className="w-4 h-4" />
                  <p>Upload Document</p>
                </button>
              </div>
            )}
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

          <div className=" lg:max-w-[82vw]  mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded">
            <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Document Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">College</th>

                  <th className="px-4 py-3 w-5"></th>
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

                      <td className="px-4 py-3">
                        <button
                          className="focus:outline-none"
                          onClick={(e) => handleDropdownToggle(e, i)}
                        >
                          <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </button>
                        {dropdownVisible === i && (
                          <div
                            ref={(el) => (dropdownRefs.current[i + 1000] = el)} // offset so refs don't collide with reqDropdown
                            className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999]`}
                          >
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                              <li>
                                <button
                                  onClick={() =>
                                    handleViewDocument(
                                      `${IMAGE_BASE_URL}/${data?.file}`
                                    )
                                  }
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                                >
                                  <Eye className="w-4 h-4" />
                                  <span>View File</span>
                                </button>
                              </li>
                              <li>
                                <a
                                  href={`${IMAGE_BASE_URL}/${data?.file}`}
                                  download
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Download className="w-4 h-4" />
                                  <span>Download File</span>
                                </a>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    deleteDocument(data?._id);
                                    setDropdownVisible(null);
                                  }}
                                  className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  <span>Delete</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-4 py-3 text-center text-gray-500"
                    >
                      No data exists
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DocumentPreviewModal
        isOpen={isModalOpen}
        file={modalFile}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DocumentLibrary;
