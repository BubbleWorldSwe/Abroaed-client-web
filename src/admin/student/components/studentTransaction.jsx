import { useState, useRef, useEffect } from "react";
import StudentTransactionModal from "../modals/studentTransactionModal";
import { useSelector } from "react-redux";
import { formatDate, formatDateTime } from "../../../utils/helper";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { EllipsisVertical, Pencil, Plus, Trash2 } from "lucide-react";

const StudentTransaction = ({
  studentId,
  onSave,
  handleDelete,
  handleEdit,
  onOpen,
  onEdit,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const dropdownRef = useRef(null);

  const { isWriteAccess } = useSelector((state) => state.auth);

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="max-w-5.5xl p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Transactions</h2>
          {isWriteAccess && (
            <button
              onClick={onOpen}
              className="flex text-sm  items-center gap-2 bg-[#FAFAFA] text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition"
            >
              <Plus size={15} />
              Add Transaction
            </button>
          )}
        </div>
        <div className="flex-grow mt-1 overflow-visible bg-white dark:bg-gray-800 shadow rounded">
          <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-[#71717A] font-rethink bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Amount (in ₹)</th>
                <th className="px-4 py-3">Payment Mode</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Created At</th>
                {isWriteAccess && <th className="px-4 py-3 w-5"></th>}
              </tr>
            </thead>
            <tbody>
              {studentProfile?.transactions?.length > 0 ? (
                studentProfile.transactions.map((data, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <th className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {formatDate(data?.date)}
                    </th>
                    <td className="px-4 py-3">{data?.amount}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data?.mode}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data?.description}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {formatDateTime(data?.createdAt)}
                    </td>
                    {isWriteAccess && (
                      <td className="px-4 py-3 relative">
                        <button
                          ref={dropdownRef}
                          className="focus:outline-none"
                          onClick={(e) => handleDropdownToggle(e, index)}
                        >
                          <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </button>
                        {dropdownVisible === index && (
                          <div
                            ref={dropdownRef}
                            className={`absolute right-0 w-max min-w-[10rem] bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] `}
                          >
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                              <li>
                                <button
                                  type="button"
                                  onClick={() => {
                                    onEdit(data);
                                    setDropdownVisible(null);
                                  }}
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Pencil className="w-4 h-4" />
                                  <span>Edit</span>
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setDeleteId(data._id);
                                    setIsModalOpen(true);
                                    setDropdownVisible(null);
                                  }}
                                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  <span>Delete</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </td>
                    )}
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
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Delete!"
        onDelete={() => {
          handleDelete(deleteId);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default StudentTransaction;
