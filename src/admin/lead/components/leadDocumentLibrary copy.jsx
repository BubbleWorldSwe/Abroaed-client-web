import {
  Edit,
  EllipsisVertical,
  Eye,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";

const LeadDocumentLibrary = ({ handleOpenUploadModal, deleteDocument }) => {
  const dropdownRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const tabs = ["All", "Government", "Academic", "Finance", "Applications"];
  const [activeTab, setActiveTab] = useState("All");

  const { isWriteAccess } = useSelector((state) => state.auth);

  const leadProfile = useSelector((state) => state?.leads?.selectedLead);

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  const approvedDocuments = leadProfile?.documents?.filter(
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
  return (
    <div className="flex p-5 flex-col shadow-lg w-full bg-white dark:bg-gray-800 relative  sm:rounded-lg">
      <div className="mt-10">
        <div className="flex justify-between">
          <h2 className="text-2xl py-2 font-semibold  mb-3">
            Document Library
          </h2>
          {isWriteAccess && (
            <div className="flex gap-4 items-center">
              <button
                //   className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-black cursor-pointer hover:bg-gray-200 rounded"
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

                <th className="px-4 py-3"></th>
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
                    {/* <td className="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <a
                          href={`${IMAGE_BASE_URL}/${data?.file}`}
                          target="_blank"
                          className="text-blue-900 hover:underline font-bold hover:decoration-blue-800"
                        >
                          View File
                        </a>
                      </td> */}
                    <td className="px-4 py-3">
                      <button
                        className="focus:outline-none"
                        onClick={(e) => handleDropdownToggle(e, i)}
                      >
                        <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      </button>
                      {dropdownVisible === i && (
                        <div
                          ref={dropdownRef}
                          className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] `}
                        >
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a
                                href={`${IMAGE_BASE_URL}/${data?.file}`}
                                target="_blank"
                                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                <Eye className="w-4 h-4" />
                                <span>View File</span>
                              </a>
                            </li>

                            <li>
                              <button
                                onClick={() => {
                                  deleteDocument(data?._id);
                                  setDropdownVisible(false);
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
    </div>
  );
};

export default LeadDocumentLibrary;
