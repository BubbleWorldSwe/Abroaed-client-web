/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { EllipsisVertical, Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { useSelector } from "react-redux";
import { formatDateTime } from "../../../utils/helper";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";

const TransactionTable = ({
  dropdownVisible,
  setDropdownVisible,
  currentPage,
  handleNextPage,
  handlePrevPage,
  handleDelete,
  handleEdit,
}) => {
  const dropdownRef = useRef(null);
  const [selectedRows, setSelectedRows] = useState({});
  const [dropdownDirection, setDropdownDirection] = useState(null);

  const { transactions, totalPages } = useSelector(
    (state) => state.transactions
  );
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
    setDropdownDirection("down");
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
      <table className="w-full text-sm border-2 rounded-lg text-left text-gray-500 dark:text-gray-400">
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
              Student Name
            </th>

            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Amount Paid
            </th>

            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Payment Mode
            </th>
            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Payment Date
            </th>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Description
            </th>
            {isWriteAccess && (
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {transactions?.map(
            (item) =>
              item?.index === currentPage &&
              item?.data.map((transaction, index) => (
                <tr
                  key={index}
                  className={`border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    selectedRows[index] ? "bg-[#FFFCC2]" : ""
                  }`}
                >
                  <td className="px-4 py-3 w-4">
                    <CheckboxField
                      onClick={(e) => e.stopPropagation()}
                      id={`checkbox-teams-${index}`}
                      htmlFor={`checkbox-teams-${index}`}
                    />
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <>
                      {`${transaction?.user?.firstName} ${transaction?.user?.lastName}`}
                      <div className="text-sm text-gray-500">
                        {transaction?.user?.email}
                      </div>
                    </>
                  </th>

                  <td className="px-4 py-3">
                    <span className="p-2  bg-gray-100 rounded">
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="px-4 py-3">{transaction?.mode}</td>

                  <td className="px-4 py-3">
                    <span className="p-2  bg-gray-100 rounded">
                      {formatDateTime(transaction?.date)}
                    </span>
                  </td>
                  <td className="px-4 py-3">{transaction?.description}</td>
                  {isWriteAccess && (
                    <td className="px-4 py-3">
                      <button
                        ref={dropdownRef}
                        className="focus:outline-none"
                        onClick={(e) => handleDropdownToggle(e, index)}
                      >
                        <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      </button>
                      {dropdownVisible === index && (
                        <div
                          className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${
                            dropdownDirection === "up"
                              ? "bottom-full mb-2"
                              : "mt-2"
                          }`}
                        >
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            {/*  <li>
                            <button
                              type="button"
                              className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              <Eye className="w-4 h-4" />
                              <span>View Details</span>
                            </button>
                          </li> */}
                            <li>
                              <button
                                type="button"
                                onClick={() => handleEdit(transaction)}
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
                                  setDeleteId(transaction._id);
                                  setIsModalOpen(!isModalOpen);
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
          )}
        </tbody>
        <TableFooter
          totalPages={totalPages}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          tableData={transactions}
          colSpan={8}
        />
      </table>
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

export default TransactionTable;
