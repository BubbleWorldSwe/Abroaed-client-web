import { useState } from "react";
import StudentTransactionModal from "../modals/studentTransactionModal";
import { useSelector } from "react-redux";
import { formatDate, formatDateTime } from "../../../utils/helper";

const StudentTransaction = ({ studentId, onSave }) => {
  const [openModal, setOpenModal] = useState(false);
  const { isWriteAccess } = useSelector((state) => state.auth);

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

  console.log(studentProfile?.transactions);

  return (
    <>
      <StudentTransactionModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        studentId={studentId}
        onSave={onSave}
      />
      <div className="max-w-5.5xl  p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Transactions</h2>
          {isWriteAccess && (
            <button
              onClick={() => setOpenModal(true)}
              className="flex text-sm  items-center  gap-2 bg-[#0D6FEC] text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Add Transaction
            </button>
          )}
        </div>
        <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded">
          <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3 ">Transaction Date</th>
                <th className="px-4 py-3 ">Transaction Amount</th>
                <th className="px-4 py-3 ">Mode</th>
                <th className="px-4 py-3 ">Transaction Description</th>

                <th className="px-4 py-3 ">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {studentProfile?.transactions?.length > 0 ? (
                studentProfile?.transactions?.map((data, i) => (
                  <tr
                    key={i}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <th className="px-4 py-3  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {formatDateTime(data?.date)}
                    </th>
                    <td className="px-4 py-3"> ₹{data?.amount}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data?.mode}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data?.description}
                    </td>

                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="bg-gray-100 text-green-800 text-xs font-medium mr-2 px-4 py-1 rounded dark:bg-green-900 dark:text-green-300">
                        View Invoice
                      </span>
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
        </div>
      </div>
    </>
  );
};

export default StudentTransaction;
