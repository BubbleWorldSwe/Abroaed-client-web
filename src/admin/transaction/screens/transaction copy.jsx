import { useEffect, useState } from "react";
import filter_list from "../../../assets/filter_list.png";
import { studentPayments } from "../data";
import TransactionTable from "../tables/transactionTable";
import { Download } from "lucide-react";
import AddTransactionModal from "../modals/addTransactionModal";
import { AddButton } from "../../../commons/components/buttons/addButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransactionRequest,
  deleteTransactionRequest,
  fetchTransactionsRequest,
} from "../../../redux/actions/transactionActions";

const Transaction = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [isDone, setIsDone] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { transactions, totalPages } = useSelector(
    (state) => state.transactions
  );

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddTransaction = (data) => {
    //  setIsAddModalOpen(false);
    console.log("handleAddTransaction");
    console.log(data);

    dispatch(addTransactionRequest(data));
    setCurrentPage(1);
    dispatch(fetchTransactionsRequest(1));
    handleCloseAddModal();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const pageExists = transactions.some(
        (item) => item.index === currentPage + 1
      );

      if (!pageExists) {
        dispatch(fetchTransactionsRequest(currentPage + 1));
      }

      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const pageExists = transactions.some(
        (item) => item.index === currentPage - 1
      );

      if (!pageExists) {
        dispatch(fetchTransactionsRequest(currentPage - 1));
      }

      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleDelete = (id) => {
    console.log("handleDelete " + id);
    dispatch(deleteTransactionRequest(id));
    setCurrentPage(1);
    dispatch(fetchTransactionsRequest(1));
  };

  useEffect(() => {
    if (transactions?.length === 0) {
      console.log("fetchTransactionsRequest");
      dispatch(fetchTransactionsRequest(currentPage));
    }
  }, [dispatch, transactions, currentPage]);

  return (
    <>
      <AddTransactionModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        setIsDone={setIsDone}
        onAddTransaction={handleAddTransaction}
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col ">
        <section className="py-5   flex-grow">
          <div className="flex flex-col h-screen py-2 mx-auto max-w-screen-2xl  dark:bg-gray-800 relative ">
            <div className=" dark:border-gray-700 py-3 flex justify-between text-center mx-4">
              <div className="w-full  flex  space-y-3 md:space-y-0 md:flex-row ">
                <form className="w-full md:max-w-sm flex-1 md:mr-4">
                  <label
                    htmlFor="default-search"
                    className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search Transactions"
                      required=""
                    />
                  </div>
                </form>
                <div className="flex items-center space-x-4">
                  <img src={filter_list} alt="filterIcon" />
                </div>
              </div>
              {isWriteAccess && (
                <AddButton
                  onClick={handleOpenAddModal}
                  label={"Add Transaction"}
                />
              )}
              <button className="ml-5 w-full md:w-auto flex items-center justify-center gap-2 py-2 px-4 text-sm font-semibold text-black bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
            <div className="flex-grow mt-2 overflow-auto bg-white dark:bg-gray-800 px-5">
              <TransactionTable
                studentPayments={studentPayments}
                dropdownVisible={dropdownVisible}
                setDropdownVisible={setDropdownVisible}
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Transaction;
