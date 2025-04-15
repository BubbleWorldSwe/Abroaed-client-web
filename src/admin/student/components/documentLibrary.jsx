import {
  Edit,
  EllipsisVertical,
  Eye,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { useEffect, useRef, useState } from "react";
import StudentUploadDocument from "../modals/studentUploadDocumentModal";
import { useSelector } from "react-redux";
import { formatDate, formatDateTime } from "../../../utils/helper";

const DocumentLibrary = ({ requestedDocument, handleOpenUploadModal }) => {
  const dropdownRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const tabs = ["All", "Government", "Academic", "Finance", "Applications"];
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const { isWriteAccess } = useSelector((state) => state.auth);

  const { applications } = useSelector(
    (state) => state?.students?.selectedStudent
  );

  const handleClickOutside = (e) => {
    // Close dropdown if the click is outside of the dropdown area
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
                  <th scope="col" className="p-4">
                    <CheckboxField
                      onClick={(e) => e.stopPropagation()}
                      id={`checkbox-college-all`}
                      htmlFor={`checkbox-college-all`}
                    />
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[14rem]">
                    Document Name
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[10rem]">
                    College
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[10rem]">
                    Category
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
                {(Array.isArray(applications) ? applications : []).map(
                  (application, index) =>
                    application?.additionalDocuments?.map((data, i) => (
                      <tr
                        key={i}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="px-4 py-3 w-4">
                          <CheckboxField
                            onClick={(e) => e.stopPropagation()}
                            id={`checkbox-college-${index}`}
                            htmlFor={`checkbox-college-${index}`}
                          />
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data?.title}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {application?.college?.name}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data?.category}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <span
                            className={`p-2 px-5 rounded-full text-gray-900 font-medium`}
                            style={{
                              backgroundColor: "In-Review "
                                ? "#FFFCC2"
                                : "Rejected"
                                ? "#DB4437"
                                : "#0F9D58",
                              text: "",
                            }}
                          >
                            In-Review
                          </span>
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {formatDate(data?.deadline)}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            className="focus:outline-none"
                            // onClick={(e) => handleDropdownToggle(e, index)}
                          >
                            <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                          </button>
                          {dropdownVisible === index && (
                            <div
                              ref={dropdownRef}
                              className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] `}
                            >
                              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                                <li>
                                  <button
                                    type="button"
                                    // onClick={() => handleViewDetails(destination)}
                                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    <Eye className="w-4 h-4" />
                                    <span>View Details</span>
                                  </button>
                                </li>
                                <li>
                                  <button
                                    // onClick={() => {
                                    //     setDeleteId(destination._id);
                                    //     setIsModalOpen(!isModalOpen);
                                    // }}
                                    // onClick={() => handleDelete(destination._id)}
                                    className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                    <span>Delete</span>
                                  </button>
                                </li>
                                <li>
                                  <button
                                    onClick={() => {}}
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
              {tabs.map((tab, index) => (
                <li key={index} className="w-full" role="presentation">
                  <button
                    className={`inline-block p-4 w-full text-base font-semibold rounded-t-lg ${
                      activeTab === index
                        ? "text-black  border-b-2 border-blue-500"
                        : "text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }`}
                    onClick={() => handleTabClick(index)} // Update active tab
                    role="tab"
                    aria-controls={`styled-${tab
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    aria-selected={activeTab === index}
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
                  <th scope="col" className="p-4">
                    <CheckboxField
                      onClick={(e) => e.stopPropagation()}
                      id={`checkbox-college-all`}
                      htmlFor={`checkbox-college-all`}
                    />
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[14rem]">
                    Document Name
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[10rem]">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Status{" "}
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[7rem]">
                    Comments
                  </th>
                  <th scope="col" className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((member, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3 w-4">
                      <CheckboxField
                        onClick={(e) => e.stopPropagation()}
                        id={`checkbox-college-${index}`}
                        htmlFor={`checkbox-college-${index}`}
                      />
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      AADHAAR
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Government
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span
                        className={`p-2 px-5 rounded-full text-gray-900 font-medium`}
                        style={{
                          backgroundColor: "In-Review "
                            ? "#FFFCC2"
                            : "Rejected"
                            ? "#DB4437"
                            : "#0F9D58",
                          text: "",
                        }}
                      >
                        In-Review
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem
                      ipsum dolor sit ametlorem ipsum dolor sit amet
                    </td>
                    <td className="px-4 py-3">
                      <button
                        className="focus:outline-none"
                        // onClick={(e) => handleDropdownToggle(e, index)}
                      >
                        <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      </button>
                      {dropdownVisible === index && (
                        <div
                          ref={dropdownRef}
                          className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] `}
                        >
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <button
                                type="button"
                                // onClick={() => handleViewDetails(destination)}
                                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                <Eye className="w-4 h-4" />
                                <span>View Details</span>
                              </button>
                            </li>
                            <li>
                              <button
                                // onClick={() => {
                                //     setDeleteId(destination._id);
                                //     setIsModalOpen(!isModalOpen);
                                // }}
                                // onClick={() => handleDelete(destination._id)}
                                className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                              >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => {}}
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentLibrary;
