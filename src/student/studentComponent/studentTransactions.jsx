import { Trash2, Edit } from "lucide-react";
import { transactionsDetails } from "../data";
import { useSelector } from "react-redux";
import { formatDateTime } from "../../utils/helper";

const StudentTransactions = () => {
  const {
    savedPreferences,
    applications,
    studentProfile,
    transactions,
    prepsBatches,
  } = useSelector((state) => state.studentProfile);
  return (
    <div className="w-full bg-[#fff] font-rethink min-h-[90vh] px-5 py-10 ">
      <h2 className="text-2xl font-semibold mb-5">My Transactions</h2>
      {/*   <div className="bg-white p-6 mb-5 shadow rounded-lg">
        <h3 className="font-semibold text-lg mb-3">Billing Information</h3>
        <div className="bg-[#FAFAFA] px-10 py-5">
          <div className="flex justify-between">
            <p className="font-medium">Garvit Singh</p>
            <div className="flex space-x-4 text-red-500">
              <button className="flex items-center space-x-1 hover:text-red-700">
                <Trash2 size={16} /> <span>Delete</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-700 text-gray-500">
                <Edit size={16} /> <span>Edit</span>
              </button>
            </div>
          </div>
          <div className="mt-1 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600 ">
                Company Name:{" "}
                <span className="font-medium">Viking Burrito</span>
              </p>
              <p className="text-sm text-gray-600">
                Email Address:{" "}
                <span className="font-medium">oliver@burrito.com</span>
              </p>
              <p className="text-sm text-gray-600">
                VAT Number: <span className="font-medium">FRB1235476</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h3 className="font-semibold text-lg">Transactions</h3>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-sm">
                <th className="p-3 text-left">Transaction Date</th>
                <th className="p-3 text-left">Transaction Amount</th>
                <th className="p-3 text-left">Transaction Description</th>
                <th className="p-3 text-left">Payment Mode</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.length > 0 ? (
                transactions.map((tx, index) => (
                  <tr key={index} className="text-gray-700 border-b">
                    <td className="p-3">{formatDateTime(tx.date)}</td>
                    <td className="p-3 flex items-center gap-2">
                      {tx.amount}{" "}
                      {index === 0 && <span className="text-red-500">•</span>}
                    </td>
                    <td className="p-3">{tx.description}</td>
                    <td className="p-3 flex justify-between items-center ">
                      {tx.mode}
                      {tx.invoice && (
                        <button className="px-3 py-1 text-sm border bg-[#F4F4F5] rounded-lg text-gray-700 hover:bg-gray-200">
                          View Invoice
                        </button>
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
  );
};

export default StudentTransactions;
